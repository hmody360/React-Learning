import React from "react"
import ReactLogo from "./images/React-icon.svg.png"

const Header = () => {
    return (
        <header>
            <nav className="nav-bar">
                <img src={ReactLogo} className="logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
export default Header