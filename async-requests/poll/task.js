const xhr = new XMLHttpRequest();
const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';
xhr.send();

xhr.onload = function() {
    if (this.status === 200) {
       let poll = xhr.response;
       let title = poll.data.title;
       let answers = poll.data.answers;

       pollTitle.textContent = title;
       answers.forEach(answer => {
            pollAnswers.insertAdjacentHTML('beforeEnd', 
                `<button class="poll__answer"> `+ answer +` </button>`
            )
       })

       const buttons = Array.from(document.querySelectorAll('.poll__answer'));
       buttons.forEach(button => {
            button.addEventListener('click', () => {
                alert(`Спасибо, ваш голос засчитан!`);
                location.reload();
            })
       })
    }
}