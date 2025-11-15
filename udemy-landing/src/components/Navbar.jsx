import { navLinks } from "../data";

export default function Navbar() {
  return (
    <header className="navbar">
      <h1 className="logo">Udemy</h1>

      <nav className="links">
        {navLinks.map((l, i) => (
          <a key={i} href="#">{l}</a>
        ))}
      </nav>

      <button className="login-btn">Log In</button>
    </header>
  );
}
