import React from 'react';
import './multibox.css';

const CurrencyRow = () => {
  return (
    <tr>
      <td>Currency name & Symbol</td>
      <td> <button>+ Country</button></td>
      <td>
        <button className="action-button">Update</button>
        <button className="action-button">Remove</button>
      </td>
    </tr>
  );
};

export default CurrencyRow;
