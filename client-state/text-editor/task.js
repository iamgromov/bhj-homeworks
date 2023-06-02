const editor = document.getElementById('editor');

editor.value = localStorage.getItem('text');

editor.addEventListener('input', () => {
    localStorage.setItem('text', editor.value);
});