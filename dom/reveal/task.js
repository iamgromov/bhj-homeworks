const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', (elem) => {
    for (elem of reveals) {
        if (elem.getBoundingClientRect().top < window.innerHeight || elem.getBoundingClientRect().bottom > 0) {
            elem.classList.add('reveal_active');
        } 
        
        if (elem.getBoundingClientRect().top > window.innerHeight || elem.getBoundingClientRect().bottom < 0) {
            elem.classList.remove('reveal_active');
        }
    }
})