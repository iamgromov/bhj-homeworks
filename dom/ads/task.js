const rotators = Array.from(document.querySelectorAll('.rotator__case'));

function rotator() {
    let i = rotators.findIndex(elem => elem.classList.contains('rotator__case_active'));

    rotators.forEach(elem => {
        if (i < rotators.length - 1) {
            elem.classList.remove('rotator__case_active');
            rotators[i + 1].classList.add('rotator__case_active');
        } else {
            i = -1;
        }
    });
};

setInterval(rotator, 1000);