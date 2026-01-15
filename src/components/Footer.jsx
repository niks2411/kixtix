import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const services = [
        { name: 'Video Promotions', path: '/video-promotions' },
        { name: 'Digital Marketing', path: '/services/digital-marketing' },
        { name: 'Music Distribution', path: '/services/music-distribution' },
        { name: 'WhatsApp Marketing', path: '/services/whatsapp-marketing' },
        { name: 'Bulk SMS', path: '/services/bulk-sms' },
        { name: 'App Marketing', path: '/services/app-marketing' },
    ];

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <footer className="footer">
            <div className="footer-glow"></div>
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Section */}
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <span className="logo-text">KIXTIX</span>
                            <span className="logo-accent">MEDIA</span>
                        </Link>
                        <p className="footer-tagline">
                            A music-focused promotion agency with powerful digital growth services.
                            We help music videos grow through strategic promotion.
                        </p>
                        <div className="footer-social">
                            <a href="https://www.facebook.com/kixtixofficial/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/kixtixmedia/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="footer-section">
                        <h4 className="footer-heading">Services</h4>
                        <ul className="footer-list">
                            {services.map((service) => (
                                <li key={service.path}>
                                    <Link to={service.path} className="footer-link">{service.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-list">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="footer-link">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section">
                        <h4 className="footer-heading">Contact Us</h4>
                        <ul className="footer-list footer-contact">
                            <li>
                                <span className="contact-icon">📞</span>
                                <a href="tel:+917717278888" className="footer-link">+91 77172 78888</a>
                            </li>
                            <li>
                                <span className="contact-icon">📧</span>
                                <a href="mailto:kixtixmedia@gmail.com" className="footer-link">kixtixmedia@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} Kixtix Media Pvt. Ltd. All rights reserved.
                    </p>
                    <p className="footer-director">
                        Director: <span className="text-accent">Vishal Sharma</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
