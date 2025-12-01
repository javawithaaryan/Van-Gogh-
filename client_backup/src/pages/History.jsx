import { motion } from 'framer-motion';
import '../styles/History.css';

const History = () => {
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

    return (
        <div className="history-page">
            <div className="history-hero">
                <div className="hero-content">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        Vincent's Journey
                    </motion.h1>
                    <p>1853 — 1890</p>
                </div>
            </div>

            <div className="container history-content">
                {sections.map((section, index) => (
                    <motion.section
                        key={index}
                        className={`history-section ${section.align}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="text-content">
                            <h2>{section.title}</h2>
                            <p>{section.content}</p>
                        </div>
                        <div className="image-content">
                            <img src={`http://localhost:3000/assets/images/${section.image}`} alt={section.title} />
                        </div>
                    </motion.section>
                ))}
            </div>
        </div>
    );
};

export default History;
