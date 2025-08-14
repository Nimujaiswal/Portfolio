import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  // We'll use this state to track if the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // This function will toggle the state on button click
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="site-header">
      <div href="/home" className="logo">Nimesh
      </div>
      
      {/* This is the hamburger button for mobile view */}
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
        {/* Simple SVG for the hamburger icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </button>

      {/* The navigation bar. The 'nav-open' class is added when the menu is open */}
      <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
        <NavLink end to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/video" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          Video
        </NavLink>
        <NavLink to="/projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          Projects
        </NavLink>
        <NavLink to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          About
        </NavLink>
      </nav>
    </header>
  );
}
