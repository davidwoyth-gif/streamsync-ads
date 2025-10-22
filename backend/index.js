const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const streamerRoutes = require('./routes/streamers');
const campaignRoutes = require('./routes/campaigns');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(
  process.env.MONGO_URI || 'mongodb://localhost/streamsyncads',
  { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then(() => console.log('MongoDB verbunden'))
  .catch(err => console.error(err));

app.use(cors());
app.use(express.json());

app.use('/api/streamers', streamerRoutes);
app.use('/api/campaigns', campaignRoutes);

app.get('/', (req, res) => {
  res.send('StreamSync Ads Backend');
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
