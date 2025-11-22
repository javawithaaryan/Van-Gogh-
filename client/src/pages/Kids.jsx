import { motion } from 'framer-motion';
import '../styles/Kids.css';

const Kids = () => {
    return (
        <div className="kids-page">
            <div className="kids-hero">
                <motion.div
                    className="kids-hero-content"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                >
                    <h1>Vincent's World 🎨</h1>
                    <p>Explore, Create, and Learn!</p>
                </motion.div>
            </div>

            <div className="container kids-content">
                <section className="kids-section">
                    <h2>Meet Vincent</h2>
                    <div className="story-bubble-grid">
                        <div className="story-bubble">
                            <span className="icon">🏠</span>
                            <p>Born in Holland</p>
                        </div>
                        <div className="story-bubble">
                            <span className="icon">🌻</span>
                            <p>Loved Sunflowers</p>
                        </div>
                        <div className="story-bubble">
                            <span className="icon">🖌️</span>
                            <p>Used Thick Paint</p>
                        </div>
                        <div className="story-bubble">
                            <span className="icon">🌟</span>
                            <p>Painted Stars</p>
                        </div>
                    </div>
                </section>

                <section className="kids-section activity-section">
                    <h2>Art Activity: Paint Like Vincent!</h2>
                    <div className="activity-card">
                        <div className="activity-step">
                            <div className="step-number">1</div>
                            <p>Get some bright yellow and blue paint.</p>
                        </div>
                        <div className="activity-step">
                            <div className="step-number">2</div>
                            <p>Don't smooth it out! Make swirls and bumps.</p>
                        </div>
                        <div className="activity-step">
                            <div className="step-number">3</div>
                            <p>Paint something you see every day, like your room or a flower.</p>
                        </div>
                    </div>
                    <div className="activity-image">
                        <img src="http://localhost:3000/assets/images/night.jpg" alt="Starry Night" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Kids;
