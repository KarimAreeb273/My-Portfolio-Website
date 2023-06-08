import React from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css" 

function NavBar () {
    return (
        <nav className="nav">
        <div className="nav-wrapper grey">
          <Link to="/" className="brand-logo left"> 
          Areeb's Portfolio
          </Link> 
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li ><Link to="/" style={{color:"black"}}>Home</Link></li>
            <li ><Link to="/about" style={{color:"black"}}>About Me</Link></li>
            <li ><Link to="/projects" style={{color:"black"}}>Projects</Link></li>
            <li><Link to="/contact" style={{color:"black"}}>Contact Me</Link></li>
          </ul>
        </div>
        </nav>
    )
}

export default NavBar