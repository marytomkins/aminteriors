
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Reviewpage = styled.div`
  background-color: #cacaca;
  padding-bottom: 4rem;
`;

const reviewList = [
  {
    stars: '5.0',
    date: '10/18/2022',
    name: 'Sara C.',
    city: 'Holmdel, NJ',
    service: 'Painting/Renovation',
    text: 'AM Interiors is our go-to for any household work we need done. From painting and installing partition walls to moving furniture, they can help with anything! I highly recommend using this great group of gentlemen.'
  },
  {
    stars: '5.0',
    date: '10/3/2022',
    name: 'Mark G.',
    city: 'Aberdeen, NJ',
    service: '',
    text: 'I have worked with the owner of AM Interiors for many years. He is very educated and experienced in the painting industry. I have only received positive feedback from every job that he was involved in. I highly recommend choosing AM Interiors for all residential/commercial painting jobs!'
  },
  {
    stars: '5.0',
    date: '9/8/2022',
    name: 'Jason L.',
    city: 'Montvale, NJ',
    service: 'Renovation',
    text: 'Super professional and gave me some great idea/suggestion on how to redo our kitchen. Easy to work with and met our deadline'
  },
  {
    stars: '5.0',
    date: '8/10/2022',
    name: 'Brian B.',
    city: 'Iselin, NJ',
    service: 'Painting',
    text: 'Very professional and educated when it comes to residential work. They painted every bedroom and bathroom in my home at a fair price. They\'ve definitely earned my respect and loyalty through their hard work and their job well-done.'
  },
  {
    stars: '5.0',
    date: '7/26/2022',
    name: 'Mary T.',
    city: 'Matawan, NJ',
    service: 'Staining',
    text: 'AM Interiors did incredible work at our house staining our backyard deck. Very professional and great to work with. Would definitely recommend!'
  }
]

const Reviews = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Reviewpage>
      <div className="review-header">
        We would love to hear from you!
        <a href="https://g.page/r/CY9HtOfkFDIpEAE/review" target="_blank">Leave us a review</a>
      </div>
      <div className="review-title">
        REVIEWS
      </div>
      <div style={{ marginTop: '1rem' }}>
        {reviewList.map((review) => {
          const { stars, date, name, city, service, text } = review
          return <div className="review-row">
            <div className="review-info">
              <div className="review-stars">{`✩${stars}`}</div>
              <div className="review-name">{name}</div>
              <div className="review-city">{city}</div>
            </div>
            <div className="review-date">{date}</div>
            <div className="review-body">
              <div className="review-service">{service}</div>
              <div className="review-text">{text}</div>
            </div>
          </div>
        })}
      </div>
    </Reviewpage>

  );
};

export default Reviews;