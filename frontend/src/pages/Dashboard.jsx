import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <h1>Dashboard</h1>

      <button style={styles.button}>Upload Resume</button>
      <button style={styles.button}>Email Segregation</button>

      <button style={styles.logout} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "black",
    color: "white",
    padding: "40px",
  },
  button: {
    display: "block",
    margin: "20px 0",
    padding: "10px 20px",
    backgroundColor: "#00ffcc",
    border: "none",
    cursor: "pointer",
  },
  logout: {
    marginTop: "40px",
    padding: "10px 20px",
    backgroundColor: "red",
    border: "none",
    cursor: "pointer",
    color: "white",
  },
};

export default Dashboard;