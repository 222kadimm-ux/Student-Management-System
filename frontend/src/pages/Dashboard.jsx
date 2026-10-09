import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="page-container">
      <div className="card dashboard-card">
        <header className="dashboard-header">
          <h1>Student Management System</h1>
          <p className="dashboard-subtitle">Manage student records with ease.</p>
        </header>

        <section className="dashboard-welcome">
          <h2>Welcome to the Dashboard</h2>
          <p className="welcome-subtitle">
            Manage student information and academic records in one place.
          </p>
          <Link to="/students" className="btn btn-primary">
            Add New Student
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
