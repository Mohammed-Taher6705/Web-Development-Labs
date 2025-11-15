export default function CourseCard({ course }) {
  return (
    <div className="course-card">
      <h4>{course.title}</h4>
      <p className="inst">{course.instructor}</p>
      <p className="rating">⭐ {course.rating}</p>
      <p className="price">{course.price}</p>
    </div>
  );
}
