import React from 'react';
import './coupongeneral.css';
const CouponGeneral = () => {
  return (
    <div className="coupon-container">
      <h4 className="heading">Coupons</h4>
      <div className="coupon-box">
        <h3 className="coupon-heading">Coupon Data</h3>
        <div className="columns">
          <div className="left-column">
            <div className="row red-text">General</div>
            <div className="row">Usage restriction</div>
            <div className="row black-text">Usage limit</div>
            {[...Array(6)].map((_, index) => (
              <div key={index + 3} className="row hidden-row"></div>
            ))}
          </div>
          <div className="right-column">
            <div className="row"><label>Discount type</label>
            <select className="sel">
                <option>fixed cart discount</option>
                <option>pencentage discount</option>
                <option>fixed product discount</option>
            </select>
            </div>
            <div className="row"><label>Coupon Amount</label><input type="text" /></div>
            <div className="row"><label>Allow free shipping</label><input type="checkbox" /></div>
            <div className="row"><label>Experiy date</label></div>
          </div>
        </div>
      </div>
      <button className="save-button">Save</button>
    </div>
  );
}

export default CouponGeneral;