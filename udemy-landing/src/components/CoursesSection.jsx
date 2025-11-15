import CourseCard from "./CourseCard";
import { featuredCourses } from "../data";

export default function CoursesSection() {
  return (
    <section className="courses-section">
      <h3>Students are viewing</h3>

      <div className="courses-grid">
        {featuredCourses.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </section>
  );
}
