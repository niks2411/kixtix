import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ServicePage.css';

const VoiceCalls = () => {
    const features = [
        { icon: '📞', title: 'Mass Communication', description: 'Take a recorded voice message to hundreds or thousands of recipients in a short span of time.' },
        { icon: '🔔', title: 'Community Alerts', description: 'Perfect for community alerts, notifications, and urgent announcements.' },
        { icon: '📢', title: 'Business Promotions', description: 'Powerful tool for promoting products and disseminating messages and information.' },
        { icon: '🌍', title: 'Language Customization', description: 'Customize messages in different languages to reach people of diverse geographical backgrounds.' },
        { icon: '⚡', title: 'Quick Delivery', description: 'Reach a large number of people in a relatively shorter period of time.' },
        { icon: '📊', title: 'Campaign Tracking', description: 'Track call delivery, answer rates, and campaign performance in real-time.' },
    ];

    const stats = [
        { number: '1M+', label: 'Calls/Day Capacity' },
        { number: '95%', label: 'Delivery Rate' },
        { number: '10+', label: 'Languages' },
        { number: '24/7', label: 'Availability' },
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
                        <span className="badge">📞 Voice Calls</span>
                        <h1 className="service-hero-title">Bulk Voice <span className="gradient-text">Calls</span></h1>
                        <p className="service-hero-subtitle">
                            Bulk voice call is a simple communication technology that allows you to take a recorded voice message
                            to hundreds or thousands of call recipients in a short span of time.
                        </p>
                        <div className="service-hero-actions">
                            <Link to="/contact" className="btn btn-primary btn-lg">Start Voice Campaign</Link>
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
                        <h2 className="section-title">Why Voice <span className="gradient-text">Calls</span>?</h2>
                        <p className="section-subtitle">The most personal way to reach your audience at scale</p>
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
                        <h2 className="cta-title">Ready for Bulk Voice Calls?</h2>
                        <p className="cta-subtitle">Reach thousands with personalized voice messages in multiple languages.</p>
                        <div className="cta-actions">
                            <Link to="/contact" className="btn btn-primary btn-lg">Get Started</Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default VoiceCalls;
