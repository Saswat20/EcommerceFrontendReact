import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  return (
    <div>
      {cart.map((item, index) => (
        <div key={index}>
          {item.name}
          <button onClick={() => removeFromCart(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
