import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VideoPlayerMockup = ({ videos }) => {
    const [currentVideo, setCurrentVideo] = useState(0);
    const [viewCount, setViewCount] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    // Animate view count
    useEffect(() => {
        const interval = setInterval(() => {
            setViewCount(prev => prev + Math.floor(Math.random() * 100) + 50);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    // Auto-switch videos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentVideo(prev => (prev + 1) % videos.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [videos.length]);

    const formatNumber = (num) => {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
        return num.toString();
    };

    return (
        <div className="video-mockup-container" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            position: 'relative',
        }}>
            {/* Main Video Player */}
            <motion.div
                className="video-player-frame"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                    width: '500px',
                    background: 'linear-gradient(145deg, #1a1a2e 0%, #0f0f1a 100%)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 50px 100px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.1)',
                }}
            >
                {/* Video Thumbnail Area */}
                <div className="video-thumbnail" style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16/9',
                    background: 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                }}>
                    {/* Play Icon */}
                    <motion.div
                        animate={{ scale: isPlaying ? [1, 1.2, 1] : 1 }}
                        transition={{ duration: 1.5, repeat: isPlaying ? Infinity : 0 }}
                        style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            background: 'rgba(0,0,0,0.7)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                        }}
                        onClick={() => setIsPlaying(!isPlaying)}
                    >
                        <div style={{
                            width: 0,
                            height: 0,
                            borderLeft: '25px solid #fff',
                            borderTop: '15px solid transparent',
                            borderBottom: '15px solid transparent',
                            marginLeft: '5px',
                        }} />
                    </motion.div>

                    {/* Live Badge */}
                    <motion.div
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        style={{
                            position: 'absolute',
                            top: '16px',
                            left: '16px',
                            background: '#ff0000',
                            color: '#fff',
                            padding: '4px 12px',
                            borderRadius: '4px',
                            fontSize: '0.75rem',
                            fontWeight: 'bold',
                        }}
                    >
                        ● LIVE
                    </motion.div>

                    {/* View Count */}
                    <motion.div
                        key={viewCount}
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        style={{
                            position: 'absolute',
                            bottom: '16px',
                            right: '16px',
                            background: 'rgba(0,0,0,0.8)',
                            color: '#fff',
                            padding: '6px 12px',
                            borderRadius: '4px',
                            fontSize: '0.85rem',
                        }}
                    >
                        👁 {formatNumber(viewCount + 1500000)} views
                    </motion.div>
                </div>

                {/* Video Info */}
                <div className="video-info" style={{
                    padding: '16px',
                }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentVideo}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            <h3 style={{
                                color: '#fff',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                marginBottom: '8px',
                            }}>
                                {videos[currentVideo]?.title || 'Video Title'}
                            </h3>
                            <div style={{
                                display: 'flex',
                                gap: '16px',
                                fontSize: '0.85rem',
                                color: 'rgba(255,255,255,0.6)',
                            }}>
                                <span>Kixtix Media</span>
                                <span>•</span>
                                <span>{videos[currentVideo]?.views || '2.5M'} views</span>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Engagement Stats */}
                    <div style={{
                        display: 'flex',
                        gap: '24px',
                        marginTop: '16px',
                        paddingTop: '16px',
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                    }}>
                        {[
                            { icon: '👍', count: '125K', label: 'Likes' },
                            { icon: '💬', count: '8.2K', label: 'Comments' },
                            { icon: '↗️', count: '15K', label: 'Shares' },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                whileHover={{ scale: 1.1 }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    color: 'rgba(255,255,255,0.8)',
                                    fontSize: '0.9rem',
                                    cursor: 'pointer',
                                }}
                            >
                                <span>{stat.icon}</span>
                                <span>{stat.count}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Floating Stats Bubbles */}
            <div style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none' }}>
                {[
                    { text: '10M+ Views', x: -200, y: -120, delay: 0 },
                    { text: 'Viral Content', x: 220, y: -80, delay: 0.3 },
                    { text: 'YouTube SEO', x: -180, y: 120, delay: 0.6 },
                    { text: 'Trending', x: 200, y: 100, delay: 0.9 },
                ].map((bubble, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: bubble.delay + 0.5, type: 'spring' }}
                        animate={{ y: [0, -8, 0] }}
                        style={{
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            transform: `translate(calc(-50% + ${bubble.x}px), calc(-50% + ${bubble.y}px))`,
                            background: 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)',
                            color: '#fff',
                            padding: '10px 18px',
                            borderRadius: '20px',
                            fontSize: '0.85rem',
                            fontWeight: '500',
                            boxShadow: '0 10px 30px rgba(255, 0, 0, 0.3)',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {bubble.text}
                    </motion.div>
                ))}
            </div>

            {/* Suggested Videos Panel */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                style={{
                    position: 'absolute',
                    right: '-280px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                }}
            >
                {videos.slice(0, 3).map((video, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, x: -5 }}
                        onClick={() => setCurrentVideo(index)}
                        style={{
                            display: 'flex',
                            gap: '12px',
                            alignItems: 'center',
                            cursor: 'pointer',
                            padding: '8px',
                            borderRadius: '8px',
                            background: currentVideo === index ? 'rgba(255,0,0,0.1)' : 'transparent',
                            border: '1px solid',
                            borderColor: currentVideo === index ? 'rgba(255,0,0,0.3)' : 'rgba(255,255,255,0.1)',
                        }}
                    >
                        <div style={{
                            width: '100px',
                            height: '56px',
                            borderRadius: '4px',
                            background: `linear-gradient(135deg, ${video.color || '#ff4444'} 0%, ${video.colorEnd || '#cc0000'} 100%)`,
                        }} />
                        <div>
                            <div style={{ color: '#fff', fontSize: '0.8rem', fontWeight: '500' }}>
                                {video.title}
                            </div>
                            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem' }}>
                                {video.views} views
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default VideoPlayerMockup;
