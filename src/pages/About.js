import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [rectangleIndex, setRectangleIndex] = useState(0);

  const rectangles = [
    { color: '#ccc', height: '533px' },  // Original rectangle
    { color: '#ffcc00', height: '533px' },
    { color: '#00ccff', height: '533px' },  
    { color: '#ffffff', height: '533px' },
  ];

  const nextRectangle = () => {
    setRectangleIndex((prevIndex) => (prevIndex + 1) % rectangles.length);
  };

  const prevRectangle = () => {
    setRectangleIndex((prevIndex) => (prevIndex - 1 + rectangles.length) % rectangles.length);
  };

  return (
    <div className="about">
      <div className="about-content">
        <h1>Who I Am, What I Am, & Why I am</h1>
        <p>
          While I was born in Ames, Iowa, I’ve lived most of my life in Omaha, Nebraska. I have an eye for creative approaches to issues as well as a general curiosity towards how things are built digitally (and sometimes physically). With a background equal parts design and development, I can deliver thorough design solutions to clients that are aesthetically pleasing as well as effective.
        </p>
        <p>
          Whenever I am neither designing nor developing, I can be found strength training at the gym, watching movies with the utmost focus, or working away on a game I have recently begun developing.
        </p>
        <p>
          If you would like to chat, feel free to <a href="mailto:andrewgduckworth@icloud.com" className="email-link">email me!</a>
        </p>
      </div>
      <div className="rectangle-container">
        <div className="about-rectangle">
          <div 
            className="rectangle" 
            style={{ backgroundColor: rectangles[rectangleIndex].color, height: rectangles[rectangleIndex].height }}
          ></div>
        </div>
        <div className="arrow-container">
          <span className="arrow" onClick={prevRectangle}>←</span>
          <span className="arrow" onClick={nextRectangle}>→</span>
        </div>
      </div>
    </div>
  );
};

export default About;
