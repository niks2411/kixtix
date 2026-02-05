import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ShareMusicSection = () => {
    const platforms = [
        { name: 'Spotify', image: '/images/8.png' },
        { name: 'Apple Music', image: '/images/1.png' },
        { name: 'Amazon Music', image: '/images/9.png' },
        { name: 'JioSaavn', image: '/images/4.png' },
        { name: 'Gaana', image: '/images/2.png' },
    ];

    return (
        <section style={{
            padding: '80px 0',
            position: 'relative',
            overflow: 'hidden',
        }}>
            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '60px',
                flexWrap: 'wrap',
            }}>
                {/* Left Side - Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{
                        flex: '1',
                        minWidth: '300px',
                        maxWidth: '400px',
                    }}
                >
                    {/* Icon */}
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', damping: 10 }}
                        style={{
                            width: '80px',
                            height: '80px',
                            marginBottom: '24px',
                            position: 'relative',
                        }}
                    >
                        <svg viewBox="0 0 80 80" fill="none">
                            <circle cx="40" cy="20" r="12" fill="#c4ff3c" />
                            <circle cx="20" cy="55" r="10" stroke="#c4ff3c" strokeWidth="2" fill="transparent" />
                            <circle cx="60" cy="55" r="10" stroke="#c4ff3c" strokeWidth="2" fill="transparent" />
                            <line x1="35" y1="30" x2="25" y2="47" stroke="#c4ff3c" strokeWidth="2" />
                            <line x1="45" y1="30" x2="55" y2="47" stroke="#c4ff3c" strokeWidth="2" />
                        </svg>
                    </motion.div>

                    <h2 style={{
                        color: '#fff',
                        fontSize: '2rem',
                        fontWeight: '700',
                        marginBottom: '16px',
                        lineHeight: '1.3',
                    }}>
                        Share Music With <span style={{ color: '#c4ff3c' }}>Everyone</span>
                    </h2>

                    <p style={{
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: '1.1rem',
                        lineHeight: '1.6',
                        marginBottom: '32px',
                    }}>
                        Create a link that works across all platforms, and share your music wherever they listen
                    </p>

                    <Link to="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: 'linear-gradient(135deg, #c4ff3c 0%, #87d300 100%)',
                                color: '#050A30',
                                border: 'none',
                                padding: '16px 32px',
                                borderRadius: '50px',
                                fontSize: '1rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                            }}
                        >
                            Share playlist
                            <span>→</span>
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Right Side - Playlist Mockup */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    style={{
                        flex: '1',
                        minWidth: '350px',
                        maxWidth: '500px',
                    }}
                >
                    <div style={{
                        background: 'linear-gradient(135deg, #2a1f4e 0%, #1a1035 100%)',
                        borderRadius: '24px',
                        padding: '4px',
                        boxShadow: '0 30px 80px rgba(0,0,0,0.4)',
                        border: '1px solid rgba(196, 255, 60, 0.2)',
                    }}>
                        {/* URL Bar */}
                        <div style={{
                            background: 'rgba(255,255,255,0.95)',
                            borderRadius: '20px 20px 0 0',
                            padding: '12px 20px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                        }}>
                            <div style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                background: '#ccc',
                            }} />
                            <div style={{
                                flex: 1,
                                background: '#f5f5f5',
                                borderRadius: '8px',
                                padding: '8px 16px',
                                fontSize: '0.85rem',
                                color: '#666',
                            }}>
                                https://kixtix.com/share/<span style={{ color: '#87d300', fontWeight: '600' }}>paper-before-money</span>
                            </div>
                        </div>

                        {/* Playlist Content */}
                        <div style={{
                            background: 'linear-gradient(180deg, #f8b4c4 0%, #e8a4b4 100%)',
                            borderRadius: '0 0 20px 20px',
                            padding: '24px',
                        }}>
                            {/* Playlist Header */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px',
                                marginBottom: '24px',
                            }}>
                                {/* Album Art */}
                                <img
                                    src="/images/gallery/1.jpg"
                                    alt="Paper Before Money - Navaan Sandhu"
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                        borderRadius: '12px',
                                        objectFit: 'cover',
                                        boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                                    }}
                                />

                                {/* Song Info */}
                                <div style={{ flex: 1 }}>
                                    <h3 style={{
                                        color: '#333',
                                        fontSize: '1.3rem',
                                        fontWeight: '700',
                                        marginBottom: '4px',
                                    }}>
                                        Paper Before Money
                                    </h3>
                                    <p style={{
                                        color: '#666',
                                        fontSize: '0.9rem',
                                        marginBottom: '8px',
                                    }}>
                                        Single • 2024
                                    </p>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                    }}>
                                        <div style={{
                                            width: '24px',
                                            height: '24px',
                                            borderRadius: '50%',
                                            background: '#c4ff3c',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '0.7rem',
                                        }}>
                                            🎤
                                        </div>
                                        <span style={{ color: '#555', fontSize: '0.85rem', fontWeight: '500' }}>Navaan Sandhu</span>
                                    </div>
                                </div>

                                {/* Play Button */}
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        background: '#fff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <span style={{ color: '#333', fontSize: '1.2rem', marginLeft: '3px' }}>▶</span>
                                </motion.div>
                            </div>

                            {/* Platform Links */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '8px',
                            }}>
                                {platforms.map((platform, index) => (
                                    <motion.div
                                        key={platform.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        whileHover={{ x: 5 }}
                                        style={{
                                            background: 'rgba(255,255,255,0.9)',
                                            borderRadius: '12px',
                                            padding: '12px 16px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        <img
                                            src={platform.image}
                                            alt={platform.name}
                                            style={{
                                                width: '32px',
                                                height: '32px',
                                                objectFit: 'contain',
                                            }}
                                        />
                                        <span style={{
                                            color: '#333',
                                            fontSize: '0.95rem',
                                        }}>
                                            Play in <strong>{platform.name}</strong>
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ShareMusicSection;
