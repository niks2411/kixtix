import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FloatingLogos from '../components/ui/FloatingLogos';
import './ServicePage.css';

const ContentAggregation = () => {
    const platforms = [
        { name: 'iTunes', bgColor: 'linear-gradient(135deg, #fb5c74 0%, #fc8b8b 100%)', image: '/images/1.png' },
        { name: 'Gaana', bgColor: 'linear-gradient(135deg, #e72c30 0%, #ff6b6b 100%)', image: '/images/2.png' },
        { name: 'Hungama', bgColor: 'linear-gradient(135deg, #00b894 0%, #55efc4 100%)', image: '/images/3.png' },
        { name: 'JioSaavn', bgColor: 'linear-gradient(135deg, #00d2d3 0%, #54a0ff 100%)', image: '/images/4.png' },
        { name: 'Spotify', bgColor: 'linear-gradient(135deg, #1db954 0%, #1ed760 100%)', image: '/images/5.png' },
        { name: 'Amazon Music', bgColor: 'linear-gradient(135deg, #ff9f43 0%, #feca57 100%)', image: '/images/7.png' },
        { name: 'Apple Music', bgColor: 'linear-gradient(135deg, #fc5c7d 0%, #6a82fb 100%)', image: '/images/8.png' },
        { name: 'Google Play', bgColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', image: '/images/9.png' },
        { name: 'TikTok', bgColor: 'linear-gradient(135deg, #000000 0%, #333333 100%)', image: '/images/1.png' },
        { name: 'Wynk Music', bgColor: 'linear-gradient(135deg, #000428 0%, #004e92 100%)', image: '/images/2.png' },
        { name: 'Resso', bgColor: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', image: '/images/3.png' },
        { name: 'YouTube Music', bgColor: 'linear-gradient(135deg, #ff0000 0%, #ff4444 100%)', image: '/images/4.png' },
    ];

    const features = [
        {
            title: 'Music Distribution',
            description: 'We distribute your content across major platforms like Saavn, Gaana, iTunes, Google Play Music, Amazon, and more to maximize your reach and revenue.'
        },
        {
            title: 'Content Curation',
            description: 'We gather web content from different online sources for reuse and resale on various digital platforms, ensuring your message reaches the widest possible audience.'
        },
        {
            title: 'Multi-Platform Strategy',
            description: 'Digital Platform strategy is a blueprint for platform building in the enterprise. Our strategy delivers business value by ensuring your content is everywhere your audience is.'
        },
        {
            title: 'Analytics & Insights',
            description: 'Track your content performance across all platforms with comprehensive analytics and actionable insights. Know exactly where your audience is engaging.'
        },
    ];

    const stats = [
        { number: '50+', label: 'Platforms' },
        { number: '1000+', label: 'Tracks Distributed' },
        { number: '100M+', label: 'Streams Generated' },
        { number: '24/7', label: 'Support' },
    ];

    return (
        <div className="service-page content-aggregation-page">
            {/* Background Image */}
            <div className="service-bg-image" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'url(/images/bg-content-aggregation.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.5,
                pointerEvents: 'none',
                zIndex: 0,
            }} />

            {/* Hero Section */}
            <section className="service-hero">
                <div className="service-hero-bg">
                    <div className="service-hero-gradient"></div>
                    <div className="service-hero-glow"></div>
                </div>
                <div className="container">
                    <motion.div
                        className="service-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.span
                            className="badge"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Content Aggregation
                        </motion.span>
                        <h1 className="service-hero-title">
                            Distribute Your Music <span className="gradient-text">Everywhere</span>
                        </h1>
                        <p className="service-hero-subtitle">
                            A Content Aggregator gathers web content and applications from different online sources for reuse and resale.
                            We distribute your content across major platforms like Saavn, Gaana, iTunes, Google Play Music, Amazon, and more.
                        </p>
                        <div className="service-hero-actions">
                            <Link to="/contact" className="btn btn-primary btn-lg">Distribute Your Content</Link>
                            <a href="tel:+917717278888" className="btn btn-secondary btn-lg">Call Now</a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="service-stats">
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
                                <span className="stat-number">{stat.number}</span>
                                <span className="stat-label">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Floating Platforms Section */}
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center', marginBottom: '2rem' }}
                    >
                        <h2 className="section-title">Platforms We <span className="gradient-text">Support</span></h2>
                        <p className="section-subtitle">Your music, available on all major streaming platforms worldwide</p>
                    </motion.div>
                </div>
                <FloatingLogos platforms={platforms} />
            </section>

            {/* Features Section */}
            <section className="service-features section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center', marginBottom: '3rem' }}
                    >
                        <h2 className="section-title">Our <span className="gradient-text">Services</span></h2>
                        <p className="section-subtitle">Comprehensive content aggregation solutions for maximum distribution</p>
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
                    >
                        <h2 className="cta-title">Ready to Maximize Your Content Reach?</h2>
                        <p className="cta-subtitle">Let us help you distribute your content across all major platforms.</p>
                        <div className="cta-actions">
                            <Link to="/contact" className="btn btn-primary btn-lg">Contact Us Today</Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ContentAggregation;
