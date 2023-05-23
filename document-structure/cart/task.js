const product = document.querySelectorAll('.product');
const cart = document.querySelector('.cart__products');

function addCart(cart_id, cart_img, cart_count) {
    let cartProduct = Array.from(cart.querySelectorAll('.cart__product'));
    let cartId = cartProduct.findIndex(cart => cart_id == cart.getAttribute('data-id'));

    if (cartId == -1) {
        cart.innerHTML += `
        <div class="cart__product" data-id= ${cart_id}>
            <img class="cart__product-image" src= '${cart_img}'>
            <div class="cart__product-count">${cart_count}</div>
        </div>
        `;
    } else {
        cartProduct[cartId].querySelector('.cart__product-count').innerText = Number(cartProduct[cartId].querySelector('.cart__product-count').innerText) + cart_count;
    }
};

product.forEach((item) => {
    let productAdd = item.querySelector('.product__quantity-control_inc');
    let productRemove = item.querySelector('.product__quantity-control_dec');
    let productQuantity = item.querySelector('.product__quantity-value');
    let addButton = item.querySelector('.product__add');
    let quantity = Number(productQuantity.innerText);
    let productId = item.getAttribute('data-id');
    let productImg = item.querySelector('.product__image').getAttribute('src');

    productAdd.addEventListener('click', () => {
        quantity += 1;
        productQuantity.innerText = quantity;
    })

    productRemove.addEventListener('click', () => {
        if (quantity == 1) {
            return false;
        } else {
            quantity -= 1;
        }

        productQuantity.innerText = quantity;
    })

    addButton.addEventListener('click', () => {
        addCart(productId, productImg, quantity)
    })
});