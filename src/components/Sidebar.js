import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Ensure you have this CSS file

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="sidebar-name">Your Name</h1>
      <div className="sidebar-jobs">
        <h2>Job Title 1</h2>
        <h2>Job Title 2</h2>
        {/* Add more job titles as needed */}
      </div>
      <nav className="sidebar-menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/works">Works</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
