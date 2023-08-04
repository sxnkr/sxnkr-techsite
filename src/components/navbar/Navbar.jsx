import React from "react";
import "./navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#" className="logo">
        SXNKR
      </a>
      <ul>
        <li className="hover-eff">
          <a href="#home">Home</a>
        </li>
        <li className="hover-eff">
          <a href="#blog">Blog</a>
        </li>
        <li className="hover-eff">
          <a href="#skills">Skills</a>
        </li>
        <li className="hover-eff">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover-eff">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
