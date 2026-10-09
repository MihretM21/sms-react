export default function CourseCard({ course }) {
  return (
    <div className="card">
      <h3>{course.title}</h3>
      <p>Instructor: {course.instructor}</p>
      <p>Credits: {course.credits}</p>
    </div>
  );
}
