import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollStackCards from '../components/ui/ScrollStackCards';
import './ServicePage.css';

const DigitalMarketing = () => {
    const services = [
        {
            title: 'Google AdWords',
            badge: 'Core Service',
            image: '/images/services/adwords.png',
            description: 'An online advertising platform developed by Google, where advertisers pay to display brief advertisements, service offerings, product listings, video content and generate mobile application installs within the Google ad network to web users. Google Ads system is based partly on cookies and partly on keywords determined by advertisers.'
        },
        {
            title: 'Text Ads',
            badge: 'Search Network',
            image: '/images/services/text-ads.png',
            description: 'These ads can appear on Google results pages and across the Google Network, which includes the Search Network, search partners, and the Display Network. Text ads might look different on the Display Network, or on mobile.'
        },
        {
            title: 'Gmail Ads',
            badge: 'Email Marketing',
            image: '/images/services/gmail-ads.png',
            description: 'Gmail ads are interactive ads that show at the top of your inbox tabs. Gmail ads help you connect with potential customers in a more personal format, reaching them directly in their inbox.'
        },
        {
            title: 'Banner Ads',
            badge: 'Display Network',
            image: '/images/services/banner-ads.png',
            description: 'Banner ad is a form of advertising on the World Wide Web delivered by an ad server. This form of online advertising entails embedding an advertisement into a web page. It is intended to attract traffic to a website by linking to the website of the advertiser.'
        },
        {
            title: 'App Ads',
            badge: 'Mobile First',
            image: '/images/services/app-ads.png',
            description: 'App ads are currently the fastest growing form of ads. Because Users are spending more time on apps, higher click through rates and better targeting are the benefits of app ads. With the kind of face-time mobile devices get, it makes perfect sense that companies of all sizes are investing in app ads.'
        },
        {
            title: 'YouTube Ads',
            badge: 'Video Marketing',
            image: '/images/services/adwords.png',
            description: 'Today, social media play an increasingly more important role in the life of society because users spend a lot of time online and they view social media as an important source of information. YouTube, being one of the largest video platforms, offers incredible reach and engagement opportunities.'
        },
        {
            title: 'Search Ads',
            badge: 'Intent Based',
            image: '/images/services/text-ads.png',
            description: 'It is a method of placing online advertisements on web pages that show results from search engine queries. They are targeted to match key search terms (called keywords) entered on search engines. This targeting ability has contributed to the attractiveness of search advertising for advertisers.'
        },
        {
            title: 'Remarketing',
            badge: 'Retargeting',
            image: '/images/services/banner-ads.png',
            description: 'Remarketing is a clever way to connect with visitors to your website who may not have made an immediate purchase or enquiry. It allows you to position targeted ads in front of a defined audience that had previously visited your website – as they browse elsewhere around the internet.'
        },
    ];

    const stats = [
        { number: '500+', label: 'Campaigns Managed' },
        { number: '10M+', label: 'Impressions Delivered' },
        { number: '85%', label: 'Avg. CTR Improvement' },
        { number: '3x', label: 'ROI Increase' },
    ];

    return (
        <div className="service-page digital-marketing-page">
            {/* Background Image */}
            <div className="service-bg-image" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'url(/images/bg-digital-marketing.png)',
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
                            Digital Marketing
                        </motion.span>
                        <h1 className="service-hero-title">
                            Dominate the <span className="gradient-text">Digital Space</span>
                        </h1>
                        <p className="service-hero-subtitle">
                            Digital marketing encompasses all marketing efforts using electronic devices or the internet.
                            We leverage search engines, social media, email, and websites to connect you with customers
                            and drive profitable customer action.
                        </p>
                        <div className="service-hero-actions">
                            <Link to="/contact" className="btn btn-primary btn-lg">Start Your Campaign</Link>
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

            {/* Scroll Stack Cards Section */}
            <section className="service-scroll-section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center', marginBottom: '2rem', paddingTop: '4rem' }}
                    >
                        <h2 className="section-title">Our <span className="gradient-text">Services</span></h2>
                        <p className="section-subtitle">Scroll down to explore our comprehensive digital marketing solutions</p>
                    </motion.div>
                </div>
                <ScrollStackCards cards={services} />
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
                        <h2 className="cta-title">Ready to Boost Your Digital Presence?</h2>
                        <p className="cta-subtitle">
                            We offer the best results in the most reasonable cost. We run various ad campaigns
                            that fulfil your requirements and work according to the standards of the industry.
                        </p>
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
