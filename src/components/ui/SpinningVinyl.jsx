import { motion } from 'framer-motion';

const SpinningVinyl = () => {
    const platforms = [
        { name: 'Spotify', color: '#1DB954', icon: '🎵', angle: 0 },
        { name: 'Apple Music', color: '#FC3C44', icon: '🎧', angle: 60 },
        { name: 'YouTube Music', color: '#FF0000', icon: '▶️', angle: 120 },
        { name: 'Amazon Music', color: '#00A8E1', icon: '🎶', angle: 180 },
        { name: 'JioSaavn', color: '#2BC5B4', icon: '🎼', angle: 240 },
        { name: 'Gaana', color: '#E72C30', icon: '🎤', angle: 300 },
    ];

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
            {/* Sound Waves Emanating */}
            {[...Array(4)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ scale: 0.5, opacity: 0.8 }}
                    animate={{ scale: 2.5, opacity: 0 }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.75,
                        ease: 'easeOut',
                    }}
                    style={{
                        position: 'absolute',
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        border: '2px solid rgba(196, 255, 60, 0.3)',
                    }}
                />
            ))}

            {/* Orbiting Platforms */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                style={{
                    position: 'absolute',
                    width: '500px',
                    height: '500px',
                }}
            >
                {platforms.map((platform, i) => {
                    const x = Math.cos((platform.angle * Math.PI) / 180) * 220;
                    const y = Math.sin((platform.angle * Math.PI) / 180) * 220;

                    return (
                        <motion.div
                            key={platform.name}
                            animate={{ rotate: -360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                            style={{
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                            }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                style={{
                                    width: '70px',
                                    height: '70px',
                                    borderRadius: '50%',
                                    background: `linear-gradient(135deg, ${platform.color}40 0%, ${platform.color}10 100%)`,
                                    border: `2px solid ${platform.color}`,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: `0 0 30px ${platform.color}50`,
                                    cursor: 'pointer',
                                }}
                            >
                                <span style={{ fontSize: '1.5rem' }}>{platform.icon}</span>
                                <span style={{
                                    fontSize: '0.5rem',
                                    color: '#fff',
                                    marginTop: '2px',
                                    fontWeight: '600',
                                }}>
                                    {platform.name.split(' ')[0]}
                                </span>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Connection Lines */}
            <svg
                style={{
                    position: 'absolute',
                    width: '500px',
                    height: '500px',
                    pointerEvents: 'none',
                }}
            >
                {platforms.map((platform, i) => {
                    const x = 250 + Math.cos((platform.angle * Math.PI) / 180) * 180;
                    const y = 250 + Math.sin((platform.angle * Math.PI) / 180) * 180;
                    return (
                        <motion.line
                            key={i}
                            x1="250"
                            y1="250"
                            x2={x}
                            y2={y}
                            stroke={platform.color}
                            strokeWidth="1"
                            strokeOpacity="0.3"
                            strokeDasharray="5,5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                        />
                    );
                })}
            </svg>

            {/* Vinyl Record */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                style={{
                    width: '220px',
                    height: '220px',
                    borderRadius: '50%',
                    background: `
                        radial-gradient(circle at center,
                            #c4ff3c 0%,
                            #c4ff3c 8%,
                            #111 9%,
                            #111 10%,
                            #1a1a1a 11%,
                            #111 15%,
                            #1a1a1a 20%,
                            #111 25%,
                            #1a1a1a 30%,
                            #111 35%,
                            #1a1a1a 40%,
                            #111 45%,
                            #1a1a1a 50%,
                            #111 60%,
                            #1a1a1a 70%,
                            #111 80%,
                            #222 100%
                        )
                    `,
                    boxShadow: '0 0 60px rgba(196, 255, 60, 0.3), inset 0 0 20px rgba(0,0,0,0.5)',
                    position: 'relative',
                    zIndex: 5,
                }}
            >
                {/* Center Label */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #c4ff3c 0%, #87d300 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.3)',
                }}>
                    <span style={{
                        fontSize: '0.6rem',
                        color: '#050A30',
                        fontWeight: '800',
                        textTransform: 'uppercase',
                    }}>
                        Kixtix
                    </span>
                    <span style={{
                        fontSize: '0.5rem',
                        color: '#050A30',
                        opacity: 0.7,
                    }}>
                        Distribution
                    </span>
                </div>

                {/* Vinyl Shine Effect */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 45%, transparent 55%)',
                    }}
                />
            </motion.div>

            {/* Title Below */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                style={{
                    position: 'absolute',
                    bottom: '40px',
                    textAlign: 'center',
                }}
            >
                <div style={{
                    color: '#c4ff3c',
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    marginBottom: '8px',
                }}>
                    Your Music, Everywhere
                </div>
                <div style={{
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '1rem',
                }}>
                    Distribute to 150+ platforms worldwide
                </div>
            </motion.div>
        </div>
    );
};

export default SpinningVinyl;
