import React from 'react';
import { FiClock, FiCheck, FiVideo, FiUser } from 'react-icons/fi';

const AppointmentList = ({ appointments }) => {
  return (
    <div className="dashboard-card appointments-card">
      <div className="card-header">
        <h2>Upcoming Appointments</h2>
        <p>You have {appointments.length} appointments scheduled for today</p>
      </div>
      
      <div className="appointment-list">
        {appointments.map((appointment, index) => (
          <div key={index} className="appointment-item">
            <div className="patient-avatar">
              {appointment.patientName === 'Emily Davis' || appointment.patientName === 'James Brown' ? 
                <FiUser className="avatar-icon" /> : 
                appointment.initials
              }
            </div>
            
            <div className="appointment-details">
              <h4>{appointment.patientName}</h4>
              <div className="appointment-time">
                <FiClock className="icon" />
                <span>{appointment.time}</span>
              </div>
            </div>
            
            <div className="appointment-status">
              <span className={`status ${appointment.status}`}>
                {appointment.status}
              </span>
              
              {appointment.status === 'confirmed' ? (
                <button className="action-btn">
                  <FiCheck />
                </button>
              ) : (
                <button className="action-btn video">
                  <FiVideo />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentList; 