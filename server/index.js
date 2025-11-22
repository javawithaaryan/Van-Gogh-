const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static assets
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

// API Routes
const apiRouter = require('./routes/api');
app.use('/api', apiRouter);

// Default route
app.get('/', (req, res) => {
  res.send('Starry Night API is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
