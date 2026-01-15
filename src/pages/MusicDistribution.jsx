import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ServicePage.css';

const MusicDistribution = () => {
    const platforms = [
        { icon: '🎵', name: 'Spotify', description: 'Reach millions of listeners on the world\'s largest music streaming platform.' },
        { icon: '🍎', name: 'Apple Music', description: 'Get your music on Apple Music and iTunes for global distribution.' },
        { icon: '🎧', name: 'Gaana', description: 'India\'s leading music streaming service with millions of active users.' },
        { icon: '🎶', name: 'JioSaavn', description: 'One of India\'s largest music streaming platforms with massive reach.' },
        { icon: '🛒', name: 'Amazon Music', description: 'Distribute your music to Amazon\'s global audience.' },
        { icon: '▶️', name: 'YouTube Music', description: 'Reach YouTube\'s massive audience with your music catalog.' },
    ];

    const benefits = [
        { icon: '🌍', title: 'Global Reach', description: 'Distribute your music to all major platforms worldwide.' },
        { icon: '💰', title: 'Revenue Generation', description: 'Earn from streams and downloads across platforms.' },
        { icon: '📊', title: 'Analytics', description: 'Track your performance with detailed analytics.' },
        { icon: '⚡', title: 'Fast Distribution', description: 'Get your music live on platforms quickly.' },
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
                        <span className="badge">🎵 Music Distribution</span>
                        <h1 className="service-hero-title">Music <span className="gradient-text">Distribution</span></h1>
                        <p className="service-hero-subtitle">
                            A Content Aggregator gathers web content from different online sources for reuse and resale.
                            We distribute your music to Saavn, Gaana, iTunes, Google Play Music, Amazon, and more.
                        </p>
                        <div className="service-hero-actions">
                            <Link to="/contact" className="btn btn-primary btn-lg">Distribute Your Music</Link>
                            <a href="tel:+917717278888" className="btn btn-secondary btn-lg">📞 Call Now</a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="service-stats">
                <div className="container">
                    <div className="service-stats-grid">
                        {benefits.map((benefit, index) => (
                            <motion.div key={benefit.title} className="stat-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}>
                                <span style={{ fontSize: '40px', marginBottom: '12px', display: 'block' }}>{benefit.icon}</span>
                                <span className="stat-label" style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: 'var(--text-lg)' }}>{benefit.title}</span>
                                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginTop: '8px' }}>{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="service-features section">
                <div className="container">
                    <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="section-title">Platforms We <span className="gradient-text">Support</span></h2>
                        <p className="section-subtitle">Get your music on all major streaming platforms</p>
                    </motion.div>
                    <div className="features-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                        {platforms.map((platform, index) => (
                            <motion.div key={platform.name} className="feature-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }}>
                                <span className="feature-icon">{platform.icon}</span>
                                <h3 className="feature-title">{platform.name}</h3>
                                <p className="feature-description">{platform.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="service-cta section">
                <div className="container">
                    <motion.div className="cta-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="cta-title">Ready to Distribute Your Music?</h2>
                        <p className="cta-subtitle">Get your music on all major platforms and start earning.</p>
                        <div className="cta-actions">
                            <Link to="/contact" className="btn btn-primary btn-lg">Get Started</Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default MusicDistribution;
