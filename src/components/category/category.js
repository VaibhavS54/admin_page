import React, { useState } from 'react';
import './category.css';
const ProductCategories = () => {
  const [categories, setCategories] = useState([
    {
      name: 'Uncategorized',
      checked: false,
      subCategories: [],
    },
    {
      name: 'Fabrics',
      checked: false,
      subCategories: [
        { name: 'Cotton', checked: false },
        { name: 'Ajrakh', checked: false },
        { name: 'Batik', checked: false },
        { name: 'Bengal Cotton', checked: false },
        { name: 'Block Printed', checked: false },
        { name: 'Cotton Bandhani', checked: false },
        { name: 'jamdani', checked: false },
        { name: 'Kota doria', checked: false },
        { name: 'Sambhalpuri cotton', checked: false },
      ],
    },
  ]);

  const handleCategoryChange = (index, subIndex = null) => {
    const updatedCategories = [...categories];

    if (subIndex !== null) {
      updatedCategories[index].subCategories[subIndex].checked =
        !updatedCategories[index].subCategories[subIndex].checked;
    } else {
      updatedCategories[index].checked = !updatedCategories[index].checked;
    }

    setCategories(updatedCategories);
  };

  return (
    <>
    <div className="toppart">
    <div className="topheader">
        <span>Product categories</span>
        <span className="arrow-up"></span>
        <span className="arrow-down"></span>
      </div>
      <div className="options">
        <button className="all-categories">All categories</button>
        <button className="most-used">Most Used</button>
      </div>
      </div>
    <div className="product-categories">
      
      <ul className="categories-list">
        {categories.map((category, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={category.checked}
              onChange={() => handleCategoryChange(index)}
            />
            <label htmlFor={`category-${index}`}>{category.name}</label>
            {category.subCategories.length > 0 && (
              <ul className="sub-categories">
                {category.subCategories.map((subCategory, subIndex) => (
                  <li key={subIndex}>
                    <input
                      type="checkbox"
                      checked={subCategory.checked}
                      onChange={() => handleCategoryChange(index, subIndex)}
                    />
                    <label
                      htmlFor={`sub-category-${index}-${subIndex}`}
                    >
                      {subCategory.name}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
    <button className="topadd-category">
    + Add new category
  </button>
 </>
  );
};

export default ProductCategories;
