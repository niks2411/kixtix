import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MusicPlayerCards = () => {
    const [progress, setProgress] = useState(35);
    const { scrollY } = useScroll();

    // Animate progress bar
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => (prev >= 100 ? 0 : prev + 0.5));
        }, 100);
        return () => clearInterval(interval);
    }, []);

    const platforms = [
        {
            name: 'Spotify',
            color: '#1DB954',
            icon: '🎵',
            position: { x: -280, y: -80 },
            delay: 0
        },
        {
            name: 'Apple Music',
            color: '#FC3C44',
            icon: '🎧',
            position: { x: 280, y: -60 },
            delay: 0.2
        },
        {
            name: 'YouTube Music',
            color: '#FF0000',
            icon: '▶️',
            position: { x: -260, y: 120 },
            delay: 0.4
        },
        {
            name: 'Amazon Music',
            color: '#00A8E1',
            icon: '🎶',
            position: { x: 300, y: 140 },
            delay: 0.6
        },
        {
            name: 'JioSaavn',
            color: '#2BC5B4',
            icon: '🎼',
            position: { x: 0, y: -160 },
            delay: 0.8
        },
    ];

    const PlayerCard = ({ platform, style }) => {
        const y1 = useTransform(scrollY, [0, 500], [0, platform.position.y * 0.3]);

        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: platform.delay, type: 'spring', damping: 15 }}
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    ...style,
                }}
            >
                <motion.div
                    style={{ y: y1 }}
                    animate={{
                        y: [0, -10, 0],
                        rotate: [0, 1, -1, 0],
                    }}
                    transition={{
                        duration: 4 + platform.delay * 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                >
                    <div style={{
                        background: 'rgba(20, 20, 30, 0.95)',
                        borderRadius: '16px',
                        padding: '16px',
                        width: '260px',
                        boxShadow: `0 20px 60px rgba(0,0,0,0.4), 0 0 40px ${platform.color}20`,
                        border: `1px solid ${platform.color}40`,
                        backdropFilter: 'blur(20px)',
                    }}>
                        {/* Platform Header */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            marginBottom: '12px',
                        }}>
                            <span style={{ fontSize: '1.2rem' }}>{platform.icon}</span>
                            <span style={{
                                color: platform.color,
                                fontSize: '0.85rem',
                                fontWeight: '600'
                            }}>
                                {platform.name}
                            </span>
                            <motion.div
                                animate={{ opacity: [1, 0.5, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                style={{
                                    marginLeft: 'auto',
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    background: '#1DB954',
                                }}
                            />
                        </div>

                        {/* Album Art & Info */}
                        <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                            <motion.div
                                animate={{ scale: [1, 1.02, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '8px',
                                    background: `linear-gradient(135deg, ${platform.color} 0%, #333 100%)`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                }}
                            >
                                🎵
                            </motion.div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{
                                    color: '#fff',
                                    fontSize: '0.95rem',
                                    fontWeight: '600',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}>
                                    Your Hit Song
                                </div>
                                <div style={{
                                    color: 'rgba(255,255,255,0.6)',
                                    fontSize: '0.8rem',
                                }}>
                                    Artist Name
                                </div>
                                <div style={{
                                    color: platform.color,
                                    fontSize: '0.75rem',
                                    marginTop: '4px',
                                }}>
                                    🔥 2.5M streams
                                </div>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div style={{
                            width: '100%',
                            height: '4px',
                            background: 'rgba(255,255,255,0.1)',
                            borderRadius: '2px',
                            marginBottom: '8px',
                        }}>
                            <motion.div
                                style={{
                                    width: `${progress}%`,
                                    height: '100%',
                                    background: platform.color,
                                    borderRadius: '2px',
                                }}
                            />
                        </div>

                        {/* Controls */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '24px',
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: '1.1rem',
                        }}>
                            <span style={{ cursor: 'pointer' }}>⏮</span>
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    background: platform.color,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                }}
                            >
                                <span style={{ color: '#fff', marginLeft: '2px' }}>▶</span>
                            </motion.div>
                            <span style={{ cursor: 'pointer' }}>⏭</span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        );
    };

    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: '600px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(196, 255, 60, 0.15) 0%, transparent 70%)',
                borderRadius: '50%',
            }} />

            {/* Floating Cards */}
            {platforms.map((platform) => (
                <PlayerCard
                    key={platform.name}
                    platform={platform}
                    style={{
                        transform: `translate(calc(-50% + ${platform.position.x}px), calc(-50% + ${platform.position.y}px))`,
                    }}
                />
            ))}

            {/* Center Text */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                style={{
                    textAlign: 'center',
                    zIndex: 10,
                    background: 'rgba(5, 10, 48, 0.9)',
                    padding: '24px 40px',
                    borderRadius: '20px',
                    border: '1px solid rgba(196, 255, 60, 0.3)',
                }}
            >
                <div style={{
                    color: '#c4ff3c',
                    fontSize: '2rem',
                    fontWeight: '700',
                    marginBottom: '8px',
                }}>
                    One Upload
                </div>
                <div style={{
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '1rem',
                }}>
                    All Platforms • Instantly
                </div>
            </motion.div>
        </div>
    );
};

export default MusicPlayerCards;
