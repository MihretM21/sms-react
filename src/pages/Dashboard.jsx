import useStudents from "../hooks/useStudents";
import useCourses from "../hooks/useCourses";

export default function Dashboard() {
  const { students, loading, error } = useStudents();
  const { courses } = useCourses();

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  const activeCount = students.filter((s) => s.status === "Active").length;

  return (
    <div>
      <h2>Dashboard</h2>
      <div className="grid">
        <div className="card">
          <h3>Total Students</h3>
          <p className="big">{students.length}</p>
        </div>
        <div className="card">
          <h3>Active Students</h3>
          <p className="big">{activeCount}</p>
        </div>
        <div className="card">
          <h3>Courses</h3>
          <p className="big">{courses.length}</p>
        </div>
      </div>
    </div>
  );
}
