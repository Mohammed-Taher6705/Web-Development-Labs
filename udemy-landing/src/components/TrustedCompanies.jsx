import React from "react";
import { trustedCompanies } from "../data";
import "./Style.css";

export default function TrustedCompanies() {
  return (
    <section className="trusted">
      <h3>Trusted by over 17,000 companies and millions of learners around the world</h3>

      <div className="companies">
        {trustedCompanies.map((c, i) => (
          <div key={i} className="company-logo">
            <img src={c.logo} alt={c.name} loading="eager" />
          </div>
        ))}
      </div>
    </section>
  );
}
