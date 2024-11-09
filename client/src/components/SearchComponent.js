import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import ProductCard from './Productcard'; 
import './SearchComponent.css';

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); 
      try {
        const response = await axios.get('http://localhost:8000/api/v1/product/get-product');
        setProducts(response.data.products); 
      } catch (err) {
        setError(err.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchProducts(); 
  }, []);

  
  const handleSearch = (e) => {
    e.preventDefault(); 
    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(results); 
  };

  return (
    <div className="search-container">
      <h3>Search your product here </h3>
      <form onSubmit={handleSearch} className="search-Bar">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} 
          placeholder="Search"
          className="search-input"
        />
        <button type="submit" className="search-button">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="1x" />
        </button>
      </form>

      <div className="search-results">
        {loading && <p>Loading...</p>} 
        {error && <p>Error: {error}</p>} 

        {filteredProducts.length > 0 ? (
          <div className="product-list">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} /> 
            ))}
          </div>
        ) : (
          searchQuery && !loading && !error && <p>No results found</p> // Show no results message if search query is not empty
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
