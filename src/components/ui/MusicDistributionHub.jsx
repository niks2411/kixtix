import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MusicDistributionHub = ({ platforms }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [distributingTo, setDistributingTo] = useState(null);

    // Animate distribution effect
    useEffect(() => {
        const interval = setInterval(() => {
            const randomPlatform = Math.floor(Math.random() * platforms.length);
            setDistributingTo(randomPlatform);
            setTimeout(() => setDistributingTo(null), 1000);
        }, 2000);
        return () => clearInterval(interval);
    }, [platforms.length]);

    return (
        <div className="music-hub-container" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '3rem',
            position: 'relative',
            minHeight: '600px',
        }}>
            {/* Central Hub - Music Track */}
            <motion.div
                className="central-hub"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                style={{
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #c4ff3c 0%, #87d300 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 60px rgba(196, 255, 60, 0.4), 0 20px 60px rgba(0,0,0,0.3)',
                    position: 'relative',
                    zIndex: 10,
                }}
            >
                {/* Pulsing Ring */}
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        border: '2px solid #c4ff3c',
                    }}
                />

                {/* Music Icon */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    style={{
                        fontSize: '2.5rem',
                        marginBottom: '8px',
                    }}
                >
                    🎵
                </motion.div>
                <div style={{
                    color: '#050A30',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    textAlign: 'center',
                }}>
                    Your Track
                </div>
                <div style={{
                    color: 'rgba(5, 10, 48, 0.7)',
                    fontSize: '0.75rem',
                }}>
                    Distributing...
                </div>
            </motion.div>

            {/* Platform Nodes - Circular Layout */}
            {platforms.slice(0, 8).map((platform, index) => {
                const angle = (index / 8) * 2 * Math.PI - Math.PI / 2;
                const radius = 220;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const isDistributing = distributingTo === index;

                return (
                    <motion.div
                        key={platform.name}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.15 }}
                        style={{
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        }}
                    >
                        {/* Connection Line */}
                        <svg
                            style={{
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                                width: radius,
                                height: '2px',
                                transform: `rotate(${angle * 180 / Math.PI + 180}deg)`,
                                transformOrigin: '0 50%',
                                pointerEvents: 'none',
                            }}
                        >
                            <motion.line
                                x1="0"
                                y1="1"
                                x2={radius - 40}
                                y2="1"
                                stroke="rgba(196, 255, 60, 0.3)"
                                strokeWidth="2"
                                strokeDasharray="5,5"
                            />
                            {/* Animated particle */}
                            <AnimatePresence>
                                {isDistributing && (
                                    <motion.circle
                                        initial={{ cx: 0, r: 6, opacity: 1 }}
                                        animate={{ cx: radius - 40, opacity: 0.5 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.8, ease: 'easeOut' }}
                                        fill="#c4ff3c"
                                    />
                                )}
                            </AnimatePresence>
                        </svg>

                        {/* Platform Card */}
                        <motion.div
                            animate={isDistributing ? { scale: [1, 1.2, 1], boxShadow: ['0 10px 30px rgba(0,0,0,0.2)', '0 10px 40px rgba(196, 255, 60, 0.5)', '0 10px 30px rgba(0,0,0,0.2)'] } : {}}
                            style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '16px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                transition: 'border-color 0.3s',
                                borderColor: isDistributing ? '#c4ff3c' : 'rgba(255,255,255,0.1)',
                            }}
                        >
                            {platform.image ? (
                                <img
                                    src={platform.image}
                                    alt={platform.name}
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        objectFit: 'contain',
                                    }}
                                />
                            ) : (
                                <div style={{
                                    fontSize: '1.5rem',
                                }}>
                                    🎧
                                </div>
                            )}
                            <span style={{
                                color: '#fff',
                                fontSize: '0.65rem',
                                marginTop: '4px',
                                textAlign: 'center',
                            }}>
                                {platform.name.split(' ')[0]}
                            </span>
                        </motion.div>

                        {/* Check mark for distributed */}
                        <AnimatePresence>
                            {isDistributing && (
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    style={{
                                        position: 'absolute',
                                        top: '-8px',
                                        right: '-8px',
                                        width: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        background: '#c4ff3c',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#050A30',
                                        fontSize: '0.8rem',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    ✓
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                );
            })}

            {/* Stats Counter */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                style={{
                    position: 'absolute',
                    bottom: '20px',
                    display: 'flex',
                    gap: '40px',
                }}
            >
                {[
                    { value: '50+', label: 'Platforms' },
                    { value: '1M+', label: 'Streams' },
                    { value: '24/7', label: 'Distribution' },
                ].map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        whileHover={{ scale: 1.1 }}
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        <div style={{
                            color: '#c4ff3c',
                            fontSize: '1.5rem',
                            fontWeight: '700',
                        }}>
                            {stat.value}
                        </div>
                        <div style={{
                            color: 'rgba(255,255,255,0.6)',
                            fontSize: '0.8rem',
                        }}>
                            {stat.label}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default MusicDistributionHub;
