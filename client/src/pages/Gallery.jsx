import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getArtworks } from '../services/api';
import '../styles/Gallery.css';

const Gallery = () => {
    const [allArtworks, setAllArtworks] = useState([]);
    const [displayedArtworks, setDisplayedArtworks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);
    const [activeCategory, setActiveCategory] = useState('All');
    const itemsPerPage = 12;

    const categories = ['All', 'Paintings', 'Drawings'];

    useEffect(() => {
        const fetchData = async () => {
            const data = await getArtworks();
            const items = Array.isArray(data) ? data : [];
            setAllArtworks(items);
            setDisplayedArtworks(items.slice(0, itemsPerPage));
            setLoading(false);
        };
        fetchData();
    }, []);

    useEffect(() => {
        let result = allArtworks;

        // Filter by Category
        if (activeCategory !== 'All') {
            result = result.filter(art => art.category === activeCategory);
        }

        // Filter by Search
        if (searchTerm) {
            result = result.filter(art =>
                art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (art.description && art.description.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }

        // Reset to page 1 on filter change
        setDisplayedArtworks(result.slice(0, page * itemsPerPage));
    }, [searchTerm, allArtworks, page, activeCategory]);

    const loadMore = () => {
        setPage(prev => prev + 1);
    };

    return (
        <div className="gallery-page">
            <div className="gallery-header">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        The Collection
                    </motion.h1>
                    <p>Explore 5000+ works by Vincent van Gogh.</p>

                    <div className="category-tabs">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => { setActiveCategory(cat); setPage(1); }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Search the collection..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                    </div>
                </div>
            </div>

            <div className="container gallery-container">
                {loading ? (
                    <div className="loader">Loading...</div>
                ) : (
                    <>
                        <motion.div layout className="gallery-grid">
                            <AnimatePresence>
                                {displayedArtworks.map((artwork, index) => (
                                    <Link to={`/artwork/${artwork.id}`} key={`${artwork.id}-${index}`} className="gallery-link">
                                        <motion.div
                                            layout
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="gallery-item"
                                        >
                                            <img
                                                src={`http://localhost:3000/assets/images/${artwork.image}`}
                                                alt={artwork.title || 'Artwork'}
                                                loading="lazy"
                                            />
                                            <div className="overlay">
                                                <h3>{artwork.title || 'Untitled'}</h3>
                                                <p>{artwork.category || 'Painting'}</p>
                                            </div>
                                        </motion.div>
                                    </Link>
                                ))}
                            </AnimatePresence>
                        </motion.div>

                        {displayedArtworks.length > 0 && !searchTerm && (
                            <div className="load-more-container">
                                <button onClick={loadMore} className="btn btn-primary">Load More</button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Gallery;
