// src/CouponForm.js
import React from 'react';
import './coupon.css';

const Coupon = () => {
  return (
    <div className="coupon-form">
      <h1>Coupons</h1>
      <div className="coupon-data">
        <div className="section general">
          <h2>Coupon Data</h2>
          <div className="form-group">
            <label>Discount Type</label>
            <select>
              <option>Fixed Cart Discount</option>
              <option>Percentage Discount</option>
              <option>Fixed Product Discount</option>
            </select>
          </div>
          <div className="form-group">
            <label>Coupon Amount</label>
            <input type="text" value="1111" />
          </div>
        </div>
        <div className="section usage-restriction">
          <h2>Usage Restriction</h2>
          <div className="form-group">
            <label>Allow Free Shipping</label>
            <input type="checkbox" checked />
          </div>
          <div className="form-group">
            <label>Expiry Date</label>
            <input type="date" value="2024-05-05" />
          </div>
        </div>
        <button className="save-button">Save</button>
      </div>
    </div>
  );
};

export default Coupon;
