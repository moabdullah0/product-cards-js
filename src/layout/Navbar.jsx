import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaBox,
  FaUser,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import useAuthStore from "../app/authStore";
import Favorite from "../Products/Favorite";
import DrawerProduct from "../Products/DrawerProduct";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { token } = useAuthStore();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const clearStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav className="navbar-container">
        <div className="navbar-wrapper">
          <Link to="/" className="navbar-brand">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="navbar-brand-text">Project</span>
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className="navbar-menu-button"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <FaTimes className="navbar-menu-icon" />
            ) : (
              <FaBars className="navbar-menu-icon" />
            )}
          </button>
          <div
            className={`navbar-menu ${isMenuOpen ? "open" : ""}`}
            id="navbar-default"
          >
            <ul className="navbar-menu-list">
              <li className="navbar-menu-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `navbar-link ${isActive ? "active" : ""}`
                  }
                >
                  <FaHome className="navbar-link-icon" />
                  Home
                </NavLink>
              </li>
              <li className="navbar-menu-item">
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `navbar-link ${isActive ? "active" : ""}`
                  }
                >
                  <FaBox className="navbar-link-icon" />
                  Products
                </NavLink>
              </li>
              <li className="navbar-menu-item">
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    `navbar-link ${isActive ? "active" : ""}`
                  }
                >
                  <FaUser className="navbar-link-icon" />
                  Profile
                </NavLink>
              </li>
              <div className="navbar-actions">
                <Favorite />
                <DrawerProduct />
                {token ? (
                  <button
                    className="navbar-logout-button"
                    onClick={clearStorage}
                  >
                    <FaSignOutAlt className="navbar-logout-icon" />
                    Logout
                  </button>
                ) : (
                  <Link className="navbar-login-button" to={"/login"}>
                    <FaSignInAlt className="navbar-login-icon" />
                    Login
                  </Link>
                )}
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
