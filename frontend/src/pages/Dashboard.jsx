import { useState } from "react";

function Dashboard() {
  const [stats] = useState({
    totalEmails: 128,
    jobEmails: 34,
    resumeMatches: 5,
    highPriority: 12,
  });

  return (
    <div style={styles.container}>
      <h2>AI Dashboard</h2>

      <div style={styles.grid}>
        <Card title="Total Emails" value={stats.totalEmails} />
        <Card title="Job Related Emails" value={stats.jobEmails} />
        <Card title="Resume Matches" value={stats.resumeMatches} />
        <Card title="High Priority" value={stats.highPriority} />
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div style={styles.card}>
      <h4>{title}</h4>
      <p style={styles.value}>{value}</p>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    background: "#121212",
    border: "1px solid #00ffcc33",
    padding: "20px",
    borderRadius: "12px",
  },
  value: {
    fontSize: "28px",
    color: "#00ffcc",
  },
};

export default Dashboard;