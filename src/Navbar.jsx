import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'


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
                <a href="https://www.linkedin.com/in/cain-burt/" target="_BLANK" >
                    <FontAwesomeIcon icon={ faLinkedinIn } size="2x" />
                </a>
                <a href="https://github.com/CainBurt" target="_BLANK" >
                    <FontAwesomeIcon icon={ faGithub } size="2x" />
                </a>
            </div>
            
            <div className="right-part" style={{display: "flex", transform: "none"}}>
                <ul>
                    <li className="theme-switch" style={{display: "block", transform: "none",}}>
                        <FontAwesomeIcon icon={faMoon} size="2x" 
                            onClick={() => (isLightMode ? setDarkMode() : setLightMode())}
                        />
                    </li>
                </ul>
            </div>
        </div>
    </header>
}