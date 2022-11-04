
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import paint from "../assets/Paint Logo.png";
import wheel from "../assets/Color Wheel.png";
import finish from "../assets/Paint Finishes.jpg";
import circles from "../assets/Lighting Color.jpg";

const Tab = styled.button`
`;
const Services = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const Services = styled.div`
  background-color: #cacaca;
  font-family: 'Work Sans', sans-serif;
  font-size: 18px;
  color: black;
  padding-bottom: 2rem;
`;

  const [painting, showPainting] = useState(true);
  const [renovation, showRenovation] = useState(false);
  const [remodeling, showRemodeling] = useState(false);

  const showSection = (tab) => {
    switch (tab) {
      case 'painting':
        showPainting(true)
        showRenovation(false)
        showRemodeling(false)
        break;
      case 'renovation':
        showPainting(false)
        showRenovation(true)
        showRemodeling(false)
        break;
      case 'remodeling':
        showPainting(false)
        showRenovation(false)
        showRemodeling(true)
        break;
    }
  }

  return (
    <Services>
      <div className='services-container'>
        <div className="tab">
          <Tab className="tabtitle">Services</Tab>
          <Tab className="tablinks" onClick={() => showSection('painting')}>Painting</Tab>
          <Tab className="tablinks" onClick={() => showSection('remodeling')}>Remodeling</Tab>
          <Tab className="tablinks" onClick={() => showSection('renovation')}>Renovation</Tab>
        </div>
        {painting &&
          <div style={{ display: 'block' }}>
            <div className="service-row">
              <div className="service-left">
                <div className="dash">—</div>
                <div className="service-title">Painting</div>
                <div className="service-description">The color choice of your home or business is essential for maximizing the true beauty of your space. Colors can affect behavior and feelings. Colors and textures can make the room to room transition of a space feel vibrant. The right color choice leaves the right impression for both homes and businesses.</div>
              </div>
              <div className="service-img">
                <img src={paint} alt="paint"></img>
              </div>
            </div>
            <div className="service-row">
              <div className="service-img">
                <img src={paint} alt="paint"></img>
              </div>
              <div className="service-left">
                <div className="service-description">The truth is painting is much more complex than it may seem. When doing more complex designs in your home, it’s highly recommended to go with professionals. AM Interiors specializes in interior household painting including walls/ceilings, doors, trim, molding, cabinets, and stairs. We also provide exterior household painting and coating including siding, trim, decks, stairs, fencing, garage doors, and driveways. With a plethora of experience, AM Interiors will provide you the best advice when deciding on the color of choice of your space, and ensure the beauty of your space is maximized. AM Interiors will create unity and rhythm at your home or business simply through experience.</div>
              </div>
            </div>
          </div>
        }
        {remodeling &&
          <div className="service-row">
            <div className="service-left">
              <div className="dash">—</div>
              <div className="service-title">Remodeling</div>
              <div className="service-description">When dealing with the environment and effectiveness of a space, furniture arrangement and layouts is what can turn your aspirations into a reality. Remodeling can improve the layout of your space – increasing the available area while also increasing the visibility and aesthetic value. Remodeling provides an opportunity to the owner to personalize their space in ways that can set a tone or leave the right impressions.</div>
              <div className="service-description">AM Interiors can optimize the layout of your home or business by providing architectural services for different types of household or commercial work including structural additions, design-build, and even simple furniture re-arrangements or additions.</div>
            </div>
            <div className="service-img">
              <img src={paint} alt="paint"></img>
            </div>
          </div>}
        {renovation &&
          <div className="service-row">
            <div className="service-left">
              <div className="dash">—</div>
              <div className="service-title">Renovation</div>
              <div className="service-description">Renovation is the act of repairing, renewing, and restoring the existing structure. If you’re reading this, it’s most likely the time to improve the nature of your home or business. This type of work can increase the value of the space, provide more open area, add comfort, and prevent future maintenance. Why not bring life back to the place you call your home or your business?</div>
              <div className="service-description">AM Interiors has carpenters ready to build, tear down, or restore whatever comes their way including walls, flooring, doors, kitchens, bathrooms, and cabinets.</div>
            </div>
            <div className="service-img">
              <img src={paint} alt="paint"></img>
            </div>
          </div>}
      </div>
      <div className="freeQuote">
        <Link to="/contact" className='button-17' >SCHEDULE A FREE QUOTE</Link>
      </div>
    </Services>
  );
};

export default Services;