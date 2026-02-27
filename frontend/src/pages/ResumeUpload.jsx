import { useState } from "react";

function ResumeUpload() {
  const [resumeSkills] = useState([
    "Python",
    "React",
    "Machine Learning",
    "NLP",
  ]);

  const [jobDescription, setJobDescription] = useState("");
  const [missingSkills, setMissingSkills] = useState([]);

  const analyzeSkills = () => {
    const jobSkills = jobDescription
      .split(",")
      .map((skill) => skill.trim());

    const missing = jobSkills.filter(
      (skill) => !resumeSkills.includes(skill)
    );

    setMissingSkills(missing);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Resume Upload & Skill Match</h2>

      <p><strong>Your Resume Skills:</strong></p>
      <div style={{ marginBottom: "20px" }}>
        {resumeSkills.map((skill, index) => (
          <span key={index} style={styles.skill}>
            {skill}
          </span>
        ))}
      </div>

      <textarea
        placeholder="Enter Job Required Skills (comma separated)
Example: Python, React, Docker, AWS"
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        style={styles.textarea}
      />

      <br />
      <button onClick={analyzeSkills} style={{ marginTop: "10px" }}>
        Analyze
      </button>

      {missingSkills.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h4>Missing Skills:</h4>
          {missingSkills.map((skill, index) => (
            <span key={index} style={styles.missing}>
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  skill: {
    background: "#00ffcc33",
    padding: "6px 12px",
    margin: "5px",
    borderRadius: "8px",
    display: "inline-block",
  },
  missing: {
    background: "#ff4d4d",
    padding: "6px 12px",
    margin: "5px",
    borderRadius: "8px",
    display: "inline-block",
    color: "white",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "10px",
    background: "#121212",
    color: "white",
    border: "1px solid #00ffcc33",
    borderRadius: "8px",
  },
};

export default ResumeUpload;