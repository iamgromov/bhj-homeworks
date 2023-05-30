const xhr = new XMLHttpRequest();
const loader = document.getElementById('loader');
const items = document.getElementById('items');

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json';
xhr.send();

xhr.onload = function() {
    if (this.status === 200) {
        let itemsObject = xhr.response;
        let valute = itemsObject.response.Valute;
        let itemsArray = [];

        for (key in valute) {
            let CharCode = valute[key].CharCode;
            let Value = valute[key].Value;
            itemsArray.push({ CharCode: CharCode, Value: Value });
        }

        itemsArray.forEach((item) => {
            items.insertAdjacentHTML('beforeEnd', 
            `<div class="item">
                <div class="item__code"> ${item.CharCode} </div>
                <div class="item__value"> ${item.Value} </div>
                <div class="item__currency"> руб. </div>
            </div>`
            );
        })

        loader.classList.remove('loader_active');
    }
}
