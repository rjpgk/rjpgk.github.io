# 问卷系统部署指南

## 项目简介

本项目是一个用于调查生成式大语言模型对本科生创新能力影响的问卷系统，包含前端问卷页面和后端数据存储功能，可部署在阿里云ECS服务器上，支持数据收集、备份与导出。

## 技术栈

- **前端**：HTML + CSS + JavaScript
- **后端**：Node.js + Express
- **数据库**：MySQL
- **部署工具**：Nginx（静态文件服务）、PM2（进程管理）

## 部署步骤

### 1. 环境准备

#### 远程连接服务器
```bash
# Windows用户使用PuTTY，Mac/Linux用户使用终端
ssh root@你的服务器IP
```

#### 安装基础软件
```bash
# 更新系统
apt update && apt upgrade -y

# 安装Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install nodejs -y
node -v  # 验证版本

# 安装MySQL
apt install mysql-server -y
systemctl start mysql
systemctl enable mysql
mysql_secure_installation  # 设置root密码
```

### 2. 配置数据库

#### 登录MySQL并创建数据库
```bash
mysql -u root -p  # 输入设置的密码
```

```sql
-- 创建问卷数据库和表
CREATE DATABASE questionnaire;
USE questionnaire;

CREATE TABLE responses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  submit_time DATETIME DEFAULT NOW(),
  gender VARCHAR(10) NOT NULL,
  study_stage VARCHAR(20) NOT NULL,
  used_ai TINYINT NOT NULL,
  ai_proficiency VARCHAR(50),
  creative_achievements JSON,
  details JSON
);
exit;
```

### 3. 部署后端API服务

#### 创建项目目录并安装依赖
```bash
mkdir -p /data/questionnaire-backend && cd /data/questionnaire-backend
npm init -y
npm install express mysql2 cors --save
```

#### 编写后端代码（server.js）
```javascript
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'YourPassword123!', // 替换为实际MySQL密码
  database: 'questionnaire'
});

// 提交问卷API
app.post('/submit', async (req, res) => {
  try {
    const { gender, study_stage, used_ai, ai_proficiency, creative_achievements, details } = req.body;
    const [result] = await db.execute(`
      INSERT INTO responses 
      (gender, study_stage, used_ai, ai_proficiency, creative_achievements, details) 
      VALUES (?, ?, ?, ?, ?, ?)
    `, [gender, study_stage, used_ai, ai_proficiency, JSON.stringify(creative_achievements), JSON.stringify(details)]);
    res.status(200).send('提交成功！');
  } catch (err) {
    console.error(err);
    res.status(500).send('服务器错误');
  }
});

// 导出数据API
app.get('/export', async (req, res) => {
  const [rows] = await db.execute('SELECT * FROM responses');
  const csv = ['id,时间,性别,年级,是否用AI,熟练度,成果,详情']
    .concat(rows.map(row => 
      `"${row.id}","${row.submit_time}","${row.gender}","${row.study_stage}","${row.used_ai === 1 ? '是' : '否'}","${row.ai_proficiency}","${JSON.stringify(row.creative_achievements)}","${JSON.stringify(row.details)}"`
    )).join('\n');
  res.setHeader('Content-Type', 'text/csv');
  res.attachment('问卷数据.csv');
  res.send(csv);
});

const port = 3000;
app.listen(port, () => {
  console.log(`后端运行在 http://服务器IP:${port}`);
});
```

#### 启动后端服务
```bash
npm install -g pm2  # 安装进程管理工具
pm2 start server.js --name "questionnaire-server"
pm2 save
pm2 startup
```

### 4. 部署前端页面

#### 上传前端文件
```bash
mkdir -p /data/front  # 创建前端目录
# 通过SFTP工具上传questionnaire.html等文件到/data/front
```

#### 修改前端JS连接后端
```javascript
// 在questionnaire.js中找到提交按钮的fetch部分
const apiUrl = 'http://你的服务器IP:3000/submit';  // 替换为实际IP
```

#### 配置Nginx（可选）
```bash
apt install nginx -y
vi /etc/nginx/sites-available/default
```
```nginx
server {
  listen 80;
  server_name 你的域名或IP;
  root /data/front;
  index questionnaire.html;
  location / {
    try_files $uri $uri/ =404;
  }
}
```
```bash
systemctl restart nginx
```

### 5. 配置阿里云安全组
- 登录阿里云控制台 → ECS → 安全组 → 添加规则：
  - 开放80端口（HTTP）
  - 开放3000端口（后端API）
  - 开放22端口（SSH）

## 数据管理

### 1. 自动备份
```bash
vi /data/backup.sh  # 创建备份脚本
```
```bash
#!/bin/bash
mysqldump -u root -pYourPassword123! questionnaire > /data/backup/questionnaire_$(date +%Y%m%d).sql
# 如需上传到OSS，添加以下行（需先安装ossutil）
# ./ossutil64 cp /data/backup/*.sql oss://你的OSS Bucket/backup/
```
```bash
chmod +x /data/backup.sh
crontab -e  # 设置定时任务
0 0 * * * /data/backup.sh  # 每天0点备份
```

### 2. 数据导出
- **API导出**：访问 `http://服务器IP:3000/export` 下载CSV
- **命令行导出**：
  ```bash
  mysql -u root -pYourPassword123! questionnaire -e "SELECT * FROM responses INTO OUTFILE '/data/问卷数据.csv' FIELDS TERMINATED BY ',' ENCLOSED BY '\"'";
  ```

## 验证部署

1. 访问问卷页面：`http://服务器IP`
2. 填写并提交问卷
3. 检查数据库：
   ```bash
   mysql -u root -p
   USE questionnaire;
   SELECT * FROM responses;
   ```
4. 测试导出：访问`http://服务器IP:3000/export`下载数据

## 常见问题

1. **500错误**：检查后端日志 `pm2 logs`，确认MySQL密码正确
2. **样式丢失**：检查Nginx配置路径，确保文件权限为`644`
3. **无法连接**：确认阿里云安全组已开放对应端口

## 安全建议

1. 修改MySQL root密码，创建专用数据库用户
2. 在Nginx中配置SSL证书（阿里云免费提供）
3. 定期备份数据到OSS或本地
