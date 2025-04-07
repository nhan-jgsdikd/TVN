
function loadCartData() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const itemCountElement = document.getElementById('item-count');
    
    let totalPrice = 0;

    cartItemsContainer.innerHTML = ''; 

    cart.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${item.hinh}" alt="${item.ten}" style="width: 100px;"></td>
            <td>${item.ten}</td>
            <td>${item.gia.toFixed(2)}đ</td>
            <td>${item.soluong}</td>
            <td>${(item.gia * item.soluong).toFixed(2)}đ</td>
            <td><button onclick="removeItem(${index})">Xóa</button></td>
        `;
        cartItemsContainer.appendChild(row);
        totalPrice += item.gia * item.soluong;
    });

    totalPriceElement.innerText = `Tổng đơn hàng: ${totalPrice.toFixed(2)}đ`;
    itemCountElement.innerText = `(${cart.length})`;
}


function removeItem(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCartData();
}


function clearCart() {
    localStorage.removeItem('cart');
    loadCartData();
}


function showAddressForm() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Giỏ hàng của bạn hiện tại đang trống.');
        return;
    }
    
    document.getElementById('address-form').style.display = 'block';
}


document.getElementById('form-address').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    

    
    alert('Cảm ơn bạn đã ủng hộ chúng tôi, Tác phẩm sẻ đến tay bạn nhanh nhất có thể');
    localStorage.removeItem('cart');
    loadCartData();
    document.getElementById('address-form').style.display = 'none';
});


document.getElementById('cancel-button').addEventListener('click', () => {
    document.getElementById('address-form').style.display = 'none';
});
