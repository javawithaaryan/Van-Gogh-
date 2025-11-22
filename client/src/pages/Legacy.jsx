import { motion } from 'framer-motion';
import '../styles/Legacy.css';

const Legacy = () => {
    return (
        <div className="legacy-page">
            <div className="legacy-header">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Legacy & Impact
                    </motion.h1>
                    <p>How Vincent van Gogh reshaped the course of modern art.</p>
                </div>
            </div>

            <div className="container legacy-content">
                <section className="legacy-section">
                    <div className="legacy-text">
                        <h2>The Post-Impressionist Pioneer</h2>
                        <p>
                            Vincent van Gogh is considered one of the greatest Post-Impressionists. His work had a powerful influence on the development of modern painting, particularly on the Expressionist movement in early 20th-century art.
                        </p>
                        <p>
                            His bold use of color, expressive brushwork, and contoured forms were revolutionary. Unlike the Impressionists, who focused on light and atmospheric effects, Van Gogh used color and line to express emotion and his inner state.
                        </p>
                    </div>
                    <div className="legacy-image">
                        <img src="http://localhost:3000/assets/images/van1.jpg" alt="Van Gogh Self Portrait" />
                    </div>
                </section>

                <section className="legacy-section reverse">
                    <div className="legacy-text">
                        <h2>Influence on Expressionism</h2>
                        <p>
                            Artists like Edvard Munch and the German Expressionists were deeply inspired by Van Gogh's ability to convey raw human emotion. His "Starry Night" is often cited as a precursor to Expressionism, where the subjective experience takes precedence over objective reality.
                        </p>
                        <p>
                            "I want to touch people with my art. I want them to say 'he feels deeply, he feels tenderly'." — Vincent van Gogh
                        </p>
                    </div>
                    <div className="legacy-image">
                        <img src="http://localhost:3000/assets/images/night.jpg" alt="Starry Night" />
                    </div>
                </section>

                <section className="legacy-section">
                    <div className="legacy-text">
                        <h2>Cultural Icon</h2>
                        <p>
                            Today, Van Gogh is a universal cultural icon. His life story—the "tortured artist"—has become as famous as his work. Museums dedicated to his art, especially the Van Gogh Museum in Amsterdam, attract millions of visitors annually.
                        </p>
                        <p>
                            His paintings are among the most expensive ever sold, a stark contrast to his life of poverty where he sold only one painting.
                        </p>
                    </div>
                    <div className="legacy-image">
                        <img src="http://localhost:3000/assets/images/van5.jpg" alt="Van Gogh Museum" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Legacy;
