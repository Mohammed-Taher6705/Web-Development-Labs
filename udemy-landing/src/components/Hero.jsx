import { heroData } from "../data";

export default function Hero() {
  return (
    <section className="hero">
      <h2>{heroData.title}</h2>
      <p>{heroData.subtitle}</p>

      <div className="categories">
        {heroData.categories.map((cat, i) => (
          <span key={i} className="category-pill">{cat}</span>
        ))}
      </div>
    </section>
  );
}
