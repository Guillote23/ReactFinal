/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { NavLink } from "react-router-dom";
const Nav = (props) => {
    return (
        <nav className="topnav">
            <img src="img/logo.png"/>
            <ul>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : undefined}>Contact Us</NavLink></li>
                <li><NavLink to="/faq" className={({ isActive }) => isActive ? "active" : undefined}>FAQ</NavLink></li>
                <li><NavLink to="/nft" className={({ isActive }) => isActive ? "active" : undefined}>NFT Market</NavLink></li>
                <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : undefined}>Home</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;