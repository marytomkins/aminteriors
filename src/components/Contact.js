
import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import map from "../assets/Map of NJ.jpg";
import emailjs from 'emailjs-com'

const FORM_ENDPOINT = "https://public.herotofu.com/v1/54f0ebc0-2ad1-11ed-a7a0-3f26160640a2";
const { innerWidth } = window;
const isMobile = innerWidth <= '1000'

const ContactPage = styled.div`
  background-color: #cacaca;
  // padding: ${isMobile ? '0rem' : '3rem'};;
  font-family: 'Work Sans', sans-serif;
  font-size: 18px;
  color: white;
  display: ${isMobile ? 'block' : 'flex'};
`;

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_umct1an', 'template_kw9qomb', form.current, 'tKCrHIc8nVC-qQHot')
      .then((result) => {
        console.log(result.text);
        setSubmitted(true)
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <ContactPage>
      <div style={{ marginTop: isMobile ? '0rem' : '4rem', display: isMobile ? 'block' : 'flex' }}>
        <div className="contact-left">
          <div className="service-title" style={{ padding: '1rem 1rem 0rem' }}>
            CONTACT US
          </div>
          {submitted ?
            (<>
              <div className="">Thank you for contacting us!</div>
              <div className="">We'll be in touch within the next 24 hours.</div>
            </>) :
            (<>
              <div className="contact-description" style={{ padding: '0rem 1rem 0rem' }}>
                How can we help you? Let us know below.
              </div>
              <form ref={form} className="contact-form" method="POST" target="_blank" onSubmit={sendEmail}>
                <div className="contact-section">
                  <label htmlFor="name">Name: *</label>
                  <input type="text" name="name" required />
                </div>
                <div className="contact-section">
                  <label htmlFor="number">Phone Number: *</label>
                  <input type="tel" name="number" required />
                </div>
                <div className="contact-section">
                  <label htmlFor="email">Email:</label>
                  <input type="email" name="email" />
                </div>
                <div className="contact-section">
                  <label htmlFor="zip">Zipcode: *</label>
                  <input type="text" name="zip" required />
                </div>
                <div className="contact-section">
                  <label htmlFor="message">Message:</label>
                  <textarea name="message" style={{ height: '6rem', fontFamily: "inherit" }} />
                </div>
                <button type="submit" className="button-c">Submit</button>
              </form>
            </>)}
        </div>
        <div className="contact-right">
          <img src={map} alt="map" className='contact-pic'></img>
        </div>
      </div>
    </ContactPage >
  );
};

export default Contact;