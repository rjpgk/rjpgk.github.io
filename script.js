// 实验数据 - 完整版，包含所有4个组的数据
const experimentData = {
    group1: [
        {
            platform: "wechat",
            source: "山大校内事",
            time: "刚刚",
            title: "xx大学化学学院爆炸了！",
            content: "xx大学化学学院爆炸了！据说是学生做实验操作不当引起的，现场浓烟滚滚，多人受伤！但学校第一时间不是救人，而是封锁消息禁止学生发朋友圈！实验室安全形同虚设！",
            mediaType: "image",
            mediaUrl: "爆炸.jpg",
            likes: 127,
            shares: 89,
            comments: 56,
            commentUser: "官方辟谣",
            comment: "经官方核实，xx大学化学学院今日无任何爆炸事故发生。学校实验室管理严格，定期进行安全检查，请勿传播未经证实的消息。",
            verified: true
        },
        {
            platform: "wechat",
            source: "校园快讯",
            time: "15分钟前",
            title: "震惊！南京应用技术学校出大事了！",
            content: "震惊！南京应用技术学校出大事了！一个女生因为和学校发生矛盾，被活活打死！家长来讨说法，结果被警察打晕拖走！现场还有保安拿枪指着学生，差点发生流血事件！现在学校封锁消息，媒体不敢报！",
            mediaType: "image",
            mediaUrl: "保安矛盾.jpeg",
            likes: 89,
            shares: 67,
            comments: 43,
            commentUser: "警方通报",
            comment: "警方已发布通报，南京应用技术学校未发生任何学生死亡事件，相关视频和图片系恶意剪辑和编造。请勿听信谣言，共同维护网络秩序。",
            verified: true
        },
        {
            platform: "wechat",
            source: "教育资讯",
            time: "30分钟前",
            title: "太可怕了！黄冈某中学发生恶性事件！",
            content: "太可怕了！今天上午黄冈某中学发生恶性事件！一个初三女生在校园里被另一个学生连捅13刀！救护车都来了，现在仍生死不明！现在的学生怎么这么极端？校园安全到底怎么了？",
            mediaType: "image",
            mediaUrl: "救护车.jpg",
            likes: 156,
            shares: 98,
            comments: 72,
            commentUser: "教育局辟谣",
            comment: "黄冈教育局已辟谣，今日黄冈各中学均未发生此类恶性伤人事件。请大家以官方信息为准，不要被不实信息误导。",
            verified: true
        },
        {
            platform: "wechat",
            source: "校园生活",
            time: "1小时前",
            title: "某学校食堂出大事了！",
            content: "某学校食堂出大事了！200多个学生吃完饭后集体食物中毒，上吐下泻，被紧急送医！据说是因为用了发霉变质的食材，学校为了省钱根本不管学生健康！现在家长都在闹，要求严查！",
            mediaType: "image",
            mediaUrl: "食物中毒.jpg",
            likes: 203,
            shares: 134,
            comments: 89,
            commentUser: "校医院声明",
            comment: "校医院和当地疾控中心已介入调查，目前未发现大规模食物中毒病例。食堂食材均有严格采购和检测流程，请勿轻信未经证实的传闻。",
            verified: true
        },
        {
            platform: "wechat",
            source: "教育政策",
            time: "2小时前",
            title: "教育部最新宣布：留学生待遇大幅提升！",
            content: "教育部留学中心最新发布会宣布，以后留学生待遇要大幅提升！不仅奖学金翻倍，还能住豪华单人间宿舍！而国内学生却要挤在8人间宿舍，无独立卫浴！无空调！凭什么花我们中国人的钱供着外国人？",
            mediaType: "document",
            mediaUrl: "发布会.jpg",
            likes: 287,
            shares: 198,
            comments: 156,
            commentUser: "教育部澄清",
            comment: "教育部官网和留学服务中心均未发布此项政策。目前留学生奖学金和住宿政策保持稳定，请勿相信此类煽动性信息。",
            verified: true
        },
        {
            platform: "wechat",
            source: "校园新闻",
            time: "3小时前",
            title: "xx学校某老师是变态虐猫狂！",
            content: "xx学校的某某老师是变态虐猫狂！有视频证据显示他把流浪猫活活折磨致死！这种心理扭曲的人怎么能当老师？万一哪天伤害学生怎么办？希望学校严查，不能让他祸害孩子！",
            mediaType: "image",
            mediaUrl: "虐猫.jpg",
            likes: 145,
            shares: 87,
            comments: 65,
            commentUser: "学校声明",
            comment: "经学校调查，视频中人物并非本校教师，且视频内容已被证实为恶意剪辑和虚构。学校已报警处理，请大家理性查看网络信息。",
            verified: true
        },
        {
            platform: "wechat",
            source: "紧急通知",
            time: "4小时前",
            title: "紧急扩散！某学校有学生莫名失踪！",
            content: "紧急扩散！某学校已经有3个学生莫名失踪了！据说校园里发生了人身伤害事故，但校方隐瞒不报！现在家长在校门口拉横幅讨说法，警察却拦着不让进！这里面肯定有黑幕！",
            mediaType: "image",
            mediaUrl: "失踪.jpg",
            likes: 234,
            shares: 167,
            comments: 98,
            commentUser: "保卫处澄清",
            comment: "学校保卫处已澄清，近期无学生失踪报告，校园安全秩序良好。请勿恐慌，一切以学校官方公告为准。",
            verified: true
        }
    ],
    group2: [
        {
            platform: "weibo",
            source: "校园热搜",
            time: "10分钟前",
            title: "xx大学化学学院爆炸了！",
            content: "xx大学化学学院爆炸了！据说是学生做实验操作不当引起的，现场浓烟滚滚，多人受伤！但学校第一时间不是救人，而是封锁消息禁止学生发朋友圈！实验室安全形同虚设！",
            mediaType: "image",
            mediaUrl: "爆炸.jpg",
            likes: 215,
            shares: 178,
            comments: 93,
            commentUser: "愤怒的学生",
            comment: "简直是草菅人命！学校为了掩盖真相，连学生的生命安全都不顾了？！太让人心寒了！",
            verified: false
        },
        {
            platform: "weibo",
            source: "教育观察",
            time: "25分钟前",
            title: "震惊！南京应用技术学校出大事了！",
            content: "震惊！南京应用技术学校出大事了！一个女生因为和学校发生矛盾，被活活打死！家长来讨说法，结果被警察打晕拖走！现场还有保安拿枪指着学生，差点发生流血事件！现在学校封锁消息，媒体不敢报！",
            mediaType: "image",
            mediaUrl: "保安矛盾.jpeg",
            likes: 298,
            shares: 234,
            comments: 156,
            commentUser: "正义网友",
            comment: "这种学校绝对是地狱！竟然能把学生打死，还敢动用警察打家长？！简直无法无天，必须曝光他们！",
            verified: false
        },
        {
            platform: "weibo",
            source: "社会热点",
            time: "40分钟前",
            title: "太可怕了！黄冈某中学发生恶性事件！",
            content: "太可怕了！今天上午黄冈某中学发生恶性事件！一个初三女生在校园里被另一个学生连捅13刀！救护车都来了，现在仍生死不明！现在的学生怎么这么极端？校园安全到底怎么了？",
            mediaType: "image",
            mediaUrl: "救护车.jpg",
            likes: 367,
            shares: 289,
            comments: 198,
            commentUser: "心痛的家长",
            comment: "现在的孩子怎么了？！校园暴力何时休？！学校和家长都该反思，不能让悲剧重演！太让人痛心了！",
            verified: false
        },
        {
            platform: "weibo",
            source: "民生关注",
            time: "1小时前",
            title: "某学校食堂出大事了！",
            content: "某学校食堂出大事了！200多个学生吃完饭后集体食物中毒，上吐下泻，被紧急送医！据说是因为用了发霉变质的食材，学校为了省钱根本不管学生健康！现在家长都在闹，要求严查！",
            mediaType: "image",
            mediaUrl: "食物中毒.jpg",
            likes: 445,
            shares: 356,
            comments: 267,
            commentUser: "愤怒家长",
            comment: "良心都被狗吃了！为了省钱拿学生的健康开玩笑？！这种无良食堂必须关门，学校也该给个说法！",
            verified: false
        },
        {
            platform: "weibo",
            source: "教育不公",
            time: "2小时前",
            title: "教育部最新宣布：留学生待遇大幅提升！",
            content: "教育部留学中心最新发布会宣布，以后留学生待遇要大幅提升！不仅奖学金翻倍，还能住豪华单人间宿舍！而国内学生却要挤在8人间宿舍，无独立卫浴！无空调！凭什么花我们中国人的钱供着foreigners？",
            mediaType: "document",
            mediaUrl: "发布会.jpg",
            likes: 678,
            shares: 534,
            comments: 389,
            commentUser: "不公平的学生",
            comment: "凭什么？！ ourselves人住得跟猪窝一样，foreigners却住豪华宿舍？！这不公平！太气人了！",
            verified: false
        },
        {
            platform: "weibo",
            source: "动物保护",
            time: "3小时前",
            title: "xx学校某老师是变态虐猫狂！",
            content: "xx学校的某某老师是变态虐猫狂！有视频证据显示他把流浪猫活活折磨致死！这种心理扭曲的人怎么能当老师？万一哪天伤害学生怎么办？希望学校严查，不能让他祸害孩子！",
            mediaType: "image",
            mediaUrl: "虐猫.jpg",
            likes: 389,
            shares: 267,
            comments: 178,
            commentUser: "愤怒网友",
            comment: "这种变态怎么能当老师？！绝对是社会的渣滓！必须把他揪出来，严惩不贷！太恶心了！",
            verified: false
        },
        {
            platform: "weibo",
            source: "校园安全",
            time: "4小时前",
            title: "紧急扩散！某学校有学生莫名失踪！",
            content: "紧急扩散！某学校已经有3个学生莫名失踪了！据说校园里发生了人身伤害事故，但校方隐瞒不报！现在家长在校门口拉横幅讨说法，警察却拦着不让进！这里面肯定有黑幕！",
            mediaType: "image",
            mediaUrl: "失踪.jpg",
            likes: 567,
            shares: 423,
            comments: 298,
            commentUser: "担心家长",
            comment: "太恐怖了！学校到底在隐瞒什么？！学生的安全都保障不了，还怎么安心上学？！必须给个解释！",
            verified: false
        }
    ],
    group3: [
        {
            platform: "wechat",
            source: "学术前沿资讯",
            time: "今天 14:30",
            title: "某高校机械工程学院博士论文被指涉嫌抄袭",
            content: "某高校机械工程学院的一篇博士论文近日被指涉嫌抄袭。经网友对比，该论文中约30%的核心内容与某国外知名期刊论文一致，仅进行了轻微的措辞修改。据知情人透露，导师对此早已知情，但选择视而不见。",
            mediaType: "document",
            mediaUrl: "抄袭.jpg",
            likes: 78,
            shares: 45,
            comments: 32,
            commentUser: "学术诚信委员会",
            comment: "经查，该论文的查重报告显示重复率远低于30%，且引用部分均已规范标注。国外期刊论文发表日期晚于该博士论文，不存在抄袭可能。",
            verified: true
        },
        {
            platform: "wechat",
            source: "校园管理",
            time: "今天 15:15",
            title: "某高校宿舍管理权转交第三方公司后费用大幅上涨",
            content: "某高校宿舍管理权转交第三方公司后，宿舍费用大幅上涨，生活条件却未改善。有学生表示，热水供应不稳定、门禁系统频繁故障，导致生活极大不便。校方在回应中称，外包后管理效率有所提升，但未正面回答费用问题。",
            mediaType: "image",
            mediaUrl: "宿舍.jpeg",
            likes: 156,
            shares: 89,
            comments: 67,
            commentUser: "后勤管理处",
            comment: "学校官网已发布通知，明确表示宿舍管理权未转交任何第三方公司，且本学期宿舍费用无任何调整。请勿相信不实信息。",
            verified: true
        },
        {
            platform: "wechat",
            source: "食品安全",
            time: "今天 16:00",
            title: "某高校食堂餐盘清洗不彻底，菜品检测出致病菌",
            content: "某高校学生在社交平台上曝出食堂餐盘清洗不彻底的照片，引发全校热议。更有学生表示，食堂某菜品检测出致病菌含量超标，目前校方已暂停其供应。",
            mediaType: "image",
            mediaUrl: "食堂.jpg",
            likes: 234,
            shares: 167,
            comments: 123,
            commentUser: "校医院",
            comment: "校医院和疾控部门已对食堂进行全面检查，餐盘清洗符合卫生标准，所有菜品均未检测出致病菌超标。请勿听信谣言。",
            verified: true
        },
        {
            platform: "wechat",
            source: "校园安全",
            time: "今天 16:45",
            title: "某高校学生宿舍区发生多起财物失窃事件",
            content: "最近一周内，某高校学生宿舍区发生了3起财物失窃事件，包括笔记本电脑和现金丢失，总价值约3万元。宿舍楼的门禁系统疑似出现故障，陌生人可随意进入。",
            mediaType: "image",
            mediaUrl: "财务失窃.jpg",
            likes: 189,
            shares: 134,
            comments: 98,
            commentUser: "保卫处",
            comment: "学校保卫处已公布最新数据，近一周宿舍区仅发生1起小型财物丢失事件，且门禁系统运行正常。失窃信息与实际情况不符。",
            verified: true
        },
        {
            platform: "wechat",
            source: "生活服务",
            time: "今天 17:30",
            title: "某高校学生宿舍饮水机水质不达标",
            content: "某高校学生宿舍的饮水机被检测出水质不达标，其中余氯含量超过国家标准。多名学生在饮用后出现肠胃不适症状，已前往校医室就诊。校方回应称，问题可能与设备长期未清洗有关。",
            mediaType: "image",
            mediaUrl: "饮水机.jpg",
            likes: 267,
            shares: 198,
            comments: 145,
            commentUser: "后勤部门",
            comment: "学校后勤部门定期对饮水机进行水质检测和清洗，最新检测报告显示水质完全符合国家饮用标准，未发现余氯超标情况。",
            verified: true
        },
        {
            platform: "wechat",
            source: "体育设施",
            time: "今天 18:15",
            title: "某高校室内篮球场被曝频繁外租给校外机构",
            content: "某高校的室内篮球场近期被曝在高峰时段频繁外租给校外培训机构，导致校内学生难以预约。校方对此回应称，此举是为'优化资源利用'，但学生认为校内资源应优先服务师生。",
            mediaType: "image",
            mediaUrl: "篮球场.jpg",
            likes: 145,
            shares: 98,
            comments: 76,
            commentUser: "体育部",
            comment: "学校体育部已发布公告，室内篮球场仅在非高峰时段对校外开放少量预约，且优先保障校内师生使用，预约系统显示仍有大量空余时段。",
            verified: true
        },
        {
            platform: "wechat",
            source: "教务管理",
            time: "今天 19:00",
            title: "某高校新奖学金评定政策被质疑不透明",
            content: "某高校近日公布的新奖学金评定政策被质疑不透明。有学生反映，一些学术成绩较低的候选人因与评审委员关系密切而成功入围。校方回应称将启动内部调查，但尚未公开具体评审流程。一名学生代表在匿名采访中表示：'这样的政策打击了我们普通学生的积极性。'",
            mediaType: "document",
            mediaUrl: "奖学金政策.jpg",
            likes: 198,
            shares: 156,
            comments: 112,
            commentUser: "教务处",
            comment: "学校教务处已公布新奖学金评定细则，明确了各项指标权重和评审流程，并设立了一个申诉渠道。所有评审委员均实行回避制度，确保公平公正。",
            verified: true
        }
    ],
    group4: [
        {
            platform: "weibo",
            source: "学术观察",
            time: "今天 15:45",
            title: "某高校机械工程学院博士论文被指涉嫌抄袭",
            content: "某高校机械工程学院的一篇博士论文近日被指涉嫌抄袭。经网友对比，该论文中约30%的核心内容与某国外知名期刊论文一致，仅进行了轻微的措辞修改。据知情人透露，导师对此早已知情，但选择视而不见。",
            mediaType: "document",
            mediaUrl: "抄袭.jpg",
            likes: 342,
            shares: 156,
            comments: 87,
            commentUser: "正义网友",
            comment: "这种学术败类就该被开除！真是给学校抹黑，让所有努力的同学心寒！",
            verified: false
        },
        {
            platform: "weibo",
            source: "学生权益",
            time: "今天 16:30",
            title: "某高校宿舍管理权转交第三方公司后费用大幅上涨",
            content: "某高校宿舍管理权转交第三方公司后，宿舍费用大幅上涨，生活条件却未改善。有学生表示，热水供应不稳定、门禁系统频繁故障，导致生活极大不便。校方在回应中称，外包后管理效率有所提升，但未正面回答费用问题。",
            mediaType: "image",
            mediaUrl: "宿舍.jpeg",
            likes: 567,
            shares: 389,
            comments: 234,
            commentUser: "愤怒学生",
            comment: "学校这是把学生当提款机吗？！费用涨了服务却更差，完全是欺负学生！太让人失望了！",
            verified: false
        },
        {
            platform: "weibo",
            source: "食品安全曝光",
            time: "今天 17:15",
            title: "某高校食堂餐盘清洗不彻底，菜品检测出致病菌",
            content: "某高校学生在社交平台上曝出食堂餐盘清洗不彻底的照片，引发全校热议。更有学生表示，食堂某菜品检测出致病菌含量超标，目前校方已暂停其供应。",
            mediaType: "image",
            mediaUrl: "食堂.jpg",
            likes: 678,
            shares: 456,
            comments: 298,
            commentUser: "恶心的学生",
            comment: "完全是恶心！食堂卫生这么差，还敢拿学生健康开玩笑？！必须严惩相关负责人，为学生一个安全卫生的环境！",
            verified: false
        },
        {
            platform: "weibo",
            source: "校园安全关注",
            time: "今天 18:00",
            title: "某高校学生宿舍区发生多起财物失窃事件",
            content: "最近一周内，某高校学生宿舍区发生了3起财物失窃事件，包括笔记本电脑和现金丢失，总价值约3万元。宿舍楼的门禁系统疑似出现故障，陌生人可随意进入。",
            mediaType: "image",
            mediaUrl: "财务失窃.jpg",
            likes: 445,
            shares: 334,
            comments: 223,
            commentUser: "愤怒学生",
            comment: "太不安全了！宿舍门禁形同虚设，学生essionals的安全谁来保障？！学校必须给个说法，不能让学生生活在恐惧中！",
            verified: false
        },
        {
            platform: "weibo",
            source: "生活质量监督",
            time: "今天 18:45",
            title: "某高校学生宿舍饮水机水质不达标",
            content: "某高校学生宿舍的饮水机被检测出水质不达标，其中余氯含量超过国家标准。多名学生在饮用后出现肠胃不适症状，已前往校医室就诊。校方回应称，问题可能与设备长期未清洗有关。",
            mediaType: "image",
            mediaUrl: "饮水机.jpg",
            likes: 567,
            shares: 423,
            comments: 298,
            commentUser: "担心学生",
            comment: "喝了这种水，学生怎么能不生病？！学校连饮水安全都保障不了，完全是失职！必须彻查，为学生一个交代！",
            verified: false
        },
        {
            platform: "weibo",
            source: "体育设施监督",
            time: "今天 19:30",
            title: "某高校室内篮球场被曝频繁外租给校外机构",
            content: "某高校的室内篮球场近期被曝在高峰时段频繁外租给校外培训机构，导致校内学生难以预约。校方对此回应称，此举是为'优化资源利用'，但学生认为校内资源应优先服务师生。",
            mediaType: "image",
            mediaUrl: "篮球场.jpg",
            likes: 389,
            shares: 267,
            comments: 178,
            commentUser: "愤怒的体育生",
            comment: "真是荒唐！学校的资源不优先为学生用，却拿去赚钱？！太让人寒心了，我们交的学费都去哪了？！",
            verified: false
        },
        {
            platform: "weibo",
            source: "教育公平观察",
            time: "今天 20:15",
            title: "某高校新奖学金评定政策被质疑不透明",
            content: "某高校近日公布的新奖学金评定政策被质疑不透明。有学生反映，一些学术成绩较低的候选人因与评审委员关系密切而成功入围。校方回应称将启动内部调查，但尚未公开具体评审流程。一名学生代表在匿名采访中表示：'这样的政策打击了我们普通学生的积极性。'",
            mediaType: "document",
            mediaUrl: "奖学金政策.jpg",
            likes: 678,
            shares: 534,
            comments: 389,
            commentUser: "不公平的学生",
            comment: "这种不公平的政策完全是打击学生的积极性！凭什么关系户就能拿奖学金？！学校的公平公正何在？！",
            verified: false
        }
    ]
};

