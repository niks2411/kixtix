import { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
    };

    const contactInfo = [
        { icon: '📞', label: 'Phone', value: '+91 77172 78888', href: 'tel:+917717278888' },
        { icon: '📧', label: 'Email', value: 'kixtixmedia@gmail.com', href: 'mailto:kixtixmedia@gmail.com' },
        { icon: '📘', label: 'Facebook', value: 'kixtixofficial', href: 'https://www.facebook.com/kixtixofficial/' },
        { icon: '📸', label: 'Instagram', value: 'kixtixmedia', href: 'https://www.instagram.com/kixtixmedia/' },
    ];

    const services = [
        'Video Promotions',
        'Digital Marketing',
        'Music Distribution',
        'WhatsApp Marketing',
        'Bulk SMS',
        'Voice Calls',
        'App Marketing',
        'Other',
    ];

    return (
        <div className="contact-page">
            {/* Hero */}
            <section className="contact-hero">
                <div className="contact-hero-bg">
                    <div className="contact-hero-gradient"></div>
                    <div className="contact-hero-glow"></div>
                </div>
                <div className="container">
                    <motion.div
                        className="contact-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="badge">Get In Touch</span>
                        <h1 className="contact-hero-title">
                            Contact <span className="gradient-text">Us</span>
                        </h1>
                        <p className="contact-hero-subtitle">
                            Ready to grow your music videos? Let's discuss how we can help you reach your goals.
                            Contact us for Digital Marketing of your content.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="contact-content section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info */}
                        <motion.div
                            className="contact-info"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="info-title">Let's <span className="gradient-text">Talk</span></h2>
                            <p className="info-subtitle">
                                We offer the best results in the most reasonable cost. We run various ad campaigns
                                that fulfil your requirements and work according to industry standards.
                            </p>

                            <div className="info-cards">
                                {contactInfo.map((info) => (
                                    <a
                                        key={info.label}
                                        href={info.href}
                                        target={info.href.startsWith('http') ? '_blank' : undefined}
                                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="info-card"
                                    >
                                        <span className="info-icon">{info.icon}</span>
                                        <div className="info-details">
                                            <span className="info-label">{info.label}</span>
                                            <span className="info-value">{info.value}</span>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className="business-hours">
                                <h3>Business Hours</h3>
                                <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            className="contact-form-wrapper"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <h2 className="form-title">Send a Message</h2>

                                {submitted && (
                                    <div className="form-success">
                                        ✅ Thank you! We'll get back to you soon.
                                    </div>
                                )}

                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 XXXXX XXXXX"
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="service">Service Interested In</label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select a service</option>
                                        {services.map((service) => (
                                            <option key={service} value={service}>{service}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your project..."
                                        rows="5"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg submit-btn"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Quick CTA */}
            <section className="contact-quick section">
                <div className="container">
                    <motion.div
                        className="quick-cta"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="quick-icon">📞</span>
                        <div className="quick-content">
                            <h3>Prefer to talk?</h3>
                            <p>Call us directly for immediate assistance</p>
                        </div>
                        <a href="tel:+917717278888" className="btn btn-primary btn-lg">
                            +91 77172 78888
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
