const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const dataPath = path.join(__dirname, '../data');

// Helper to read JSON file
const readData = (filename) => {
    try {
        const data = fs.readFileSync(path.join(dataPath, filename), 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error(`Error reading ${filename}:`, err);
        return [];
    }
};

router.get('/artworks', (req, res) => {
    const data = readData('artworks.json');
    res.json(data);
});

router.get('/timeline', (req, res) => {
    const data = readData('timeline.json');
    res.json(data);
});

router.get('/letters', (req, res) => {
    const data = readData('letters.json');
    res.json(data);
});

router.get('/stories', (req, res) => {
    const data = readData('image-stories.json');
    res.json(data);
});

module.exports = router;
