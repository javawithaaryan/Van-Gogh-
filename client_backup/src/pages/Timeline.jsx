import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getTimeline } from '../services/api';
import '../styles/Timeline.css';

const Timeline = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getTimeline();
            const sortedData = Array.isArray(data) ? data.sort((a, b) => parseInt(a.year) - parseInt(b.year)) : [];
            setEvents(sortedData);
            setLoading(false);
        };
        fetchData();
    }, []);

    return (
        <div className="timeline-page">
            <div className="timeline-header">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Life Timeline
                    </motion.h1>
                    <p>A journey through the life of Vincent van Gogh (1853–1890).</p>
                </div>
            </div>

            <div className="container">
                {loading ? (
                    <div className="loader">Loading...</div>
                ) : (
                    <div className="timeline">
                        {events.map((event, index) => (
                            <motion.div
                                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="timeline-content">
                                    <div className="date">{event.year}</div>
                                    {event.image && (
                                        <div className="timeline-image">
                                            <img src={`http://localhost:3000/assets/images/${event.image}`} alt={event.title} />
                                        </div>
                                    )}
                                    <h3>{event.title || event.event}</h3>
                                    <p>{event.description}</p>
                                    <span className="location-tag">📍 {event.location}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Timeline;
