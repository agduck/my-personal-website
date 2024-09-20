import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-content-container">
        <div className="about-content">
          <h1>Who I am, What I am, & Why I am</h1>
          <p>
              While I was born in Ames, IA, I’ve lived most of my life in Omaha, NE. I have an eye for creative approaches to issues as well as a curiosity towards how things are built digitally. With a background equal parts design and development, I can deliver thorough design solutions to clients. 
            <br /><br />
            Whenever I am neither designing nor developing, I can be found strength training at the gym, watching movies with probably too much focus, or slowly, slowly working on a game I am developing. 
            <br /><br />
            Want to chat? Send me an email at <a href="mailto:andrewgduckworth@icloud.com" className="email-link">andrewgduckworth@icloud.com</a>
          </p>
        </div>

        {/* rectangle */}
        <div className="about-rectangle">
          <div className="rectangle"></div>
        </div>
      </div>

      {/* rounded squares */}
      <div className="about-squares">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
    </div>
  );
};

export default About;

