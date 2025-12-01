import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getLetters } from '../services/api';
import '../styles/Letters.css';

const Letters = () => {
    const [letters, setLetters] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getLetters();
            setLetters(data);
        };
        fetchData();
    }, []);

    return (
        <div className="letters-page">
            <div className="letters-header">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        The Letters
                    </motion.h1>
                    <p>A window into Vincent's soul.</p>
                </div>
            </div>

            <div className="container letters-grid">
                {letters.map((letter, index) => (
                    <motion.div
                        key={letter.id}
                        className="letter-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="letter-image">
                            <img src={`http://localhost:3000/assets/images/${letter.image}`} alt="Letter Facsimile" />
                            <div className="letter-date">{letter.year}</div>
                        </div>
                        <div className="letter-content">
                            <h3>{letter.title}</h3>
                            <p className="recipient">To: {letter.recipient}</p>
                            <p className="excerpt">"{letter.excerpt}"</p>
                            <div className="letter-footer">
                                <span className="location">📍 {letter.location}</span>
                                <button className="read-btn">Read Full Letter</button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Letters;
