import React from "react";
import "./Style.css";
import { features } from "../data";

export default function PersonalPlanSection() {
 

  return (
    <section className="personal-plan-section">
      <div className="container">
        <div className="plan-banner">
          <div className="plan-content">
            <h3 className="plan-title">
              Reimagine your career in the AI era
            </h3>
            <p className="plan-description">
              Future-proof your skills with Personal Plan. Get access to a variety of fresh content from real-world experts.
            </p>

            <ul className="features-grid">
              {features.map((feature, i) => (
                <li key={i} className="feature-item">
                  <div className={`feature-icon ${feature.color}`}>
                    <svg>
                      <use xlinkHref={`#icon-${feature.icon}`} />
                    </svg>
                  </div>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>

            <div className="cta-section">
              <button className="cta-button">Learn more</button>
              <div className="price-text">
                Starting at E£204.00/month
              </div>
            </div>
          </div>

          <div className="plan-image">
            <img
              src="https://frontends.udemycdn.com/staticx/udemy/images/ai-career-banner/ai-career@1x.webp"
              alt="AI career"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
