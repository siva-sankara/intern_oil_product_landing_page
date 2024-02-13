import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../App.css";

function Header() {
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);

  const handleNavigation = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  const handleNavButton = () => {
    setShowNav(!showNav);
  };

  return (
    <header className={`header${!showNav ? " mbl-header" : ""}`}>
      <div className="navbar-conatiner">
        <div>
          <p className="menu-bar" onClick={handleNavButton}>
            {!showNav ? (
              <img
                width="20"
                height="15"
                src="https://img.icons8.com/fluency-systems-filled/48/multiply.png"
                alt="multiply"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="15"
                viewBox="0 0 50 50"
              >
                <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z"></path>
              </svg>
            )}
          </p>
        </div>
        <div className="logo">
          <img src={process.env.PUBLIC_URL + "/logo.jpg"} alt="Company Logo" />
        </div>
      </div>
      <div className="menu">
        <nav>
          <ul className={`menu-list ${showNav ? "show" : ""}`}>
            <li>
              <NavLink
                exact
                to="/"
                onClick={() => handleNavigation("/")}
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/about"
                onClick={() => handleNavigation("/about")}
                activeClassName="active"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/product"
                onClick={() => handleNavigation("/product")}
                activeClassName="active"
              >
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/certificate"
                onClick={() => handleNavigation("/certificate")}
                activeClassName="active"
              >
                Certificate
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/contact-us"
                onClick={() => handleNavigation("/contact-us")}
                activeClassName="active"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
