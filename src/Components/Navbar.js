import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [icon, setIcon] = useState(false);
  // const handleClick = () => {
  //   setIcon(!icon);
  // };
  const closeSideDrawer = () => {
    setIcon(false);
  };
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-logo" onClick={closeSideDrawer}>
          LOGO
        </Link>
        <div className="menu-icon" onClick={() => setIcon(!icon)}>
          {
            // icon?<button className="open">open</button>:<button className="close">close</button>
            icon ? (
              <FaTimes className="fa-tmies"></FaTimes>
            ) : (
              <FaBars className="fa-bars"></FaBars>
            )
          }
        </div>
        <ul className={icon ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/" className="nav-links" onClick={closeSideDrawer}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Product" className="nav-links" onClick={closeSideDrawer}>
              Product
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="nav-links" onClick={closeSideDrawer}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/About" className="nav-links" onClick={closeSideDrawer}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
