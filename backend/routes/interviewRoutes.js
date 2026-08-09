// routes/interviewRoutes.js
const express = require('express');
const router = express.Router();

// ❌ Purana line (Error de raha tha):
// const { handleInterview } = require('../controllers/interviewController');

// ✅ Naya line (Sahi Relative Path):
const { handleInterview } = require('../controllers/interviewControllers');

router.post('/', handleInterview);

module.exports = router;