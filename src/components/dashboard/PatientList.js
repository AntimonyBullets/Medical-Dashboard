import React from 'react';
import { FiFileText, FiUser } from 'react-icons/fi';

const PatientList = ({ patients }) => {
  return (
    <div className="dashboard-card patients-card">
      <div className="card-header">
        <h2>Recent Patients</h2>
        <p>Recently added or updated patient records</p>
      </div>
      
      <div className="patient-list">
        {patients.map((patient, index) => (
          <div key={index} className="patient-item">
            <div className="patient-avatar">
              {patient.name === 'James Brown' || patient.name === 'Emily Davis' ? 
                <FiUser className="avatar-icon" /> : 
                patient.initials
              }
            </div>
            
            <div className="patient-details">
              <h4>{patient.name}</h4>
              <p>{patient.age} years • {patient.condition}</p>
              
              <div className="patient-tags">
                {patient.critical && (
                  <span className="tag critical">critical</span>
                )}
                {patient.returning && (
                  <span className="tag returning">returning</span>
                )}
                <span className="tag time">{patient.status}</span>
              </div>
            </div>
            
            <button className="action-btn">
              <FiFileText />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientList; 