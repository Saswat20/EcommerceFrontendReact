import React from 'react';

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <div>
      <h4>Cart</h4>
      {cart.map((item, index) => (
        <div key={index}>
          {item.name} - ₹{item.price}
          <button
            className="btn btn-sm btn-danger mx-2"
            onClick={() => removeFromCart(index)}>
            Remove
          </button>
        </div>
      ))}
      <h5>Total: ₹{total}</h5>
    </div>
  );
}

export default Cart;
