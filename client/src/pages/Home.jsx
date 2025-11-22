import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hero-video"
                >
                    <source src="http://localhost:3000/assets/videos/video1.mp4" type="video/mp4" />
                    <img src="http://localhost:3000/assets/images/night.jpg" alt="Starry Night" />
                </video>

                <div className="hero-content container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        "I dream my painting and I paint my dream."
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Immerse yourself in the vibrant world of Vincent van Gogh.
                    </motion.p>
                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Link to="/gallery" className="btn btn-primary">Explore Collection</Link>
                    </motion.div>
                </div>
            </section>

            {/* Masterpieces Section */}
            <section className="section masterpieces">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Masterpieces</h2>
                        <p>Iconic works that defined an era.</p>
                    </motion.div>

                    <div className="masterpiece-grid">
                        <motion.div
                            className="masterpiece-card"
                            whileHover={{ scale: 1.05 }}
                        >
                            <img src="http://localhost:3000/assets/images/night.jpg" alt="Starry Night" />
                            <div className="card-overlay">
                                <h3>The Starry Night</h3>
                            </div>
                        </motion.div>
                        <motion.div
                            className="masterpiece-card"
                            whileHover={{ scale: 1.05 }}
                        >
                            <img src="http://localhost:3000/assets/images/3.jpg" alt="Sunflowers" />
                            <div className="card-overlay">
                                <h3>Sunflowers</h3>
                            </div>
                        </motion.div>
                        <motion.div
                            className="masterpiece-card"
                            whileHover={{ scale: 1.05 }}
                        >
                            <img src="http://localhost:3000/assets/images/4.jpg" alt="The Bedroom" />
                            <div className="card-overlay">
                                <h3>The Bedroom</h3>
                            </div>
                        </motion.div>
                    </div>
                    <div className="center-btn">
                        <Link to="/gallery" className="btn btn-secondary">View All Works</Link>
                    </div>
                </div>
            </section>

            {/* The Man Section */}
            <section className="section the-man">
                <div className="container">
                    <div className="split-layout">
                        <motion.div
                            className="text-side"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2>The Man Behind the Canvas</h2>
                            <p>
                                Vincent van Gogh (1853–1890) created about 2,100 artworks in just over a decade.
                                His life was marked by passion, struggle, and an unyielding dedication to his craft.
                            </p>
                            <Link to="/history" className="btn btn-primary">Read His Story</Link>
                        </motion.div>
                        <motion.div
                            className="image-side"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img src="http://localhost:3000/assets/images/van4.jpg" alt="Vincent" />
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
