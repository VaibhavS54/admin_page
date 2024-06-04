import React, { useState } from 'react';
import './productdata.css';
const MeasurementCalculator = () => {
  const [unitFieldLabel, setUnitFieldLabel] = useState('');
  const [unitOfMeasure, setUnitOfMeasure] = useState('');
  const [price, setPrice] = useState('');
  const [salePrice, setSalePrice] = useState('');
  const [increment, setIncrement] = useState('');
  const [minimumQuantity, setMinimumQuantity] = useState('');
  const [maximumQuantity, setMaximumQuantity] = useState('');
  const [calculateInventory, setCalculateInventory] = useState(false);
  const [solidIndividually, setSolidIndividually] = useState(false);
  const [enablePricingTable, setEnablePricingTable] = useState(false);
  const [enableShippingClassTable, setEnableShippingClassTable] = useState(false);
  const [enableAdvancedCalculatorSettings, setEnableAdvancedCalculatorSettings] = useState(false);

  return (
    <div className="container">
      <div className="product-data">
        <h2>Product Data:</h2>
        <select>
          <option>Simple Product</option>
        </select>
      </div>
      <div className="measurement-calculator">
        <h2>Measurement Calculator</h2>
        <p>Enable the new unit of measurement for the product. Then enter the increment of the unit, its regular, and sale price. Also specify the minimum and maximum quantity.</p>
        <div className="new-unit-of-measure">
          <h3>New unit of Measure</h3>
          <label htmlFor="unit-field-label">Unit field label:</label>
          <input
            type="text"
            id="unit-field-label"
            value={unitFieldLabel}
            onChange={(e) => setUnitFieldLabel(e.target.value)}
          />
          <label htmlFor="unit-of-measure">Unit of measure:</label>
          <select
            id="unit-of-measure"
            value={unitOfMeasure}
            onChange={(e) => setUnitOfMeasure(e.target.value)}
          >
            <option value="">Select Unit</option>
            <option value="item">Item</option>
            <option value="kg">Kg</option>
            <option value="liter">Liter</option>
          </select>
        </div>
        <div className="price-details">
          <label htmlFor="price">Price (Rs):</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label htmlFor="sale-price">Sale Price (Rs):</label>
          <input
            type="number"
            id="sale-price"
            value={salePrice}
            onChange={(e) => setSalePrice(e.target.value)}
          />
        </div>
        <div className="quantity-details">
          <label htmlFor="increment">Increment:</label>
          <input
            type="number"
            id="increment"
            value={increment}
            onChange={(e) => setIncrement(e.target.value)}
          />
          <label htmlFor="minimum-quantity">Minimum quantity:</label>
          <input
            type="number"
            id="minimum-quantity"
            value={minimumQuantity}
            onChange={(e) => setMinimumQuantity(e.target.value)}
          />
          <label htmlFor="maximum-quantity">Maximum quantity:</label>
          <input
            type="number"
            id="maximum-quantity"
            value={maximumQuantity}
            onChange={(e) => setMaximumQuantity(e.target.value)}
          />
        </div>
        <div className="calculate-inventory">
          <h3>Calculate Inventory</h3>
          <input
            type="checkbox"
            id="calculate-inventory"
            checked={calculateInventory}
            onChange={() => setCalculateInventory(!calculateInventory)}
          />
          <label htmlFor="calculate-inventory">Check this box to define inventory per unit and calculate inventory based on product.</label>
          <p>If you select this option, then, e.g 30kg will be seen as 30 pcs of the product. If you don't then regardless of the purchased amount of the new unit of measurement, the stock will be decreased by 1.</p>
        </div>
        <div className="solid-individually">
          <input
            type="checkbox"
            id="solid-individually"
            checked={solidIndividually}
            onChange={() => setSolidIndividually(!solidIndividually)}
          />
          <label htmlFor="solid-individually">Enable this to only allow one of this item to be bought in a single order.</label>
          <p>With this option, the buyer will be able to order only 1 item of the product with the new unit of measure (e.g 5kg). If you don't select the option, it will be possible to buy more pcs of the product (e.g 5kg each).</p>
        </div>
        <div className="unit-dimensions">
          <h3>Unit Dimensions</h3>
          <input
            type="checkbox"
            id="enable-advanced-calculator-settings"
            onChange={() => setEnableAdvancedCalculatorSettings(!enableAdvancedCalculatorSettings)}
          />
          <label htmlFor="enable-advanced-calculator-settings">Enable advanced calculator settings.</label>
          <p>Use the extended options to specify the unit dimensions and allow the buyer to enter them. The price will be calculated on the product page.</p>
        </div>
        <div className="pricing-table">
          <h3>Pricing Table</h3>
          <input
            type="checkbox"
            id="enable-pricing-table"
            checked={enablePricingTable}
            onChange={() => setEnablePricingTable(!enablePricingTable)}
          />
          <label htmlFor="enable-pricing-table">Enable Pricing table.</label>
          <p>The table will allow you to determine the different prices of the unit of measurement based on it's quantity. Set the quantity range, and the regular, and the sale price.</p>
        </div>
        <div className="shipping-class-table">
          <h3>Shipping class table</h3>
          <input
            type="checkbox"
            id="enable-shipping-class-table"
            checked={enableShippingClassTable}
            onChange={() => setEnableShippingClassTable(!enableShippingClassTable)}
          />
          <label htmlFor="enable-shipping-class-table">Enable Shipping class table.</label>
          <p>The table will allow you to change the shipping class based on the quantity of the new unit of measure added to cart.</p>
        </div>
      </div>
      <div className="publish">
        <h2>Publish</h2>
        <button>Save Draft</button>
        <div className="status">
          <span>Status:</span>
          <span>Draft</span>
          <button>Edit</button>
        </div>
        <div className="visibility">
          <span>Visibility:</span>
          <span>Public</span>
          <button>Edit</button>
        </div>
        <div className="publish-immediately">
          <span>Publish immediately</span>
          <button>Edit</button>
        </div>
        <input type="checkbox" id="don't-update-modified-date" />
        <label htmlFor="don't-update-modified-date">Don't update the modified date</label>
        <div className="catalog-visibility">
          <span>Catalog visibility:</span>
          <span>Shop and search results</span>
          <button>Edit</button>
        </div>
        <button>Copy to a new draft</button>
        <button>Move to Trash</button>
        <button>Publish</button>
      </div>
      <div className="product-image">
        <h2>Product image</h2>
        <button>Set product image</button>
      </div>
      <div className="product-gallery">
        <h2>Product gallery</h2>
        <button>Add product gallery images</button>
      </div>
    </div>
  );
};

export default MeasurementCalculator;