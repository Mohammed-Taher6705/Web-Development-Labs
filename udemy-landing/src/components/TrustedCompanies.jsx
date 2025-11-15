import { trustedCompanies } from "../data";

export default function TrustedCompanies() {
  return (
    <section className="trusted">
      <h3>Trusted by companies worldwide</h3>

      <div className="companies">
        {trustedCompanies.map((c, i) => (
          <span key={i} className="company">{c}</span>
        ))}
      </div>
    </section>
  );
}
