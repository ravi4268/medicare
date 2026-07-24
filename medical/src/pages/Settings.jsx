import React, { useState, useEffect } from "react";
import "./Settings.css";

function Settings() {

  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem("settings");
    return saved
      ? JSON.parse(saved)
      : {
          name: "Admin",
          email: "admin@gmail.com",
          hospital: "City Medical Hospital",
          theme: "Light",
        };
  });

  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Settings Saved Successfully");
  };

  return (
    <div className="settings-container">

      <div className="settings-card">

        <h2>⚙ Settings</h2>

        <form onSubmit={handleSubmit}>

          <label>Admin Name</label>

          <input
            type="text"
            name="name"
            value={settings.name}
            onChange={handleChange}
          />

          <label>Email</label>

          <input
            type="email"
            name="email"
            value={settings.email}
            onChange={handleChange}
          />

          <label>Hospital Name</label>

          <input
            type="text"
            name="hospital"
            value={settings.hospital}
            onChange={handleChange}
          />

          <label>Theme</label>

          <select
            name="theme"
            value={settings.theme}
            onChange={handleChange}
          >
            <option>Light</option>
            <option>Dark</option>
          </select>

          <button type="submit">
            Save Settings
          </button>

        </form>

      </div>

    </div>
  );
}

export default Settings;