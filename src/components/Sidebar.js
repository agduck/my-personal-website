import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaFileAlt } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div>
      {/* Top Bar */}
      <div className="topbar">
        <h1 className="topbar-name">Andrew Duckworth</h1>
        <div className="topbar-jobs">
          <h2>Software Developer • Graphic Designer</h2>
        </div>
      </div>

      {/* Sidebar */}
      <div className="sidebar">
      <div className="sidebar-rectangle">
        </div>

        <nav className="sidebar-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/works">Works</Link></li>
          </ul>
        </nav>
        <div className="sidebar-icons">
          <a href="https://www.linkedin.com/in/andrewgduckworth" target="_blank" rel="noopener noreferrer" className="icon" aria-label="LinkedIn">
            in
          </a>
          <a href="./andrew-duckworth-resume-720.pdf" target="_blank" rel="noopener noreferrer" className="icon" aria-label="CV">
            cv
          </a>
        </div>
        <p className="sidebar-copyright">&copy; 2024 Andrew Duckworth</p>
        <p className="sidebar-credits">Website created <br></br> from the ground up <br></br> by Andrew Duckworth.</p>
      </div>
    </div>
  );
};

export default Sidebar;
