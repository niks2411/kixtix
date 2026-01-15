import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ServicePage.css';

const VideoPromotions = () => {
    const features = [
        {
            icon: '📺',
            title: 'YouTube Promotions',
            description: 'We manage your YouTube channels and increase the visibility of your content through SEO optimization, engaging content creation, and consistent uploads. We share your videos across platforms and build a community that suits you best.',
        },
        {
            icon: '🏷️',
            title: 'Brand Marketing',
            description: 'Brand marketing is an approach to communications, sales, product, and service that grows brand equity. We help you build and enhance your brand name through strategic marketing and positioning.',
        },
        {
            icon: '📢',
            title: 'Content Promotions',
            description: 'Content Promotion involves the creation and sharing of online materials that explicitly promote a brand and stimulate interest in products or services. It helps attract and retain a clearly defined audience.',
        },
        {
            icon: '👥',
            title: 'User Engagement',
            description: 'User engagement measures whether users find value in your content. We track downloads, clicks, shares, and more. Highly engaged users are more profitable and become loyal fans.',
        },
        {
            icon: '🎬',
            title: 'Video Ads',
            description: 'Video advertising encompasses online display ads with video content, shown before, during, and after video streams. Perfect for capturing attention and driving action.',
        },
        {
            icon: '🖼️',
            title: 'Display Ads',
            description: 'Display advertising on websites, apps, and social media through banners and ad formats made of text, images, flash, video, and audio to deliver your message.',
        },
        {
            icon: '📍',
            title: 'Geo Targeting',
            description: 'Geotargeting determines the location of website visitors and delivers different content based on their country, region, city, metro code, organization, or IP address.',
        },
        {
            icon: '✅',
            title: 'Real Users',
            description: 'Real User Monitoring records all user interaction with your content. We ensure your promotions reach genuine, interested viewers who engage with your music.',
        },
    ];

    const stats = [
        { number: '10M+', label: 'Views Delivered' },
        { number: '500+', label: 'Videos Promoted' },
        { number: '95%', label: 'Client Satisfaction' },
        { number: '50+', label: 'Artists Grown' },
    ];

    return (
        <div className="service-page">
            {/* Hero */}
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
                        <span className="badge">⭐ Core Service</span>
                        <h1 className="service-hero-title">
                            Video <span className="gradient-text">Promotions</span>
                        </h1>
                        <p className="service-hero-subtitle">
                            Content promotion on YouTube & Social Media is a type of marketing that involves
                            the creation and sharing of online materials. We help you attract, retain, and grow
                            a clearly defined audience to drive profitable customer action.
                        </p>
                        <div className="service-hero-actions">
                            <Link to="/contact" className="btn btn-primary btn-lg">
                                Start Growing Your Views
                            </Link>
                            <a href="tel:+917717278888" className="btn btn-secondary btn-lg">
                                📞 Call Now
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
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

            {/* Features */}
            <section className="service-features section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title">
                            What We <span className="gradient-text">Offer</span>
                        </h2>
                        <p className="section-subtitle">
                            Comprehensive video promotion services to maximize your reach and engagement
                        </p>
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
                                <span className="feature-icon">{feature.icon}</span>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="service-process section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title">
                            Our <span className="gradient-text">Process</span>
                        </h2>
                    </motion.div>

                    <div className="process-grid">
                        {[
                            { step: '01', title: 'Analysis', description: 'We analyze your current content, audience, and goals to create a tailored strategy.' },
                            { step: '02', title: 'Strategy', description: 'We develop a comprehensive promotion plan targeting your ideal audience.' },
                            { step: '03', title: 'Execution', description: 'We implement campaigns across YouTube, social media, and advertising networks.' },
                            { step: '04', title: 'Growth', description: 'We monitor, optimize, and scale your campaigns for maximum impact.' },
                        ].map((item, index) => (
                            <motion.div
                                key={item.step}
                                className="process-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <span className="process-step">{item.step}</span>
                                <h3 className="process-title">{item.title}</h3>
                                <p className="process-description">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="service-cta section">
                <div className="container">
                    <motion.div
                        className="cta-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="cta-title">Ready to Grow Your Music Videos?</h2>
                        <p className="cta-subtitle">Let's discuss your goals and create a custom promotion strategy.</p>
                        <div className="cta-actions">
                            <Link to="/contact" className="btn btn-primary btn-lg">Contact Us Today</Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default VideoPromotions;
