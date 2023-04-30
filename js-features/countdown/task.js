function countdown() {
    let sec = document.getElementById("timer");

    if (sec.textContent <= 0) {
        clearTimeout(countdown);
        alert("Вы победили в конкурсе!");
    } else {
        sec.textContent--;
        setTimeout(countdown, 1000);
    }
}

countdown();