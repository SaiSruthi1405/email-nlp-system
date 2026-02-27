import { useState } from "react";

function MailSegregation() {
  const [emails] = useState([
    { subject: "Interview Call - Infosys", category: "Job" },
    { subject: "Project Review Tomorrow", category: "Important" },
    { subject: "NLP Internship Opportunity", category: "Job" },
    { subject: "College Cultural Fest", category: "General" },
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Email Segregation (AI Powered)</h2>

      {emails.map((email, index) => (
        <div key={index} style={styles.card}>
          <h4>{email.subject}</h4>
          <span style={getBadgeStyle(email.category)}>
            {email.category}
          </span>
        </div>
      ))}
    </div>
  );
}

const styles = {
  card: {
    background: "#121212",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

const getBadgeStyle = (category) => {
  let color = "#999";

  if (category === "Job") color = "#00ffcc";
  if (category === "Important") color = "#ff4d4d";
  if (category === "General") color = "#8888ff";

  return {
    background: color,
    padding: "5px 10px",
    borderRadius: "6px",
    fontSize: "12px",
    color: "black",
  };
};

export default MailSegregation;