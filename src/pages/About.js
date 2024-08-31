import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h1>Who I am, What I am, & Why I am</h1>
        <p>
          I’m Andrew Duckworth, a developer and designer. I was born in Ames, Iowa, but have lived most of my life in Omaha, Nebraska. When I’m not designing, you will either find me strength training in the gym or watching movies with what some would call too much focus. Recently I have embarked on a lengthy project of creating my own video game, although I’m still in the early stages on that. I specialize in work that I have either have personal passion about or work that benefits marginalized groups. I bring a unique perspective to any project I am on along with adaptability in skills both hard and soft.
          <br />
          Growing up I always thought I’d be a psychologist of some sort. The intricacies of people, how they work, how they think, how they make decisions was always the most interesting concept to me. I was also invested in technology, although I never expected to pursue that as a career. Near the end of high school I began to learn basic programming concepts and decided to major in computer science. I then discovered design, incorporating my love of interaction design into my programs. I graduated in 2024 cum laude with two bachelor degrees, one in graphic design and one in computer science. Looking to the future, I hope to design and develop on projects that challenge me, allow me to learn concepts I could not anywhere else, and help those who are in need of my skill set.
        </p>
      </div>
      <div className="about-rectangles">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="rectangle"></div>
        ))}
      </div>
    </div>
  );
};

export default About;