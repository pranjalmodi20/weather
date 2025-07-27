import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "./assets/firebase";
import { signOut } from "firebase/auth";
import logo from "/logo.png"; 
import "./Navbar.css";

const Navbar = ({ user }) => {
  const location = useLocation();
  const navigate = useNavigate();

  if (user) {
    return (
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Weather App Logo" className="logo-img" />
          SkyCast
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
          </li>
          <li>
            <Link to="/settings" className={location.pathname === "/settings" ? "nav-link active" : "nav-link"}>Settings</Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>About</Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</Link>
          </li>
          <li>
            <button
              className="nav-link logout-btn"
              type="button"
              onClick={() => {
                signOut(auth);
                navigate("/login");
              }}>
              <i className="fas fa-sign-out-alt"></i> Logout
            </button>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Weather App Logo" className="logo-img" />
        Weather App
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/login" className={location.pathname === "/login" ? "nav-link active" : "nav-link"}>Login</Link>
        </li>
        <li>
          <Link to="/register" className={location.pathname === "/register" ? "nav-link active" : "nav-link"}>Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
