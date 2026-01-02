import React from 'react';
import products from '../data/products';

function ProductList({ addToCart }) {
  return (
    <div className="row">
      {products.map((p, index) => (
        <div className="col-md-4" key={index}>
          <div className="card mb-3">
            <div className="card-body">
              <h5>{p.name}</h5>
              <p>₹{p.price}</p>
              <button className="btn btn-primary"
                onClick={() => addToCart(p)}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
