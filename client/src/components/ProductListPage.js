// ProductListPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import ProductList from './ProductList'; // Import the ProductList component
import './ProductListPage.css';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState('');

  // Fetch products using axios
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/v1/product/get-product'); // Your API link
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts(); // Call fetchProducts when the component mounts
  }, []);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div>
      <div className='Product-title'>
      <h2>Our Product</h2>
      </div>

      <div className='product-work'>
      <ProductList products={products} handleSortChange={handleSortChange} sortOption={sortOption} />
      </div>
      
    </div>
  );
};

export default ProductListPage;
