

import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';


function Forhim() {
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

return(
    <div>
   
          <div className="offer">
            <h4><strong>Him Product</strong></h4>
          </div>

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
                  
);
}

export default Forhim;


