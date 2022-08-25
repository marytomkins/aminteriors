import React, { useState } from 'react';
import Hamburger from 'hamburger-react'
import {
  Nav,
  NavLink,
  NavMenu,
  Logo,
  Burger,
  NavBtnLink,
  StyledMenu
} from '../styles/NavBarElements';
import ig from '../assets/ig.png';
import angie from '../assets/angie.png';
import google from '../assets/google.png';
import logoCut from '../assets/logoCut.png';


const Navbar = () => {

  const [barsOpen, setBarOpen] = useState(false)
  const handleToggle = () => {
    setBarOpen(!barsOpen)
  }
  const tabs = [
    {
      label: 'HOME',
      link: '',
    },
    {
      label: 'ABOUT US',
      link: '/about',
    },
    {
      label: 'PHOTOS',
      link: '/gallery',
    },
    {
      label: 'SERVICES',
      link: '/services',
    },
    {
      label: 'REVIEWS',
      link: '/reviews',
    },
    {
      label: 'CONTACT US',
      link: '/contact',
    },
  ]

  return (
    <>
      <Nav className="bar">
        <Logo>
          <a href='/' style={{ height: '80%', margin: 'auto', marginLeft: '10px' }}>
            <img src={logoCut} style={{ height: '100%' }} />
          </a>
          <div style={{ color: '#000000', margin: 'auto auto auto 10px', fontSize: '45px' }}>INTERIORS</div>
        </Logo>
        <Burger>
          <Hamburger toggled={barsOpen} toggle={setBarOpen} />
        </Burger>
        <NavMenu className='tabs'>
          {tabs.map(tab =>
            <NavLink to={tab.link} activeStyle>
              {tab.label}
            </NavLink>
          )}
          <a style={{ width: '1.5%', padding: '0 .5rem' }} alt="Instagram" href="https://www.instagram.com/am_interiors_nj/" target="_blank">
            <img src={ig} style={{ width: '100%' }} />
          </a>
          <a style={{ width: '1.5%', padding: '0 .5rem' }} alt="Angie's List" href="https://www.google.com/search?ved=1t:65428&hl=en&_ga=2.99571422.1952029782.1660003924-1677009908.1658609270&q=AM+Interiors&ludocid=2968458077763028879&lsig=AB86z5U1l9hcowgqDLVjT9L8N-qQ#trex=m_t:lcl_akp,rc_ludocids:2968458077763028879,rc_q:AM%2520Interiors,ru_gwp:0%252C7,ru_q:AM%2520Interiors,trex_id:g3d1ad" target="_blank">
            <img src={angie} style={{ width: '100%' }} />
          </a>
          <a style={{ width: '1.76%', padding: '0 .5rem' }} alt="Google" href="https://www.homeadvisor.com/rated.AMInteriors.128384890.html" target="_blank">
            <img src={google} style={{ width: '100%' }} />
          </a>
        </NavMenu>
      </Nav>
      {barsOpen &&
        <StyledMenu >
          {tabs.map(tab =>
            <NavBtnLink
              to={tab.link}
              activeClassName="active-link"
              onClick={() => handleToggle()}
              exact
            >
              {tab.label}
            </NavBtnLink>
          )}
        </StyledMenu>
      }
    </>
  );
};

export default Navbar;