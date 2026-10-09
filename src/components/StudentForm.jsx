import { useState } from "react";
import { isValidEmail } from "../utils/helpers";

const emptyForm = { name: "", email: "", course: "", status: "Active" };

export default function StudentForm({
  courses,
  initialValues,
  onSubmit,
  onCancel,
}) {
  const [form, setForm] = useState(initialValues || emptyForm);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim()) return setError("Name is required.");
    if (!isValidEmail(form.email)) return setError("Enter a valid email.");
    if (!form.course) return setError("Choose a course.");
    setError("");
    onSubmit(form);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>{initialValues ? "Edit Student" : "Add Student"}</h3>
      {error && <p className="error">{error}</p>}

      <input
        name="name"
        placeholder="Full name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <select name="course" value={form.course} onChange={handleChange}>
        <option value="">Select course</option>
        {courses.map((c) => (
          <option key={c.id} value={c.title}>
            {c.title}
          </option>
        ))}
      </select>
      <select name="status" value={form.status} onChange={handleChange}>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      <div className="form-actions">
        <button type="submit">Save</button>
        <button type="button" className="secondary" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
