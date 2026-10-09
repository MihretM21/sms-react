import { getInitials } from "../utils/helpers";

export default function StudentCard({ student, onEdit, onDelete }) {
  return (
    <div className="card">
      <div className="avatar">{getInitials(student.name)}</div>
      <h3>{student.name}</h3>
      <p>{student.email}</p>
      <p>{student.course}</p>
      <span
        className={
          student.status === "Active" ? "badge active" : "badge inactive"
        }
      >
        {student.status}
      </span>
      <div className="card-actions">
        <button onClick={() => onEdit(student)}>Edit</button>
        <button className="danger" onClick={() => onDelete(student.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
