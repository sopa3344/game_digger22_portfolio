document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const toggleContents = document.querySelectorAll('.toggle-content');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.dataset.target;

            // 모든 버튼과 컨텐츠에서 active 클래스 제거
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            toggleContents.forEach(content => content.classList.remove('active'));

            // 클릭된 버튼과 해당 타겟 컨텐츠에 active 클래스 추가
            this.classList.add('active');
            document.getElementById(targetId).classList.add('active');
        });
    });
});
