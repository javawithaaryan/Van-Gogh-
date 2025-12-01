import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getArtworks } from '../services/api';
import '../styles/Stories.css';

const Stories = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const artworks = await getArtworks();
            // Filter artworks that have a 'story' field
            const storyItems = artworks.filter(item => item.story);
            setStories(storyItems);
        };
        fetchData();
    }, []);

    return (
        <div className="stories-page">
            <div className="stories-header">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Van Gogh Stories
                    </motion.h1>
                    <p>Dive deeper into the tales behind the masterpieces.</p>
                </div>
            </div>

            <div className="container stories-grid">
                {stories.map((item, index) => (
                    <motion.div
                        key={index}
                        className="story-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="story-image">
                            <img src={`http://localhost:3000/assets/images/${item.image}`} alt={item.title} />
                        </div>
                        <div className="story-content">
                            <h3>{item.title}</h3>
                            <p className="story-excerpt">{item.story.substring(0, 120)}...</p>
                            <Link to={`/artwork/${item.id}`} className="read-more">Read Full Story &rarr;</Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Stories;
