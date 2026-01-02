import { useCart } from '../context/CartContext';

const products = [
  { id:1, name:'Laptop', price:50000 },
  { id:2, name:'Phone', price:20000 },
  { id:3, name:'Headphones', price:2000 }
];

export default function ProductList() {
  const { addToCart } = useCart();

  return (
    <div style={{padding:20}}>
      {products.map(p => (
        <div key={p.id} style={{background:'#fff', padding:10, marginBottom:10}}>
          <h4>{p.name}</h4>
          <p>₹{p.price}</p>
          <button onClick={() => addToCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
