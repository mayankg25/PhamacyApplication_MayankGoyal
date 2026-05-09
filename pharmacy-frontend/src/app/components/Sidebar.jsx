import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={{
      width: "220px",
      backgroundColor: "#f4f4f4",
      padding: "20px",
      minHeight: "100vh"
    }}>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <Link to="/">Dashboard</Link>
        </li>

        <li style={{ marginTop: "20px" }}>
          <Link to="/add-medicine">Add Medicines</Link>
        </li>
      </ul>
    </div>
  );
}