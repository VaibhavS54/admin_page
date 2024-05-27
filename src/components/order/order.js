import React from 'react';
import './order.css';
function Order() {
  return (
    <div className="order-details">
      <h2>Order #24002 details</h2>
      <p>
        Payment via Credit Card/Debit Card/NetBanking (pay_OBPcMHD24wAsbe). Paid on May 17, 2024 @ 8:57 am.<br />
        Customer IP: 59.89.142.40
      </p>
      <div className="order-sections">
        <div className="order-section">
          <h3>General</h3>
          <label>Date created:</label>
          <input type="date" defaultValue="2024-05-17" />
          <input type="time" defaultValue="08:56" />
          <label>Status:</label>
          <select>
            <option>Processing</option>
            <option>Completed</option>
            <option>On Hold</option>
          </select>
          <label>Customer:</label>
          <select>
            <option>Guest</option>
            <option>Registered</option>
          </select>
        </div>
        <div className="order-section">
          <h3>Billing</h3>
          <p>Rashmi Roy</p>
          <p>DT-23, Armapur Estate</p>
          <p>Opposite Kendriya Vidyalaya No-1</p>
          <p>Kanpur 208009</p>
          <p>Uttar Pradesh</p>
          <p>Email address: <a href="mailto:rashmi.sengupta@gmail.com">rashmi.sengupta@gmail.com</a></p>
          <p>Phone: <a href="tel:7989600388">7989600388</a></p>
        </div>
        <div className="order-section">
          <h3>Shipping</h3>
          <p>Rashmi Roy</p>
          <p>DT-23, Armapur Estate</p>
          <p>Opposite Kendriya Vidyalaya No-1</p>
          <p>Kanpur 208009</p>
          <p>Uttar Pradesh</p>
        </div>
      </div>
      <button className="generate-invoice-btn">Generate Invoice</button>
    </div>
  );
}

export default Order;
