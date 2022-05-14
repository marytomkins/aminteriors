import bgM from '../assets/bgM.jpg';
import logo from '../assets/logo.png';
import { isMobile } from 'react-device-detect';
import '../styles/App.css';

function Mobile() {
  return (
    /* {isMobile && <img src={logoM} className="background" alt="logo" />}
        {!isMobile && <img src={logoD} className="background" alt="logo" />}
        <img src={logo} className="logo" alt="logo" /> */
    <div>
        <img src={bgM} className="background" alt="logo" />
        <div className="mobile">
            <img src={logo} alt="logo"  style={{ width: '45%' }}/>
            <div style={{ fontSize: '30px' }}>CURRENTLY UNDER RENOVATION</div>
            <div style={{ fontSize: '20px', marginTop: '20px' }}>COMING JUNE 2022</div>
        </div>
    </div>
  );
}

export default Mobile;