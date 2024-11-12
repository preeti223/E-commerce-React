

// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Forher from "./components/Forher";
import Forhim from "./components/Forhim";
import Footer from "./components/Footer";
import SearchComponent from "./components/SearchComponent";
import Results from "./components/Results";
import ProductListPage from "./components/ProductListPage";
import ProductDetail from "./components/ProductDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Banner />
        <div className="search-container">
          <SearchComponent />
        </div>

        <div className="content-wrapper">
          <Routes>
            {/* Home Page Route */}
            <Route path="/" element={<ProductListPage />} />
            
            {/* Route for "For Her" products */}
            <Route path="/forher" element={<Forher />} />
            
            {/* Route for "For Him" products */}
            <Route path="/forhim" element={<Forhim />} />
            
            {/* Route for search results */}
            <Route path="/results" element={<Results />} />
            
            {/* Route for individual product detail */}
            <Route path="/product/:id" element={<ProductDetail />} /> 
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
