import React from 'react';
import './multi.css';
import CurrencyRow from './multibox';

const LocationSettings = () => {
  // Sample currency data
  const currencies = [
    { id: 1, name: 'USD', separator: ',' },
    { id: 2, name: 'EUR', separator: '.' },
    { id: 3, name: 'JPY', separator: ',' },
    // Add more currencies as needed
  ];

  return (
    <>
      <div className="multitopButtons">
        <button className="coupons">General</button>
        <button className="giftCards">Location</button>
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
            {currencies.map(currency => (
              <CurrencyRow key={currency.id} currency={currency} />
            ))}
          </tbody>
        </table>
        <button className="get-country-button">Get Country By Currency</button>
        <button className="save-button">Save</button>
      </div>
    </>
  );
};

export default LocationSettings;
