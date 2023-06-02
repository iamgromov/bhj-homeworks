const popup = document.querySelector('.modal');
const closePopup = document.querySelector('.modal__close');

popup.classList.add('modal_active');

closePopup.addEventListener('click', () => {
    document.cookie = 'popup=showed; path=/; expires=';
    popup.classList.remove('modal_active');
})

function getCookie(name) {
    let pairs = document.cookie.split('; ');
    let cookie = pairs.find(p => p.startsWith(name + '='));
    return cookie.substring(name.length + 1);
}

if (getCookie('popup') == 'showed') {
    popup.classList.remove('modal_active');
}