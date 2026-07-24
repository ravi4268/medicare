import React, { useState } from "react";
import { FaBars, FaBell, FaUserMd } from "react-icons/fa";
import "./Navbar.css";

function Navbar({ toggleSidebar }) {
  return (
    <nav className="navbar">

      <div className="nav-left">
        <FaBars className="menu-icon" onClick={toggleSidebar} />
        <h2>🏥 MediCare</h2>
      </div>

      <div className="nav-right">

        <div className="notification">
          <FaBell />
          <span>3</span>
        </div>

        <div className="doctor">
          <FaUserMd />
          <span>Dr. Sanidhya</span>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;