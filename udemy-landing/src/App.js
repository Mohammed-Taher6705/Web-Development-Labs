import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CoursesSection from "./components/CoursesSection";
import TrustedCompanies from "./components/TrustedCompanies";
import "./index.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CoursesSection />
      <TrustedCompanies />
    </>
  );
}
