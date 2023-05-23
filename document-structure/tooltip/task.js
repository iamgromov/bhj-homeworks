const links = document.querySelectorAll('.has-tooltip');
const div = document.createElement('div');
div.classList.add('tooltip');

links.forEach((link) => {
    let position = link.getBoundingClientRect();
    let top = position.top + 20;
    let left = position.left;

    link.addEventListener('click', function(event) {
        if (div.innerHTML != link.title) {
            div.innerHTML = link.title;
            div.classList.add('tooltip_active');
        } else {
            div.classList.remove('tooltip_active');
            div.innerHTML = '';
        }

        event.preventDefault();
        link.insertAdjacentElement('beforebegin', div);
        div.style.top = top + 'px';
        div.style.left = left + 'px';
        return div;
    }, false)
})