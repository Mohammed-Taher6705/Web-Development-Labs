export default function CourseCard({ course }) {
  return (
    <div className="course-card">
      {/* Course Image */}
      <div className="course-thumbnail">
        <img src={course.image} alt={course.title} />
      </div>

      {/* Course Info */}
      <div className="course-info">
        <h4 className="course-title">{course.title}</h4>
        <p className="course-instructor">{course.instructor}</p>

        {/* Badge and rating */}
        <div className="course-meta">
          {course.badge && (
            <span className={`course-badge ${course.badge.toLowerCase()}`}>
              {course.badge}
            </span>
          )}
          <span className="course-rating">⭐ {course.rating}</span>
          {course.numRatings && (
            <span className="course-numRatings">{course.numRatings} ratings</span>
          )}
        </div>

        {/* Price */}
        <p className="course-price">{course.price}</p>
      </div>
    </div>
  );
}
