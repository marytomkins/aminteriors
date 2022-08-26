
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import angie from '../assets/Home Photos/Angie\'s List Certified.png'
import ben from '../assets/Home Photos/Benjamin Moore Logo.png'
import full from '../assets/Home Photos/Fully Licensed & Insured.png'
import sherwin from '../assets/Home Photos/Sherwin Williams Logo.jpeg'
import '../styles/App.css';
import { slideInDown } from 'react-animations';

const slideAnimation = keyframes`${slideInDown}`;

const SlideDiv = styled.div`
  animation: 1s ${slideAnimation};
`;
const Homepage = styled.div`
  background-color: #b4b4b4;
  padding-bottom: 3rem;
`;
const delay = 5500;
let listOfImages = require.context('../assets/Work Photos', false, /\.(JPG|jpe?g|svg)$/).keys()
listOfImages = listOfImages.map(require.context('../assets/Work Photos', false, /\.(JPG|jpe?g|svg)$/))

const Home = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === listOfImages.length - 1 ? listOfImages.length - 1 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  
  return (
    <Homepage>
      <div className="slideshow">
        <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
          {listOfImages.map((image, index) => (
            <div
              className="slide"
              key={index}
            >
              <img key={index} src={image} alt="image" style={{ maxWidth: '100%' }}></img>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: '20px' }}>
        <div className="titles">CERTIFIED. PROFESSIONAL. RELIABLE.</div>
        <div className='homepagepics'>
          <img src={angie} alt="image" style={{ width: '23%', height: '10%' }}></img>
          <img src={ben} alt="image" style={{ width: '15%', }}></img>
          <img src={full} alt="image" style={{ width: '12%' }}></img>
          <img src={sherwin} alt="image" style={{ width: '22%', height: '10%' }}></img>
        </div>
      </div>
      <div style={{ backgroundColor: '#970C08', padding: '40px' }}>
        <div className="titles" style={{ color: 'white' }}>SERVICES</div>
        <div className='services'>
          <div className="service">
            PAINTING
            <div className='description'>
              AM Interiors specializes in interior household painting including walls/ceilings, doors, trim, molding, cabinets, and stairs. We also provide exterior household painting and coating including siding, trim, decks, stairs, fencing, garage doors, and driveways. With a plethora of experience, AM Interiors will provide you the best advice when deciding on the color of choice of your space, and ensure the beauty of your space is maximized.
            </div>
          </div>
          <div className="service">
            REMODELING
            <div className='description'>
              AM Interiors can optimize the layout of your home or business by providing architectural services for different types of household or commercial work including structural additions, design-build, and even simple furniture re-arrangement or additions.
            </div>
          </div>
          <div className="service">
            RENOVATION
            <div className='description'>
              AM Interiors has carpenters ready to build, tear down, or restore whatever comes their way including walls, flooring, doors, kitchens, bathrooms, and cabinets.
            </div>
          </div>
        </div>
        <div className="viewServices">
          <Link to="/services" className='button-17' style={{ padding: '35px 50px' }}>
            VIEW OUR SERVICES
          </Link>
        </div>
      </div>
      <div style={{ padding: '20px' }}>
        {/* <div className="titles">REVIEWS</div> */}
        <div className='reviews'>
          <div className="review">
            PAINTING
            <div className='description'>
              AM Interiors specializes in interior household painting including walls/ceilings, doors, trim, molding, cabinets, and stairs. We also provide exterior household painting and coating including siding, trim, decks, stairs, fencing, garage doors, and driveways. With a plethora of experience, AM Interiors will provide you the best advice when deciding on the color of choice of your space, and ensure the beauty of your space is maximized.
            </div>
          </div>
          <div className="review">
            REMODELING
            <div className='description'>
              AM Interiors can optimize the layout of your home or business by providing architectural services for different types of household or commercial work including structural additions, design-build, and even simple furniture re-arrangement or additions.
            </div>
          </div>
          <div className="review">
            RENOVATION
            <div className='description'>
              AM Interiors has carpenters ready to build, tear down, or restore whatever comes their way including walls, flooring, doors, kitchens, bathrooms, and cabinets.
            </div>
          </div>
        </div>
      </div>
      <div className="freeQuote">
        <Link to="/contact" className='button-17' >SCHEDULE A FREE QUOTE</Link>
      </div>
    </Homepage >
  );
};

export default Home;