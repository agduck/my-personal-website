import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Hey, I'm Andrew</h1>
        <p>I’m a software developer and graphic designer based in Omaha, Nebraska. Explore my work and feel free to get in touch with me!</p>
      </div>
      <div className="home-rectangles">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="rectangle"></div>
        ))}
      </div>
    </div>
  );
};

export default Home;
