import React, { useState, useEffect } from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section id="HeroSection">
      <div className="text">
        <h1>Speakers Of all Type</h1>
        <p>
          Variety in speakers encompasses a spectrum of voices, each painting
          symphony of human experience.
        </p>
        <button>Buy&nbsp;Now</button>
      </div>
      <div className="img">
      <span className="bubble bubble-1"></span>
      <span className="bubble bubble-2"></span>
        <img src="images/crouser(4).png" alt="" />
      </div>
    </section>
  );
}
