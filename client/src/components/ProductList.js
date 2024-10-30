import React, { useState } from 'react';

const ProductList = () => {
  // Sample price list (You can fetch this from an API)
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 50 },
    { id: 3, name: 'Product 3', price: 150 },
    { id: 4, name: 'Product 4', price: 75 },
  ]);

  const [sortOrder, setSortOrder] = useState('high-to-low'); // Default sort order

  // Sorting function
  const sortProducts = (order) => {
    const sortedProducts = [...products].sort((a, b) => {
      return order === 'high-to-low' ? b.price - a.price : a.price - b.price;
    });
    setProducts(sortedProducts);
  };

  // Handle change in sorting order
  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);
    sortProducts(order);
  };

  return (
    <div>
      <h2>Product List</h2>

      {/* Sorting Dropdown */}
      <select value={sortOrder} onChange={handleSortChange}>
        <option value="high-to-low">Price: High to Low</option>
        <option value="low-to-high">Price: Low to High</option>
      </select>

      {/* Displaying Product List */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
