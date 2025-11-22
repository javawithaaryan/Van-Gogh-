import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Stories', path: '/stories' },
        { name: 'Kids', path: '/kids' },
        { name: 'Timeline', path: '/timeline' },
        { name: 'Letters', path: '/letters' },
        { name: 'History', path: '/history' },
        { name: 'Legacy', path: '/legacy' },
    ];

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <Link to="/" className="navbar-brand">
                    <span className="brand-icon">🌻</span>
                    <div className="brand-text">
                        <h1>Van Gogh</h1>
                        <span>Chronicle</span>
                    </div>
                </Link>

                <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                            {location.pathname === link.path && (
                                <motion.div layoutId="underline" className="underline" />
                            )}
                        </Link>
                    ))}
                </div>

                <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
            <motion.div className="progress-bar" style={{ scaleX }} />
        </nav>
    );
};

export default Navbar;
