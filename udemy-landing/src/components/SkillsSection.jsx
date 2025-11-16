import React from "react";
import "./Style.css";
import { skills } from "../data";

export default function SkillsSection() {
  return (
    <section className="skills-section">
      <div className="skills-text">
        <h1>Learn essential<br/> career and life skills</h1>
        <p>
          Udemy helps you build in-demand skills fast<br/> and advance your career in a changing job<br/> market.
        </p>
      </div>
      <div className="skills-cards">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card" style={{ backgroundImage: `url(${skill.image})` }}>
            <h4>{skill.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
