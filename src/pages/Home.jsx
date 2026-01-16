import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from 'framer-motion';
import FlowingMenu from '../components/FlowingMenu';
import ParallaxGallery from '../components/ParallaxGallery';
import { Skiper39 } from '@/components/ui/skiper-ui/skiper39';
import './Home.css';

const Home = () => {
    const [isThreeDActive, setIsThreeDActive] = useState(false);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [isMuted, setIsMuted] = useState(true); // Default to muted for auto-play best practices
    const [isPanelClosing, setIsPanelClosing] = useState(false);
    const videoRef = useRef(null);

    // List of Music Videos to display in the 3D player
    // Add your YouTube video IDs here (the part after v= or in the embed URL)
    const showcaseVideos = [
        { id: '/music1.mp4', title: 'Our Latest Work', isLocal: true },
        { id: '/music2.mp4', title: 'Featured Release', isLocal: true },
        { id: 'dQw4w9WgXcQ', title: 'Music Video Showcase 1' },
        { id: 'BJbgZyHTptc', title: 'Music Video Showcase 2' },
    ];

    const nextVideo = (e) => {
        e.stopPropagation();
        // Trigger panel closing animation
        setIsPanelClosing(true);
        // Wait for animation, then switch video
        setTimeout(() => {
            setCurrentVideoIndex((prev) => (prev + 1) % showcaseVideos.length);
            // Reopen panels after video switches
            setTimeout(() => setIsPanelClosing(false), 100);
        }, 800);
    };

    const toggleMute = (e) => {
        e.stopPropagation();
        setIsMuted(!isMuted);
    };

    const prevVideo = (e) => {
        e.stopPropagation();
        // Trigger panel closing animation
        setIsPanelClosing(true);
        // Wait for animation, then switch video
        setTimeout(() => {
            setCurrentVideoIndex((prev) => (prev - 1 + showcaseVideos.length) % showcaseVideos.length);
            // Reopen panels after video switches
            setTimeout(() => setIsPanelClosing(false), 100);
        }, 800);
    };

    // Scroll tracking for the hero section
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end end"]
    });

    // Automatically trigger 3D transition when line reaches ~0.67 (scrollY ~0.6)
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.6) {
            setIsThreeDActive(true);
        } else if (latest < 0.5) {
            setIsThreeDActive(false);
        }
    });

    // Line draws from 0.5 to 0.85 (capped as per Image 2)
    const pathLength = useTransform(scrollYProgress, [0, 0.7], [0.5, 0.70]);

    // Text fades out and moves up (faster)
    const textOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 0.25], [0, -200]);

    // Curvy lines move up like text
    const lineY = useTransform(scrollYProgress, [0, 0.4], [0, -400]);

    // Video popup appears at end
    const popupScale = useTransform(scrollYProgress, [0.6, 0.75], [0, 1]);

    // 3D Perspective Transition Transforms (Scroll-driven)
    // The entire 3D overlay fades in from 0.7 onwards
    const perspectiveOpacity = useTransform(scrollYProgress, [0.7, 0.75], [0, 1]);

    // Panels slide in and rotate between 0.75 and 0.9 scroll
    const panelLeftX = useTransform(scrollYProgress, [0.75, 0.9], ["-100%", "0%"]);
    const panelRightX = useTransform(scrollYProgress, [0.75, 0.9], ["100%", "0%"]);
    const panelLeftRot = useTransform(scrollYProgress, [0.75, 0.9], [90, 35]);
    const panelRightRot = useTransform(scrollYProgress, [0.75, 0.9], [-90, -35]);

    // Center video box morphs/scales up
    const centerScale = useTransform(scrollYProgress, [0.7, 0.85], [0.6, 1]);
    const centerZ = useTransform(scrollYProgress, [0.7, 0.85], [-500, 0]);

    // Popup box fades out when 3D player takes over
    const popupBoxOpacity = useTransform(scrollYProgress, [0.7, 0.75], [1, 0]);

    // FlowingMenu items - Services showcase (leave space for images, you can add them later)
    const menuItems = [
        { link: '/video-promotions', text: 'Video Promotions', image: '' },
        { link: '/services/digital-marketing', text: 'Digital Marketing', image: '' },
        { link: '/services/music-distribution', text: 'Music Distribution', image: '' },
        { link: '/services/whatsapp-marketing', text: 'WhatsApp Marketing', image: '' },
        { link: '/services/app-marketing', text: 'App Marketing', image: '' },
    ];


    const marqueeImages = [
        "/images/1.png",
        "/images/2.png",
        "/images/3.png",
        "/images/4.png",
        "/images/5.png",
        "/images/7.png",
        "/images/8.png",
        "/images/9.png",
    ];

    const services = [
        {
            icon: '🎬',
            title: 'YouTube Promotion',
            description: 'Channel management, SEO optimization, and strategic promotion to get your music videos in front of millions.',
            path: '/video-promotions',
            featured: true,
        },
        {
            icon: '📱',
            title: 'Social Media',
            description: 'Facebook & Instagram page management. Build your fanbase where they already spend their time.',
            path: '/services/digital-marketing',
        },
        {
            icon: '🎵',
            title: 'Music Distribution',
            description: 'Saavn, Gaana, iTunes, Spotify, Amazon Music — get your tracks on every major platform.',
            path: '/services/music-distribution',
        },
        {
            icon: '💬',
            title: 'WhatsApp Campaigns',
            description: 'Direct reach to 800M+ users. Text, images, videos — way more powerful than traditional SMS.',
            path: '/services/whatsapp-marketing',
        },
        {
            icon: '📢',
            title: 'Bulk SMS',
            description: '50 Crore+ database. DND & Non-DND. Real-time delivery. Your message, their phone.',
            path: '/services/bulk-sms',
        },
        {
            icon: '📲',
            title: 'App Marketing',
            description: 'CPI campaigns, ASO, ratings & reviews. Make your app visible in a sea of millions.',
            path: '/services/app-marketing',
        },
    ];

    const testimonials = [
        {
            quote: "They took our social media from zero to deeply engaged in just months. The results speak for themselves — this team delivers.",
            name: "Gurnam Bhullar",
            title: "Punjabi Singer",
        },
        {
            quote: "We tried many marketing companies before Kixtix. They skyrocketed our presence and actually took time to understand our goals.",
            name: "Jass Records",
            title: "Music Label, Punjab",
        },
        {
            quote: "Comprehensive, fast, and well-planned. The SEO and social media results have been outstanding. Highly responsive team.",
            name: "Tanishq Kaur",
            title: "Singer & Artist",
        },
    ];

    return (
        <div className="home">
            {/* Hero Section with Scroll Line */}
            <section className="hero-scroll-section" ref={heroRef}>
                <div className="hero-sticky">
                    {/* Left Side - Text Content */}
                    <motion.div
                        className="hero-text-side"
                        style={{ opacity: textOpacity, y: textY }}
                    >
                        <div className="hero-badge">
                            <div className="equalizer">
                                <div className="eq-bar"></div>
                                <div className="eq-bar"></div>
                                <div className="eq-bar"></div>
                                <div className="eq-bar"></div>
                                <div className="eq-bar"></div>
                            </div>
                            <span>Music Promotion Agency</span>
                        </div>

                        <h1 className="hero-main-title">
                            YOUR MUSIC<br />
                            <span className="accent">DESERVES</span><br />
                            MILLIONS
                        </h1>

                        <p className="hero-desc">
                            We don't just promote music — we build audiences.<br />
                            YouTube, Instagram, Spotify, and beyond.
                        </p>

                        <div className="hero-btns">
                            <Link to="/video-promotions" className="btn btn-primary btn-lg">
                                Promote My Music
                            </Link>
                            <Link to="/contact" className="btn btn-secondary btn-lg">
                                Talk to Us
                            </Link>
                        </div>

                        <p className="scroll-cue"></p>
                    </motion.div>

                    {/* Right Side - Smooth Line (Skiper19 style) */}
                    <motion.div
                        className="hero-line-side"
                        style={{ y: lineY }}
                    >
                        <svg
                            viewBox="0 0 1278 2319"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="smooth-line-svg"
                        >
                            <motion.path
                                d="M876.605 394.131C788.982 335.917 696.198 358.139 691.836 416.303C685.453 501.424 853.722 498.43 941.95 409.714C1016.1 335.156 1008.64 186.907 906.167 142.846C807.014 100.212 712.699 198.494 789.049 245.127C889.053 306.207 986.062 116.979 840.548 43.3233C743.932 -5.58141 678.027 57.1682 672.279 112.188C666.53 167.208 712.538 172.943 736.353 163.088C760.167 153.234 764.14 120.924 746.651 93.3868C717.461 47.4252 638.894 77.8642 601.018 116.979C568.164 150.908 557 201.079 576.467 246.924C593.342 286.664 630.24 310.55 671.68 302.614C756.114 286.446 729.747 206.546 681.86 186.442C630.54 164.898 492 209.318 495.026 287.644C496.837 334.494 518.402 366.466 582.455 367.287C680.013 368.538 771.538 299.456 898.634 292.434C1007.02 286.446 1192.67 309.384 1242.36 382.258C1266.99 418.39 1273.65 443.108 1247.75 474.477C1217.32 511.33 1149.4 511.259 1096.84 466.093C1044.29 420.928 1029.14 380.576 1033.97 324.172C1038.31 273.428 1069.55 228.986 1117.2 216.384C1152.2 207.128 1188.29 213.629 1194.45 245.127C1201.49 281.062 1132.22 280.104 1100.44 272.673C1065.32 264.464 1044.22 234.837 1032.77 201.413C1019.29 162.061 1029.71 131.126 1056.44 100.965C1086.19 67.4032 1143.96 54.5526 1175.78 86.1513C1207.02 117.17 1186.81 143.379 1156.22 166.691C1112.57 199.959 1052.57 186.238 999.784 155.164C957.312 130.164 899.171 63.7054 931.284 26.3214C952.068 2.12513 996.288 3.87363 1007.22 43.58C1018.15 83.2749 1003.56 122.644 975.969 163.376C948.377 204.107 907.272 255.122 913.558 321.045C919.727 385.734 990.968 497.068 1063.84 503.35C1111.46 507.456 1166.79 511.984 1175.68 464.527C1191.52 379.956 1101.26 334.985 1030.29 377.017C971.109 412.064 956.297 483.647 953.797 561.655C947.587 755.413 1197.56 941.828 936.039 1140.66C745.771 1285.32 321.926 950.737 134.536 1202.19C-6.68295 1391.68 -53.4837 1655.38 131.935 1760.5C478.381 1956.91 1124.19 1515 1201.28 1997.83C1273.66 2451.23 100.805 1864.7 303.794 2668.89"
                                stroke="#c4ff3c"
                                strokeWidth="20"
                                strokeLinecap="round"
                                fill="none"
                                style={{ pathLength }}
                            />
                        </svg>
                    </motion.div>

                    {/* Video Popup Box - Fades out as the 3D player takes over */}
                    <motion.div
                        className="video-popup-container"
                        style={{ scale: popupScale, opacity: popupBoxOpacity }}
                    >
                        <div className="video-popup-box" style={{ opacity: isThreeDActive ? 0 : 1, transition: 'opacity 0.3s' }}>
                            <div className="play-circle">
                                <span>▶</span>
                            </div>
                            <p>Watch Our Work</p>
                        </div>
                    </motion.div>

                    {/* Warner Style 3D Video Perspective (Autonomous Cutscene) */}
                    <AnimatePresence>
                        {isThreeDActive && (
                            <motion.div
                                className="perspective-video-overlay"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="perspective-video-content">
                                    {/* Left Panel */}
                                    <motion.div
                                        className="side-panel panel-left-content"
                                        initial={{ x: '-100%', rotateY: 90 }}
                                        animate={{
                                            x: isPanelClosing ? '90%' : 0,
                                            rotateY: isPanelClosing ? 0 : 35
                                        }}
                                        transition={{ duration: isPanelClosing ? 0.8 : 1.2, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <h3>PROMO<br />TING<br />VIDEOS</h3>
                                    </motion.div>

                                    {/* Center Video Section */}
                                    <motion.div
                                        className="video-center-panel"
                                        initial={{ opacity: 0, scale: 0.8, z: -500 }}
                                        animate={{ opacity: 1, scale: 1, z: 0 }}
                                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                                    >
                                        <div className="video-viewport">
                                            {showcaseVideos[currentVideoIndex].isLocal ? (
                                                <video
                                                    key={showcaseVideos[currentVideoIndex].id + isMuted}
                                                    src={showcaseVideos[currentVideoIndex].id}
                                                    className="video-player-iframe"
                                                    autoPlay
                                                    muted={isMuted}
                                                    loop
                                                    playsInline
                                                />
                                            ) : (
                                                <iframe
                                                    key={showcaseVideos[currentVideoIndex].id + isMuted}
                                                    src={`https://www.youtube.com/embed/${showcaseVideos[currentVideoIndex].id}?autoplay=1${isMuted ? '&mute=1' : ''}`}
                                                    title="Music Video"
                                                    className="video-player-iframe"
                                                    allow="autoplay; encrypted-media"
                                                    allowFullScreen
                                                ></iframe>
                                            )}
                                        </div>

                                        {/* Video Info Overlay */}
                                        <div className="video-nav-overlay">
                                            <div className="video-info">
                                                <span className="video-count">{currentVideoIndex + 1} / {showcaseVideos.length}</span>
                                                <p className="video-title-text">{showcaseVideos[currentVideoIndex].title}</p>
                                            </div>

                                            <div className="video-controls-row">
                                                <button
                                                    className={`nav-ctrl-btn mute-btn ${isMuted ? 'muted' : ''}`}
                                                    onClick={toggleMute}
                                                    title={isMuted ? "Unmute" : "Mute"}
                                                >
                                                    <span>{isMuted ? '🔇' : '🔊'}</span>
                                                </button>
                                                <button className="nav-ctrl-btn prev" onClick={prevVideo}>
                                                    <span>‹</span>
                                                </button>
                                                <button className="nav-ctrl-btn next" onClick={nextVideo}>
                                                    <span>›</span>
                                                </button>
                                            </div>
                                        </div>


                                    </motion.div>

                                    {/* Right Panel */}
                                    <motion.div
                                        className="side-panel panel-right-content"
                                        initial={{ x: '100%', rotateY: -90 }}
                                        animate={{
                                            x: isPanelClosing ? '-90%' : 0,
                                            rotateY: isPanelClosing ? 0 : -35
                                        }}
                                        transition={{ duration: isPanelClosing ? 0.8 : 1.2, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <h3>KIXTIX<br />MEDIA</h3>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>


            {/* Client/Partner Marquee */}
            <section className="marquee-section">
                <div className="marquee-wrapper">
                    <div className="marquee-content">
                        {/* Triple the images for seamless infinite scroll */}
                        {marqueeImages.map((src, index) => (
                            <img key={`set1-${index}`} src={src} alt="Platform" className="marquee-logo" />
                        ))}
                        {marqueeImages.map((src, index) => (
                            <img key={`set2-${index}`} src={src} alt="Platform" className="marquee-logo" />
                        ))}
                        {marqueeImages.map((src, index) => (
                            <img key={`set3-${index}`} src={src} alt="Platform" className="marquee-logo" />
                        ))}
                    </div>
                </div>
            </section>

            {/* Parallax Gallery Section */}
            <ParallaxGallery />

            {/* What We Do */}
            <section className="services-section section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="badge">What We Do</span>
                        <h2 className="section-title">
                            DIGITAL GROWTH.<br />
                            <span className="gradient-text">REAL RESULTS.</span>
                        </h2>
                        <p className="section-subtitle">
                            We understand how the digital market thinks and works.
                            Here's how we make your content explode.
                        </p>
                    </motion.div>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link
                                    to={service.path}
                                    className={`service-card ${service.featured ? 'service-featured' : ''}`}
                                >
                                    <div className="service-icon-wrapper">
                                        <span className="service-icon">{service.icon}</span>
                                        {service.featured && (
                                            <div className="sound-wave">
                                                <span></span><span></span><span></span><span></span><span></span>
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-description">{service.description}</p>
                                    <span className="service-arrow">→</span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section className="why-section section">
                <div className="container">
                    <div className="why-grid">
                        <motion.div
                            className="why-content"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="badge">Why Kixtix?</span>
                            <h2 className="why-title">
                                WE GET<br />
                                <span className="gradient-text">ARTISTS.</span>
                            </h2>
                            <p className="why-text">
                                Every month, over a billion people scroll through YouTube, Instagram,
                                Facebook, and Twitter. That's a billion potential fans.
                            </p>
                            <p className="why-text">
                                We know exactly where to place your content, when to push it,
                                and how to make the algorithm work for you — not against you.
                            </p>
                            <ul className="why-list">
                                <li><span className="check">✓</span> Global Reach</li>
                                <li><span className="check">✓</span> Analytical Approach</li>
                                <li><span className="check">✓</span> Confidential Agreements</li>
                                <li><span className="check">✓</span> Best Results, Economical Cost</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            className="why-visual"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="platforms-showcase">
                                <div className="platform-card">
                                    <span className="platform-icon">▶️</span>
                                    <span className="platform-name">YouTube</span>
                                </div>
                                <div className="platform-card">
                                    <span className="platform-icon">📸</span>
                                    <span className="platform-name">Instagram</span>
                                </div>
                                <div className="platform-card">
                                    <span className="platform-icon">📘</span>
                                    <span className="platform-name">Facebook</span>
                                </div>
                                <div className="platform-card">
                                    <span className="platform-icon">🎵</span>
                                    <span className="platform-name">Spotify</span>
                                </div>
                                <div className="platform-card">
                                    <span className="platform-icon">🎧</span>
                                    <span className="platform-name">Gaana</span>
                                </div>
                                <div className="platform-card">
                                    <span className="platform-icon">🎶</span>
                                    <span className="platform-name">Saavn</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FlowingMenu Services Showcase */}
            <section className="flowing-menu-section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="badge">Explore Services</span>
                        <h2 className="section-title">
                            WHAT WE<br />
                            <span className="gradient-text">OFFER</span>
                        </h2>
                    </motion.div>
                </div>
                <div className="flowing-menu-wrapper">
                    <FlowingMenu
                        items={menuItems}
                        speed={12}
                        textColor="#fff"
                        bgColor="#050A30"
                        marqueeBgColor="#c4ff3c"
                        marqueeTextColor="#050A30"
                        borderColor="rgba(0, 234, 255, 0.2)"
                    />
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials-section section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="badge">Artists We've Worked With</span>
                        <h2 className="section-title">
                            THEY TRUSTED US.<br />
                            <span className="gradient-text">WE DELIVERED.</span>
                        </h2>
                    </motion.div>

                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.name}
                                className="testimonial-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                            >
                                <div className="quote-mark">"</div>
                                <p className="testimonial-quote">{testimonial.quote}</p>
                                <div className="testimonial-author">
                                    <div className="author-avatar glow-pulse">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div className="author-info">
                                        <span className="author-name">{testimonial.name}</span>
                                        <span className="author-title">{testimonial.title}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="cta-section section">
                <div className="container">
                    <motion.div
                        className="cta-card"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="cta-equalizer">
                            <div className="equalizer" style={{ height: '80px' }}>
                                <div className="equalizer-bar"></div>
                                <div className="equalizer-bar"></div>
                                <div className="equalizer-bar"></div>
                                <div className="equalizer-bar"></div>
                                <div className="equalizer-bar"></div>
                                <div className="equalizer-bar"></div>
                                <div className="equalizer-bar"></div>
                            </div>
                        </div>
                        <h2 className="cta-title">
                            LET'S MAKE YOUR<br />
                            MUSIC <span className="gradient-text">VIRAL</span>
                        </h2>
                        <p className="cta-subtitle">
                            One conversation. That's all it takes to start.
                        </p>
                        <div className="cta-actions">
                            <Link to="/contact" className="btn btn-primary btn-lg">
                                Get Started Now
                            </Link>
                            <a href="tel:+917717278888" className="cta-phone">
                                📞 +91 77172 78888
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Crowd Canvas Animation Section */}
            <Skiper39 />
        </div>
    );
};

export default Home;
