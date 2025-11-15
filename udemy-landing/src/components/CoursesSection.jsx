import CourseCard from "./CourseCard";
import { featuredCourses } from "../data";

export default function CoursesSection() {
  return (
    <section className="courses-section">
      <h1>Skills to transform your career and life</h1>
    <h5>From critical skills to technical topics, Udemy supports your professional development.</h5>
      <div className="courses-grid">
        {featuredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
