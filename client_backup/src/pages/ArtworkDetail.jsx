import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getArtworks } from '../services/api';
import '../styles/ArtworkDetail.css';

const ArtworkDetail = () => {
    const { id } = useParams();
    const [artwork, setArtwork] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const artworks = await getArtworks();
            const found = artworks.find(a => a.id === id);
            setArtwork(found);
            setLoading(false);
        };
        fetchData();
    }, [id]);

    if (loading) return <div className="loader">Loading...</div>;
    if (!artwork) return <div className="container"><h2>Artwork not found</h2><Link to="/gallery">Back to Gallery</Link></div>;

    return (
        <div className="artwork-detail-page">
            <div className="container">
                <Link to="/gallery" className="back-link">← Back to Gallery</Link>

                <div className="artwork-detail-content">
                    <motion.div
                        className="artwork-image-container"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <img
                            src={`http://localhost:3000/assets/images/${artwork.image}`}
                            alt={artwork.title}
                        />
                    </motion.div>

                    <motion.div
                        className="artwork-info"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h1>{artwork.title}</h1>
                        <div className="meta-row">
                            <span className="label">Year:</span>
                            <span className="value">{artwork.year}</span>
                        </div>
                        <div className="meta-row">
                            <span className="label">Location:</span>
                            <span className="value">{artwork.location}</span>
                        </div>
                        <div className="meta-row">
                            <span className="label">Medium:</span>
                            <span className="value">{artwork.medium}</span>
                        </div>
                        {artwork.dimensions && (
                            <div className="meta-row">
                                <span className="label">Dimensions:</span>
                                <span className="value">{artwork.dimensions}</span>
                            </div>
                        )}
                        {artwork.credits && (
                            <div className="meta-row">
                                <span className="label">Credits:</span>
                                <span className="value">{artwork.credits}</span>
                            </div>
                        )}

                        <div className="description-section">
                            <h3>Description</h3>
                            <p>{artwork.description}</p>
                        </div>

                        {artwork.story && (
                            <div className="story-section">
                                <h3>The Story</h3>
                                <p>{artwork.story}</p>
                            </div>
                        )}

                        <div className="color-palette">
                            <h3>Color Palette</h3>
                            <div className="palette-row">
                                {artwork.colorPalette && artwork.colorPalette.map((color, index) => (
                                    <div
                                        key={index}
                                        className="color-swatch"
                                        style={{ backgroundColor: color }}
                                        title={color}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ArtworkDetail;
