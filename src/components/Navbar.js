import React from "react";
import { Link } from "gatsby";

const Navbar = () => {

  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="nav-container">
        <ul className="nav-list">
          <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item" to="/">
              Home
            </Link>
          </li>

          <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
          </li>
          <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
