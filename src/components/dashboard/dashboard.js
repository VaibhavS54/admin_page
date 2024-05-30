
import React from 'react';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="card">
        <div className="card-header">
          List Of Added Currency
          <button className="expand-button">Expand</button>
        </div>
        <ul>
          <li className="sift">1. Currency</li>
          <li className="sift">2.</li>
          <li className="sift">3.</li>
          <li className="sift">4.</li>
          <li className="sift">5.</li>
          <li className="sift">6.</li>
        </ul>
      </div>
      <div className="card">
        <div className="card-header">
          Recently Added Media
          <button className="expand-button">Expand</button>
        </div>
        <div className="media-grid">
          <div className="media-item">Picture 1</div>
          <div className="media-item">Picture 2</div>
          <div className="media-item">Picture 3</div>
          <div className="media-item">Picture 4</div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          Recently Edited Pages
          <button className="expand-button">Expand</button>
        </div>
        <ul>
          <li className="sift">Homepage</li>
          <li className="sift">Comments</li>
          <li className="sift">Products</li>
          <li className="sift">Users</li>
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
            <tr>
              <td>Product 1</td>
              <td>SKU1234</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      <div className="card">
        <div className="card-header">
          Active Users
          <button className="expand-button">Expand</button>
        </div>
        <ul className="user-list">
          <li>
            <div className="avatar"></div>
            Username
          </li>
          <li>
            <div className="avatar"></div>
            Username
          </li>
          <li>
            <div className="avatar"></div>
            Username
          </li>
          <li>
            <div className="avatar"></div>
            Username
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
