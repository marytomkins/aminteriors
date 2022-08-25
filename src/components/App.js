
import React from 'react';
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
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/services' component={Services} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/contact' component={Contact} />
            <Route path='/reviews' component={Reviews} />
          </Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
