import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';
import './styles/main.scss';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <Router>
      <div className="app">
        <Sidebar isOpen={sidebarOpen} />
        <div className="main-content">
          <Header />
          <Dashboard />
        </div>
        
        <button className="menu-toggle" onClick={toggleSidebar}>
          {sidebarOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </Router>
  );
}

export default App;
