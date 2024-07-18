import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css'; // Import related CSS file

const ProductDetails = () => {
  const { id } = useParams(); // Get the id parameter from the URL
  const [user, setUser] = useState(null); // State to hold the user details

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [id]);

  // Render loading state while fetching data
  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-details">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      {/* Additional user details as needed */}
    </div>
  );
};

export default ProductDetails;
