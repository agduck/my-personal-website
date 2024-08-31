import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaFileAlt } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-rectangle"></div>
      <h1 className="sidebar-name">Andrew Duckworth</h1>
      <div className="sidebar-jobs">
        <h2>Software Developer</h2>
        <h2>Graphic Designer</h2>
      </div>
      <nav className="sidebar-menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/works">Works</Link></li>
        </ul>
      </nav>
      <div className="sidebar-icons">
        <a href="https://www.linkedin.com/in/andrewgduckworth" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={24} />
        </a>
        <a href="./andrew-duckworth-resume-720.pdf" target="_blank" rel="noopener noreferrer" aria-label="CV">
          <FaFileAlt size={24} />
        </a>
      </div>
      <p className="sidebar-copyright">&copy; 2024 Andrew Duckworth</p>
      <p className="sidebar-credits">Website created from the ground up by Andrew Duckworth.</p>
    </div>
  );
};

export default Sidebar;
