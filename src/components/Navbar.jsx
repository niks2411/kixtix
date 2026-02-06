import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [hoveredService, setHoveredService] = useState(0);
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
        {
            name: 'Digital Marketing',
            path: '/services/digital-marketing',
            icon: '📊',
            subtitle: 'Core Expertise',
            badge: '⭐',
            image: '/images/digital-marketing.png'
        },
        {
            name: 'Video Promotions',
            path: '/services/video-promotions',
            icon: '🎬',
            subtitle: 'Core Expertise',
            badge: '⭐',
            image: '/images/video-promotions.png'
        },
        {
            name: 'Content Aggregation',
            path: '/services/content-aggregation',
            icon: '📦',
            subtitle: 'Distribution',
            badge: '',
            image: '/images/content-aggregation.png'
        },
        {
            name: 'WhatsApp Marketing',
            path: '/services/whatsapp-marketing',
            icon: '💬',
            subtitle: 'Direct Marketing',
            badge: '',
            image: '/images/whatsapp-marketing.png'
        },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                {/* Logo */}
                {/* Logo */}
                <Link to="/" className="navbar-logo">
                    <div className="logo-icon-wrapper">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#C4FF3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 8L16 12L10 16V8Z" fill="#C4FF3C" stroke="#C4FF3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22 12H23M12 2V1M12 22V23M2 12H1" stroke="#C4FF3C" strokeWidth="1.5" strokeLinecap="round" strokeAlpha="0.5" />
                        </svg>
                    </div>
                    <div className="logo-text-group">
                        <span className="logo-text-main">KIXTIX</span>
                        <span className="logo-text-sub">MEDIA</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="navbar-links">
                    <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                        Home
                    </NavLink>

                    {/* Services Mega Dropdown */}
                    <div
                        className="nav-dropdown"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => { setIsServicesOpen(false); setHoveredService(0); }}
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
                                    className="mega-dropdown"
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2, ease: 'easeOut' }}
                                >
                                    <div className="mega-dropdown-left">
                                        {services.map((service, index) => (
                                            <NavLink
                                                key={service.path}
                                                to={service.path}
                                                className={({ isActive }) => `mega-dropdown-item ${isActive ? 'active' : ''} ${hoveredService === index ? 'hovered' : ''}`}
                                                onMouseEnter={() => setHoveredService(index)}
                                            >
                                                <span className="mega-item-icon">{service.icon}</span>
                                                <div className="mega-item-content">
                                                    <span className="mega-item-name">{service.name}</span>
                                                    <span className="mega-item-subtitle">
                                                        {service.subtitle} {service.badge && <span className="mega-item-badge">{service.badge}</span>}
                                                    </span>
                                                </div>
                                            </NavLink>
                                        ))}
                                    </div>
                                    <div className="mega-dropdown-right">
                                        <AnimatePresence mode="wait">
                                            <motion.img
                                                key={hoveredService}
                                                src={services[hoveredService].image}
                                                alt={services[hoveredService].name}
                                                className="mega-dropdown-image"
                                                initial={{ opacity: 0, scale: 1.05 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                            />
                                        </AnimatePresence>
                                    </div>
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
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
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
