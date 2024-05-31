import React from 'react';
import './dashboard.css';

const currencies = [
  "1. Currency",
  "2.",
  "3.",
  "4.",
  "5.",
  "6."
];

const mediaItems = [
  "Picture 1",
  "Picture 2",
  "Picture 3",
  "Picture 4"
];

const editedPages = [
  "Homepage",
  "Comments",
  "Products",
  "Users"
];

const products = [
  { name: "Product 1", sku: "SKU1234" },
  // Add more products as needed
];

const activeUsers = [
  "Username",
  "Username",
  "Username",
  "Username"
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="card">
        <div className="card-header">
          List Of Added Currency
          <button className="expand-button">Expand</button>
        </div>
        <ul>
          {currencies.map((currency, index) => (
            <li key={index} className="sift">{currency}</li>
          ))}
        </ul>
      </div>
      <div className="card">
        <div className="card-header">
          Recently Added Media
          <button className="expand-button">Expand</button>
        </div>
        <div className="media-grid">
          {mediaItems.map((item, index) => (
            <div key={index} className="media-item">{item}</div>
          ))}
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          Recently Edited Pages
          <button className="expand-button">Expand</button>
        </div>
        <ul>
          {editedPages.map((page, index) => (
            <li key={index} className="sift">{page}</li>
          ))}
        </ul>
      </div>
      <div className="card">
        <div className="card-header">
          Recent Comments
          <button className="expand-button">Expand</button>
        </div>
        <div className="comment-form">
          <div className="avatar"></div>
          <label>
            Name:
            <input type="text" />
          </label>
          <label>
            Comment:
            <textarea></textarea>
          </label>
          <div className="pagination">
            <button>Previous</button>
            <button>Next</button>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          Recently Added Products
          <button className="expand-button">Expand</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>SKU Code</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.sku}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card">
        <div className="card-header">
          Active Users
          <button className="expand-button">Expand</button>
        </div>
        <ul className="user-list">
          {activeUsers.map((user, index) => (
            <li key={index}>
              <div className="avatar"></div>
              {user}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
