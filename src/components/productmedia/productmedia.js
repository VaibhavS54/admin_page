
import React from 'react';
import './productmedia.css';

const ProductMedia = () => {
  //  3000 images
  const images = new Array(3000).fill(0);

  return (
    <div>
      <div className="podgrid">
        {images.slice(0, 16).map((_, index) => (
          <div className="podimage-container" key={index}>
            <div className="podimage-placeholder">Img</div>
          </div>
        ))}
      </div> 
      <button className="podapply">Apply</button>
      </div>
  );
};

export default ProductMedia;
