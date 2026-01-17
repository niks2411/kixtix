import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsServicesOpen(false);
    }, [location]);

    const services = [
        { name: 'Digital Marketing', path: '/services/digital-marketing', icon: '📊' },
        { name: 'Music Distribution', path: '/services/music-distribution', icon: '🎵' },
        { name: 'WhatsApp Marketing', path: '/services/whatsapp-marketing', icon: '💬' },
        { name: 'Bulk SMS', path: '/services/bulk-sms', icon: '📱' },
        { name: 'Voice Calls', path: '/services/voice-calls', icon: '📞' },
        { name: 'App Marketing', path: '/services/app-marketing', icon: '📲' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                {/* Logo */}
                <Link to="/" className="navbar-logo">
                    <span className="logo-text">KIXTIX</span>
                    <span className="logo-accent">MEDIA</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="navbar-links">
                    <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                        Home
                    </NavLink>



                    {/* Services Dropdown */}
                    <div
                        className="nav-dropdown"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                    >
                        <button className="nav-link nav-dropdown-trigger">
                            Services
                            <svg className={`dropdown-arrow ${isServicesOpen ? 'open' : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        <AnimatePresence>
                            {isServicesOpen && (
                                <motion.div
                                    className="dropdown-menu"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {services.map((service) => (
                                        <NavLink
                                            key={service.path}
                                            to={service.path}
                                            className={({ isActive }) => `dropdown-item ${isActive ? 'active' : ''}`}
                                        >
                                            <span className="dropdown-icon">{service.icon}</span>
                                            {service.name}
                                        </NavLink>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                        About
                    </NavLink>

                    <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                        Contact
                    </NavLink>
                </div>

                {/* CTA Button */}
                <Link to="/contact" className="navbar-cta">
                    Get Started
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="mobile-menu-content">
                            <NavLink to="/" className="mobile-link">Home</NavLink>


                            <div className="mobile-dropdown">
                                <button
                                    className="mobile-link mobile-dropdown-trigger"
                                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                                >
                                    Services
                                    <svg className={`dropdown-arrow ${isServicesOpen ? 'open' : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                <AnimatePresence>
                                    {isServicesOpen && (
                                        <motion.div
                                            className="mobile-submenu"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                        >
                                            {services.map((service) => (
                                                <NavLink
                                                    key={service.path}
                                                    to={service.path}
                                                    className="mobile-sublink"
                                                >
                                                    <span>{service.icon}</span>
                                                    {service.name}
                                                </NavLink>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <NavLink to="/about" className="mobile-link">About</NavLink>
                            <NavLink to="/contact" className="mobile-link">Contact</NavLink>

                            <Link to="/contact" className="mobile-cta">Get Started</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
