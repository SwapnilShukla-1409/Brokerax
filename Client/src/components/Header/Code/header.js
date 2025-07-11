import React from "react";
import "../Style/header.css";
import logo from "..//..//../images/Logo2.png";
let isLoggedIn = window.localStorage.getItem("token");
function handleOp() {
  if (isLoggedIn !== null) {
    window.localStorage.removeItem("token");
    isLoggedIn = null;
  }
}
export default function Header() {
  return (
    <header className="header-fixed">
      <div className="header-limiter">
        <img src={logo} alt="Logo" id="Logo-Header" />

        <nav id="header-nav">
          <a href="/" id="dlt-sm">
            Home
          </a>
          <a href="Markets" id="nodlt-sm">
            Markets
          </a>
          <a href="userDetails" id="nodlt-sm">
            Dashboard
          </a>
          <a href="AboutUs" id="dlt-sm">
            About Us
          </a>
          <a href="ContactUs" id="dlt-sm">
            Contact Us
          </a>
          <button id="header-button">
            <a href="signup" onClick={handleOp}>
              {isLoggedIn !== null ? "Log Out" : "Log In/Sign Up"}
            </a>
            &rarr;
          </button>
        </nav>
      </div>
    </header>
  );
}
