import React, { useState } from 'react';
import './productfreq.css';

function ProductFeq() {
  const [discount, setDiscount] = useState(0);
  const [items, setItems] = useState(2);
  const [checked, setChecked] = useState(false);

  const handleDiscountChange = (event) => {
    setDiscount(event.target.value);
  };

  const handleItemsChange = (event) => {
    setItems(event.target.value);
  };

  const handleCheckChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="feqcontainer">
      <div className="feqproduct-search">
        <label htmlFor="product-search">Select products:</label>
        <input type="text" id="product-search" placeholder="Search for a product" />
      </div>
      <div className="feqdiscount">
        <label htmlFor="discount">Discount:</label>
        <input
          type="number"
          id="discount"
          value={discount}
          onChange={handleDiscountChange}
        />

      </div>
      <div className="feqcheck-all">
      <label htmlFor="feqcheck-all">Checked all</label>
        <input
          type="checkbox"
          id="check-all"
          checked={checked}
          onChange={handleCheckChange}
        />
      </div>
      <div className="feqitems">
        <label htmlFor="items"><p>Number of items to get discount:</p></label>
        <input
          type="number"
          id="items"
          value={items}
          onChange={handleItemsChange}
        />
      </div>
    </div>
  );
}

export default ProductFeq;