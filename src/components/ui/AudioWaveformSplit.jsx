import { motion } from 'framer-motion';

const AudioWaveformSplit = () => {
    const platforms = [
        { name: 'Spotify', color: '#1DB954', x: -200, y: -120 },
        { name: 'Apple Music', color: '#FC3C44', x: 200, y: -120 },
        { name: 'YouTube Music', color: '#FF0000', x: -220, y: 0 },
        { name: 'Amazon Music', color: '#00A8E1', x: 220, y: 0 },
        { name: 'JioSaavn', color: '#2BC5B4', x: -200, y: 120 },
        { name: 'Gaana', color: '#E72C30', x: 200, y: 120 },
    ];

    // Generate waveform bars
    const waveformBars = Array.from({ length: 40 }, (_, i) => ({
        id: i,
        height: Math.random() * 60 + 20,
        delay: i * 0.02,
    }));

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
            {/* Background Gradient */}
            <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center, rgba(196, 255, 60, 0.05) 0%, transparent 50%)',
            }} />

            {/* Platform Endpoints */}
            {platforms.map((platform, i) => (
                <motion.div
                    key={platform.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1, type: 'spring' }}
                    style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: `translate(calc(-50% + ${platform.x}px), calc(-50% + ${platform.y}px))`,
                    }}
                >
                    {/* Connection Stream */}
                    <svg
                        style={{
                            position: 'absolute',
                            left: platform.x > 0 ? 'auto' : '100%',
                            right: platform.x > 0 ? '100%' : 'auto',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: Math.abs(platform.x) - 50,
                            height: '60px',
                            overflow: 'visible',
                        }}
                    >
                        <motion.path
                            d={platform.x > 0
                                ? `M ${Math.abs(platform.x) - 50} 30 Q ${(Math.abs(platform.x) - 50) / 2} ${platform.y > 0 ? 50 : 10} 0 30`
                                : `M 0 30 Q ${(Math.abs(platform.x) - 50) / 2} ${platform.y > 0 ? 50 : 10} ${Math.abs(platform.x) - 50} 30`
                            }
                            stroke={platform.color}
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.6 }}
                            transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                        />
                        {/* Animated particles along path */}
                        {[...Array(3)].map((_, j) => (
                            <motion.circle
                                key={j}
                                r="4"
                                fill={platform.color}
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: [0, 1, 0],
                                    offsetDistance: ['0%', '100%'],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: j * 0.6 + i * 0.2,
                                }}
                                style={{
                                    offsetPath: `path('${platform.x > 0
                                        ? `M ${Math.abs(platform.x) - 50} 30 Q ${(Math.abs(platform.x) - 50) / 2} ${platform.y > 0 ? 50 : 10} 0 30`
                                        : `M 0 30 Q ${(Math.abs(platform.x) - 50) / 2} ${platform.y > 0 ? 50 : 10} ${Math.abs(platform.x) - 50} 30`
                                        }')`,
                                }}
                            />
                        ))}
                    </svg>

                    {/* Platform Card */}
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        style={{
                            background: `linear-gradient(135deg, ${platform.color}20 0%, rgba(20,20,30,0.95) 100%)`,
                            border: `2px solid ${platform.color}60`,
                            borderRadius: '16px',
                            padding: '16px 24px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            boxShadow: `0 10px 40px ${platform.color}20`,
                            cursor: 'pointer',
                        }}
                    >
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '10px',
                                background: platform.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.2rem',
                            }}
                        >
                            🎵
                        </motion.div>
                        <div>
                            <div style={{
                                color: '#fff',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                            }}>
                                {platform.name}
                            </div>
                            <div style={{
                                color: platform.color,
                                fontSize: '0.75rem',
                            }}>
                                Live Now
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            ))}

            {/* Center Waveform */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '3px',
                    padding: '30px 40px',
                    background: 'rgba(20, 20, 30, 0.9)',
                    borderRadius: '24px',
                    border: '1px solid rgba(196, 255, 60, 0.3)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.3), 0 0 40px rgba(196, 255, 60, 0.1)',
                    zIndex: 10,
                }}
            >
                {waveformBars.map((bar) => (
                    <motion.div
                        key={bar.id}
                        animate={{
                            height: [bar.height * 0.3, bar.height, bar.height * 0.5, bar.height * 0.8, bar.height * 0.3],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: bar.delay,
                            ease: 'easeInOut',
                        }}
                        style={{
                            width: '4px',
                            height: bar.height,
                            borderRadius: '2px',
                            background: 'linear-gradient(to top, #c4ff3c, #87d300)',
                        }}
                    />
                ))}
            </motion.div>

            {/* Labels */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{
                    position: 'absolute',
                    top: '60px',
                    textAlign: 'center',
                }}
            >
                <div style={{
                    color: '#c4ff3c',
                    fontSize: '2rem',
                    fontWeight: '700',
                    marginBottom: '8px',
                }}>
                    One Source, Multiple Streams
                </div>
                <div style={{
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '1rem',
                }}>
                    Your music flows to every platform simultaneously
                </div>
            </motion.div>
        </div>
    );
};

export default AudioWaveformSplit;
