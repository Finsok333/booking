import React from 'react'
import "./navbar.css"
import logo from "../../asset/logo.png"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">
                    <img src={logo} alt="LOGO" />
                </span>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar