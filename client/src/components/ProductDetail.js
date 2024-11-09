// ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/product/get-product/${id}`); // Adjust the API endpoint as needed
        setProduct(response.data); // Adjust according to your API response structure
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <img src={product.photo} alt={product.name} />
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <p>Category: {product.category.name}</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  );
};

export default ProductDetail;
