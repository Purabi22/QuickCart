import React, { useState } from 'react';
import React, { useEffect } from 'react';

import './ProductReviews.css'; // Import related CSS file

const ProductReviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]); // State to store reviews, initially empty

  // Function to fetch reviews for a product (dummy implementation)
  const fetchReviews = async () => {
    try {
      // Dummy API call or fetch logic
      const response = await fetch(`/api/reviews/${productId}`);
      const data = await response.json();
      setReviews(data.reviews); // Assuming API returns an array of reviews
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  // useEffect to fetch reviews on component mount (simulating componentDidMount)
  useEffect(() => {
    fetchReviews();
  }, [productId]); // Dependency array to run effect when productId changes

  return (
    <div className="product-reviews-container">
      <h2>Product Reviews</h2>
      <div className="reviews-list">
        {reviews.length > 0 ? (
          reviews.map(review => (
            <div key={review.id} className="review-item">
              <p className="review-rating">Rating: {review.rating}</p>
              <p className="review-comment">{review.comment}</p>
              <p className="review-author">By: {review.author}</p>
            </div>
          ))
        ) : (
          <p>No reviews available</p>
        )}
      </div>
    </div>
  );
};

export default ProductReviews;
