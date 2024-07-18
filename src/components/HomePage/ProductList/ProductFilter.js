import React from 'react';
import './ProductFilter.css'; // Import CSS file for styling

const ProductFilter = ({ categories, onSelectCategory }) => {
  return (
    <div className="product-filter">
      <h3 className="filter-title">Filter by Category</h3>
      <ul className="category-list">
        {categories.map((category, index) => (
          <li key={index} className="category-item">
            <button
              className="category-button"
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilter;
