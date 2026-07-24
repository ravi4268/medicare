import React from "react";
import {
  FaHome,
  FaUserInjured,
  FaUserMd,
  FaCalendarAlt,
  FaAmbulance,
  FaImages,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa";

import "./Sidebar.css";

function Sidebar({ open, setPage, handleLogout }) {

  return (
    <div className={`sidebar ${open ? "active" : ""}`}>

      <ul>

        <li onClick={() => setPage("dashboard")}>
          <FaHome />
          <span>Dashboard</span>
        </li>

        <li onClick={() => setPage("patients")}>
          <FaUserInjured />
          <span>Patients</span>
        </li>

        <li onClick={() => setPage("doctors")}>
          <FaUserMd />
          <span>Doctors</span>
        </li>

        <li onClick={() => setPage("appointments")}>
          <FaCalendarAlt />
          <span>Appointments</span>
        </li>

        <li onClick={() => setPage("emergency")}>
          <FaAmbulance />
          <span>Emergency</span>
        </li>

        <li onClick={() => setPage("gallery")}>
          <FaImages />
          <span>Gallery</span>
        </li>

        <li onClick={() => setPage("settings")}>
          <FaCog />
          <span>Settings</span>
        </li>

        <li onClick={handleLogout}>
          <FaSignOutAlt />
          <span>Logout</span>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;