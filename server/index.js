const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static assets
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
const apiRouter = require('./routes/api');
app.use('/api', apiRouter);

// Pages Routes
const pagesRouter = require('./routes/pages');
app.use('/', pagesRouter);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('layout', {
    title: 'Error',
    body: '<div class="container" style="text-align: center; padding: 50px;"><h1>500 - Server Error</h1><p>Something went wrong. Please try again later.</p></div>'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
