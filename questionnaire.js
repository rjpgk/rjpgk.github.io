document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.question-section');
    const progressBar = document.getElementById('progressBar');
    let currentSectionIndex = 0;

    const aiProficiencyGroup = document.getElementById('aiProficiencyGroup');
    const usedAiToolsRadios = document.querySelectorAll('input[name="used_ai_tools"]');

    usedAiToolsRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === '是') {
                aiProficiencyGroup.style.display = 'block';
            } else {
                aiProficiencyGroup.style.display = 'none';
                // 隐藏错误信息并取消选中熟练度选项
                const aiProficiencyError = document.getElementById('aiProficiencyError');
                aiProficiencyError.style.display = 'none';
                const aiProficiencyRadios = document.querySelectorAll('input[name="ai_proficiency"]');
                aiProficiencyRadios.forEach(r => r.checked = false);
            }
        });
    });

    function updateProgressBar() {
        const totalSections = sections.length;
        const progress = totalSections > 0 ? ((currentSectionIndex + 1) / totalSections) * 100 : 0;
        progressBar.style.width = progress + '%';
        progressBar.textContent = Math.round(progress) + '%'; // 更新进度条文本显示
        console.log('Progress updated to:', progress + '%'); // 添加调试信息
    }

    function showSection(index) {
        console.log('Showing section:', index); // 添加调试信息
        sections.forEach((section, i) => {
            section.style.display = (i === index) ? 'block' : 'none';
        });
        currentSectionIndex = index;
        updateProgressBar();
    }

    // 初始显示
    showSection(0);

    // 导航按钮
    document.getElementById('next1').addEventListener('click', () => {
        if (validateCurrentSection()) {
            showSection(1);
        }
    });

    document.getElementById('prev2').addEventListener('click', () => showSection(0));
    document.getElementById('next2').addEventListener('click', () => {
        if (validateCurrentSection()) {
            const usedAiToolsValue = document.querySelector('input[name="used_ai_tools"]:checked')?.value;
            showSection(2);
        }
    });

    // 新增第三部分的导航监听器
    document.getElementById('prev3').addEventListener('click', () => {
        const usedAiToolsValue = document.querySelector('input[name="used_ai_tools"]:checked')?.value;
        showSection(1);
    });

    // 修复点：添加next3的监听器
    document.getElementById('next3').addEventListener('click', () => {
        if (validateCurrentSection()) {
            showSection(3); // 跳转到第四部分（能力感维度）
        }
    });

    // 添加后续部分的导航监听器
    document.getElementById('prev4').addEventListener('click', () => showSection(2));
    document.getElementById('next4').addEventListener('click', () => {
        if (validateCurrentSection()) {
            showSection(4);
        }
    });

    document.getElementById('prev5').addEventListener('click', () => showSection(3));
    document.getElementById('next5').addEventListener('click', () => {
        if (validateCurrentSection()) {
            showSection(5);
        }
    });

    document.getElementById('prev6').addEventListener('click', () => showSection(4));
    document.getElementById('next6').addEventListener('click', () => {
        if (validateCurrentSection()) {
            showSection(6);
        }
    });

    document.getElementById('prev7').addEventListener('click', () => showSection(5));
    document.getElementById('next7').addEventListener('click', () => {
        if (validateCurrentSection()) {
            showSection(7);
        }
    });

    document.getElementById('prev8').addEventListener('click', () => showSection(6));
    document.getElementById('next8').addEventListener('click', () => {
        if (validateCurrentSection()) {
            showSection(8);
        }
    });

    document.getElementById('prev9').addEventListener('click', () => showSection(7));

    function validateCurrentSection() {
        console.log('validateCurrentSection 函数被调用'); // 添加调试信息
        const currentSection = sections[currentSectionIndex];
        const requiredInputs = currentSection.querySelectorAll('[required]');
        let allFilled = true;
        let errorMessage = '';
    
        // 隐藏所有错误信息
        currentSection.querySelectorAll('.error-message').forEach(msg => msg.style.display = 'none');
    
        // 获取 used_ai_tools 的值
        const usedAiToolsValue = document.querySelector('input[name="used_ai_tools"]:checked')?.value;
    
        requiredInputs.forEach(input => {
            const inputName = input.name;
            let inputValid = true;
    
            // 如果 used_ai_tools 为“否”，跳过对 ai_proficiency 的验证
            if (usedAiToolsValue === '否' && inputName === 'ai_proficiency') {
                console.log(`跳过对 ${inputName} 的验证，因为 used_ai_tools 为“否”`);
                return;
            }
    
            if (input.type === 'radio') {
                if (!document.querySelector(`input[name="${inputName}"]:checked`)) {
                    inputValid = false;
                    console.log(`单选框 ${inputName} 未选择`);
                }
            } else if (input.type === 'checkbox') {
                // 对于多选框，如果选中了，则其关联的文本框也必须填写
                if (inputName === 'creative_achievements') {
                    const detailInput = document.querySelector(`input[name="creative_achievements_${input.value}"]`);
                    if (input.checked && detailInput && detailInput.value.trim() === '') {
                        inputValid = false;
                        errorMessage = `请填写“${input.parentNode.textContent.trim()}”的具体内容。`;
                        console.log(`多选框 ${inputName} 选中，但关联文本框未填写`);
                    }
                }
                // 检查是否有任何一个checkbox被选中
                const checkboxGroup = document.querySelectorAll(`input[name="${inputName}"]`);
                if (checkboxGroup.length > 0 && !Array.from(checkboxGroup).some(cb => cb.checked)) {
                    inputValid = false;
                    console.log(`多选框组 ${inputName} 未选择任何选项`);
                }
            } else if (input.value.trim() === '') {
                inputValid = false;
                console.log(`输入框 ${inputName} 为空`);
            }
    
            if (!inputValid) {
                console.log(`Input ${inputName} is invalid`); // 添加调试信息
                allFilled = false;
                // 显示对应的错误信息
                const errorDiv = document.getElementById(`${inputName}Error`);
                if (errorDiv) {
                    errorDiv.textContent = errorMessage || '此项为必填项。';
                    errorDiv.style.display = 'block';
                }
            }
        });
    
        if (!allFilled) {
            alert('请填写所有必填项！');
            return false;
        }
        return true;
    }

    // Submit button
    document.getElementById('submitBtn').addEventListener('click', function(event) {
        event.preventDefault();

        if (!validateCurrentSection()) {
            return;
        }

        // 收集所有问卷数据
        const formData = {};
        sections.forEach(section => {
            section.querySelectorAll('input, select, textarea').forEach(input => {
                const name = input.name;
                if (!name) return; // 跳过没有name属性的input

                if (input.type === 'radio') {
                    if (input.checked) {
                        formData[name] = input.value;
                    }
                } else if (input.type === 'checkbox') {
                    if (!formData[name]) {
                        formData[name] = [];
                    }
                    if (input.checked) {
                        formData[name].push(input.value);
                    }
                    // 处理多选框旁边的文本输入框
                    if (name === 'creative_achievements') {
                        const detailInput = document.querySelector(`input[name="creative_achievements_${input.value}"]`);
                        if (detailInput) {
                            if (!formData.creative_achievements_details) {
                                formData.creative_achievements_details = {};
                            }
                            formData.creative_achievements_details[input.value] = detailInput.value.trim();
                        }
                    }
                } else {
                    formData[name] = input.value;
                }
            });
        });

        console.log('Collected Data:', formData);
        // 修改为你的 Apps Script URL：
        const googleSheetsUrl = 'https://script.google.com/macros/s/AKfycbyG9nx_a31sf_RD3VP43_bA22mtg-jqgNZ0NLNV2cDoVIYdLcNUWmC9c5sSOJ69pUA1vQ/exec';

        // 把对象转换为 URL 参数格式
        const formDataToSend = new URLSearchParams();
        for (const key in formData) {
            if (Array.isArray(formData[key])) {
                formDataToSend.append(key, formData[key].join(', '));
            } else if (typeof formData[key] === 'object') {
                for (const subKey in formData[key]) {
                    formDataToSend.append(`${key}_${subKey}`, formData[key][subKey]);
                }
            } else {
                formDataToSend.append(key, formData[key]);
            }
        }

        // 发送 POST 请求
        fetch(googleSheetsUrl, {
            method: 'POST',
            body: formDataToSend
        })
        .then(response => response.text())
        .then(result => {
            console.log('Success:', result);
            window.location.href = 'thanks.html'; // 成功后跳转
        })
        .catch(error => {
            console.error('Error:', error);
            alert('提交失败，请稍后再试。');
        });
    });

    });

    // 新增输入框实时显示/隐藏和必填验证
    document.querySelectorAll('input[type="checkbox"][name="creative_achievements"]').forEach(checkbox => {
        const key = checkbox.value;
        const detailInput = document.querySelector(`input[name="creative_achievements_${key}"]`);

        // 初始状态设置
        if (detailInput) {
            detailInput.style.display = checkbox.checked ? 'inline-block' : 'none';
            detailInput.required = checkbox.checked;
        }

        checkbox.addEventListener('change', () => {
            if (detailInput) {
                if (checkbox.checked) {
                    detailInput.required = true;
                    detailInput.style.display = 'inline-block';
                } else {
                    detailInput.required = false;
                    detailInput.style.display = 'none';
                    detailInput.value = ''; // 取消选中时清空内容
                }
            }
        });
    });
