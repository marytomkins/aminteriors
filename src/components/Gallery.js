
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Gallerypage = styled.div`
  background-color: #cacaca;
  padding: 50px 0px;
`;

let listOfImages = require.context('../assets/Work Photos', false, /\.(JPG|jpe?g|svg)$/).keys()
listOfImages = listOfImages.map(require.context('../assets/Work Photos', false, /\.(JPG|jpe?g|svg)$/))

const Gallery = () => {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Gallerypage>
      <div className="gallery-container">
        <ul className="gallery-list">
          {listOfImages.map((image, index) => (
            <li
              className="gallery-listitem"
              key={index}
            >
              <img className="gallery-img" key={index} src={image} alt="image"></img>
            </li>
          ))}
        </ul>
      </div>
    </Gallerypage>
  );
};

export default Gallery;