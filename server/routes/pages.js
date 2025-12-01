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

// Home Page
router.get('/', (req, res) => {
    res.render('index', { title: 'Home', styles: ['Home.css'] });
});

// Gallery Page
router.get('/gallery', (req, res) => {
    let artworks = readData('artworks.json');
    const { category, search, page } = req.query;

    // Filter by Category
    if (category && category !== 'All') {
        artworks = artworks.filter(art => art.category === category);
    }

    // Filter by Search
    if (search) {
        const term = search.toLowerCase();
        artworks = artworks.filter(art =>
            (art.title && art.title.toLowerCase().includes(term)) ||
            (art.description && art.description.toLowerCase().includes(term))
        );
    }

    // Pagination
    const itemsPerPage = 12;
    const currentPage = parseInt(page) || 1;
    const totalItems = artworks.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const displayedArtworks = artworks.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    res.render('gallery', {
        title: 'Gallery',
        styles: ['Gallery.css'],
        artworks: displayedArtworks,
        category: category || 'All',
        search: search || '',
        currentPage,
        totalPages
    });
});

// Timeline Page
router.get('/timeline', (req, res) => {
    const events = readData('timeline.json');
    const sortedEvents = events.sort((a, b) => parseInt(a.year) - parseInt(b.year));
    res.render('timeline', {
        title: 'Timeline',
        styles: ['Timeline.css'],
        events: sortedEvents
    });
});

// Letters Page
router.get('/letters', (req, res) => {
    const letters = readData('letters.json');
    res.render('letters', {
        title: 'Letters',
        styles: ['Letters.css'],
        letters
    });
});

// History Page
router.get('/history', (req, res) => {
    const sections = [
        {
            title: "1853–1880: The Early Years",
            content: "Vincent van Gogh was born on March 30, 1853, in Groot Zundert, North Brabant. He was the eldest son of a Protestant minister. As a young man, he worked as an art dealer, a teacher, and a lay preacher. It wasn't until the age of 27 that he decided to become an artist.",
            image: "2.jpg",
            align: "left"
        },
        {
            title: "1880–1885: The Dutch Period",
            content: "Van Gogh began his artistic career in the Borinage, a mining district in Belgium. He later moved to the Netherlands, where he focused on drawing and painting peasant life. His masterpiece from this period is The Potato Eaters (1885), characterized by dark, earthy tones.",
            image: "21.jpg",
            align: "right"
        },
        {
            title: "1886–1888: Paris and the Avant-Garde",
            content: "In 1886, Vincent moved to Paris to live with his brother Theo. There, he met Impressionist artists like Monet and Pissarro. His palette lightened, and he began experimenting with broken brushstrokes and vibrant colors.",
            image: "8.jpg",
            align: "left"
        },
        {
            title: "1888–1889: Arles and the Studio of the South",
            content: "Seeking brighter light, Van Gogh moved to Arles in the south of France. He rented the 'Yellow House' and dreamed of establishing an artist colony. This period was incredibly prolific, producing works like The Sunflowers and The Bedroom. However, his mental health deteriorated, leading to the famous ear incident.",
            image: "9.jpg",
            align: "right"
        },
        {
            title: "1889–1890: Saint-Rémy and Auvers",
            content: "Vincent voluntarily entered the asylum at Saint-Rémy-de-Provence. Despite his illness, he continued to paint, creating The Starry Night. In May 1890, he moved to Auvers-sur-Oise to be closer to Theo and Dr. Gachet. On July 27, 1890, he shot himself in the chest and died two days later.",
            image: "6.jpg",
            align: "left"
        }
    ];
    res.render('history', {
        title: 'History',
        styles: ['History.css'],
        sections
    });
});

// Stories Page
router.get('/stories', (req, res) => {
    const artworks = readData('artworks.json');
    const stories = artworks.filter(item => item.story);
    res.render('stories', {
        title: 'Stories',
        styles: ['Stories.css'],
        stories
    });
});

// Kids Page
router.get('/kids', (req, res) => {
    res.render('kids', {
        title: 'Kids',
        styles: ['Kids.css']
    });
});

// Legacy Page
router.get('/legacy', (req, res) => {
    res.render('legacy', {
        title: 'Legacy',
        styles: ['Legacy.css']
    });
});

module.exports = router;
