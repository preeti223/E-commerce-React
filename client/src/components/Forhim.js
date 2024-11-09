

import React, { useEffect, useState } from 'react';

import './Forhim.css';

function ForHim() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/product/get-product')
      .then(response => response.json())
      .then(data => {
        // List of specific product IDs for "Him" products
      
        const himProductIds = [
          "66f781426673173d872defc8",
          "66f780b76673173d872def9b",
          "66f77ee26673173d872def6e",
          "66f6e97e6e8871137d1f900a",
        ];

        // Filter products based on whethim their '_id' matches the list
        const himProducts = data.products.filter(product =>
          himProductIds.includes(product._id)
        );

        setProducts(himProducts);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    
    <div >
      
      <div className='product-category'>
      <h1>Him Product</h1>
      </div>

      <div  className="for-him-container">
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
        <p>No products found for 'Him'.</p>
      )}
      </div>
    </div>
  );
}

export default ForHim;
