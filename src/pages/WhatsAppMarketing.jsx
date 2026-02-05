import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PhoneMockup from '../components/ui/PhoneMockup';
import './ServicePage.css';

const WhatsAppMarketing = () => {
    // Chat messages for the phone mockup
    const chatMessages = [
        { text: "Tell me about WhatsApp marketing!", isUser: true, time: "10:31 AM" },
        { text: "WhatsApp has 800M+ active users! We help you reach them directly with personalized campaigns.", isUser: false, time: "10:31 AM" },
        { text: "What's the delivery rate?", isUser: true, time: "10:32 AM" },
        { text: "98% delivery rate with 90%+ open rate! Much better than email or SMS marketing.", isUser: false, time: "10:32 AM" },
        { text: "Can I send images and videos?", isUser: true, time: "10:33 AM" },
        { text: "Absolutely! Rich media including images, videos, documents, and audio. Engage your audience like never before! 🎯", isUser: false, time: "10:33 AM" },
    ];

    const features = [
        { title: 'Targeted Campaigns', description: 'Reach specific demographics with personalized messages.' },
        { title: 'Campaign Analytics', description: 'Track delivery, read rates, and engagement metrics.' },
        { title: 'Automation', description: 'Set up automated responses and drip campaigns.' },
        { title: 'Secure & Compliant', description: 'End-to-end encryption for all business communications.' },
    ];

    const stats = [
        { number: '98%', label: 'Delivery Rate' },
        { number: '90%+', label: 'Open Rate' },
        { number: '1M+', label: 'Messages Sent' },
        { number: '500+', label: 'Happy Clients' },
    ];

    return (
        <div className="service-page whatsapp-marketing-page">
            {/* Background Image */}
            <div className="service-bg-image" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'url(/images/bg-whatsapp-marketing.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.5,
                pointerEvents: 'none',
                zIndex: 0,
            }} />

            {/* Hero Section with Phone Mockup */}
            <section className="service-hero" style={{ minHeight: '100vh', paddingTop: '120px' }}>
                <div className="service-hero-bg">
                    <div className="service-hero-gradient" style={{
                        background: 'radial-gradient(ellipse at 50% 0%, rgba(37, 211, 102, 0.12) 0%, transparent 50%)'
                    }}></div>
                    <div className="service-hero-glow" style={{
                        background: 'radial-gradient(ellipse, rgba(37, 211, 102, 0.15) 0%, transparent 60%)'
                    }}></div>
                </div>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '4rem',
                        alignItems: 'center',
                    }}>
                        {/* Left - Text Content */}
                        <motion.div
                            className="service-hero-content"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            style={{ textAlign: 'left' }}
                        >
                            <motion.span
                                className="badge"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                style={{ background: 'rgba(37, 211, 102, 0.15)', color: '#25D366' }}
                            >
                                WhatsApp Marketing
                            </motion.span>
                            <h1 className="service-hero-title" style={{ fontSize: '3rem' }}>
                                Direct Customer <span style={{ color: '#25D366' }}>Engagement</span>
                            </h1>
                            <p className="service-hero-subtitle">
                                Capitalize on WhatsApp's 800+ million active users to reach prospective customers directly.
                                Build meaningful relationships through personalized messaging that drives conversions and loyalty.
                            </p>
                            <div className="service-hero-actions">
                                <Link to="/contact" className="btn btn-primary btn-lg" style={{ background: '#25D366', borderColor: '#25D366' }}>
                                    Start WhatsApp Campaign
                                </Link>
                                <a href="tel:+917717278888" className="btn btn-secondary btn-lg">Call Now</a>
                            </div>
                        </motion.div>

                        {/* Right - Phone Mockup */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            style={{ position: 'relative', height: '700px' }}
                        >
                            <PhoneMockup messages={chatMessages} />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="service-stats" style={{
                borderColor: 'rgba(37, 211, 102, 0.2)',
                background: 'rgba(37, 211, 102, 0.03)'
            }}>
                <div className="container">
                    <div className="service-stats-grid">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                className="stat-item"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <span className="stat-number" style={{ color: '#25D366' }}>{stat.number}</span>
                                <span className="stat-label">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="service-features section" style={{ background: 'rgba(37, 211, 102, 0.02)' }}>
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center', marginBottom: '3rem' }}
                    >
                        <h2 className="section-title">Our <span style={{ color: '#25D366' }}>Capabilities</span></h2>
                    </motion.div>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                className="feature-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                style={{ borderColor: 'rgba(37, 211, 102, 0.15)' }}
                            >
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="service-cta section">
                <div className="container">
                    <motion.div
                        className="cta-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ borderColor: 'rgba(37, 211, 102, 0.3)' }}
                    >
                        <h2 className="cta-title">Ready to Connect with 800M+ Users?</h2>
                        <p className="cta-subtitle">Start your WhatsApp marketing campaign today and see immediate results.</p>
                        <div className="cta-actions">
                            <Link to="/contact" className="btn btn-primary btn-lg" style={{ background: '#25D366', borderColor: '#25D366' }}>
                                Get Started Now
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default WhatsAppMarketing;
