import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SocialFeedMockup = () => {
    const [hearts, setHearts] = useState([]);
    const [comments, setComments] = useState([]);
    const [likeCount, setLikeCount] = useState(245800);
    const [commentCount, setCommentCount] = useState(12400);

    // Generate floating hearts
    useEffect(() => {
        const interval = setInterval(() => {
            setHearts(prev => [...prev.slice(-8), { id: Date.now(), x: Math.random() * 40 + 30 }]);
            setLikeCount(prev => prev + Math.floor(Math.random() * 10) + 1);
        }, 600);
        return () => clearInterval(interval);
    }, []);

    // Generate comments
    useEffect(() => {
        const sampleComments = [
            { user: 'musiclover', text: '🔥🔥🔥 This is fire!' },
            { user: 'vibes_only', text: 'On repeat all day!' },
            { user: 'dj_beats', text: 'Absolute banger! 💯' },
            { user: 'melody_fan', text: 'Who else watching in 2024?' },
            { user: 'playlist_king', text: 'Added to my playlist!' },
        ];
        const interval = setInterval(() => {
            const comment = sampleComments[Math.floor(Math.random() * sampleComments.length)];
            setComments(prev => [...prev.slice(-4), { ...comment, id: Date.now() }]);
            setCommentCount(prev => prev + 1);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    const formatNumber = (num) => {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
        return num.toString();
    };

    return (
        <div className="social-feed-container" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            position: 'relative',
        }}>
            {/* Phone Frame */}
            <motion.div
                initial={{ opacity: 0, y: 30, rotateY: -10 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8 }}
                style={{
                    width: '320px',
                    height: '650px',
                    background: 'linear-gradient(145deg, #1a1a2e 0%, #0f0f1a 100%)',
                    borderRadius: '45px',
                    padding: '12px',
                    boxShadow: '0 50px 100px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.1), -20px 0 60px rgba(255, 0, 0, 0.1)',
                    position: 'relative',
                }}
            >
                {/* Screen */}
                <div style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '35px',
                    overflow: 'hidden',
                    background: '#000',
                    position: 'relative',
                }}>
                    {/* Video Content */}
                    <div style={{
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(180deg, #ff4444 0%, #cc0000 50%, #990000 100%)',
                        position: 'relative',
                    }}>
                        {/* Top Bar */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            padding: '16px',
                            background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 100%)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            zIndex: 10,
                        }}>
                            <span style={{ color: '#fff', fontWeight: '600' }}>Following</span>
                            <span style={{ color: '#fff', fontWeight: '600', borderBottom: '2px solid #fff', paddingBottom: '4px' }}>For You</span>
                            <span style={{ color: 'rgba(255,255,255,0.6)' }}>🔍</span>
                        </div>

                        {/* Floating Hearts */}
                        <AnimatePresence>
                            {hearts.map(heart => (
                                <motion.div
                                    key={heart.id}
                                    initial={{ opacity: 1, y: 0, scale: 0 }}
                                    animate={{ opacity: 0, y: -300, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 2, ease: 'easeOut' }}
                                    style={{
                                        position: 'absolute',
                                        bottom: '200px',
                                        right: `${heart.x}px`,
                                        fontSize: '1.8rem',
                                        pointerEvents: 'none',
                                        zIndex: 20,
                                    }}
                                >
                                    ❤️
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {/* Video Play Button */}
                        <motion.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                background: 'rgba(255,255,255,0.2)',
                                backdropFilter: 'blur(10px)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <div style={{
                                width: 0,
                                height: 0,
                                borderLeft: '28px solid #fff',
                                borderTop: '16px solid transparent',
                                borderBottom: '16px solid transparent',
                                marginLeft: '6px',
                            }} />
                        </motion.div>

                        {/* Right Side Actions */}
                        <div style={{
                            position: 'absolute',
                            right: '12px',
                            bottom: '120px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '20px',
                            zIndex: 10,
                        }}>
                            {/* Profile */}
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #c4ff3c 0%, #87d300 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                    color: '#050A30',
                                    border: '2px solid #fff',
                                    position: 'relative',
                                }}
                            >
                                K
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-6px',
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    background: '#ff4444',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.7rem',
                                    color: '#fff',
                                }}>+</div>
                            </motion.div>

                            {/* Like */}
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 2 }}
                                style={{ textAlign: 'center' }}
                            >
                                <div style={{ fontSize: '2rem' }}>❤️</div>
                                <span style={{ color: '#fff', fontSize: '0.75rem', fontWeight: '600' }}>{formatNumber(likeCount)}</span>
                            </motion.div>

                            {/* Comment */}
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '1.8rem' }}>💬</div>
                                <span style={{ color: '#fff', fontSize: '0.75rem', fontWeight: '600' }}>{formatNumber(commentCount)}</span>
                            </div>

                            {/* Share */}
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '1.8rem' }}>↗️</div>
                                <span style={{ color: '#fff', fontSize: '0.75rem', fontWeight: '600' }}>Share</span>
                            </div>

                            {/* Sound */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #333 0%, #000 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '3px solid #fff',
                                }}
                            >
                                🎵
                            </motion.div>
                        </div>

                        {/* Bottom Info */}
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            padding: '20px',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
                            zIndex: 10,
                        }}>
                            <div style={{ color: '#fff', fontWeight: '700', marginBottom: '6px' }}>
                                @kixtixmedia
                            </div>
                            <div style={{ color: '#fff', fontSize: '0.85rem', opacity: 0.9 }}>
                                🔥 Your video could be next! #viral #music #trending
                            </div>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                marginTop: '10px',
                                color: '#fff',
                                fontSize: '0.8rem',
                            }}>
                                <span>🎵</span>
                                <motion.span
                                    animate={{ x: [-100, 0] }}
                                    transition={{ duration: 5, repeat: Infinity }}
                                >
                                    Original Sound - Kixtix Media
                                </motion.span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Notch */}
                <div style={{
                    position: 'absolute',
                    top: '18px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100px',
                    height: '28px',
                    background: '#0f0f1a',
                    borderRadius: '14px',
                }} />
            </motion.div>

            {/* Live Comments Panel */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                style={{
                    position: 'absolute',
                    right: '-220px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '200px',
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    padding: '16px',
                    border: '1px solid rgba(255,255,255,0.1)',
                }}
            >
                <div style={{ color: '#fff', fontWeight: '600', marginBottom: '12px', fontSize: '0.9rem' }}>
                    💬 Live Comments
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <AnimatePresence>
                        {comments.map(comment => (
                            <motion.div
                                key={comment.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, height: 0 }}
                                style={{
                                    background: 'rgba(255,255,255,0.1)',
                                    borderRadius: '10px',
                                    padding: '8px 10px',
                                }}
                            >
                                <div style={{ color: '#c4ff3c', fontSize: '0.7rem', fontWeight: '600' }}>
                                    @{comment.user}
                                </div>
                                <div style={{ color: '#fff', fontSize: '0.75rem', opacity: 0.9 }}>
                                    {comment.text}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </motion.div>

            {/* Floating Feature Bubbles */}
            {[
                { text: 'Viral Reach', x: -180, y: -180 },
                { text: '10M+ Views', x: -160, y: 150 },
            ].map((bubble, i) => (
                <motion.div
                    key={bubble.text}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                    transition={{ delay: 0.8 + i * 0.2, duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                    style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: `translate(calc(-50% + ${bubble.x}px), calc(-50% + ${bubble.y}px))`,
                        background: 'linear-gradient(135deg, #ff4444 0%, #cc0000 100%)',
                        color: '#fff',
                        padding: '10px 20px',
                        borderRadius: '25px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        boxShadow: '0 10px 30px rgba(255, 68, 68, 0.4)',
                    }}
                >
                    {bubble.text}
                </motion.div>
            ))}
        </div>
    );
};

export default SocialFeedMockup;
