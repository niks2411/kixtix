import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ServicePage.css';

const AppMarketing = () => {
    const services = [
        { icon: '💰', title: 'CPI Campaigns', description: 'Cost Per Install campaigns to get more targeted installs quickly. CPI is the best way to get more and more targeted installs for your app.' },
        { icon: '⭐', title: 'Ratings & Reviews', description: 'Get positive ratings and reviews from real users. Higher ratings help achieve better ranking in app stores.' },
        { icon: '📤', title: 'App Submission', description: 'Submit your app to top review sites for initial publicity and targeted audience reach.' },
        { icon: '🎯', title: 'App Store Optimization', description: 'Optimize your app listing with the right keywords, title, description, and screenshots for better visibility.' },
        { icon: '📱', title: 'iOS Marketing', description: 'Reach iPhone users with scalable, multichannel marketing campaigns and improve App Store listings.' },
        { icon: '🤖', title: 'Android Marketing', description: 'Strategic marketing combining insight, analytics, and multichannel reach for Google Play visibility.' },
    ];

    const process = [
        { icon: '💡', title: 'Consultation', description: 'Know the viability of your mobile app before jumping into development. Save thousands of hours with our expertise.' },
        { icon: '🚀', title: 'Prelaunch Marketing', description: 'Prepare the ground before launch. Run pre-registration campaigns so users are waiting for your app.' },
        { icon: '📰', title: 'Public Relations', description: 'Increase brand visibility by publishing articles and blog posts about your app on top media outlets.' },
        { icon: '📱', title: 'Social Media', description: 'Create and maintain a vibrant presence on Facebook, Instagram, and more.' },
        { icon: '👥', title: 'User Engagement', description: 'Keep your audience interested with push notifications, in-app purchases, and remarketing.' },
        { icon: '💵', title: 'User Monetization', description: 'Different monetization options: paid app, ads, subscriptions, or content unlocking.' },
        { icon: '📈', title: 'User Acquisition', description: 'Get hundreds of thousands of users through organic promotion, viral and influencer marketing.' },
    ];

    const stats = [
        { number: '100+', label: 'Apps Marketed' },
        { number: '1M+', label: 'Installs Generated' },
        { number: '4.5+', label: 'Avg Rating Achieved' },
        { number: '50%', label: 'Avg Growth Rate' },
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
                        <span className="badge">📲 App Marketing</span>
                        <h1 className="service-hero-title">Mobile App <span className="gradient-text">Marketing</span></h1>
                        <p className="service-hero-subtitle">
                            Kixtix Media Pvt. Ltd. is one of the best sites to promote Android & iOS apps.
                            We specialize in mobile app marketing, app strategy, monetization, and app store optimization.
                        </p>
                        <div className="service-hero-actions">
                            <Link to="/contact" className="btn btn-primary btn-lg">Promote Your App</Link>
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
                        <h2 className="section-title">Our <span className="gradient-text">Services</span></h2>
                        <p className="section-subtitle">Comprehensive app marketing solutions</p>
                    </motion.div>
                    <div className="features-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                        {services.map((service, index) => (
                            <motion.div key={service.title} className="feature-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }}>
                                <span className="feature-icon">{service.icon}</span>
                                <h3 className="feature-title">{service.title}</h3>
                                <p className="feature-description">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="service-process section">
                <div className="container">
                    <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="section-title">What We <span className="gradient-text">Do</span></h2>
                        <p className="section-subtitle">Complete app marketing lifecycle</p>
                    </motion.div>
                    <div className="features-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                        {process.slice(0, 4).map((item, index) => (
                            <motion.div key={item.title} className="feature-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }}>
                                <span className="feature-icon">{item.icon}</span>
                                <h3 className="feature-title">{item.title}</h3>
                                <p className="feature-description">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="service-cta section">
                <div className="container">
                    <motion.div className="cta-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="cta-title">Ready to Grow Your App?</h2>
                        <p className="cta-subtitle">We are dedicated to help you succeed in the business of your mobile application.</p>
                        <div className="cta-actions">
                            <Link to="/contact" className="btn btn-primary btn-lg">Get Started</Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AppMarketing;
