

import React, { useEffect, useState } from 'react';

import './Forher.css';

function ForHer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/product/get-product')
      .then(response => response.json())
      .then(data => {
        // List of specific product IDs for "Her" products
      
        const herProductIds = [
           "66b32185e0ae59c9288c5274",
          "66b3279337853f81875d617d",
          "66b329721a333d345d8aa9b9",
          "66bf09a156d3c1114cd83368",
        ];

        // Filter products based on whether their '_id' matches the list
        const herProducts = data.products.filter(product =>
          herProductIds.includes(product._id)
        );

        setProducts(herProducts);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    
    <div >
      
      <div className='product-category'>
      <h1>Her Product</h1>
      </div>

      <div  className="for-her-container">
      {products.length > 0 ? (
        products.map(product => (
          <div key={product._id} className="product-card">
           
            <img 
              src={product.photo} 
              alt={product.name} 
              className="product-image" 
            />
             <h2>{product.name}</h2>
             <p>Price: ${product.price}</p>
          </div>
        ))
      ) : (
        <p>No products found for 'Her'.</p>
      )}
      </div>
    </div>
  );
}

export default ForHer;
