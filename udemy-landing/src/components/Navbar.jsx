import React from "react";
import "./Style.css";

export default function Navbar() {
  return (
    <header className="navbar">

      {/* Logo */}
      <div className="navbar-left">
        <img
          src="https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v7/logo-udemy.svg"
          alt="Udemy Logo"
          className="navbar-logo"
        />
      </div>
       <div className="navbar-Explore">
      <h6>Explore</h6>
       </div>
      {/* Search input */}
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search for anything"
          className="search-input"
        />
      </div>

      {/* Navigation links */}
      <nav className="navbar-links">
        <a href="#">Plans & Pricing</a>
        <a href="#">Udemy Business</a>
        <a href="#">Teach on Udemy</a>

        <span className="icon-cart">🛒</span>

        <button className="btn login-btn">Log In</button>
        <button className="btn signup-btn">Sign Up</button>

        <span className="icon-lang">🌐</span>
      </nav>

    </header>
  );
}
