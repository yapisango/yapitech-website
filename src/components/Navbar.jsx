import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="navbar" role="banner">
      <div className="container nav-inner">
        {/* Logo */}
        <div className="logo">
          <img src="/image/yapitech-logo.png" alt="YapiTech logo" />
          <span className="brand">YAPITECH</span>
        </div>

        {/* Hamburger button (mobile) */}
        <button
          className="menu-toggle"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Nav links */}
        <nav
          role="navigation"
          aria-label="Main navigation"
          className={`nav-links-wrapper ${isOpen ? "open" : ""}`}
        >
          <ul className="nav-links">
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
