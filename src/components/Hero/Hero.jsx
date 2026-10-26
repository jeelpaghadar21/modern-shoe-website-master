import React from "react";
import "./Hero.css";

import heroImage from "../../assets/product-11.png";

const Hero = () => {
  const handleShopNow = () => {
    window.location.href = "/#products";
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* LEFT SIDE */}
        <div className="hero-content">
          <p className="hero-subtitle">COMFORT & STYLE</p>

          <h1>
            Step Into
            <br />
            <span>ComfortPride</span>
          </h1>

          <p className="hero-description">
            Discover stylish and comfortable footwear designed to keep you
            moving with confidence.
          </p>

          <button className="hero-button" type="button" onClick={handleShopNow}>
            Shop Now
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </button>
        </div>

        {/* RIGHT SIDE - NEW IMAGE */}
        <div className="hero-image-container">
          <img
            src={heroImage}
            alt="ComfortPride Sports"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
