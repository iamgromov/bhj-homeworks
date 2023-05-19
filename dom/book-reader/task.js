const bookControls = Array.from(document.querySelectorAll('.font-size'));
const bookContent = document.querySelector('.book');

bookControls.forEach(elem => {
    elem.onclick = function() {
        bookContent.classList.remove('book_fs-big', 'book_fs-small');
        bookControls.forEach(elem => elem.classList.remove('font-size_active'));

        this.classList.add('font-size_active');
        this.dataset.size ? book.classList.add(`book_fs-${this.dataset.size}`) : '';
        return false;
    }
});