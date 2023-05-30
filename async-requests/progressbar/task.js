const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const xhr = new XMLHttpRequest();
    const formData = new FormData(form);

    xhr.upload.addEventListener('progress', (event) => {
        progress.value = event.loaded / event.total;
    });

    xhr.upload.addEventListener('load', () => {
        alert('Файл загружен');
    });

    xhr.upload.addEventListener('error', () => {
        alert('Ошибка');
    });   

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);
})



