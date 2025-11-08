document.addEventListener('DOMContentLoaded', () => {
    hljs.highlightAll();
});

function showStep(stepNumber) {
    const allContents = document.querySelectorAll('.step-content');
    const allBtns = document.querySelectorAll('.tab-btn');
    
    allContents.forEach(content => {
        content.classList.remove('active');
    });
    
    allBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.getElementById(`step-${stepNumber}`).classList.add('active');
    allBtns[stepNumber - 1].classList.add('active');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function copyCode(btn) {
    const codeBlock = btn.closest('.file-block').querySelector('code');
    const text = codeBlock.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.textContent;
        btn.textContent = '✅ 已复制';
        btn.classList.add('copied');
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('复制失败:', err);
        alert('复制失败，请手动复制');
    });
}
