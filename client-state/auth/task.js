const signIn = document.getElementById('signin');
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userID = document.getElementById('user_id');

function greetings() {
    signIn.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
}

window.addEventListener('load', () => {
    if (localStorage.loginID) {
        greetings();
        userID.textContent = localStorage.loginID;
    }
})

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.responseType = 'json';
    xhr.send(formData);

    xhr.addEventListener('load', () => {
        let data = xhr.response;

        if (data.success) {
            greetings();
            userID.textContent = data.user_id;
            localStorage.loginID = data.user_id;
        } else {
            alert('Неверный логин/пароль');
            form.reset();
        }
    })
})
