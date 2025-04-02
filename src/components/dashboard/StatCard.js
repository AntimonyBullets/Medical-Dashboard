import React from 'react';
import { FiUsers, FiCalendar, FiClock, FiDollarSign } from 'react-icons/fi';

const iconMap = {
  patients: <FiUsers className="stat-icon" />,
  appointments: <FiCalendar className="stat-icon" />,
  consultation: <FiClock className="stat-icon" />,
  revenue: <FiDollarSign className="stat-icon" />
};

const StatCard = ({ title, value, change, period, type, subtitle }) => {
  const isPositive = change > 0;
  
  return (
    <div className="stat-card">
      <div className="stat-info">
        <h3>{title}</h3>
        <h2>{value}</h2>
        {subtitle && <div className="stat-subtitle">{subtitle}</div>}
        <div className={`stat-change ${isPositive ? 'positive' : 'negative'}`}>
          {change !== 0 && (isPositive ? '+' : '')}{change}% from last {period}
        </div>
      </div>
      <div className="stat-icon-container">
        {iconMap[type]}
      </div>
    </div>
  );
};

export default StatCard; 