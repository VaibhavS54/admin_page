import React from 'react';
import './multigeneral.css';

const Currency = () => {
  const currencyData = [
    { defaultChecked: true, hidden: 'No', currency: 'Currency Selector', displayPosition: 'Left' },
    { defaultChecked: false, hidden: 'No', currency: 'Currency Selector', displayPosition: 'Right' },
    { defaultChecked: true, hidden: 'Yes', currency: 'Currency Selector', displayPosition: 'Top' },
    { defaultChecked: false, hidden: 'Yes', currency: 'Currency Selector', displayPosition: 'Bottom' },
  ];

  return (
    <div>
    <div className="setting-header">
    <div className="tab">General</div>
    <div className="tab">Location</div>
    <div className="tab">Check out</div>
  </div>
    <div className="currency-settings">
      <div className="toggle-container">
        <div className="toggle-option">
          <label>Enable Multi Currency</label>
          <input type="checkbox" defaultChecked />
        </div>
        <div className="toggle-option">
          <label>Use Exchange Rate</label>
          <input type="checkbox" defaultChecked />
        </div>
      </div>
      <div className="currency-options">
        <label>Currency Option :</label>
        <table>
          <thead>
            <tr>
              <th>Default</th>
              <th>Hidden</th>
              <th>Currency</th>
              <th>Display Position</th>
              <th>Exchange rate + Fee</th>
              <th>Thousand separator</th>
              <th>Decimal separator</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currencyData.map((row, index) => (
              <tr key={index}>
                <td><input type="checkbox" defaultChecked={row.defaultChecked} /></td>
                <td>{row.hidden}</td>
                <td>{row.currency}</td>
                <td>
                  <select className="down" defaultValue={row.displayPosition}>
                    <option>Left</option>
                    <option>Right</option>
                    <option>Top</option>
                    <option>Bottom</option>
                  </select>
                </td>
                <td>
                  <div className="exchange-rate">
                    <input type="text" placeholder="Input Rate" />
                    +
                    <input type="text" placeholder="Input Fee" />
                  </div>
                </td>
                <td></td>
                <td></td>
                <td>
                  <div className="sidebutton">
                    <button>Update</button>
                    <button>Remove</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Currency;
