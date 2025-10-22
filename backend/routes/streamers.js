const express = require('express');
const Streamer = require('../models/Streamer');

const router = express.Router();

/**
 * Registriert einen Streamer im System.
 * In der MVP‑Phase wird nur Username & Plattform gespeichert.
 */
router.post('/register', async (req, res) => {
  try {
    const { username, platform } = req.body;
    const streamer = new Streamer({ username, platform });
    await streamer.save();
    res.status(201).json(streamer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
