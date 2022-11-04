
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import image from "../assets/aboutuspic.jpeg"
import logo from "../assets/logo.png"
import '../styles/App.css';

const { innerWidth } = window;
const isMobile = innerWidth <= '1000'
const BouncyDiv = styled.div`
  margin: auto;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(200, 200, 200, .8);
  padding: 30px;
  font-family: 'Anton', sans-serif;
  font-size: 40px;
  display: grid;
  width: ${isMobile ? '70%' : 'auto'};
`;
const Aboutpage = styled.div`
  background-color: #cacaca;
  padding-bottom: 2rem;
`;

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Aboutpage>
      {/* <div className="photo" >
        <img src={image} alt="image" className='about-pic'></img>
        <BouncyDiv>
          <div className="about-bouncy">
            <div className="about-header">
              ABOUT US
            </div>
          </div>
        </BouncyDiv>
      </div> */}
      <div className="about-body">
        <div className="about-right">
          <div className="about-header">
            ABOUT AM INTERIORS
          </div>
          <div className="about-subheader">
            We set the standard so you don't have to.
          </div>
          <div className="about-description">
            AM Interiors is a family-owned contracting company based out of Monmouth County, NJ with over 30 years of experience in residential and commercial painting, remodeling, and renovation.<br /><br />AM Interiors will bring back the liveliness of your New Jersey home or business at a great price. With our proper preparation – we ensure the life expectancy of our work is maximized, and an efficient cleanup. With our hard work – we guarantee the satisfaction of our customers. 
          </div>
          {/* <div className="about-description">
            AM Interiors will bring back the liveliness of your New Jersey home or business at a great price. With our proper preparation – we ensure the life expectancy of our work is maximized, and an efficient cleanup. With our hard work – we guarantee the satisfaction of our customers. AM Interiors operates in a stress-free environment from our customers to our employees – providing a job well done. Our professional painters and carpenters will enhance the liveliness of your home – leaving a great impression on you and your family. We provide friendly customer service, fair pricing, and quality work.  We set the standards so you do not have to.
          </div> */}
        </div>
        <div className="about-left">
          <div className="logo-div">
            <img src={logo} alt="logo" className='logo-pic'></img>
          </div>
        </div>
      </div>
      <div className="about-footer">
        We understand that every person has their own unique set of goals and expectations, which is why we offer free quotes and consultations.
      </div>
      <div className="freeQuote">
        <Link to="/contact" className='button-17' style={{ marginBottom: '0rem' }}>SCHEDULE A FREE QUOTE</Link>
      </div>
    </Aboutpage>
  );
};

export default About;