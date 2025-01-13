// ShimmerUI.js
import React from 'react';
import '../ShimmerUI.css'; // Import the CSS file for styling

const ShimmerUI = () => {
  return (
    <div className="shimmer-container">
      {/* Header */}
      <div className="shimmer-header"></div>
      
      {/* List of items */}
      <div className="shimmer-item-container">
        {[...Array(5)].map((_, index) => (
          <div className="shimmer-item" key={index}>
            <div className="shimmer-thumbnail"></div>
            <div className="shimmer-text">
              <div className="shimmer-line short"></div>
              <div className="shimmer-line long"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerUI;