// 实验状态变量
let currentGroupKey = null; // 当前选择的组别
let currentItemIndex = 0; // 当前显示的项目索引
let experimentResults = []; // 存储实验结果

// 在DOM加载完成后初始化实验
document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const consentSection = document.getElementById('consentSection');
    const groupSelectionScreen = document.getElementById('groupSelectionScreen');
    const preTestEmotionScreen = document.getElementById('preTestEmotionScreen');
    const welcomeScreen = document.getElementById('welcomeScreen');
    const experimentScreen = document.getElementById('experimentScreen');
    const completionScreen = document.getElementById('completionScreen');
    const agreeButton = document.getElementById('agreeButton');
    const groupButtons = document.querySelectorAll('.group-button');
    const completePreTestButton = document.getElementById('completePreTestButton');
    const startButton = document.getElementById('startButton');
    const nextButton = document.getElementById('nextButton');
    
    // 检查元素是否存在
    if (!consentSection || !groupSelectionScreen || !preTestEmotionScreen || !welcomeScreen || 
        !experimentScreen || !completionScreen || !agreeButton || !completePreTestButton || 
        !startButton || !nextButton) {
        console.error('无法找到必要的DOM元素');
        return;
    }
    
    // 同意按钮点击事件
    agreeButton.addEventListener('click', function() {
        consentSection.style.display = 'none';
        groupSelectionScreen.style.display = 'block';
    });
    
    // 组别选择按钮点击事件
    groupButtons.forEach(button => {
        button.addEventListener('click', function() {
            currentGroupKey = this.getAttribute('data-group');
            groupSelectionScreen.style.display = 'none';
            preTestEmotionScreen.style.display = 'block';
        });
    });
    
    // 完成前测按钮点击事件
    completePreTestButton.addEventListener('click', function() {
        // 收集前测情绪数据
        const preTestData = {
            anger: document.querySelector('input[name="pre_anger"]:checked')?.value,
            fear: document.querySelector('input[name="pre_fear"]:checked')?.value,
            confusion: document.querySelector('input[name="pre_confusion"]:checked')?.value
        };
        
        // 存储前测数据
        experimentResults.push({
            type: 'pre_test',
            data: preTestData
        });
        
        preTestEmotionScreen.style.display = 'none';
        welcomeScreen.style.display = 'block';
    });
    
    // 开始实验按钮点击事件
    startButton.addEventListener('click', function() {
        welcomeScreen.style.display = 'none';
        experimentScreen.style.display = 'block';
        
        // 重置当前项目索引
        currentItemIndex = 0;
        
        // 显示第一个实验项目
        showCurrentItem();
    });
    
    // 下一条信息按钮点击事件
    nextButton.addEventListener('click', function() {
        // 收集当前项目的评估数据
        collectCurrentAnswers();
        
        // 移动到下一个项目
        currentItemIndex++;
        
        // 检查是否还有更多项目
        if (currentItemIndex < experimentData[currentGroupKey].length) {
            // 显示下一个项目
            showCurrentItem();
            // 清空之前的选择
            clearEmotionAndBehaviorInputs();
        } else {
            // 实验完成，显示完成界面
            experimentScreen.style.display = 'none';
            completionScreen.style.display = 'block';
            
            // 导出实验结果
            exportResults();
        }
    });
});

