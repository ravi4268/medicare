import React, { useState } from "react";
import "./Patients.css";

function Patients() {

  const [showForm, setShowForm] = useState(false);

  const [patient, setPatient] = useState({
    name: "",
    age: "",
    gender: "",
    disease: "",
    phone: "",
  });

  const [patients, setPatients] = useState(() => {
    const data = localStorage.getItem("patients");
    return data ? JSON.parse(data) : [];
  });

  const handleChange = (e) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {

    if (
      !patient.name ||
      !patient.age ||
      !patient.gender ||
      !patient.disease ||
      !patient.phone
    ) {
      alert("Please fill all fields");
      return;
    }

    const newPatients = [...patients, patient];

    setPatients(newPatients);

    localStorage.setItem(
      "patients",
      JSON.stringify(newPatients)
    );

    setPatient({
      name: "",
      age: "",
      gender: "",
      disease: "",
      phone: "",
    });

    setShowForm(false);
  };

  const deletePatient = (index) => {

    const updated = patients.filter((_, i) => i !== index);

    setPatients(updated);

    localStorage.setItem(
      "patients",
      JSON.stringify(updated)
    );
  };

  return (
    <div className="patients">

      <div className="patients-header">

        <h1>Patients</h1>

        <button
          onClick={() => setShowForm(!showForm)}
          className="add-btn"
        >
          {showForm ? "Close" : "+ Add Patient"}
        </button>

      </div>

      {showForm && (

        <div className="patient-form">

          <input
            type="text"
            placeholder="Patient Name"
            name="name"
            value={patient.name}
            onChange={handleChange}
          />

          <input
            type="number"
            placeholder="Age"
            name="age"
            value={patient.age}
            onChange={handleChange}
          />

          <select
            name="gender"
            value={patient.gender}
            onChange={handleChange}
          >
            <option value="">Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <input
            type="text"
            placeholder="Disease"
            name="disease"
            value={patient.disease}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Phone"
            name="phone"
            value={patient.phone}
            onChange={handleChange}
          />

          <button
            className="save-btn"
            onClick={handleSave}
          >
            Save Patient
          </button>

        </div>

      )}

      <div className="table-container">

        <table>

          <thead>

            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Disease</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {patients.length === 0 ? (

              <tr>
                <td colSpan="6">
                  No Patients Found
                </td>
              </tr>

            ) : (

              patients.map((item, index) => (

                <tr key={index}>

                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.gender}</td>
                  <td>{item.disease}</td>
                  <td>{item.phone}</td>

                  <td>

                    <button
                      className="delete-btn"
                      onClick={() => deletePatient(index)}
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Patients;