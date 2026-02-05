import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const BeforeAfterTransform = ({ videoSrc = '/music1.mp4' }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const [afterViews, setAfterViews] = useState(5200000);
    const videoBeforeRef = useRef(null);
    const videoAfterRef = useRef(null);

    // Sync both videos
    useEffect(() => {
        const syncVideos = () => {
            if (videoBeforeRef.current && videoAfterRef.current) {
                videoAfterRef.current.currentTime = videoBeforeRef.current.currentTime;
            }
        };

        const beforeVideo = videoBeforeRef.current;
        if (beforeVideo) {
            beforeVideo.addEventListener('timeupdate', syncVideos);
            return () => beforeVideo.removeEventListener('timeupdate', syncVideos);
        }
    }, []);

    // Animate the after view count
    useEffect(() => {
        const interval = setInterval(() => {
            setAfterViews(prev => prev + Math.floor(Math.random() * 1000) + 500);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    // Auto animate slider on first load
    useEffect(() => {
        const timeout = setTimeout(() => {
            let pos = 50;
            const animate = setInterval(() => {
                pos += 2;
                if (pos >= 85) {
                    clearInterval(animate);
                    setTimeout(() => setSliderPosition(50), 1500);
                }
                setSliderPosition(pos);
            }, 50);
        }, 1500);
        return () => clearTimeout(timeout);
    }, []);

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        setSliderPosition(Math.max(10, Math.min(90, x)));
    };

    const formatNumber = (num) => {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
        return num.toString();
    };

    return (
        <div className="before-after-container" style={{
            width: '100%',
            maxWidth: '900px',
            margin: '0 auto',
            padding: '2rem',
        }}>
            {/* Title */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ textAlign: 'center', marginBottom: '30px' }}
            >
                <h3 style={{
                    color: '#fff',
                    fontSize: '1.5rem',
                    fontWeight: '300',
                    margin: 0,
                }}>
                    Drag to see the <span style={{ color: '#c4ff3c', fontWeight: '600' }}>Transformation</span>
                </h3>
            </motion.div>

            {/* Comparison Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16/9',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 40px 80px rgba(0, 0, 0, 0.4)',
                    cursor: isDragging ? 'grabbing' : 'grab',
                    userSelect: 'none',
                    WebkitUserSelect: 'none',
                    MozUserSelect: 'none',
                    msUserSelect: 'none',
                }}
                onMouseMove={handleMouseMove}
                onMouseDown={(e) => { e.preventDefault(); setIsDragging(true); }}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onDragStart={(e) => e.preventDefault()}
            >
                {/* BEFORE Side - Full width, gets clipped by AFTER */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}>
                    {/* Video */}
                    <video
                        ref={videoBeforeRef}
                        src={videoSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: 'grayscale(60%) brightness(0.6)',
                        }}
                    />

                    {/* Dark Overlay */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0,0,0,0.4)',
                    }} />

                    {/* Before Stats Overlay */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        {/* Top Badge */}
                        <div style={{
                            position: 'absolute',
                            top: '20px',
                            left: '20px',
                            background: 'rgba(100,100,100,0.8)',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            color: '#999',
                            fontSize: '0.85rem',
                        }}>
                            😔 No Promotion
                        </div>

                        {/* Low View Count */}
                        <div style={{
                            position: 'absolute',
                            bottom: '20px',
                            left: '20px',
                        }}>
                            <div style={{ fontSize: '3rem', fontWeight: '700', color: '#666' }}>
                                47
                            </div>
                            <div style={{ fontSize: '1rem', color: '#888' }}>views</div>
                        </div>

                        {/* Sad Engagement */}
                        <div style={{
                            position: 'absolute',
                            bottom: '30px',
                            left: '130px',
                            display: 'flex',
                            gap: '20px',
                            color: '#666',
                            fontSize: '1rem',
                        }}>
                            <span>👍 2</span>
                            <span>💬 0</span>
                            <span>↗️ 0</span>
                        </div>

                        {/* BEFORE Label */}
                        <div style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            background: 'rgba(100,100,100,0.8)',
                            padding: '6px 14px',
                            borderRadius: '6px',
                            color: '#999',
                            fontSize: '0.8rem',
                            fontWeight: '600',
                        }}>
                            BEFORE
                        </div>
                    </div>
                </div>

                {/* AFTER Side - Clipped */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    clipPath: `inset(0 0 0 ${sliderPosition}%)`,
                }}>
                    {/* Video */}
                    <video
                        ref={videoAfterRef}
                        src={videoSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: 'saturate(1.2) brightness(1.1)',
                        }}
                    />

                    {/* Vibrant Overlay */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to top, rgba(255,0,0,0.2) 0%, transparent 50%)',
                    }} />

                    {/* After Stats Overlay */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}>
                        {/* Trending Badge */}
                        <motion.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            style={{
                                position: 'absolute',
                                top: '20px',
                                left: '20px',
                                background: 'linear-gradient(135deg, #ff4444 0%, #cc0000 100%)',
                                padding: '8px 16px',
                                borderRadius: '20px',
                                color: '#fff',
                                fontSize: '0.85rem',
                                fontWeight: '600',
                                boxShadow: '0 4px 20px rgba(255,0,0,0.4)',
                            }}
                        >
                            🔥 TRENDING #1
                        </motion.div>

                        {/* High View Count */}
                        <motion.div
                            key={afterViews}
                            initial={{ scale: 1.02 }}
                            animate={{ scale: 1 }}
                            style={{
                                position: 'absolute',
                                bottom: '20px',
                                left: '20px',
                            }}
                        >
                            <div style={{ fontSize: '3rem', fontWeight: '700', color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                                {formatNumber(afterViews)}
                            </div>
                            <div style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.9)' }}>views</div>
                        </motion.div>

                        {/* High Engagement */}
                        <div style={{
                            position: 'absolute',
                            bottom: '30px',
                            left: '150px',
                            display: 'flex',
                            gap: '20px',
                            color: '#fff',
                            fontSize: '1rem',
                            textShadow: '0 2px 5px rgba(0,0,0,0.5)',
                        }}>
                            <span>👍 245K</span>
                            <span>💬 12K</span>
                            <span>↗️ 50K</span>
                        </div>

                        {/* AFTER Label */}
                        <div style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            background: 'linear-gradient(135deg, #c4ff3c 0%, #87d300 100%)',
                            padding: '6px 14px',
                            borderRadius: '6px',
                            color: '#050A30',
                            fontSize: '0.8rem',
                            fontWeight: '700',
                        }}>
                            AFTER
                        </div>

                        {/* Verified Badge */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1, type: 'spring' }}
                            style={{
                                position: 'absolute',
                                top: '60px',
                                right: '20px',
                                background: 'rgba(0,0,0,0.6)',
                                padding: '6px 12px',
                                borderRadius: '20px',
                                color: '#fff',
                                fontSize: '0.75rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                            }}
                        >
                            ✓ Verified
                        </motion.div>
                    </div>
                </div>

                {/* Slider Line */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: `${sliderPosition}%`,
                    width: '4px',
                    background: '#fff',
                    transform: 'translateX(-50%)',
                    boxShadow: '0 0 20px rgba(255,255,255,0.5)',
                    zIndex: 10,
                }}>
                    {/* Slider Handle */}
                    <motion.div
                        animate={{ scale: isDragging ? 1.2 : 1 }}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #fff 0%, #eee 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                            border: '3px solid rgba(255,255,255,0.8)',
                        }}
                    >
                        <span style={{ color: '#333', fontSize: '1.5rem', fontWeight: '300' }}>⟷</span>
                    </motion.div>
                </div>
            </motion.div>

            {/* Bottom Stats */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '40px',
                    marginTop: '40px',
                    flexWrap: 'wrap',
                }}
            >
                {[
                    { label: 'Average Growth', value: '10,000%', icon: '📈' },
                    { label: 'Time to Viral', value: '7 Days', icon: '⚡' },
                    { label: 'Success Rate', value: '95%', icon: '🎯' },
                ].map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        whileHover={{ scale: 1.05, y: -5 }}
                        style={{
                            textAlign: 'center',
                            padding: '20px 30px',
                            background: 'rgba(255,255,255,0.05)',
                            borderRadius: '16px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(10px)',
                        }}
                    >
                        <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{stat.icon}</div>
                        <div style={{ color: '#c4ff3c', fontSize: '1.5rem', fontWeight: '700' }}>
                            {stat.value}
                        </div>
                        <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
                            {stat.label}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default BeforeAfterTransform;