// 显示当前实验项目
function showCurrentItem() {
    if (!currentGroupKey || currentItemIndex >= experimentData[currentGroupKey].length) {
        console.error('无效的组别或项目索引');
        return;
    }
    
    const item = experimentData[currentGroupKey][currentItemIndex];
    
    // 更新进度条
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        const progress = ((currentItemIndex + 1) / experimentData[currentGroupKey].length) * 100;
        progressBar.style.width = `${progress}%`;
    }
    
    // 更新平台图标
    const platformIcon = document.getElementById('platformIcon');
    if (platformIcon) {
        if (item.platform === 'wechat') {
            platformIcon.innerHTML = '<i class="fab fa-weixin"></i>';
        } else if (item.platform === 'weibo') {
            platformIcon.innerHTML = '<i class="fab fa-weibo"></i>';
        }
    }
    
    // 更新平台名称
    const platformName = document.getElementById('platformName');
    if (platformName) {
        platformName.textContent = item.source;
    }
    
    // 更新发布时间
    const postTime = document.getElementById('postTime');
    if (postTime) {
        postTime.textContent = item.time;
    }
    
    // 更新标题和内容
    const newsTitle = document.getElementById('newsTitle');
    const newsContent = document.getElementById('newsContent');
    if (newsTitle && newsContent) {
        newsTitle.textContent = item.title;
        newsContent.textContent = item.content;
    }
    
    // 更新媒体内容
    const postMedia = document.getElementById('postMedia');
    if (postMedia) {
        if (item.mediaType === 'image') {
            postMedia.innerHTML = `<img src="${item.mediaUrl}" alt="新闻图片">`;
        } else if (item.mediaType === 'video') {
            postMedia.innerHTML = `<div class="video-placeholder"><img src="${item.mediaUrl}" alt="视频封面"><div class="play-button"><i class="fas fa-play"></i></div></div>`;
        } else if (item.mediaType === 'document') {
            postMedia.innerHTML = `<div class="document-placeholder"><img src="${item.mediaUrl}" alt="文档封面"><div class="document-icon"><i class="far fa-file-alt"></i></div></div>`;
        }
    }
    
    // 更新统计数据
    const likeCount = document.getElementById('likeCount');
    const commentCount = document.getElementById('commentCount');
    const shareCount = document.getElementById('shareCount');
    if (likeCount && commentCount && shareCount) {
        likeCount.textContent = item.likes;
        commentCount.textContent = item.comments;
        shareCount.textContent = item.shares;
    }
    
    // 更新评论
    const commentSection = document.getElementById('commentSection');
    if (commentSection) {
        let commentHTML = '';
        if (item.verified) {
            commentHTML = `
                <div class="comment-user">
                    <span class="user-name">${item.commentUser}</span>
                    <span class="verified-badge"><i class="fas fa-check-circle"></i> 官方认证</span>
                </div>
                <div class="comment-text">${item.comment}</div>
            `;
        } else {
            commentHTML = `
                <div class="comment-user">
                    <span class="user-name">${item.commentUser}</span>
                </div>
                <div class="comment-text">${item.comment}</div>
            `;
        }
        commentSection.innerHTML = commentHTML;
    }
    
    // 更新来源信息
    const sourceInfo = document.getElementById('sourceInfo');
    if (sourceInfo) {
        sourceInfo.innerHTML = `<span>来源：${item.source}</span>`;
    }
}

