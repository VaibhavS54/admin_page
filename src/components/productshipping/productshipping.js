import React, { useState } from 'react';
import'./productshipping.css';
function ShippingForm() {
  const [weight, setWeight] = useState('');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [shippingClass, setShippingClass] = useState('No shipping class');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Weight:', weight);
    console.log('Length:', length);
    console.log('Width:', width);
    console.log('Height:', height);
    console.log('Shipping Class:', shippingClass);
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="invent">
      <div>
        <label htmlFor="weight">Weight</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(event) => setWeight(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="dimensions">Dimensions (cm)</label>
        <div>
          <input
            type="number"
            id="length"
            value={length}
            onChange={(event) => setLength(event.target.value)}
            placeholder="Length"
          />
          <input
            type="number"
            id="width"
            value={width}
            onChange={(event) => setWidth(event.target.value)}
            placeholder="Width"
          />
          <input
            type="number"
            id="height"
            value={height}
            onChange={(event) => setHeight(event.target.value)}
            placeholder="Height"
          />
        </div>
      </div>
      <div>
        <label htmlFor="shippingClass">Shipping Class</label>
        <select
          id="shippingClass"
          value={shippingClass}
          onChange={(event) => setShippingClass(event.target.value)}
        >
          <option value="No shipping class">No shipping class</option>
        </select>
      </div>
    </form>
     <button type="submit">Test</button>
    </>
  );
}

export default ShippingForm;