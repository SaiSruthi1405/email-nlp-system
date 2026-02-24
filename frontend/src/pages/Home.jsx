import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
  const navigate = useNavigate();

  const texts = [
    "Smart Email Categorization",
    "AI Powered Resume Analysis",
    "Automatic Mail Segregation",
  ];

  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Typing animation
  useEffect(() => {
    if (charIndex < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 70);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentText("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex]);

  return (
    <div style={styles.container}>
      <div style={styles.overlay} />

      <div style={styles.content}>
        <h1 style={styles.title}>Email NLP System</h1>

        <h2 style={styles.typing}>
          {currentText}
          <span style={styles.cursor}>|</span>
        </h2>

        <p style={styles.description}>
          AI-driven automation to organize emails and analyze resumes effortlessly.
        </p>

        <div style={{ marginTop: "30px" }}>
          <Link to="/login">
            <button style={styles.primaryBtn}>Login</button>
          </Link>

          <Link to="/signup">
            <button style={styles.secondaryBtn}>Signup</button>
          </Link>
        </div>

        {/* Feature Cards */}
        <div style={styles.cardContainer}>
          <div style={styles.card} onClick={() => navigate("/login")}>
            📧
            <h3>Email Segregation</h3>
            <p>Automatically classify emails into smart categories.</p>
          </div>

          <div style={styles.card} onClick={() => navigate("/login")}>
            📄
            <h3>Resume Upload</h3>
            <p>Upload resumes and extract structured insights.</p>
          </div>

          <div style={styles.card} onClick={() => navigate("/login")}>
            📊
            <h3>AI Dashboard</h3>
            <p>View categorized results in a clean dashboard.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    minHeight: "100vh",
    backgroundColor: "black",
    backgroundImage:
      "url('/assets/background.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  content: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "100px",
    textAlign: "center",
  },
  title: {
    fontSize: "3rem",
    color: "#00ffcc",
    textShadow: "0 0 10px #00ffcc",
  },
  typing: {
    fontSize: "1.8rem",
    height: "40px",
    marginTop: "15px",
    color: "#00ffcc",
  },
  cursor: {
    animation: "blink 1s infinite",
  },
  description: {
    marginTop: "20px",
    width: "60%",
    opacity: 0.9,
  },
  primaryBtn: {
    padding: "12px 25px",
    marginRight: "15px",
    backgroundColor: "#00ffcc",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  secondaryBtn: {
    padding: "12px 25px",
    backgroundColor: "transparent",
    border: "2px solid #00ffcc",
    color: "#00ffcc",
    borderRadius: "25px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "60px",
    flexWrap: "wrap",
  },
  card: {
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(0,255,204,0.3)",
    padding: "20px",
    borderRadius: "15px",
    width: "250px",
    textAlign: "center",
    transition: "0.3s",
    cursor: "pointer",
  },
};

export default Home;