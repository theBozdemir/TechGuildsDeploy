import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/Navbar.css";
import Dropdown from "./Dropdown";
import Dropdown2 from "./Dropdown2";
import Logo from "./images/logo.png";

console.log(Dropdown);
function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 260) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 260) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const onMouseEnter2 = () => {
    if (window.innerWidth < 260) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 260) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={Logo} alt="logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <div className="search-user">
            <i class="searchNav fas fa-search"></i>
          <Link to="/Signin">
            {" "}
            <i class="userNav far fa-user"></i>
          </Link>
        </div>
        <ul className= {click ? "nav-menu.active":"nav-menu"}>
          <li className="nav-item">
            <Link to="/Services" className="nav-links" onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Services" className="nav-links" onClick={closeMobileMenu}>
              Work
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Services" className="nav-links" onClick={closeMobileMenu}>
              Innovation
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/insgihts" className="nav-links" onClick={closeMobileMenu}>
              Insights <i className="fas fa-chevron-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li
            className="nav-item"
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
          >
            <Link to="/about_us" className="nav-links" onClick={closeMobileMenu}>
              About Us <i className="fas fa-chevron-down" />
            </Link>
            {dropdown2 && <Dropdown2 />}
          </li>
            <li className=" nav-item" >
              <Link to="/get_in_touch" className="seperate nav-links" onClick={closeMobileMenu}>
                Get in Touch
              </Link>
            </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