// 收集当前项目的评估答案
function collectCurrentAnswers() {
    const anger = document.querySelector('input[name="anger"]:checked')?.value;
    const fear = document.querySelector('input[name="fear"]:checked')?.value;
    const confusion = document.querySelector('input[name="confusion"]:checked')?.value;
    const verify = document.querySelector('input[name="verify"]:checked')?.value;
    const share = document.querySelector('input[name="share"]:checked')?.value;
    
    // 存储当前项目的评估数据
    experimentResults.push({
        type: 'item_assessment',
        group: currentGroupKey,
        itemIndex: currentItemIndex,
        itemTitle: experimentData[currentGroupKey][currentItemIndex].title,
        emotion: {
            anger: anger,
            fear: fear,
            confusion: confusion
        },
        behavior: {
            verify: verify,
            share: share
        },
        timestamp: new Date().toISOString()
    });
}

// 清空情绪和行为评估的选择
function clearEmotionAndBehaviorInputs() {
    document.querySelectorAll('input[name="anger"]').forEach(input => input.checked = false);
    document.querySelectorAll('input[name="fear"]').forEach(input => input.checked = false);
    document.querySelectorAll('input[name="confusion"]').forEach(input => input.checked = false);
    document.querySelectorAll('input[name="verify"]').forEach(input => input.checked = false);
    document.querySelectorAll('input[name="share"]').forEach(input => input.checked = false);
}

// 导出实验结果
function exportResults() {
    const resultsJSON = JSON.stringify(experimentResults, null, 2);
    
    // 创建一个Blob对象
    const blob = new Blob([resultsJSON], { type: 'application/json' });
    
    // 创建一个下载链接
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `experiment_results_${currentGroupKey}_${new Date().toISOString().slice(0, 10)}.json`;
    
    // 触发下载
    document.body.appendChild(a);
    a.click();
    
    // 清理
    setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, 0);
    
    console.log('实验结果已导出');
}