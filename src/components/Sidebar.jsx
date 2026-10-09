import { NavLink } from "react-router-dom";

const links = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/students", label: "Students" },
  { to: "/courses", label: "Courses" },
  { to: "/settings", label: "Settings" },
];

export default function Sidebar() {
  return (
    <nav className="sidebar">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            isActive ? "side-link active" : "side-link"
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}
