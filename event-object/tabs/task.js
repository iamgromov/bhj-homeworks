const tabs = document.querySelectorAll('.tab');
const content = document.querySelectorAll('.tab__content');

let activeTab;

tabs.forEach((elem, index) => {
    if (elem.className === 'tab tab_active') {
        activeTab = index;
    }

    elem.addEventListener('click', () => {
        if (activeTab !== index) {
            tabs[activeTab].className = 'tab';
            elem.classList.add('tab_active');

            content[activeTab].className = 'tab__content';
            content[index].classList.add('tab__content_active');

            activeTab = index;
        }
    });
});