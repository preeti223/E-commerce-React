
import React from 'react';
import { Link } from 'react-router-dom'; 
import './ProductList.css';

const ProductList = ({ products, handleSortChange, sortOption }) => {
  const sortedProducts = () => {
    // Sorting logic
    if (sortOption === 'priceLowHigh') {
      return [...products].sort((a, b) => a.price - b.price);
    } else if (sortOption === 'priceHighLow') {
      return [...products].sort((a, b) => b.price - a.price);
    } else if (sortOption === 'alphabetical') {
      return [...products].sort((a, b) => a.name.localeCompare(b.name));
    }
    return products;
  };

  const filteredProducts = () => {
    // Filter logic for categories
    if (sortOption === 'bags') {
      return products.filter(product => product.category.name.toLowerCase() === 'bags');
    } else if (sortOption === 'apparels') {
      return products.filter(product => product.category.name.toLowerCase() === 'apparels');
    } else if (sortOption === 'techpack') {
      return products.filter(product => product.category.name.toLowerCase() === 'techpack');
    }
    return sortedProducts();
  };

  return (
    <div className='Sorted-list'>

      <div className='sort-category'>
      <div>
        <label htmlFor="sort">Sort by: </label>
        <select id="sort" onChange={handleSortChange} value={sortOption}>
          <option value="">Select</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
      </div>

      <div>
        <label htmlFor="category">Category: </label>
        <select id="category" onChange={handleSortChange} value={sortOption}>
          <option value="">Select</option>
          <option value="bags">Bags</option>
          <option value="apparels">Apparels</option>
          <option value="techpack">Techpack</option>
        </select>
      </div>
      </div>

      {/* Section for sorted and filtered products */}
      <div className="product-grid">
        {/* <h2>Products</h2> */}
        {filteredProducts().length > 0 ? (
          filteredProducts().map((product) => (
            <Link to={'/product/${product._id}'} key={product._id} className="product-card">
              {/* <h3>{product.name}</h3> */}
              <img src={product.photo} alt={product.name} style={{ width: '200px', height: 'auto' }} />
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              {/* <p>Category: {product.category.name}</p>  */}
              {/* Display category */}
            </Link>
          ))
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
