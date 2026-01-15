import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    const values = [
        { icon: '🌍', title: 'Global Reach', description: 'We serve clients worldwide with our comprehensive digital marketing solutions.' },
        { icon: '🕐', title: '24x7 Support', description: 'Round-the-clock online support to address your queries and concerns.' },
        { icon: '🔒', title: 'Confidential Agreement', description: 'We maintain strict confidentiality in all our client dealings.' },
        { icon: '📊', title: 'Analytical Approach', description: 'Data-driven strategies focused on realistic business objectives.' },
        { icon: '💎', title: 'Best Results', description: 'We deliver the best results at the most economical cost.' },
        { icon: '❤️', title: 'Passionate Team', description: 'We love who we are and we are proud to be part of your business.' },
    ];

    const stats = [
        { number: '500+', label: 'Projects Completed' },
        { number: '200+', label: 'Happy Clients' },
        { number: '1B+', label: 'Monthly Platform Users' },
        { number: '5+', label: 'Years Experience' },
    ];

    return (
        <div className="about-page">
            {/* Hero */}
            <section className="about-hero">
                <div className="about-hero-bg">
                    <div className="about-hero-gradient"></div>
                    <div className="about-hero-glow"></div>
                </div>
                <div className="container">
                    <motion.div
                        className="about-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="badge">About Us</span>
                        <h1 className="about-hero-title">
                            We Are <span className="gradient-text">Kixtix Media</span>
                        </h1>
                        <p className="about-hero-subtitle">
                            A team of Digital Marketers and SEO specialists who understand how the Digital Market
                            "thinks" and "works". We have joined forces to create a full-service Digital Marketing
                            Agency that utilizes the massive power of the internet for the benefit of our clients.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="about-stats">
                <div className="container">
                    <div className="about-stats-grid">
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

            {/* Mission */}
            <section className="about-mission section">
                <div className="container">
                    <div className="mission-grid">
                        <motion.div
                            className="mission-content"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="badge">Our Mission</span>
                            <h2 className="mission-title">Growing <span className="gradient-text">Music</span> Worldwide</h2>
                            <p className="mission-text">
                                Every month, more than one billion people visit YouTube, Facebook, Instagram, Twitter
                                and many other platforms. These are a lot of potential customers, and you can decide
                                where and when an ad shows up and which of these potential customers see them.
                            </p>
                            <p className="mission-text">
                                We will manage the best for you. We love who we are and we are very proud to be a
                                part of your business journey.
                            </p>
                            <Link to="/contact" className="btn btn-primary">Work With Us</Link>
                        </motion.div>
                        <motion.div
                            className="mission-visual"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="visual-box">
                                <span className="visual-emoji">🎬</span>
                                <h3>Video Promotion Specialists</h3>
                                <p>We help music videos grow through strategic promotion and powerful marketing tools.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="about-values section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title">Why <span className="gradient-text">Choose Us</span></h2>
                        <p className="section-subtitle">What makes Kixtix Media different</p>
                    </motion.div>

                    <div className="values-grid">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                className="value-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <span className="value-icon">{value.icon}</span>
                                <h3 className="value-title">{value.title}</h3>
                                <p className="value-description">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Director */}
            <section className="about-director section">
                <div className="container">
                    <motion.div
                        className="director-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="director-avatar">
                            <span>VS</span>
                        </div>
                        <div className="director-info">
                            <h3 className="director-name">Vishal Sharma</h3>
                            <p className="director-role">Director, Kixtix Media Pvt. Ltd.</p>
                            <p className="director-bio">
                                Leading our team of digital marketing experts with a vision to help artists and businesses
                                grow their digital presence through innovative marketing strategies.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="about-cta section">
                <div className="container">
                    <motion.div
                        className="cta-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="cta-title">Ready to Grow Your Brand?</h2>
                        <p className="cta-subtitle">Let's discuss how we can help you reach your goals.</p>
                        <div className="cta-actions">
                            <Link to="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
                            <a href="tel:+917717278888" className="btn btn-secondary btn-lg">📞 +91 77172 78888</a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
