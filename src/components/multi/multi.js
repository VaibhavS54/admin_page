import React from 'react';
import './multi.css';
import CurrencyRow from './multibox';

const LocationSettings = () => {
  return (
    <>
    <div className="multitopButtons">
    <button className="coupons"> General</button>
    <button className="giftCards">location </button>
    <button className="giftCards">Check out</button>
  </div>
  <div className="location-settings">
      <div className="switches">
        <label className="get">
          <p>Auto Detect Currency</p>
          <input type="checkbox" defaultChecked />
        </label>
        <label className="get">
        <p>Currency by Country</p>
          <input type="checkbox" defaultChecked />
        </label>
      </div>
      <table className="currency-table">
        <thead>
          <tr>
            <th>Currency</th>
            <th>Thousand separator</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <CurrencyRow />
          <CurrencyRow />
          <CurrencyRow />
        </tbody>
      </table>
      <button className="get-country-button">Get Country By Currency</button>
      <button className="save-button">Save</button>
    </div>
    </>
  );
};

export default LocationSettings;
