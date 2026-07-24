import React, { useState, useEffect } from "react";
import "./Emergency.css";

function Emergency() {

  const [formData, setFormData] = useState({
    patient: "",
    problem: "",
    priority: "High",
    status: "Pending",
  });

  const [emergencies, setEmergencies] = useState(() => {
    const saved = localStorage.getItem("emergencyData");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("emergencyData", JSON.stringify(emergencies));
  }, [emergencies]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.patient || !formData.problem) {
      alert("Please fill all fields");
      return;
    }

    setEmergencies([...emergencies, formData]);

    setFormData({
      patient: "",
      problem: "",
      priority: "High",
      status: "Pending",
    });
  };

  const deleteCase = (index) => {
    const updated = emergencies.filter((_, i) => i !== index);
    setEmergencies(updated);
  };

  return (
    <div className="emergency-container">

      <h2>Emergency Management</h2>

      <form className="emergency-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="patient"
          placeholder="Patient Name"
          value={formData.patient}
          onChange={handleChange}
        />

        <input
          type="text"
          name="problem"
          placeholder="Problem"
          value={formData.problem}
          onChange={handleChange}
        />

        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <button type="submit">
          Add Emergency
        </button>

      </form>

      <div className="table-responsive">

        <table>

          <thead>
            <tr>
              <th>Patient</th>
              <th>Problem</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {emergencies.map((item, index) => (

              <tr key={index}>
                <td>{item.patient}</td>
                <td>{item.problem}</td>
                <td>{item.priority}</td>
                <td>{item.status}</td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteCase(index)}
                  >
                    Delete
                  </button>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Emergency;