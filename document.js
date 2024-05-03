document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('ticketForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // 페이지 새로 고침 방지

        const formData = new FormData(form); // 폼 데이터 가져오기

        fetch('/ticket', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            // 서버로부터 받은 데이터 처리
            if (data === 'success') {
                // 티켓 구매 성공 메시지 표시 또는 다음 동작 수행
                alert('티켓 구매가 성공했습니다.');
            } else {
                // 에러 메시지 표시 또는 다음 동작 수행
                alert('티켓 구매에 실패했습니다. 다시 시도해주세요.');
            }
        })
        .catch(error => {
            // 오류 처리
            console.error('Error:', error);
        });
    });
});
