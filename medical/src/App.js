import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Patients from "./components/Patients";

import Doctors from "./pages/Doctor";
import Appointments from "./pages/Appoitment";
import Emergency from "./pages/Emergency";
import Gallery from "./pages/Gallery";
import Settings from "./pages/Settings";
import Login from "./pages/Login";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const [open, setOpen] = useState(false);
  const [page, setPage] = useState("dashboard");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <div className="app">
      <Navbar
        toggleSidebar={() => setOpen(!open)}
        handleLogout={handleLogout}
      />

      <Sidebar
        open={open}
        setPage={setPage}
        handleLogout={handleLogout}
      />

      <main className={`main ${open ? "sidebar-open" : ""}`}>
        {page === "dashboard" && <Dashboard setPage={setPage} />}
        {page === "patients" && <Patients />}
        {page === "doctors" && <Doctors />}
        {page === "appointments" && <Appointments />}
        {page === "emergency" && <Emergency />}
        {page === "gallery" && <Gallery />}
        {page === "settings" && <Settings />}
      </main>
    </div>
  );
}

export default App;