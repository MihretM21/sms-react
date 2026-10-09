import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <header className="navbar">
      <h1>Student Management System</h1>
      <div className="navbar-right">
        <span>{user}</span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
}
