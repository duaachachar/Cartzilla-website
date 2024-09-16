let cart = {};


document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
    const id = this.getAttribute('data-id');
    const name = this.getAttribute('data-name');
    const price = parseFloat(this.getAttribute('data-price'));
    const img = this.getAttribute('data-img');

   
    if (cart[id]) {
      cart[id].quantity += 1;
    } else {
     
      cart[id] = { id, name, price, img, quantity: 1 };
    }

    updateCart();
  });
});


function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');
  let totalItems = 0;
  let totalPrice = 0;

  cartItems.innerHTML = ''; 

  for (let id in cart) {
    const item = cart[id];
    totalItems += item.quantity;
    totalPrice += item.price * item.quantity;

    const cartItem = document.createElement('li');
    cartItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    cartItem.innerHTML = `
      <div>
        <img src="${item.img}" width="50" height="50" class="me-3">
        ${item.name} - $${item.price} x ${item.quantity}
      </div>
      <button class="btn btn-danger btn-sm remove-item" data-id="${id}">Remove</button>
    `;
    cartItems.appendChild(cartItem);
  }

  
  document.getElementById('cart-count').textContent = totalItems;
  totalPriceElement.textContent = totalPrice.toFixed(2);

  
  document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', function() {
      const id = this.getAttribute('data-id');
      removeFromCart(id); 
    });
  });
}


function removeFromCart(id) {
  if (cart[id]) {
    cart[id].quantity--;
    if (cart[id].quantity <= 0) {
      delete cart[id]; 
    }
    updateCart(); 
  }
}




