import React, { useState } from 'react';
import './media.css';
const Library = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      name: 'Image 1',
      size: '100KB',
      date: '2023-03-10',
    },
    {
      id: 2,
      name: 'Image 2',
      size: '200KB',
      date: '2023-03-11',
    },
    {
      id: 3,
      name: 'Image 3',
      size: '300KB',
      date: '2023-03-12',
    },
    {
      id: 4,
      name: 'Image 4',
      size: '400KB',
      date: '2023-03-13',
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentImages = images.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="medialibrary">
        <div className="middleInputs">
      <h1>Library</h1>
      <button className="but">Add New</button>
      </div>
      <div className="mediatoolbar">
        <div className="mediafilter-container">
          <select className="mediafilter">
            <option value="all">All Files</option>
          </select>
          <select className="filter">
            <option value="all">All Dates</option>
          </select>
          <input type="text" placeholder="Search" className="search-bar" />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Size</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {currentImages.map((image) => (
            <tr key={image.id}>
              <td>
                <img
                  src="https://via.placeholder.com/150"
                  alt={image.name}
                  className="thumbnail"
                />
              </td>
              <td>{image.name}</td>
              <td>{image.size}</td>
              <td>{image.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mediacenter">
      <button className="mediaload-more">Load more</button>
      <div className="mediafooter">Showing 12 of 3000</div>
    </div>
    </div>
  );
};

export default Library;