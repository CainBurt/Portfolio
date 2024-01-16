import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMoon, faBars, faSun } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    let isLightMode = true;
    const setDarkMode = () => {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        isLightMode = false;
    }
    const setLightMode = () => {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        isLightMode = true;
    }
    
    return <header>
        <div className="header-content">
            <div className="left-part" style={{display: "flex", transform: "none"}}>
                <div className="logo">
                    <a href="/">
                        <span className="visually-hidden">Home</span>
                        <FontAwesomeIcon icon={faHouse} />                    
                    </a>
                </div>
                <h5 className="full-identity" style={{display: "none", transform: "translateY(-100px) translateZ(0px)"}}>
                    <span className="fullname">Cain Burt</span>
                </h5>
            </div>
            
            <div className="right-part" style={{display: "flex", transform: "none"}}>
                <ul>

                    <li className="theme-switch" style={{display: "block", transform: "none",}}>
                    <FontAwesomeIcon
                        icon={isLightMode ? faMoon : faSun}
                        onClick={() => (isLightMode ? setDarkMode() : setLightMode())} // Toggle theme based on the current theme
                    />                           
                    </li>
                    <li>
                        <button className="hamburger-btn" aria-label="Open menu">
                            <div style={{transform: "none"}}>
                                <FontAwesomeIcon 
                                    icon={faBars} 
                                />                            
                            </div>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </header>
}