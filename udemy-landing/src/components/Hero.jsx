
import { useState } from "react";
import { heroData, heroImages } from "../data";
import "./Style.css";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentIndex(currentIndex === 0 ? heroImages.length - 1 : currentIndex - 1);
  };

  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImages[currentIndex]})` }}>
      
      <button className="arrow arrow-left" onClick={prevImage}> ◀ </button>

      <div className="hero-content">
        <h2>{heroData[currentIndex].title}</h2>
        <p>{heroData[currentIndex].subtitle}</p>
        {heroData[currentIndex].showButton && (
          <button className="hero-button">{heroData[currentIndex].buttonText}</button>
        )}
      </div>

      <button className="arrow arrow-right" onClick={nextImage}> ▶ </button>
    </section>
  );
}
