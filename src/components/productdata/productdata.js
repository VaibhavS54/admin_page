
import React from 'react';
import './productdata.css';

const ProductData = () => {
  return (
    <div className="genproduct-data-container">
       <div className="genform-container">
            <div className="genform-groups">
                <label htmlFor="product-name">Product Name:</label>
                <input type="text" id="product-name" />
            </div>
            <div className="genform-groups">
                <label htmlFor="permalink">Permalink:</label>
                <input type="text" id="permalink" />
            </div> 
        </div>
        <div className="genform-groupsadd">
                <button className="genadd-media-button">Add Media</button>
            </div>
      <header className="genheader">
        <h2>Size Chart:</h2>
        <button className="gendrop-file">Or drop a file</button>
      </header>
      <div className="genmain-content">
        <div className="genproduct-data">
          <div className="genproduct-header">
            <h3>Product Data:</h3>
            <select>
              <option value="simple">Simple Product</option>
            </select>
          </div>
          <div className="genproduct-body">
            <aside className="genSidebar">
              <ul>
                <li className="genactive">General</li>
                <li>Inventory</li>
                <li>Shipping</li>
                <li>Linked Products</li>
                <li>Attributes</li>
                <li>Custom Badge</li>
                <li>Frequently Bought Together</li>
                <li>Together</li>
                <li>Flexible Quantity</li>
              </ul>
            </aside>
            </div>
          <div className="general">
          <form>
      <div className="genform-group">
        <label htmlFor="genregularPrice">Regular price(Rs)</label>
        <input
          type="number"
          id="regularPrice"
          className="form-control"
        />
      </div>
      <div className="genform-group">
        <label htmlFor="salePrice">Sale price(Rs)</label>
        <input
          type="number"
          id="salePrice"
          className="form-control"
        />
      </div>
      <div className="genform-group">
        <label htmlFor="fromDate">Sale Price Dates</label>
        <div className="geninput-group">
          <div className="geninput-group-prepend">
            <span className="gennput-group-text">From</span>
          </div>
          <input
            type="date"
            id="fromDate"
            className="form-control"
          />
        </div>
      </div>
      <div className="genform-group">
        <div className="geninput-group">
          <div className="geninput-group-prepend">
            <span className="geninput-group-text">To</span>
          </div>
          <input
            type="date"
            id="toDate"
            className="form-control"
          />
        </div>
      </div>
      <div className="genform-group">
        <label htmlFor="saleQuantity">Sale quantity</label>
        <input
          type="number"
          id="saleQuantity"
          className="form-control"
        />
      </div>
      <div className="genform-group">
        <label htmlFor="soldItems">Sold items</label>
        <input
          type="number"
          id="soldItems"
          className="form-control"
        />
      </div>
    </form>
    </div>
    </div>
        <div className="genpublish-container">
      <div className="genpublish-section">
        <button className="gensave-draft">Save Draft</button>
        <button className="genpreview">Preview</button>
        <div className="genstatus">
          <label>Status: <a href="#edit">Draft Edit</a></label>
        </div>
        <div className="genvisibility">
          <label>Visibility: <a href="#edit">Public Edit</a></label>
        </div>
        <div className="genpublish-immediately">
          <label> Don't update the modified date<input type="checkbox" /></label>
        </div>
        <div className="gencatalog-visibility">
          <label>Catalog visibility: <a href="#edit">Shop and search results Edit</a></label>
        </div>
        <div className="genactions">
          <button className="gentrash">Copy to a new draft</button>
          <button className="gentrash">Move to Trash</button>
        </div>
        <button className="genpublish">Publish</button>
      </div>
      <div className="genproduct-image">
        <button>Set product image</button>
      </div>
      <div className="genproduct-gallery">
        <button>Add product gallery images</button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default ProductData;
