import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillsSection from "./components/SkillsSection";
import CoursesSection from "./components/CoursesSection";
import TrustedCompanies from "./components/TrustedCompanies";
import PersonalPlanSection from "./components/PersonalPlanSection";
import "./index.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
        <SkillsSection />
        <PersonalPlanSection />
      <CoursesSection />
      <TrustedCompanies />
    </>
  );
}
