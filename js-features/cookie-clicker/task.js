const counter = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");

image.onclick = function clicker() {
    image.width = counter.textContent % 2 ? 200 : 400;
    counter.textContent++;
}