import { useAuth } from "../hooks/useAuth";

export default function Settings() {
  const { user } = useAuth();

  return (
    <div>
      <h2>Settings</h2>
      <div className="card">
        <h3>Account</h3>
        <p>Logged in as: {user}</p>
      </div>
    </div>
  );
}
