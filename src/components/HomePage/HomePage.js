import React, { useState, useEffect } from 'react';
import ProductList from './ProductList/ProductList'; // Adjust import path as needed
import './HomePage.css';


const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        // Map fetched data to match the structure your components expect
        const formattedProducts = data.map(product => ({
          id: product.id,
          name: product.title,
          price: product.price,
          image: product.image,
          description: product.description,
        }));
        setProducts(formattedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;
