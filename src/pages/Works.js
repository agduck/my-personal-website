import React from 'react';
import './Works.css';

const Works = () => {
  const projects = [
    { title: "Project 3", link: "/works/project3", description: "A brief description of Project 3." },
    { title: "Project 2", link: "/works/project2", description: "A brief description of Project 2." },
    { title: "Omaha Jazz Festival Poster Redesign", link: "/works/project1", description: "A poster redesign project for the Omaha Jazz Festival." },
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
