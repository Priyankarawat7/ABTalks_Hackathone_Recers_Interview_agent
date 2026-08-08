const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "Interview routes working fine!"
    });
});

router.post("/start", (req, res) => {
    res.json({
        message: "Interview started successfully"
    });
});

module.exports = router;