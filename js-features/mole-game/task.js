const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

let deadCount = 0;
let lostCount = 0;

function counter() {
    dead.textContent = deadCount;
    lost.textContent = lostCount;
}

function check() {
    if (deadCount === 10) {
        result = "победили!";
        newGame(result);
    }

    if (lostCount === 5) {
        result = "проиграли";
        newGame(result);
    }
}

function newGame(result) {
    alert("Вы " + result);
    deadCount = 0;
    lostCount = 0;
    counter();
    return;
}

function getHole(index) {
    for (let i = 1; i <= index; i++) {
        let hole = document.getElementById(`hole${i}`);
        hole.onclick = function() {
            if (hole.classList.contains(`hole_has-mole`)) {
                deadCount++;
                counter();
                check();
            } else {
                lostCount++;
                counter();
                check();
            }
        }
    }
}

getHole(10);

