import bgD from '../assets/bgD.JPG';
import logo from '../assets/logo.png';
import { isMobile } from 'react-device-detect';
import '../styles/App.css';

function Desktop() {
  return (
    <div>
        <img src={bgD} className="background" alt="logo" />
        <div className="desktop">
            <img src={logo} alt="logo"  style={{ width: '45%' }}/>
            <div>CURRENTLY UNDER RENOVATION</div>
            <div style={{ fontSize: '20px', marginTop: '20px' }}>COMING JUNE 2022</div>
        </div>
    </div>
  );
}

export default Desktop;