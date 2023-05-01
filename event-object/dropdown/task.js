const value = document.querySelector(".dropdown__value");
const list = document.querySelector(".dropdown__list");
const item = document.querySelectorAll(".dropdown__item");

value.addEventListener('click', openList);

function openList() {
    list.classList.contains("dropdown__list_active") ? list.classList.remove("dropdown__list_active") : list.classList.add("dropdown__list_active");
    clickItem();
}

function clickItem() {
    item.forEach((elem) => {
        elem.onclick = () => {
            value.textContent = elem.textContent;
            list.classList.remove("dropdown__list_active");
            return false;
        };
    });
}