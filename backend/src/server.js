const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const User = require("./models/User");
const RawEmail = require("./models/RawEmail");
const ClassifiedEmail = require("./models/ClassifiedEmail");


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

// ---------- GET /api/test-user (find or create one user) ----------
app.get("/api/test-user", async (req, res) => {
  try {
    let user = await User.findOne({ email: "first-get@example.com" });
    if (!user) {
      user = await User.create({
        name: "First User",
        email: "first-get@example.com",
      });
    }
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// ---------- POST /api/test-user (optional example) ----------
app.post("/api/test-user", async (req, res) => {
  try {
    const user = await User.create({
      name: "First User",
      email: "first@example.com",
    });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create user" });
  }
});

// ---------- GET /api/test-email (create one raw email) ----------
app.get("/api/test-email", async (req, res) => {
  try {
    const user = await User.findOne({ email: "first-get@example.com" });
    if (!user) {
      return res.status(400).json({ error: "No user found" });
    }

    const email = await RawEmail.create({
      userId: user._id,
      messageId: "dummy-message-id-123",
      threadId: "dummy-thread-id-1",
      from: "sender@example.com",
      to: [user.email],
      subject: "Test raw email",
      snippet: "This is a test raw email snippet",
      bodyText: "Full body text of the test email.",
      receivedAt: new Date(),
      isRead: false,
      labels: ["INBOX", "TEST"],
    });

    res.json(email);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create test email" });
  }
});
// ---------- GET /api/test-classified-email ----------
app.get("/api/test-classified-email", async (req, res) => {
  try {
    // use the same test user
    const user = await User.findOne({ email: "first-get@example.com" });
    if (!user) {
      return res.status(400).json({ error: "No user found, hit /api/test-user first" });
    }

    // pick one raw email of that user
    const rawEmail = await RawEmail.findOne({ userId: user._id });
    if (!rawEmail) {
      return res
        .status(400)
        .json({ error: "No raw email found, hit /api/test-email first" });
    }

    const classified = await ClassifiedEmail.create({
      userId: user._id,
      emailId: rawEmail._id,
      mainCategory: "job",
      subCategory: "internship",
      spamScore: 0.1,
      priorityLevel: "high",
      modelVersion: "demo-v1",
      needsReview: false,
    });

    res.json(classified);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create classified email" });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
