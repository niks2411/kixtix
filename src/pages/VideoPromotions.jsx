import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HorizontalScroll from '../components/ui/HorizontalScroll';
import './ServicePage.css';

const VideoPromotions = () => {
    const services = [
        {
            title: 'YouTube Promotions',
            description: 'Content Promotion on YouTube & Social Media is a type of marketing that involves the creation and sharing of online materials that not only explicitly promote a brand but is intended to stimulate in its product or services. We manage your YouTube channels and increase the visibility of the content, manage Facebook and Instagram Pages. We use SEO (Search Engine Optimization) and Optimize Your YouTube Videos, Create Engaging Content and be consistent, share your videos on different platforms and build a community that suits you the best.'
        },
        {
            title: 'Brand Marketing',
            description: 'Brand marketing is an approach to communications, sales, product, and service that grows the asset of brand equity. Brand marketing is the theory and tactics to make a strong brand. The theory of brand marketing is spending on marketing is an investment in building a brand\'s value, and in-turn the company/individual value. We help you build and enhance your brand name.'
        },
        {
            title: 'Content Promotions',
            description: 'Content Promotion is a type of marketing that involves the creation and sharing of online materials that not only explicitly promote a brand but is intended to stimulate in its product or services. It helps to attract and retain a clearly defined audience and ultimately to drive profitable customer act.'
        },
        {
            title: 'User Engagement',
            description: 'User engagement measures whether users find value in a product or service. Engagement can be measured by a variety or combination of activities such as downloads, clicks, shares, and more. Highly engaged users are generally more profitable, provided that their activities are tied to valuable outcomes such as purchases, signups, subscriptions, or clicks.'
        },
        {
            title: 'Video Ads',
            description: 'Video advertising encompasses online display advertisements that have video within them, but it is generally accepted that it refers to advertising that occurs before, during and/or after a video stream on the internet. This is one of the most effective ways to capture attention and drive action.'
        },
        {
            title: 'Display Ads',
            description: 'Display advertising is advertising on websites or apps or social media through banners or other ad formats made of text, images, flash, video, and audio. The main purpose of display advertising is to deliver general advertisements and brand messages to site visitors.'
        },
    ];

    const stats = [
        { number: '10M+', label: 'Views Delivered' },
        { number: '500+', label: 'Videos Promoted' },
        { number: '95%', label: 'Client Satisfaction' },
        { number: '50+', label: 'Artists Grown' },
    ];

    const process = [
        { step: '01', title: 'Analysis', description: 'We analyze your current content, audience, and goals to create a tailored strategy.' },
        { step: '02', title: 'Strategy', description: 'We develop a comprehensive promotion plan targeting your ideal audience.' },
        { step: '03', title: 'Execution', description: 'We implement campaigns across YouTube, social media, and advertising networks.' },
        { step: '04', title: 'Growth', description: 'We monitor, optimize, and scale your campaigns for maximum impact.' },
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
                            Core Service
                        </motion.span>
                        <h1 className="service-hero-title">
                            Amplify Your <span className="gradient-text">Visual Story</span>
                        </h1>
                        <p className="service-hero-subtitle">
                            Content promotion on YouTube & Social Media is a type of marketing that involves
                            the creation and sharing of online materials. We help you attract, retain, and grow
                            a clearly defined audience to drive profitable customer action.
                        </p>
                        <div className="service-hero-actions">
                            <Link to="/contact" className="btn btn-primary btn-lg">Start Growing Your Views</Link>
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

            {/* Horizontal Scroll Section */}
            <section className="service-horizontal-section">
                <div className="container" style={{ paddingTop: '4rem' }}>
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center', marginBottom: '2rem' }}
                    >
                        <h2 className="section-title">What We <span className="gradient-text">Offer</span></h2>
                        <p className="section-subtitle">Scroll to explore our comprehensive video promotion services</p>
                    </motion.div>
                </div>
                <HorizontalScroll items={services} />
            </section>

            {/* Process Section */}
            <section className="service-process section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center', marginBottom: '3rem' }}
                    >
                        <h2 className="section-title">Our <span className="gradient-text">Process</span></h2>
                    </motion.div>

                    <div className="process-grid">
                        {process.map((item, index) => (
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

            {/* CTA Section */}
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
