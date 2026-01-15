import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ServicePage.css';

const DigitalMarketing = () => {
    const features = [
        { icon: '🔍', title: 'Google AdWords', description: 'Online advertising platform where advertisers pay to display advertisements, service offerings, product listings, and video content within the Google ad network.' },
        { icon: '📝', title: 'Text Ads', description: 'Ads that appear on Google results pages and across the Google Network, including the Search Network, search partners, and the Display Network.' },
        { icon: '📧', title: 'Gmail Ads', description: 'Interactive ads that show at the top of your inbox tabs, helping you connect with potential customers in a more personal format.' },
        { icon: '🖼️', title: 'Banner Ads', description: 'Online advertising embedded into web pages to attract traffic by linking to the advertiser\'s website.' },
        { icon: '📱', title: 'App Ads', description: 'The fastest growing form of ads with higher click-through rates and better targeting capabilities.' },
        { icon: '🎬', title: 'YouTube Ads', description: 'Promote your content on YouTube, a mainstream social media that allows users to share videos and create virtual communities.' },
        { icon: '🔎', title: 'Search Ads', description: 'Online advertisements on web pages that show results from search engine queries, targeted to match key search terms.' },
        { icon: '🔄', title: 'Remarketing', description: 'Connect with visitors who didn\'t convert through targeted ads as they browse elsewhere on the internet.' },
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
                        <span className="badge">📊 Digital Marketing</span>
                        <h1 className="service-hero-title">Digital <span className="gradient-text">Marketing</span></h1>
                        <p className="service-hero-subtitle">
                            Digital marketing encompasses all marketing efforts using electronic devices or the internet.
                            We leverage search engines, social media, email, and websites to connect you with customers.
                        </p>
                        <div className="service-hero-actions">
                            <Link to="/contact" className="btn btn-primary btn-lg">Start Your Campaign</Link>
                            <a href="tel:+917717278888" className="btn btn-secondary btn-lg">📞 Call Now</a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="service-features section">
                <div className="container">
                    <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="section-title">Our <span className="gradient-text">Services</span></h2>
                        <p className="section-subtitle">Comprehensive digital marketing solutions for maximum reach</p>
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
                        <h2 className="cta-title">Ready to Boost Your Digital Presence?</h2>
                        <p className="cta-subtitle">We offer the best results in the most reasonable cost.</p>
                        <div className="cta-actions">
                            <Link to="/contact" className="btn btn-primary btn-lg">Contact Us Today</Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default DigitalMarketing;
