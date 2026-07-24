import React, { useState, useEffect } from "react";
import "./Appoitments.css";

function Appointments() {
  const [appointment, setAppointment] = useState({
    patient: "",
    doctor: "",
    date: "",
    time: "",
  });

  const [appointments, setAppointments] = useState(() => {
    const data = localStorage.getItem("appointments");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !appointment.patient ||
      !appointment.doctor ||
      !appointment.date ||
      !appointment.time
    ) {
      alert("Please fill all fields");
      return;
    }

    setAppointments([...appointments, appointment]);

    setAppointment({
      patient: "",
      doctor: "",
      date: "",
      time: "",
    });
  };

  const deleteAppointment = (index) => {
    const updated = appointments.filter((_, i) => i !== index);
    setAppointments(updated);
  };

  return (
    <div className="appointment-container">

      <h2>Appointments</h2>

      <form className="appointment-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="patient"
          placeholder="Patient Name"
          value={appointment.patient}
          onChange={handleChange}
        />

        <input
          type="text"
          name="doctor"
          placeholder="Doctor Name"
          value={appointment.doctor}
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          value={appointment.date}
          onChange={handleChange}
        />

        <input
          type="time"
          name="time"
          value={appointment.time}
          onChange={handleChange}
        />

        <button type="submit">
          Add Appointment
        </button>

      </form>

      <div className="table-responsive">

        <table>

          <thead>

            <tr>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Date</th>
              <th>Time</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {appointments.map((item, index) => (
              <tr key={index}>
                <td>{item.patient}</td>
                <td>{item.doctor}</td>
                <td>{item.date}</td>
                <td>{item.time}</td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteAppointment(index)}
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

export default Appointments;