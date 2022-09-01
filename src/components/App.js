
import React, { useState, useEffect, useRef } from 'react';

import '../styles/App.css';
import Navbar from './NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Services from './Service';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import Reviews from './Reviews';
import Footer from './Footer';

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route>
            <Route path='/' exact element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/reviews' element={<Reviews />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
