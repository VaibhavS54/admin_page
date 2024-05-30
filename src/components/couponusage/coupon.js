import React from 'react';
import './coupon.css';

const CouponComponent = () => {
  return (
    <div className="coupon-container">
      <h4 className="heading">Coupons</h4>
      <div className="coupon-box">
        <h3 className="coupon-heading">Coupon Data</h3>
        <div className="columns">
          <div className="left-column">
            <div className="row">General</div>
            <div className="row red-text">Usage restriction</div>
            <div className="row black-text">Usage limit</div>
            {[...Array(6)].map((_, index) => (
              <div key={index + 3} className="row hidden-row"></div>
            ))}
          </div>
          <div className="right-column">
            <div className="row"><label>Minimum spend</label><input type="text" /></div>
            <div className="row"><label>Maximum spend</label><input type="text" /></div>
            <div className="row"><label>Individual use only</label><input type="checkbox" /></div>
            <div className="row"><label>Exclude sale items</label><input type="checkbox" /></div>
            <div className="row"><label>Products</label><input type="text" /></div>
            <div className="row"><label>Exclude category</label><input type="text" /></div>
            <div className="row"><label>Products category</label><input type="text" /></div>
            <div className="row"><label>Exclude category</label><input type="text" /></div>
            <div className="row"><label>Allowed emails</label><input type="text" /></div>
          </div>
        </div>
      </div>
      <button className="save-button">Save</button>
    </div>
  );
}

export default CouponComponent;