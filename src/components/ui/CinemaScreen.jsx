import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CinemaScreen = () => {
    const [viewCount, setViewCount] = useState(1542000);
    const [reactions, setReactions] = useState([]);

    // Animate view count
    useEffect(() => {
        const interval = setInterval(() => {
            setViewCount(prev => prev + Math.floor(Math.random() * 500) + 100);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    // Generate floating reactions
    useEffect(() => {
        const interval = setInterval(() => {
            const newReaction = {
                id: Date.now(),
                emoji: ['🔥', '👍', '😮', '❤️', '🎵', '💯'][Math.floor(Math.random() * 6)],
                x: Math.random() * 80 + 10,
            };
            setReactions(prev => [...prev.slice(-15), newReaction]);
        }, 400);
        return () => clearInterval(interval);
    }, []);

    const formatNumber = (num) => {
        if (num >= 1000000) return (num / 1000000).toFixed(2) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
        return num.toString();
    };

    return (
        <div className="cinema-container" style={{
            position: 'relative',
            width: '100%',
            maxWidth: '700px',
            margin: '0 auto',
            perspective: '1000px',
        }}>
            {/* Cinema Room Frame */}
            <motion.div
                initial={{ opacity: 0, rotateX: 15 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{ duration: 1 }}
                style={{
                    background: 'linear-gradient(180deg, #0a0a15 0%, #1a1a2e 100%)',
                    borderRadius: '20px',
                    padding: '30px 30px 60px',
                    boxShadow: '0 50px 100px rgba(0, 0, 0, 0.6), inset 0 0 100px rgba(255,0,0,0.05)',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Spotlight Effects */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '20%',
                    width: '60%',
                    height: '100%',
                    background: 'radial-gradient(ellipse at top, rgba(255,0,0,0.1) 0%, transparent 50%)',
                    pointerEvents: 'none',
                }} />

                {/* Cinema Screen */}
                <div className="cinema-screen" style={{
                    background: '#000',
                    borderRadius: '8px',
                    aspectRatio: '16/9',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 0 50px rgba(255, 0, 0, 0.3), 0 0 100px rgba(255, 0, 0, 0.1)',
                    border: '4px solid #222',
                }}>
                    {/* Video Content (Gradient Placeholder) */}
                    <div style={{
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(135deg, #ff4444 0%, #cc0000 50%, #990000 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                    }}>
                        {/* Play Button */}
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                background: 'rgba(0,0,0,0.6)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backdropFilter: 'blur(10px)',
                            }}
                        >
                            <div style={{
                                width: 0,
                                height: 0,
                                borderLeft: '35px solid #fff',
                                borderTop: '20px solid transparent',
                                borderBottom: '20px solid transparent',
                                marginLeft: '8px',
                            }} />
                        </motion.div>

                        {/* Trending Badge */}
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            style={{
                                position: 'absolute',
                                top: '20px',
                                left: '20px',
                                background: 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)',
                                color: '#fff',
                                padding: '8px 16px',
                                borderRadius: '20px',
                                fontSize: '0.9rem',
                                fontWeight: 'bold',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                boxShadow: '0 4px 20px rgba(255,0,0,0.4)',
                            }}
                        >
                            <span>🔥</span> TRENDING #1
                        </motion.div>

                        {/* Live View Counter */}
                        <motion.div
                            style={{
                                position: 'absolute',
                                bottom: '20px',
                                right: '20px',
                                background: 'rgba(0,0,0,0.8)',
                                color: '#fff',
                                padding: '12px 20px',
                                borderRadius: '30px',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                backdropFilter: 'blur(10px)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                            }}
                        >
                            <motion.span
                                animate={{ opacity: [1, 0.5, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                style={{ color: '#ff4444' }}
                            >
                                ●
                            </motion.span>
                            <span style={{ color: '#c4ff3c' }}>{formatNumber(viewCount)}</span>
                            <span style={{ opacity: 0.7 }}>views</span>
                        </motion.div>

                        {/* Floating Reactions */}
                        <AnimatePresence>
                            {reactions.map(reaction => (
                                <motion.div
                                    key={reaction.id}
                                    initial={{ opacity: 1, y: 0, x: 0 }}
                                    animate={{ opacity: 0, y: -200, x: (Math.random() - 0.5) * 40 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 2, ease: 'easeOut' }}
                                    style={{
                                        position: 'absolute',
                                        bottom: '60px',
                                        left: `${reaction.x}%`,
                                        fontSize: '2rem',
                                        pointerEvents: 'none',
                                    }}
                                >
                                    {reaction.emoji}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Audience Silhouettes */}
                <div className="audience" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '8px',
                    marginTop: '30px',
                    position: 'relative',
                }}>
                    {Array.from({ length: 15 }).map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{ y: [0, -3, 0] }}
                            transition={{
                                duration: 0.5 + Math.random() * 0.5,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                            style={{
                                width: '25px',
                                height: '35px',
                                background: `rgba(0,0,0,${0.6 + Math.random() * 0.3})`,
                                borderRadius: '50% 50% 0 0',
                                position: 'relative',
                            }}
                        >
                            {/* Head */}
                            <div style={{
                                width: '18px',
                                height: '18px',
                                background: 'inherit',
                                borderRadius: '50%',
                                position: 'absolute',
                                top: '-12px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                            }} />
                        </motion.div>
                    ))}
                </div>

                {/* Floor Glow */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '100px',
                    background: 'linear-gradient(to top, rgba(255,0,0,0.1) 0%, transparent 100%)',
                    pointerEvents: 'none',
                }} />
            </motion.div>

            {/* Stats Below */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '50px',
                    marginTop: '30px',
                }}
            >
                {[
                    { label: 'Channels Promoted', value: '500+' },
                    { label: 'Total Views', value: '100M+' },
                    { label: 'Success Rate', value: '95%' },
                ].map((stat, i) => (
                    <div key={stat.label} style={{ textAlign: 'center' }}>
                        <div style={{ color: '#ff4444', fontSize: '1.8rem', fontWeight: '700' }}>
                            {stat.value}
                        </div>
                        <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
                            {stat.label}
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default CinemaScreen;
