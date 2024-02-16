import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Navbar() {
    const [isLightMode, setIsLightMode] = useState(true);

    const setDarkMode = () => {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        setIsLightMode(false);
    }

    const setLightMode = () => {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        setIsLightMode(true);
    }

    return (
        <header>
            <div className="header-content">
                <div className="left-part" style={{display: "flex", transform: "none"}}>
                    <a href="https://www.linkedin.com/in/cain-burt/" target="_BLANK" className="icon-wrapper">
                        <FontAwesomeIcon icon={ faLinkedinIn } size="2x" />
                    </a>
                    <a href="https://github.com/CainBurt" target="_BLANK" className="icon-wrapper">
                        <FontAwesomeIcon icon={ faGithub } size="2x" />
                    </a>
                    <a href="mailto:cain.m.burt@gmail.com" target="_BLANK" className="icon-wrapper">
                        <FontAwesomeIcon icon={ faEnvelope } size="2x" />
                    </a>
                </div>
                
                <div className="right-part" style={{display: "flex", transform: "none"}}>
                    <ul>
                        <li className="icon-wrapper" style={{display: "block", transform: "none"}}>
                            { isLightMode ? 
                                <FontAwesomeIcon icon={faMoon} size="2x" onClick={setDarkMode} />
                                :
                                <FontAwesomeIcon icon={faSun} size="2x" onClick={setLightMode} />
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
