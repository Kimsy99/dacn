import React from "react";

const Hero = ({ title = "DACN" }) => {
  return (
    <div className="hero-container">
      <div className="hero-background" />
      <p className="centered sm:text-6xl text-4xl text-white font-bold">
        {title}
      </p>
    </div>
  );
};

export default Hero;
