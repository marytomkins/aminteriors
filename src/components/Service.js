
import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import paint from "../assets/Paint Logo.png";
import wheel from "../assets/Color Wheel.png";
import finish from "../assets/Paint Finishes.jpg";
import circles from "../assets/Lighting Color.jpg";


const Services = () => {

  const { innerWidth } = window;

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const Services = styled.div`
  background-color: #b4b4b4;
  padding: 3rem;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 18px;
  color: white;
`;

  return (
    <Services>
      <div className="service-section">
        <div className="section-left">
          <div className="service-title">
            PAINTING
          </div>
          <div>
            The color choice of your home or business is essential for maximizing the true beauty of your space. Colors can affect behavior and feelings. Colors and textures can make the room to room transition of a space feel vibrant. The right color choice leaves the right impression for both homes and businesses.
          </div>
        </div>
        <div className="section-right">
          <img src={paint} alt="paint" className='service-pics'></img>
        </div>
      </div>
      <div className="service-section">
        <div className="section-left">
          <img src={wheel} alt="color-wheel" className='service-pics' style={{ width: innerWidth >= 1000 ? '120%' : '100%' }}></img>
        </div>
        <div className="section-right" style={{ width: innerWidth >= 1000 ? '50%' : 'auto' }}>
          <div style={{ marginBottom: '20px' }}>
            There are two types of colors you can choose– neutral colors which serve as a base, then accent colors that are used to provide contrast and a feeling of emphasis. For example: a child’s playroom should be colorful because brighter colors are proven to affect childrens’ mood and development in positive ways, while a bedroom can have softer tones which tend to create a calming effect. These types of colors can make or break a living space.
          </div>
          <div>
            However, there is more to color choice than just color. Color choice can vary depending on the lighting of the room, different shades of light will create different shades of colors. These varying shades include natural sunlight, fluorescent lighting, incandescent lighting and LED lighting. It is important to consider how the colors will look during the day with natural light and through the night with artificial light.           </div>
        </div>
      </div>
      <div className="service-section">
        <div className="section-left">
          <img src={finish} alt="finishes" className='service-pics' style={{ marginBottom: '20px', width: '80%' }}></img>
          <img src={circles} alt="colors" className='service-pics' style={{ width: '80%' }}></img>
        </div>
        <div className="section-right">
          Another thing to consider when picking a paint for your home or business is the finish. Specific colors can look very different depending on the finish. The different types of finishes include: flat/matte, eggshell, satin, semi-gloss, and high-gloss.Flat/matte finishes are better for lower traffic areas in your home or business where scuffs and markings are unlikely because the texture of this type of paint makes it difficult to clean when marked. Eggshell finish is one of the most common and favored finishes. The name eggshell comes from the soft and slight texture of the finish, that is similar to an actual eggshell. This finish can spread light across the room. Because this finish resists scuffs/markings, this is likely to exist in more common area rooms or hallways, moderate traffic areas. Satin finishes have more of a pearl like finish, more reflective, and less texture than that of an eggshell finish. These finishes are most likely to exist in higher traffic rooms. Gloss finishes are a more bolder finish choice. Typically used to leave an impression as these finishes are intended to glow. Gloss finishes can show every perfection and imperfection in your wall, so be cognisant. Gloss finishes are the easiest to clean, and can even have a resistance to dirt, stains, and mildew.
        </div>
      </div>
      <div className="service-section">
        <div className="section-left" style={{ width: 'fit-content' }}>
          The truth is painting is much more complex than it may seem. When doing more complex designs in your home, it’s highly recommended to go with professionals. AM Interiors specializes in interior household painting including walls/ceilings, doors, trim, molding, cabinets, and stairs. We also provide exterior household painting and coating including siding, trim, decks, stairs, fencing, garage doors, and driveways. With a plethora of experience, AM Interiors will provide you the best advice when deciding on the color of choice of your space, and ensure the beauty of your space is maximized. AM Interiors will create unity and rhythm at your home or business simply through experience.
        </div>
        <div className="section-right">
          <img src={paint} alt="paint" className='service-pics'></img>
        </div>
      </div>
      <div className="service-section" style={{ marginTop: '3.5rem' }}>
        <div className="section-left">
          <img src={paint} alt="paint" className='service-pics'></img>
        </div>
        <div className="section-right" style={{ width: innerWidth >= 1000 ? '80%' : 'auto' }}>
          <div className="service-title">
            REMODELING
          </div>
          <div>
            When dealing with the environment and effectiveness of a space, furniture arrangement and layouts is what can turn your aspirations into a reality. Remodeling can improve the layout of your space – increasing the available area while also increasing the visibility and aesthetic value. Remodeling provides an opportunity to the owner to personalize their space in ways that can set a tone or leave the right impressions.
          </div>
          <div>
            AM Interiors can optimize the layout of your home or business by providing architectural services for different types of household or commercial work including structural additions, design-build, and even simple furniture re-arrangements or additions.          </div>
        </div>
      </div>

      <div className="service-section">
        <div className="section-left">
          <div className="service-title">
            RENOVATION
          </div>
          <div>
            Renovation is the act of repairing, renewing, and restoring the existing structure. If you’re reading this, it’s most likely the time to improve the nature of your home or business. This type of work can increase the value of the space, provide more open area, add comfort, and prevent future maintenance. Why not bring life back to the place you call your home or your business?
          </div>
          <div>
            AM Interiors has carpenters ready to build, tear down, or restore whatever comes their way including walls, flooring, doors, kitchens, bathrooms, and cabinets.          </div>
        </div>
        <div className="section-right">
          <img src={paint} alt="paint" className='service-pics'></img>
        </div>
      </div>
    </Services>
  );
};

export default Services;