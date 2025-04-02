import React from 'react';
import { FiHome, FiUsers, FiCalendar, FiFileText, FiMessageSquare, FiDollarSign, FiSettings, FiLogOut } from 'react-icons/fi';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="user-profile">
          <div className="avatar">
            <FiUsers />
          </div>
          <div className="user-info">
            <h3>Dr. Sarah Smith</h3>
            <p>Cardiologist</p>
          </div>
        </div>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          <li className="active">
            <FiHome className="icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <FiUsers className="icon" />
            <span>Patients</span>
          </li>
          <li>
            <FiCalendar className="icon" />
            <span>Appointments</span>
          </li>
          <li>
            <FiFileText className="icon" />
            <span>Consultations</span>
          </li>
          <li>
            <FiFileText className="icon" />
            <span>Prescriptions</span>
          </li>
          <li>
            <FiMessageSquare className="icon" />
            <span>Messages</span>
          </li>
          <li>
            <FiDollarSign className="icon" />
            <span>Billing</span>
          </li>
          <li>
            <FiSettings className="icon" />
            <span>Settings</span>
          </li>
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <button className="logout-btn">
          <FiLogOut className="icon" />
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar; 