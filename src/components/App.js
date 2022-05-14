import logoM from '../assets/bgM.jpg';
import logoD from '../assets/bgD.JPG';
import logo from '../assets/logo.png';
import Mobile from './Mobile';
import Desktop from './Desktop';
import { isMobile } from 'react-device-detect';
import '../styles/App.css';

function App() {
  return (
    /* {isMobile && <img src={logoM} className="background" alt="logo" />}
        {!isMobile && <img src={logoD} className="background" alt="logo" />}
        <img src={logo} className="logo" alt="logo" /> */
    <div className="App">
          {isMobile ? (
            <Mobile></Mobile>
            ):(
            <Desktop></Desktop>
          )}
    </div>
  );
}

export default App;
