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
        // Log the id to make sure it's correct
        console.log('Product ID:', id);

        // Make the API request
        const response = await axios.get(`http://localhost:8000/api/v1/product/get-product/${id}`);
        console.log('Product response:', response); // Log the full response for debugging

        // Check if the response contains a valid product
        if (response.data && response.data._id) {
          setProduct(response.data); // Set product if response is valid
        } else {
          console.error('Product data is not found:', response);
          setProduct(null); // Set product as null if not found
        }
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching product details:', error);
        setLoading(false); // Set loading to false if there is an error
      }
    };

    fetchProduct(); // Fetch product when component mounts or id changes
  }, [id]);

  // Handle loading and missing product states
  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  // Render product details once data is available
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
