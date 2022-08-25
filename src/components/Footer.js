import React from 'react';
import logo from '../assets/logo.png';
import ig from '../assets/ig.png';
import angie from '../assets/angie.png';
import google from '../assets/google.png';
import nj from '../assets/NJ.png';
import '../styles/App.css';



const Footer = () => {

    return (
        <div className="footer">
            <div style={{ display: 'flex' }}>
                <div className="footer-contact">
                    <img src={logo} style={{ width: '25%', minWidth: '150px' }} />
                    <div>
                        AM INTERIORS LLC <br />
                        732-484-8291 <br />
                        AMInteriorsNJ@gmail.com
                    </div>
                    <div className="footer-icons">
                        <a alt="Instagram" href="https://www.instagram.com/am_interiors_nj/" target="_blank"><img src={ig} style={{ width: '5%', minWidth: '15px', margin: '10px' }} /></a>
                        <a alt="Angie's List" href="https://www.google.com/search?ved=1t:65428&hl=en&_ga=2.99571422.1952029782.1660003924-1677009908.1658609270&q=AM+Interiors&ludocid=2968458077763028879&lsig=AB86z5U1l9hcowgqDLVjT9L8N-qQ#trex=m_t:lcl_akp,rc_ludocids:2968458077763028879,rc_q:AM%2520Interiors,ru_gwp:0%252C7,ru_q:AM%2520Interiors,trex_id:g3d1ad" target="_blank"><img src={google} style={{ width: '5%', margin: '10px', minWidth: '15px' }} /></a>
                        <a alt="Google" href="https://www.homeadvisor.com/rated.AMInteriors.128384890.html" target="_blank"><img src={angie} style={{ width: '4.8%', margin: '10px', minWidth: '15px' }} /></a>
                    </div>
                </div>
                <div className="footer-links">
                    <a style={{ textDecoration: 'underline' }}>Links</a>
                    <a href="/about">About</a>
                    <a href="/gallery">Photo Gallery</a>
                    <a href="/services">Services</a>
                    <a href="/reviews">Reviews</a>
                    <a href="/contact">Contact Us</a>
                </div>
                <div className="footer-nj">
                    <img src={nj} style={{ width: '40%', margin: '10px' }} />
                </div>
            </div>
            <div style={{ textAlign: 'center', fontSize: '12px', borderTop: '1px solid #000000', paddingTop: '15px' }} >
                Developed by MT © 2022
            </div>
        </div>
    );
};

export default Footer;