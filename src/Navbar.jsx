import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMoon, faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
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
                        <FontAwesomeIcon icon={faMoon} />                    
                    </li>
                    <li>
                        <button className="hamburger-btn" aria-label="Open menu">
                            <div style={{transform: "none"}}>
                                <FontAwesomeIcon icon={faBars} />                            
                            </div>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </header>
}