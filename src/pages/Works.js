import React from 'react';
import './Works.css';

const Works = () => {
  const projects = [
    { title: "Kaizen", description: "Reinventing healthcare architecture.", image: "/kaizen.png" },
    { title: "Digital Air Rights", description: "Claim. Protect. Prosper.", image: "/DAR.png" },
    { title: "Omaha Jazz Festival Poster Redesign", 
      link: "/PORTFOLIO_P1.pdf", 
      description: "A modern redesign of the Omaha Jazz Fest posters utilizing vibrant colors to capture the energy and spirit of the event.", 
      image: "/PORTFOLIO_P1.png" },
  ];

  return (
    <div className="works">
      {projects.map((project, index) => (
        <a href={project.link} key={index} className="project-card">
          <div className="card-header">
            <img src={project.image} alt={project.title} className="project-image" />
          </div>
          <h2 className="project-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>
        </a>
      ))}
    </div>
  );
};

export default Works;

