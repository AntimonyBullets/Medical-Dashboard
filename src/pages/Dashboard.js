import React from 'react';
import StatCard from '../components/dashboard/StatCard';
import AppointmentList from '../components/dashboard/AppointmentList';
import PatientList from '../components/dashboard/PatientList';
import { stats, appointments, patients } from '../data/mockData';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-tabs">
        <button className="tab active">Overview</button>
        <button className="tab">Analytics</button>
        <button className="tab">Reports</button>
      </div>
      
      <div className="stat-cards">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
      
      <div className="dashboard-content">
        <div className="appointments-section">
          <AppointmentList appointments={appointments} />
        </div>
        <div className="patients-section">
          <PatientList patients={patients} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 