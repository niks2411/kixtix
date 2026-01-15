import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ServicePage.css';

const BulkSMS = () => {
    const features = [
        { icon: '🚫', title: 'DND & Non-DND', description: 'We work on both DND (Do Not Disturb) and Non-DND services to maximize your reach.' },
        { icon: '📊', title: '50 Crore+ Database', description: 'Access to a massive customer database of over 50 crores, useful for both smartphone and feature phone users.' },
        { icon: '📢', title: 'Promotional SMS', description: 'SMSs sent with the objective of promoting your product or service, including sales and marketing messages.' },
        { icon: '🔔', title: 'Transactional SMS', description: 'Messages sent to customers to pass on information necessary for using your product or service.' },
        { icon: '✏️', title: 'Personalization', description: 'Easily personalize your bulk SMS with customer names and custom content.' },
        { icon: '📈', title: 'Real-time Reports', description: 'Get real-time delivery reports and detailed analytics for your campaigns.' },
        { icon: '⏰', title: 'Schedule Options', description: 'Schedule your SMS campaigns for optimal delivery times.' },
        { icon: '📋', title: 'Contact Management', description: 'Flexible contact management with SMS history tracking.' },
    ];

    const stats = [
        { number: '50Cr+', label: 'Database Reach' },
        { number: '99%', label: 'Delivery Rate' },
        { number: '10sec', label: 'Delivery Speed' },
        { number: '24/7', label: 'Support' },
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
                        <span className="badge">📱 Bulk SMS</span>
                        <h1 className="service-hero-title">Bulk <span className="gradient-text">SMS</span></h1>
                        <p className="service-hero-subtitle">
                            Increase sales and customer satisfaction with smarter SMS campaigns. Our bulk SMS campaign
                            makes managing the database easier and ensures improved productivity.
                        </p>
                        <div className="service-hero-actions">
                            <Link to="/contact" className="btn btn-primary btn-lg">Start SMS Campaign</Link>
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
                        <h2 className="section-title">Our <span className="gradient-text">Features</span></h2>
                        <p className="section-subtitle">Everything you need for effective SMS marketing</p>
                    </motion.div>
                    <div className="features-grid">
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
                        <h2 className="cta-title">Ready to Reach 50 Crore+ People?</h2>
                        <p className="cta-subtitle">Start your bulk SMS campaign today with the highest delivery rates.</p>
                        <div className="cta-actions">
                            <Link to="/contact" className="btn btn-primary btn-lg">Get Started</Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default BulkSMS;
