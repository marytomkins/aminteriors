import { NavLink as Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { slideInRight, fadeInLeft } from 'react-animations';

const menuAnimation = keyframes`${slideInRight}`;
const logoAnimation = keyframes`${fadeInLeft}`;


export const Nav = styled.nav`
  background: #cacaca;
  height: 80px;
  display: flex;
  justify-content: end;
  z-index: 12;
  width: 100%;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const Logo = styled.div`
  // animation: 2s ${logoAnimation}; 
  font-family: 'Anton', sans-serif;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.8rem;
  cursor: pointer;
  height: inherit;
  margin-left: 1rem;
`;

export const NavLink = styled(Link)`
  color: #000000;
  font-family: 'Josefin Sans', sans-serif;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
    background: #fff;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;

export const Burger = styled.div`
  display: none;
  color: #000000;
  @media screen and (max-width: 1000px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
  }
  &:focus {
    outline: none;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: .5rem;
  justify-content: end;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  font-family: 'Josefin Sans', sans-serif;
  border-radius: 4px;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s linear;
  text-decoration: none;
  &:hover {
    transition: color 0.3s linear;
    background: #fff;
    color: #808080;
  }
  &.active {
    color: #000000;
  }
`;

export const StyledMenu = styled.div`
  animation: 1s ${menuAnimation};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  min-width: 100%;
  text-align: center;
  padding: 0px;
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(0);
  transition: transform 0.3s ease-in-out;
  background-color: #cacaca;
  z-index: 8;
  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;
    &:hover {
      color: #000000
    }
    &:active {
      color: #000000
    }
  }
`;