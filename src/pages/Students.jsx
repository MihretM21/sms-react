import { useState } from "react";
import useStudents from "../hooks/useStudents";
import useCourses from "../hooks/useCourses";
import StudentCard from "../components/StudentCard";
import StudentForm from "../components/StudentForm";

export default function Students() {
  const { students, loading, error, addStudent, editStudent, removeStudent } =
    useStudents();
  const { courses } = useCourses();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);

  const visible = students.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All" || s.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  function closeForm() {
    setShowForm(false);
    setEditing(null);
  }

  async function handleSubmit(data) {
    if (editing) {
      await editStudent(editing.id, data);
    } else {
      await addStudent(data);
    }
    closeForm();
  }

  function handleEdit(student) {
    setEditing(student);
    setShowForm(true);
  }

  function handleDelete(id) {
    if (window.confirm("Delete this student?")) removeStudent(id);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div>
      <div className="page-head">
        <h2>Students</h2>
        <button onClick={() => setShowForm(true)}>+ Add Student</button>
      </div>

      <div className="toolbar">
        <input
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      {showForm && (
        <StudentForm
          key={editing ? editing.id : "new"}
          courses={courses}
          initialValues={editing}
          onSubmit={handleSubmit}
          onCancel={closeForm}
        />
      )}

      <div className="grid">
        {visible.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
      {visible.length === 0 && <p>No students found.</p>}
    </div>
  );
}
