const express = require('express');
const Campaign = require('../models/Campaign');

const router = express.Router();

/**
 * Erstellt eine neue Werbekampagne.
 * In der MVP‑Phase werden nur die grundlegenden Felder gespeichert.
 */
router.post('/', async (req, res) => {
  try {
    const campaign = new Campaign(req.body);
    await campaign.save();
    res.status(201).json(campaign);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/** Gibt alle Kampagnen zurück. */
router.get('/', async (req, res) => {
  const campaigns = await Campaign.find();
  res.json(campaigns);
});

module.exports = router;
