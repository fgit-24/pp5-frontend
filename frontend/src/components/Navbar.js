import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      Navbar
      <div className="container">
        <div className="navbar-nav">
          <ul classname="navbar-nav">
            <li className="nav-item">
              <Link to="/first">First</Link>
            </li>
            <li className="nav-item">
              <Link to="/second">Second</Link>
            </li>
            <li className="nav-item">
              <Link to="/third">third</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
