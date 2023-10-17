let cartItems = [];
let cartTotal = 0;

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    cartTotal += price;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    cartList.innerHTML = '';

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name}-₹${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
    });

    cartTotalElement.textContent = cartTotal.toFixed(2);
}