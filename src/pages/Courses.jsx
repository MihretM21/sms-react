import useCourses from "../hooks/useCourses";
import CourseCard from "../components/CourseCard";

export default function Courses() {
  const { courses, loading, error } = useCourses();

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div>
      <h2>Courses</h2>
      <div className="grid">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
