const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'ABTalks API is running 🚀',
  });
});

// Basic API
app.get('/api/hello', (req, res) => {
  res.json({
    success: true,
    data: 'Hello from Vercel API 👋',
  });
});

// POST API
app.post('/api/message', (req, res) => {
  const { name, message } = req.body;

  res.json({
    success: true,
    received: { name, message },
  });
});

module.exports = app;