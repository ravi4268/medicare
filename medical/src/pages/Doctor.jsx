import React, { useState, useEffect } from "react";
import "./Doctor.css";

function Doctors() {
  const [doctor, setDoctor] = useState({
    name: "",
    specialization: "",
    phone: "",
    email: "",
  });

  const [doctors, setDoctors] = useState(() => {
    const saved = localStorage.getItem("doctors");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("doctors", JSON.stringify(doctors));
  }, [doctors]);

  const handleChange = (e) => {
    setDoctor({
      ...doctor,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !doctor.name ||
      !doctor.specialization ||
      !doctor.phone ||
      !doctor.email
    ) {
      alert("Please fill all fields");
      return;
    }

    setDoctors([...doctors, doctor]);

    setDoctor({
      name: "",
      specialization: "",
      phone: "",
      email: "",
    });
  };

  const deleteDoctor = (index) => {
    const data = doctors.filter((_, i) => i !== index);
    setDoctors(data);
  };

  return (
    <div className="doctor-container">

      <h2>Doctors Management</h2>

      <form className="doctor-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Doctor Name"
          value={doctor.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="specialization"
          placeholder="Specialization"
          value={doctor.specialization}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={doctor.phone}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={doctor.email}
          onChange={handleChange}
        />

        <button type="submit">
          Add Doctor
        </button>

      </form>

      <div className="table-responsive">

        <table>

          <thead>
            <tr>
              <th>Name</th>
              <th>Specialization</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {doctors.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.specialization}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteDoctor(index)}
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

export default Doctors;