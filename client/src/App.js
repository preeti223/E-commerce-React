
// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import Forher from './components/Forher';
import Forhim from './components/Forhim';
import Footer from './components/Footer'; // Import Footer


import axios from 'axios';
import './App.css'; // Import global styles

function App() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Fetch products from API
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get('http://localhost:8000/api/v1/product/get-product');
      setProducts(data.products);
      setIsLoaded(true);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  // Fetch products on component mount
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Router>
      <div className="app-container"> {/* Main Container */}
        <Navbar />
        <Banner/>
        <ProductList/>
        <div className="content-wrapper">
          <Routes>
            <Route
              path="/"
              element={
                <div className="home-page">
                 
                 
                  <div className="offer">
                    <h4><strong>Our Product</strong></h4>
                  </div>
{/*  */}
                  {/* Product List Section */}
                  <div className={`fullprod ${isLoaded ? 'loaded' : ''}`}>
                    <div className="pcards">
                      {products.map((p, index) => (
                        <div className="pcard" key={index}>
                          <div className="pimg">
                            <img
                              src={p.photo}
                              alt="Product"
                              className="default-photo"
                            />
                            <img
                              src={p.photo1}
                              alt="Product on hover"
                              className="hover-photo"
                            />
                          </div>
                          <div className="pdets">
                            <h4><strong>{p.name}</strong></h4>
                            <p className="priceofdetail">
                              <s>Rs.{p.price + 200}.-</s> <strong>Rs.{p.price}/-</strong>
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              }
            />
                
            {/* Other Routes */}
            <Route path="/forher" element={<Forher />} />
            <Route path="/forhim" element={<Forhim />} />

            
      
          </Routes>
        </div>

        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
