document.addEventListener('DOMContentLoaded', () => {
    hljs.highlightAll();

    const tabs = document.querySelectorAll('.tab');
    const codeContainers = document.querySelectorAll('.code-container');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const fileType = tab.getAttribute('data-file');
            
            codeContainers.forEach(container => {
                container.style.display = 'none';
            });

            const targetContainer = document.getElementById(`code-${fileType}`);
            if (targetContainer) {
                targetContainer.style.display = 'block';
            }
        });
    });
});
