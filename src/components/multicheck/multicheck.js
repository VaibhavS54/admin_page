import React, { useState } from 'react';
import './multicheck.css';

const Checkout = () => {
  const [changeCurrencyOnCheckout, setChangeCurrencyOnCheckout] = useState(true);
  const [checkoutCurrency, setCheckoutCurrency] = useState(true);

  const currencies = [
    { name: "Currency 1", default: false, checkout: false },
    { name: "Currency 2", default: false, checkout: false },
    { name: "Currency 3", default: false, checkout: false }
  ];

  return (
    <div>
      <div className="tabs">
        <button>General</button>
        <button>Location</button>
        <button>Check out</button>
      </div>
      <div className="checkout-settings">
        <div className="settings">
          <label>
            Change Currency On Check Out Page
            <input
              type="checkbox"
              checked={changeCurrencyOnCheckout}
              onChange={() => setChangeCurrencyOnCheckout(!changeCurrencyOnCheckout)}
            />
          </label>
          <label>
            Check Out Currency
            <input
              type="checkbox"
              checked={checkoutCurrency}
              onChange={() => setCheckoutCurrency(!checkoutCurrency)}
            />
          </label>
        </div>
        <table>
          <thead>
            <tr>
              <th>Currency</th>
              <th>Default</th>
              <th>Checkout Currency</th>
            </tr>
          </thead>
          <tbody>
            {currencies.map((currency, index) => (
              <tr key={index}>
                <td>{currency.name}</td>
                <td><input type="checkbox" checked={currency.default} /></td>
                <td>
                  <button>Yes</button>
                  <button>No</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Checkout;
