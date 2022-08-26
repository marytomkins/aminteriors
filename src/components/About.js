
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import image from "../assets/Work Photos/IMG_9996.JPG"
import logo from "../assets/logo.png"
import '../styles/App.css';


const fadeAnimation = keyframes`${fadeIn}`;

const BouncyDiv = styled.div`
  animation: 2s ${fadeAnimation};
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(200, 200, 200, .8);
  padding: 30px;
`;
const Aboutpage = styled.div`
  background-color: #b4b4b4;
  padding-bottom: 3rem;
`;

const About = () => {
  return (
    <Aboutpage>
      <div className="photo" >
        <img src={image} alt="image" className='about-pic'></img>
        <BouncyDiv>quote</BouncyDiv>
      </div>
      <div className="about">
        <div style={{ width: '50%' }}>
          <img src={logo} alt="logo" className='logo-pic'></img>
        </div>
        <div className="about-description" style={{ width: '50%' }}>
          AM Interiors is a family-owned contracting company based out of Monmouth County, NJ with over 30 years of experience in residential and commercial painting, remodeling, and renovation. AM Interiors will bring back the liveliness of your New Jersey home or business at a great price. With our proper preparation – we ensure the life expectancy of our work is maximized, and an efficient cleanup. With our hard work – we guarantee the satisfaction of our customers. AM Interiors operates in a stress-free environment from our customers to our employees – providing a job well done. Our professional painters and carpenters will enhance the liveliness of your home – leaving a great impression on you and your family. We provide friendly customer service, fair pricing, and quality work. AM Interiors only operates with the highest grade paints (Sherwin-Williams, Benjamin Moore, and Behr) and highest quality of equipment, as we aim for longevity in our work. We set the standards so you do not have to. We understand that every person has their own unique set of goals and expectations, that is why we offer free quotes and consultations.
        </div>
      </div>
    </Aboutpage>
  );
};

export default About;