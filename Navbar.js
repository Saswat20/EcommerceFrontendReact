import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cart } = useCart();
  return (
    <div style={{padding:10, background:'#333', color:'#fff'}}>
      E-Commerce | Cart Items: {cart.length}
    </div>
  );
}
