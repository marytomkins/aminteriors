
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import angie from '../assets/Home Photos/Angie\'s List Certified.png'
import ben from '../assets/Home Photos/Benjamin Moore Logo.png'
import full from '../assets/Home Photos/Fully Licensed & Insured.png'
import sherwin from '../assets/Home Photos/Sherwin Williams Logo.jpeg'
import logoCut from '../assets/White Logo - Cut.png';
import desktopBackground from '../assets/Desktop.jpeg';
import '../styles/App.css';

const Homepage = styled.div`
  background-color: #cacaca;
`;
const isMobile = innerWidth <= '1000'

const delay = 4500;
let listOfImages = require.context('../assets/ss', false, /\.(JPG|jpe?g|svg)$/).keys()
listOfImages = listOfImages.map(require.context('../assets/ss', false, /\.(JPG|jpe?g|svg)$/))

const Home = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
      <div style={{ position: 'relative' }}>
        {isMobile ? (
          <div className="slideshow">
            <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
              {listOfImages.map((image, index) => (
                <div
                  className="slide"
                  key={index}
                  style={{ maxWidth: '100%' }}
                >
                  <img key={index} src={image} alt="image" style={{ maxWidth: '100%', display: 'block' }}></img>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="slideshow">
            {/* <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}> */}
            {/* {listOfImages.map((image, index) => ( */}
            <div
              className="slide"
              key={index}
              style={{ maxWidth: '100%' }}
            >
              <img key={index} src={desktopBackground} alt="image" style={{ maxWidth: '100%', display: 'block' }}></img>
            </div>
            {/* ))} */}
            {/* </div> */}
          </div>
        )}
        <div className="slideshow-text">
          <div className="slideshow-imgdiv">
            <img className="slideshow-img" src={logoCut} />
          </div>
          <div className="slideshow-text2">
            AM INTERIORS, LLC
            <div className="slideshow-text3">
              WE SET THE STANDARD
            </div>
          </div>
          {/* <div className="home-button">
            <Link to="/contact" className='tablinks' id='home'>Learn More&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'>'}</Link>
          </div> */}
        </div>
      </div >
      <div style={{ padding: '20px' }}>
        <div className="titles">CERTIFIED. PROFESSIONAL. RELIABLE.</div>
        <div className='homepagepics'>
          <img src={angie} alt="image" style={{ width: '23%', height: '10%' }}></img>
          <img src={ben} alt="image" style={{ width: '15%', }}></img>
          <img src={full} alt="image" style={{ width: '12%' }}></img>
          <img src={sherwin} alt="image" style={{ width: '22%', height: '10%' }}></img>
        </div>
      </div>
      <div style={{ backgroundColor: '#800000', padding: '40px' }}>
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
      <div className='reviews-container'>
        <div className='reviews-box'>
          <div className="reviews-heading">Here's what our customers have to say</div>
          <div className='reviews'>
            <div className="review">
              <div style={{ fontSize: '18px', fontWeight: '600' }}>✩ 5.0 MARY T.</div>
              <div className='description2'>
                AM Interiors did incredible work at our house staining our backyard deck. Very professional and great to work with. Would definitely recommend!
              </div>
            </div>
            <div className="review">
              <div style={{ fontSize: '18px', fontWeight: '600' }}>✩ 5.0 BRIAN B.</div>
              <div className='description2'>
                Very professional and educated when it comes to residential work. They painted every bedroom and bathroom in my home at a fair price. They've definitely earned my respect and loyalty through their hard work and their job well-done.
              </div>
              <div className="review">
                <div style={{ fontSize: '18px', fontWeight: '600' }}>✩ 5.0 Jason L.</div>
                <div className='description2'>
                  AM Interiors did incredible work at our house staining our backyard deck. Very professional and great to work with. Would definitely recommend!
                </div>
              </div>
            </div>
            <div className="reviews-footer">
              <Link to="/reviews" className="reviews-footer-click">
                See More Reviews
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Homepage >
  );
};

export default Home;