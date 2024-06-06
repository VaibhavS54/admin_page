
import React from 'react';
import './category.css';

const Fabrics = [ 'Fabrics','Cotton','Ajrakh','Bengal Cotton','Block Printed','Cotton Bandhani','Jamdani','Sambhalpuri Cotton'
];
const categories = [
  "Handwoven Silk",
"Banarasi Silk",
"Bandhani",
"Batik",
"Bishnupuri Silk",
"Block Printed",
"Chanderi",
"Dupion/Raw Silk",
"Kalamkari Silk",
"Paithani Silk",
"Matka Silk",
"Tussar Silk",
"Patola Silk"
];
const Others =['Others','Denim','Hemp','Jute','Khadi','Linen'];
const Decor = [ 'Home decor','Candles and Candle Stands','Clocks And Mirror Walls','Garden','Incenses and Fragrances','Jars & Canisters','Lamps and Lanterns','Picture Frames','Stationery','Storage and Baskets','Silver Home Accents','Table Top Accessories'
];
const Kitchen =['Dining','Trays, Platters & Bowls','Kitchenware','Drinkware','Coasters and Trivets','Cups & Mugs','Pitcher and Flasks','Water Bottle'];
const Other= ['Bath Linen','Bed Linen','Curtains','Furniture','Pooja Items','Table Linen'];
const apparel = ['Bottom Wear','Dress Material','Dupattas','Jacket & Shrugs','Kaltans','Kurtas','Kurta Sets','Lehengas','Lounge Wear','Shawls & Stoles','Short Kurti','Tops & Tunics'];
const Accessories = ['Cufflinks','Belt','Pocket Square','Necktie','Woolen Muffler'];
const Bath = ['Bath and body','Bamboo Items','Face Wash','Soap'
];
const Skin =['Face Cream','Face Scrub'];
const Wellness = ['Kashmiri Kahwa','Kesar','Perfume','Shilajit'];
const Sarees = ['Applique Work','Baatik','Bandhej','Banarasi','Bishnupuri','Chanderi','Ikkat','Jamdani','Kalamkari','Kashmiri Hand Embroidery','Hand Block Printed','Hand Embroidereds','Hand Painted',
'Handwoven Sarees','Leheriya','Madhubani','Organza/Net','Patola','Sambalpuri' ];
const man=['Shirt','Kurtas','Dupattas','Jackets','Fastive Wear','Shawls'];


const Jewellery = [
    'Anklets','Cuffs/ Bracelets/ Bangles'];
    
    const sub = ['Metal','Laakh','Crystal','Sheep'];
    const last =['Earrings','Hair Accessories','Necklaces & Pendants','Nosepins','Rings','Waist Belts'
];
const handbags = ['Handbag','Clutches','Laptop Bags/ Sleeves','Potlis','Sling Bags','Tote Bags','Travel Kits','Wallets'];


const footwear = ['footwear','Juttis','Slip-Ons','Sandals'];




const ProductCategories = () => {

  return (
    <div className="product-categories">
      <h3>Product Categories</h3>
      <div className="categories-header">
        <button>All categories</button>
        <button>Most Used</button>
      </div>
      <div className="categories-list">
      {Fabrics.map((category, index) => (
          <div key={index} className="category-item">
            <input type="checkbox" id={category} />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <input type="checkbox" id={category} />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
         {Others.map((category, index) => (
          <div key={index} className="category-item">
            <input type="checkbox" id={category} />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
        {Decor.map((category, index) => (
          <div key={index} className="category-item">
            <input type="checkbox" id={category} />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
        {Kitchen.map((category, index) => (
          <div key={index} className="category-item">
            <input type="checkbox" id={category} />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
         {Other.map((category, index) => (
          <div key={index} className="category-item">
            <input type="checkbox" id={category} />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
        {apparel.map((category, index) => (
          <div key={index} className="category-item">
            <input type="checkbox" id={category} />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
        {man.map((category, index) => (
          <div key={index} className="category-item">
            <input type="checkbox" id={category} />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
        {Accessories.map((category, index) => (
          <div key={index} className="category-item">
            <input type="checkbox" id={category} />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
        {Bath.map((category, index) => (
          <div key={index} className="category-item">
            <input type="checkbox" id={category} />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
        {Skin.map((category, index) => (
          <div key={index} className="category-item">
            <input type="checkbox" id={category} />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
        {Wellness.map((category, index) => (
          <div key={index} className="category-item">
            <input type="checkbox" id={category} />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
        {Sarees.map((category, index) => (
          <div key={index} className="category-item">
            <input type="checkbox" id={category} />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
        {Jewellery.map((category, index) => (
          <div key={index} className="category-item">
            <input type="checkbox" id={category} />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
        {sub.map((category, index) => (
          <div key={index} className="category-item">
            <input type="checkbox" id={category} />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
        {last.map((category, index) => (
          <div key={index} className="category-item">
            <input type="checkbox" id={category} />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
        {handbags.map((category, index) => (
          <div key={index} className="category-item">
            <input type="checkbox" id={category} />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
        {footwear.map((category, index) => (
          <div key={index} className="category-item">
            <input type="checkbox" id={category} />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </div>
      <div className="add-category">
        <a href="#">+ Add new category</a>
      </div>
    </div>
  );
};

export default ProductCategories;
