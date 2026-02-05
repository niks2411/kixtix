import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const BeforeAfterTransform = ({ videoSrc = '/music1.mp4' }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const [baseAfterViews, setBaseAfterViews] = useState(5200000);
    const [progress, setProgress] = useState(35);
    const videoBeforeRef = useRef(null);
    const videoAfterRef = useRef(null);

    // Calculate current views based on slider position
    // Slider at 0% = 47 views, slider at 100% = baseAfterViews
    const beforeViews = 47;
    const currentViews = Math.round(beforeViews + ((baseAfterViews - beforeViews) * (sliderPosition / 100)));

    // Sync both videos
    useEffect(() => {
        const syncVideos = () => {
            if (videoBeforeRef.current && videoAfterRef.current) {
                videoAfterRef.current.currentTime = videoBeforeRef.current.currentTime;
                // Update progress
                const duration = videoBeforeRef.current.duration || 1;
                const current = videoBeforeRef.current.currentTime || 0;
                setProgress((current / duration) * 100);
            }
        };

        const beforeVideo = videoBeforeRef.current;
        if (beforeVideo) {
            beforeVideo.addEventListener('timeupdate', syncVideos);
            return () => beforeVideo.removeEventListener('timeupdate', syncVideos);
        }
    }, []);

    // Animate the base after view count
    useEffect(() => {
        const interval = setInterval(() => {
            setBaseAfterViews(prev => prev + Math.floor(Math.random() * 1000) + 500);
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
        setSliderPosition(Math.max(5, Math.min(95, x)));
    };

    const formatNumber = (num) => {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
        return num.toString();
    };

    // Determine color based on slider position
    const isViral = sliderPosition > 60;
    const counterBg = isViral ? 'rgba(196, 255, 60, 0.2)' : 'rgba(0,0,0,0.7)';
    const counterTextColor = isViral ? '#fff' : '#888';
    const counterBorder = isViral ? '1px solid rgba(196, 255, 60, 0.3)' : 'none';

    // YouTube-style bottom bar component
    const YouTubeControls = ({ isAfter = false }) => (
        <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)',
            padding: '40px 16px 12px',
        }}>
            {/* Progress Bar */}
            <div style={{
                width: '100%',
                height: '4px',
                background: 'rgba(255,255,255,0.3)',
                borderRadius: '2px',
                marginBottom: '10px',
                cursor: 'pointer',
            }}>
                <div style={{
                    width: `${progress}%`,
                    height: '100%',
                    background: isAfter ? '#c4ff3c' : '#666',
                    borderRadius: '2px',
                    transition: 'width 0.1s',
                }} />
            </div>

            {/* Controls Row */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                {/* Left Controls */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    {/* Play Button */}
                    <div style={{ color: '#fff', fontSize: '1.2rem', cursor: 'pointer' }}>▶</div>
                    {/* Volume */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        color: '#fff',
                        fontSize: '1rem',
                    }}>
                        🔊
                        <div style={{
                            width: '60px',
                            height: '3px',
                            background: 'rgba(255,255,255,0.3)',
                            borderRadius: '2px',
                        }}>
                            <div style={{ width: '70%', height: '100%', background: '#fff', borderRadius: '2px' }} />
                        </div>
                    </div>
                    {/* Time */}
                    <span style={{ color: '#fff', fontSize: '0.8rem', opacity: 0.9 }}>
                        1:24 / 3:45
                    </span>
                </div>

                {/* Right Controls */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#fff', fontSize: '1rem' }}>
                    <span style={{ cursor: 'pointer' }}>⚙️</span>
                    <span style={{ cursor: 'pointer' }}>🎬</span>
                    <span style={{ cursor: 'pointer' }}>⛶</span>
                </div>
            </div>
        </div>
    );

    return (
        <div className="before-after-container" style={{
            width: '100%',
            maxWidth: '950px',
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
                    borderRadius: '12px',
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
                        background: 'rgba(0,0,0,0.3)',
                    }} />

                    {/* Before Stats Overlay */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}>
                        {/* Top Badge */}
                        <div style={{
                            position: 'absolute',
                            top: '16px',
                            left: '16px',
                            background: 'rgba(80,80,80,0.9)',
                            padding: '6px 14px',
                            borderRadius: '4px',
                            color: '#aaa',
                            fontSize: '0.8rem',
                            fontWeight: '500',
                        }}>
                            BEFORE
                        </div>

                        {/* YouTube Logo area */}
                        <div style={{
                            position: 'absolute',
                            top: '16px',
                            right: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                        }}>
                            <div style={{
                                background: '#666',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                color: '#aaa',
                                fontSize: '0.7rem',
                            }}>
                                ▶ YouTube
                            </div>
                        </div>

                        {/* Engagement Row - Bottom Left */}
                        <div style={{
                            position: 'absolute',
                            bottom: '70px',
                            left: '16px',
                            display: 'flex',
                            gap: '16px',
                            color: '#666',
                            fontSize: '0.9rem',
                        }}>
                            <span>👁️ 47</span>
                            <span>👍 2</span>
                            <span>👎 0</span>
                            <span>💬 0</span>
                        </div>
                    </div>

                    {/* YouTube Controls */}
                    <YouTubeControls isAfter={false} />
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
                        background: 'linear-gradient(to top, rgba(196, 255, 60, 0.15) 0%, transparent 30%)',
                    }} />

                    {/* After Stats Overlay */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}>
                        {/* AFTER Label */}
                        <div style={{
                            position: 'absolute',
                            top: '16px',
                            left: '16px',
                            background: 'linear-gradient(135deg, #c4ff3c 0%, #87d300 100%)',
                            padding: '6px 14px',
                            borderRadius: '4px',
                            color: '#050A30',
                            fontSize: '0.8rem',
                            fontWeight: '700',
                        }}>
                            AFTER
                        </div>

                        {/* Trending Badge */}
                        <motion.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            style={{
                                position: 'absolute',
                                top: '16px',
                                right: '16px',
                                background: 'linear-gradient(135deg, #c4ff3c 0%, #87d300 100%)',
                                padding: '6px 12px',
                                borderRadius: '4px',
                                color: '#050A30',
                                fontSize: '0.8rem',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                            }}
                        >
                            <span>🔥</span> TRENDING #1
                        </motion.div>

                        {/* Verified Badge */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5, type: 'spring' }}
                            style={{
                                position: 'absolute',
                                top: '52px',
                                right: '16px',
                                background: 'rgba(0,0,0,0.7)',
                                padding: '4px 10px',
                                borderRadius: '4px',
                                color: '#fff',
                                fontSize: '0.7rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                            }}
                        >
                            ✓ Verified Artist
                        </motion.div>

                        {/* Engagement Row - Bottom Left */}
                        <div style={{
                            position: 'absolute',
                            bottom: '70px',
                            left: '16px',
                            display: 'flex',
                            gap: '16px',
                            color: '#fff',
                            fontSize: '0.9rem',
                            textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                        }}>
                            <motion.span
                                key={currentViews}
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                            >
                                👁️ {formatNumber(currentViews)}
                            </motion.span>
                            <span>👍 245K</span>
                            <span>👎 1.2K</span>
                            <span>💬 12K</span>
                        </div>
                    </div>

                    {/* YouTube Controls */}
                    <YouTubeControls isAfter={true} />
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
        </div>
    );
};

export default BeforeAfterTransform;
