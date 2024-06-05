import React, { useState } from "react";
import "./productinvent.css";

const ProductInventory = () => {
  const [sku, setSku] = useState("");
  const [trackStock, setTrackStock] = useState(false);
  const [stockStatus, setStockStatus] = useState("in stock");
  const [soldIndividually, setSoldIndividually] = useState(false);

  const handleSkuChange = (e) => {
    setSku(e.target.value);
  };

  const handleTrackStockChange = (e) => {
    setTrackStock(e.target.checked);
  };

  const handleStockStatusChange = (e) => {
    setStockStatus(e.target.value);
  };

  const handleSoldIndividuallyChange = (e) => {
    setSoldIndividually(e.target.checked);
  };

  const generateSku = () => {
    const generatedSku =
      sku +
      "-" +
      stockStatus +
      (soldIndividually ? "-individual" : "");
    setSku(generatedSku);
  };

  return (
    <div className="container">
      <div className="Form-container">
        <div className="Form-group">
          <label htmlFor="sku">SKU</label>
          <input
            type="text"
            id="sku"
            value={sku}
            onChange={handleSkuChange}
            className="Form-control"
          />
        </div>
        <div className="Form-group">
          <label htmlFor="trackStock">Stock Management</label>
          <input
            type="checkbox"
            id="trackStock"
            checked={trackStock}
            onChange={handleTrackStockChange}
            className="Form-control"
          />
          <span>Track stock quantity for this product</span>
        </div>
        <div className="Form-group">
          <label htmlFor="stockStatus">Stock Status</label>
          <div>
            <input
              type="radio"
              id="inStock"
              value="in stock"
              checked={stockStatus === "in stock"}
              onChange={handleStockStatusChange}
              className="Form-control"
            />
            <label htmlFor="inStock">In stock</label>
          </div>
          <div>
            <input
              type="radio"
              id="outOfStock"
              value="out of stock"
              checked={stockStatus === "out of stock"}
              onChange={handleStockStatusChange}
              className="Form-control"
            />
            <label htmlFor="outOfStock">Out of stock</label>
          </div>
          <div>
            <input
              type="radio"
              id="onBackorder"
              value="on backorder"
              checked={stockStatus === "on backorder"}
              onChange={handleStockStatusChange}
              className="Form-control"
            />
            <label htmlFor="onBackorder">On backorder</label>
          </div>
        </div>
        <div className="Form-group">
          <label htmlFor="soldIndividually">Sold individually</label>
          <input
            type="checkbox"
            id="soldIndividually"
            checked={soldIndividually}
            onChange={handleSoldIndividuallyChange}
            className="Form-control"
          />
          <span>Limit purchases to 1 item per order</span>
        </div>
      </div>
      <button className="btn" onClick={generateSku}>
          Generate SKU
        </button>
    </div>
  );
};

export default ProductInventory;