import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <h3>Vincent van Gogh</h3>
                    <p>A Comprehensive Chronicle of his life, art, and legacy.</p>
                </div>
                <div className="footer-section">
                    <h4>Explore</h4>
                    <ul>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="/timeline">Timeline</a></li>
                        <li><a href="/letters">Letters</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="https://www.vangoghmuseum.nl" target="_blank" rel="noreferrer">Van Gogh Museum</a></li>
                        <li><a href="https://vangoghletters.org" target="_blank" rel="noreferrer">Van Gogh Letters</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Van Gogh Chronicle. Developed by Aryan Rathore. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
