import React from 'react';
import './Works.css';

const Works = () => {
  const projects = [
    { title: "Kaizen", link: "/works/project3", description: "Reinventing healthcare architecture." },
    { title: "Digital Air Rights", link: "/works/project2", description: "Claim. Protect. Prosper." },
    { title: "Omaha Jazz Festival Poster Redesign", link: "/works/project1", description: "A modern redesign of the Omaha Jazz Fest posters utilizing vibrant colors to capture the energy and spirit of the event." },
  ];

  return (
    <div className="works">
      {projects.map((project, index) => (
        <a href={project.link} key={index} className="project-card">
          <div className="card-header"></div>
          <h2 className="project-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>
        </a>
      ))}
    </div>
  );
};

export default Works;
