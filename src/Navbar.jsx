import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMoon, faBars, faSun } from '@fortawesome/free-solid-svg-icons'
import House from './assets/home.svg?react'
import Moon from './assets/moon.svg?react'
import Sun from './assets/sun.svg?react'
import Menu from './assets/menu-navigation.svg?react'


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
                        <House style={{ height: '40px' }}/>
                    </a>
                </div>
                <h5 className="full-identity" style={{display: "none", transform: "translateY(-100px) translateZ(0px)"}}>
                    <span className="fullname">Cain Burt</span>
                </h5>
            </div>
            
            <div className="right-part" style={{display: "flex", transform: "none"}}>
                <ul>

                    <li className="theme-switch" style={{display: "block", transform: "none",}}>
                     
                        <Moon 
                            onClick={() => (isLightMode ? setDarkMode() : setLightMode())}
                        />

                        
                    </li>
                    <li>
                        <button className="hamburger-btn" aria-label="Open menu">
                            <div style={{transform: "none"}}>
                                <Menu/>
                      
                            </div>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </header>
}