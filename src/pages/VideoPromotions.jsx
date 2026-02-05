import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BeforeAfterTransform from '../components/ui/BeforeAfterTransform';
import './ServicePage.css';

const VideoPromotions = () => {
    const features = [
        { title: 'YouTube SEO', description: 'Optimize your videos for maximum discoverability and ranking.' },
        { title: 'Viral Campaigns', description: 'Strategic campaigns designed to make your content go viral.' },
        { title: 'Audience Growth', description: 'Build and engage with your subscriber base organically.' },
        { title: 'Analytics & Insights', description: 'Track performance with detailed analytics and reporting.' },
    ];

    const stats = [
        { number: '10M+', label: 'Views Generated' },
        { number: '500+', label: 'Videos Promoted' },
        { number: '95%', label: 'Success Rate' },
        { number: '24/7', label: 'Support' },
    ];

    return (
        <div className="service-page video-promotions-page">
            {/* Background Image */}
            <div className="service-bg-image" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'url(/images/bg-video-promotions.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.5,
                pointerEvents: 'none',
                zIndex: 0,
            }} />

            {/* Hero Section */}
            <section className="service-hero" style={{ minHeight: '100vh', paddingTop: '120px' }}>
                <div className="service-hero-bg">
                    <div className="service-hero-gradient" style={{
                        background: 'radial-gradient(ellipse at 50% 0%, rgba(255, 0, 0, 0.12) 0%, transparent 50%)'
                    }}></div>
                </div>
                <div className="container">
                    {/* Hero Text */}
                    <motion.div
                        className="service-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}
                    >
                        <motion.span
                            className="badge"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            style={{ background: 'rgba(255, 0, 0, 0.15)', color: '#ff4444' }}
                        >
                            Video Promotions
                        </motion.span>
                        <h1 className="service-hero-title">
                            From Zero to <span style={{ color: '#ff4444' }}>Viral</span>
                        </h1>
                        <p className="service-hero-subtitle">
                            See the difference our promotion makes. Same video, completely different results.
                            We help artists and creators go from ignored to trending.
                        </p>
                        <div className="service-hero-actions" style={{ justifyContent: 'center' }}>
                            <Link to="/contact" className="btn btn-primary btn-lg" style={{ background: '#ff4444', borderColor: '#ff4444' }}>
                                Start Promoting
                            </Link>
                            <a href="tel:+917717278888" className="btn btn-secondary btn-lg">Call Now</a>
                        </div>
                    </motion.div>

                    {/* Before/After Video Comparison */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <BeforeAfterTransform videoSrc="/music1.mp4" />
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="service-stats" style={{
                borderColor: 'rgba(255, 0, 0, 0.2)',
                background: 'rgba(255, 0, 0, 0.03)'
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
                                <span className="stat-number" style={{ color: '#ff4444' }}>{stat.number}</span>
                                <span className="stat-label">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="service-features section" style={{ background: 'rgba(255, 0, 0, 0.02)' }}>
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center', marginBottom: '3rem' }}
                    >
                        <h2 className="section-title">Our <span style={{ color: '#ff4444' }}>Services</span></h2>
                        <p className="section-subtitle">Comprehensive video promotion solutions</p>
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
                                style={{ borderColor: 'rgba(255, 0, 0, 0.15)' }}
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
                        style={{ borderColor: 'rgba(255, 0, 0, 0.3)' }}
                    >
                        <h2 className="cta-title">Ready to Get Millions of Views?</h2>
                        <p className="cta-subtitle">Let's make your next video a viral hit.</p>
                        <div className="cta-actions">
                            <Link to="/contact" className="btn btn-primary btn-lg" style={{ background: '#ff4444', borderColor: '#ff4444' }}>
                                Start Your Campaign
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default VideoPromotions;
