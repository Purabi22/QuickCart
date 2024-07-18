import React from 'react';
import ProductCard from './ProductCard'; // Assuming ProductCard component is available
import './RelatedProducts.css'; // Import related CSS file

const RelatedProducts = ({ relatedProducts }) => {
  return (
    <div className="related-products-container">
      <h2>Related Products</h2>
      <div className="related-products-list">
        {relatedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
