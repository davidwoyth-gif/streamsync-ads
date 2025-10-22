const mongoose = require('mongoose');

const streamerSchema = new mongoose.Schema({
  username: { type: String, required: true },
  platform: { type: String, required: true },
  accessToken: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Streamer', streamerSchema);
