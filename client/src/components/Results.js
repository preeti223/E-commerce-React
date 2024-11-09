import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from './Productcard'; // Make sure to import your ProductCard component
import './Result.css'; // Add any styling if needed

const Results = () => {
  const location = useLocation();
  const { searchResults } = location.state || {}; // Get the search results from the location state

  return (
    <div className="results-page">
      <h2>Search Results</h2>
      {searchResults && searchResults.length > 0 ? (
        <div className="product-grid">
          {searchResults.map((product) => (
            <ProductCard key={product._id} product={product} /> // Use ProductCard to display each product
          ))}
        </div>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default Results;
