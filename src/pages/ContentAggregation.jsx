import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MusicDistributionHub from '../components/ui/MusicDistributionHub';
import './ServicePage.css';

const ContentAggregation = () => {
    const platforms = [
        { name: 'iTunes', image: '/images/1.png' },
        { name: 'Gaana', image: '/images/2.png' },
        { name: 'Hungama', image: '/images/3.png' },
        { name: 'JioSaavn', image: '/images/4.png' },
        { name: 'Spotify', image: '/images/5.png' },
        { name: 'Amazon Music', image: '/images/7.png' },
        { name: 'Apple Music', image: '/images/8.png' },
        { name: 'Google Play', image: '/images/9.png' },
    ];

    const features = [
        {
            title: 'Music Distribution',
            description: 'We distribute your content across major platforms like Saavn, Gaana, iTunes, Google Play Music, Amazon, and more to maximize your reach and revenue.'
        },
        {
            title: 'Content Curation',
            description: 'We gather web content from different online sources for reuse and resale on various digital platforms.'
        },
        {
            title: 'Multi-Platform Strategy',
            description: 'Digital Platform strategy delivers business value by ensuring your content is everywhere your audience is.'
        },
        {
            title: 'Analytics & Insights',
            description: 'Track your content performance across all platforms with comprehensive analytics and actionable insights.'
        },
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

            {/* Hero Section with Music Distribution Hub */}
            <section className="service-hero" style={{ minHeight: '100vh', paddingTop: '100px' }}>
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
                        style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem' }}
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
                            Get your music on every major streaming platform worldwide.
                            One upload, 50+ platforms, millions of potential listeners.
                        </p>
                        <div className="service-hero-actions" style={{ justifyContent: 'center' }}>
                            <Link to="/contact" className="btn btn-primary btn-lg">Distribute Your Content</Link>
                            <a href="tel:+917717278888" className="btn btn-secondary btn-lg">Call Now</a>
                        </div>
                    </motion.div>

                    {/* Music Distribution Hub Visualization */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        style={{ position: 'relative', minHeight: '550px' }}
                    >
                        <MusicDistributionHub platforms={platforms} />
                    </motion.div>
                </div>
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
