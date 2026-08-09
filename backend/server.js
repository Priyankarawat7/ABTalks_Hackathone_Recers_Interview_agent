const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const interviewRoutes = require("./routes/interviewRoutes");

// Health check route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AI Interview Agent API is running on Vercel Serverless!",
  });
});

// Basic API
app.get("/api/hello", (req, res) => {
  res.json({
    success: true,
    data: "Hello from Vercel API 👋",
  });
});

// Main Route (Technical Spec Requirement)
app.use("/api/interview", interviewRoutes);

// Local development ke liye listen karein
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running locally on http://localhost:${PORT}`);
  });
}

module.exports = app;
