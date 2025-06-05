// JavaScript for questionnaire logic with fetch optimization, submit lock, and multi-select detail merge

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.question-section');
    const progressBar = document.getElementById('progressBar');
    const submitButton = document.getElementById('submitBtn');
    let currentSectionIndex = 0;

    const aiProficiencyGroup = document.getElementById('aiProficiencyGroup');
    const usedAiToolsRadios = document.querySelectorAll('input[name="used_ai_tools"]');

    usedAiToolsRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === '是') {
                aiProficiencyGroup.style.display = 'block';
            } else {
                aiProficiencyGroup.style.display = 'none';
                document.getElementById('aiProficiencyError').style.display = 'none';
                document.querySelectorAll('input[name="ai_proficiency"]').forEach(r => r.checked = false);
                // 新增：当选择“否”时，隐藏并清空AI工具使用频率的选项
                document.getElementById('aiUsageFrequencyError').style.display = 'none';
                document.querySelectorAll('input[name="ai_usage_frequency"]').forEach(r => r.checked = false);
            }
        });
    });

    function updateProgressBar() {
        const totalSections = sections.length;
        const progress = totalSections > 0 ? ((currentSectionIndex + 1) / totalSections) * 100 : 0;
        progressBar.style.width = progress + '%';
        progressBar.textContent = Math.round(progress) + '%';
    }

    function showSection(index) {
        sections.forEach((section, i) => {
            section.style.display = (i === index) ? 'block' : 'none';
        });
        currentSectionIndex = index;
        updateProgressBar();
    }

    showSection(0);

    for (let i = 1; i <= 8; i++) {
        document.getElementById(`next${i}`).addEventListener('click', () => {
            if (validateCurrentSection()) showSection(i);
        });
        document.getElementById(`prev${i + 1}`).addEventListener('click', () => showSection(i - 1));
    }

    function validateCurrentSection() {
        const currentSection = sections[currentSectionIndex];
        const requiredInputs = currentSection.querySelectorAll('[required]');
        let allFilled = true;
        let errorMessage = '';

        currentSection.querySelectorAll('.error-message').forEach(msg => msg.style.display = 'none');

        const usedAiToolsValue = document.querySelector('input[name="used_ai_tools"]:checked')?.value;

        requiredInputs.forEach(input => {
            const inputName = input.name;
            let inputValid = true;

            // 确保当usedAiToolsValue为“否”时，ai_proficiency和ai_usage_frequency不进行验证
            if (usedAiToolsValue === '否' && (inputName === 'ai_proficiency' || inputName === 'ai_usage_frequency')) return;

            if (input.type === 'radio') {
                if (!document.querySelector(`input[name="${inputName}"]:checked`)) inputValid = false;
            } else if (input.type === 'checkbox') {
                if (inputName === 'creative_achievements') {
                    const detailInput = document.querySelector(`input[name="creative_achievements_${input.value}"]`);
                    if (input.checked && detailInput && detailInput.value.trim() === '') {
                        inputValid = false;
                        errorMessage = `请填写“${input.parentNode.textContent.trim()}”的具体内容。`;
                    }
                }
                const checkboxGroup = document.querySelectorAll(`input[name="${inputName}"]`);
                if (!Array.from(checkboxGroup).some(cb => cb.checked)) inputValid = false;
            } else if (input.value.trim() === '') {
                inputValid = false;
            }

            if (!inputValid) {
                allFilled = false;
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

    submitButton.addEventListener('click', function (event) {
        event.preventDefault();

        if (!validateCurrentSection()) return;

        submitButton.disabled = true;
        submitButton.textContent = '提交中...';

        const formData = {};
        sections.forEach(section => {
            section.querySelectorAll('input, select, textarea').forEach(input => {
                const name = input.name;
                if (!name) return;

                if (input.type === 'radio' && input.checked) {
                    formData[name] = input.value;
                } else if (input.type === 'checkbox') {
                    if (!formData[name]) formData[name] = [];
                    if (input.checked) formData[name].push(input.value);
                    if (name === 'creative_achievements') {
                        const detailInput = document.querySelector(`input[name="creative_achievements_${input.value}"]`);
                        if (detailInput) {
                            if (!formData.creative_achievements_details) formData.creative_achievements_details = {};
                            // 确保即使没有填写，也记录对应的键，值为trim后的空字符串
                            formData.creative_achievements_details[input.value] = detailInput.value.trim();
                        }
                    }
                } else if (input.value) {
                    formData[name] = input.value;
                }
            });
        });

        const googleSheetsUrl = 'https://script.google.com/macros/s/AKfycbyG9nx_a31sf_RD3VP43_bA22mtg-jqgNZ0NLNV2cDoVIYdLcNUWmC9c5sSOJ69pUA1vQ/exec';
        const formDataToSend = new URLSearchParams();

        for (const key in formData) {
            if (Array.isArray(formData[key])) {
                // 🔧 关键逻辑：将 creative_achievements 与其 details 组合
                if (key === 'creative_achievements' && formData['creative_achievements_details']) {
                    const details = formData['creative_achievements_details'];
                    const enrichedList = formData[key].map(item => {
                        const detail = details[item]; // 获取详细信息，即使为空字符串
                        return detail && detail !== '' ? `${item}${detail}` : item; // 只有当detail不为空时才拼接
                    });
                    formDataToSend.append(key, enrichedList.join(', '));
                } else {
                    formDataToSend.append(key, formData[key].join(', '));
                }
            } else if (typeof formData[key] === 'object') {
                // skip nested object like creative_achievements_details
                continue;
            } else {
                formDataToSend.append(key, formData[key]);
            }
        }
        

        fetch(googleSheetsUrl, {
            method: 'POST',
            body: formDataToSend
        });

        setTimeout(() => {
            window.location.href = 'thanks.html';
        }, 300);
    });

    document.querySelectorAll('input[type="checkbox"][name="creative_achievements"]').forEach(checkbox => {
        const key = checkbox.value;
        const detailInput = document.querySelector(`input[name="creative_achievements_${key}"]`);

        if (detailInput) {
            detailInput.style.display = checkbox.checked ? 'inline-block' : 'none';
            detailInput.required = checkbox.checked;
        }

        checkbox.addEventListener('change', () => {
            if (detailInput) {
                detailInput.required = checkbox.checked;
                detailInput.style.display = checkbox.checked ? 'inline-block' : 'none';
                if (!checkbox.checked) detailInput.value = '';
            }
        });
    });
});
