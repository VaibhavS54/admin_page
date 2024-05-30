import React from 'react';
import './couponlimit.css';
const CouponLimit = () => {
  return (
    <div className="coupon-container">
      <h4 className="heading">Coupons</h4>
      <div className="coupon-box">
        <h3 className="coupon-heading">Coupon Data</h3>
        <div className="columns">
          <div className="left-column">
            <div className="row">General</div>
            <div className="row">Usage restriction</div>
            <div className="row red-text">Usage limit</div>
            {[...Array(6)].map((_, index) => (
              <div key={index + 3} className="row hidden-row"></div>
            ))}
          </div>
          <div className="right-column">
            <div className="row"><label>Usage Limit Per Coupon</label>
            <input type="text" />
            </div>
            <div className="row"><label>Usage Limit Per User</label><input type="text" /></div>
            <div className="row"><label></label></div>
          </div>
        </div>
      </div>
      <button className="save-button">Save</button>
    </div>
  );
}

export default CouponLimit;