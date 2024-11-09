// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

import Forher from "./components/Forher";
import Forhim from "./components/Forhim";
import Footer from "./components/Footer";
import SearchComponent from "./components/SearchComponent";
import Results from "./components/Results";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import ProductListPage from "./components/ProductListPage";

import axios from "axios";
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
        <ProductListPage />
       

        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<div className="home-page"></div>} />
            {/* Other Routes */}
            <Route path="/forher" element={<Forher />}/>
            <Route path="/forhim" element={<Forhim />} />
            <Route path="/searchcomponent" element={<SearchComponent />} />{" "}
            {/* Route for home page with SearchComponent */}
            <Route path="/results" element={<Results />} />
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
