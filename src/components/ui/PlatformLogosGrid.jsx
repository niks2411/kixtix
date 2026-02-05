import { motion } from 'framer-motion';

const PlatformLogosGrid = () => {
    const platforms = [
        { name: 'Spotify', image: '/images/8.png', color: '#1DB954' },
        { name: 'Apple Music', image: '/images/1.png', color: '#FC3C44' },
        { name: 'YouTube Music', image: '/images/7.png', color: '#FF0000' },
        { name: 'JioSaavn', image: '/images/4.png', color: '#2BC5B4' },
        { name: 'Gaana', image: '/images/2.png', color: '#E72C30' },
        { name: 'Wynk Music', image: '/images/3.png', color: '#FF6B00' },
        { name: 'Amazon Music', image: '/images/9.png', color: '#00A8E1' },
        { name: 'Samsung Music', image: '/images/5.png', color: '#6B5CE7' },
    ];

    // Additional platforms row
    const morePlatforms = [
        { name: 'Tidal', text: 'TIDAL', color: '#000000' },
        { name: 'Deezer', text: 'DEEZER', color: '#FEAA2D' },
        { name: 'SoundCloud', text: 'SoundCloud', color: '#FF5500' },
        { name: 'Pandora', text: 'pandora', color: '#3668FF' },
    ];

    return (
        <div style={{
            width: '100%',
            maxWidth: '900px',
            margin: '0 auto',
            padding: '40px 20px',
        }}>
            {/* Main Title */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ textAlign: 'center', marginBottom: '40px' }}
            >
                <h2 style={{
                    color: '#c4ff3c',
                    fontSize: '2rem',
                    fontWeight: '700',
                    marginBottom: '12px',
                }}>
                    Distribute to 150+ Platforms
                </h2>
                <p style={{
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '1rem',
                }}>
                    One upload, everywhere your audience listens
                </p>
            </motion.div>

            {/* Main Platform Grid - Using Images */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '16px',
                    marginBottom: '24px',
                }}
            >
                {platforms.map((platform, index) => (
                    <motion.div
                        key={platform.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: `0 10px 40px ${platform.color}30`,
                            borderColor: platform.color,
                        }}
                        style={{
                            background: 'rgba(30, 30, 45, 0.9)',
                            borderRadius: '16px',
                            padding: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid rgba(255,255,255,0.1)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            aspectRatio: '1',
                        }}
                    >
                        <img
                            src={platform.image}
                            alt={platform.name}
                            style={{
                                width: '80%',
                                height: '80%',
                                objectFit: 'contain',
                                filter: 'brightness(1)',
                                transition: 'filter 0.3s ease',
                            }}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default PlatformLogosGrid;
