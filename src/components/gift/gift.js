
import React from 'react';
import './gift.css';
import { GiftCounter } from "./giftcounter";
const GiftCardSettings = () => {
  return (
    <div className="upper">
    <div className="topButtons">
    <button className="coupons"> Coupons</button>
    <button className="giftCards">Gift card</button>
  </div>
  <div className="mainInvoiceContainer">
    <div className="middleInputs">
      <button className="but">Add new</button>
      <button className="but">import/export</button>
    </div>

    <div className="redButtonsContainer">
      <button>ALL</button>
      <button>Redeemed</button>
      <button>Not Redeemed</button>
    </div>

    <div className="lastInputContainer">
      <div className="leftInputs">
        <select className="drop">
        <option>Bulk Action</option>
        </select>
        <button>Apply</button>
        <select className="drop">
        <option>Dashboard</option>
        </select>
      </div>
      <div className="rightInputs">
        <input placeholder="search" type="text" />
        <GiftCounter />
      </div>
    </div>
      <div className="settings-table">
        <div className="setting-row">
          <div className="setting-label">Gift card code pattern</div>
          <div className="setting-control">
            <input type="text" value="xxxxx-xxxxx-xxxxxxxx" readOnly />
          </div>
        </div>
        <div className="setting-row">
          <div className="setting-label">Make Recipient Info Mandatory</div>
          <div className="setting-control">
            <input type="checkbox" />
          </div>
        </div>
        <div className="setting-row">
          <div className="setting-label">Recipient & Delivery Setting</div>
          <div className="setting-control">
            <input type="text" value="Allow the User to Choose Delivery Date and Time" readOnly />
            <input type="checkbox" />
          </div>
        </div>
        <div className="setting-row">
          <div className="setting-label">E-mail Settings</div>
          <div className="setting-control">
            <input type="text" value="Show a button in Gift Card E-mail" readOnly />
            <input type="checkbox" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default GiftCardSettings;
