import React from "react";
import "./Dashboard.css";

function Dashboard({ setPage }) {
  const cards = [
    {
      title: "Patients",
      value: "220",
      icon: "🧑‍🤝‍🧑",
      color: "#4CAF50",
      page: "patients",
    },
    {
      title: "Doctors",
      value: "500",
      icon: "👨‍⚕️",
      color: "#2196F3",
      page: "doctors",
    },
    {
      title: "Appointments",
      value: "800",
      icon: "📅",
      color: "#FF9800",
      page: "appointments",
    },
    {
      title: "Emergency",
      value: "900",
      icon: "🚑",
      color: "#F44336",
      page: "emergency",
    },
  ];

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">🏥 Medical Dashboard</h1>

      <div className="cards">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card"
            style={{ borderTop: `6px solid ${card.color}` }}
            onClick={() => setPage(card.page)}
          >
            <div className="icon">{card.icon}</div>

            <h2>{card.title}</h2>

            <h1>{card.value}</h1>

            <button>View Details →</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;