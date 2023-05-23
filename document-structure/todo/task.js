const input = document.querySelector('.tasks__input');
const button = document.querySelector('.tasks__add');
const list = document.querySelector('.tasks__list');
const deleteButton = document.querySelectorAll('.task__remove');

function addTask() {
    if (input.value) {
        list.insertAdjacentHTML('beforeend',
        `<div class="task">
            <div class="task__title">${input.value}</div>
            <a href="#" class="task__remove">&times;</a>
        </div>`);
    }

    input.value = null;
}

button.addEventListener('click', (event) => {
    event.preventDefault();
    addTask();
})

input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
})

list.addEventListener('click', (event) => {
    event.preventDefault();
    const deleteButton = document.querySelectorAll('.task__remove');
    
    deleteButton.forEach(button => {
        if (button === event.target) {
            button.parentElement.remove();
        }
    })
})