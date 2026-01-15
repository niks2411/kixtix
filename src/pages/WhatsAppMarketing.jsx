import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ServicePage.css';

const WhatsAppMarketing = () => {
    const features = [
        { icon: '👥', title: '800M+ Users', description: 'Reach over 800 million WhatsApp users worldwide with your marketing campaigns.' },
        { icon: '🖼️', title: 'Multimedia Messages', description: 'Send text, images, videos, audio, VCards, and even location - much more than traditional SMS.' },
        { icon: '💰', title: 'Cost Effective', description: 'The cheapest way of sending messages worldwide compared to traditional channels.' },
        { icon: '📍', title: 'Location Sharing', description: 'Share your business location directly with potential customers.' },
        { icon: '📊', title: 'High Engagement', description: 'WhatsApp messages have significantly higher open and response rates than email.' },
        { icon: '🎯', title: 'Direct Marketing', description: 'Connect directly with customers in a personal, conversational format.' },
    ];

    const stats = [
        { number: '800M+', label: 'Global Users' },
        { number: '98%', label: 'Open Rate' },
        { number: '45%', label: 'Response Rate' },
        { number: '24/7', label: 'Reach' },
    ];

    return (
        <div className="service-page">
            <section className="service-hero">
                <div className="service-hero-bg">
                    <div className="service-hero-gradient"></div>
                    <div className="service-hero-glow"></div>
                </div>
                <div className="container">
                    <motion.div className="service-hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="badge">💬 WhatsApp Marketing</span>
                        <h1 className="service-hero-title">WhatsApp <span className="gradient-text">Marketing</span></h1>
                        <p className="service-hero-subtitle">
                            WhatsApp Messenger has 800 Million+ users worldwide. It's the cheapest way of sending messages globally.
                            WhatsApp Marketing is now all set to compete and defeat traditional SMS Marketing.
                        </p>
                        <div className="service-hero-actions">
                            <Link to="/contact" className="btn btn-primary btn-lg">Start WhatsApp Campaign</Link>
                            <a href="tel:+917717278888" className="btn btn-secondary btn-lg">📞 Call Now</a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="service-stats">
                <div className="container">
                    <div className="service-stats-grid">
                        {stats.map((stat, index) => (
                            <motion.div key={stat.label} className="stat-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}>
                                <span className="stat-number">{stat.number}</span>
                                <span className="stat-label">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="service-features section">
                <div className="container">
                    <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="section-title">Why <span className="gradient-text">WhatsApp</span>?</h2>
                        <p className="section-subtitle">The most effective direct marketing channel available today</p>
                    </motion.div>
                    <div className="features-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                        {features.map((feature, index) => (
                            <motion.div key={feature.title} className="feature-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }}>
                                <span className="feature-icon">{feature.icon}</span>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="service-cta section">
                <div className="container">
                    <motion.div className="cta-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="cta-title">Ready for WhatsApp Marketing?</h2>
                        <p className="cta-subtitle">Reach millions of potential customers directly on their phones.</p>
                        <div className="cta-actions">
                            <Link to="/contact" className="btn btn-primary btn-lg">Get Started</Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default WhatsAppMarketing;
