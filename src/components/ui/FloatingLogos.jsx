import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingLogos = ({ platforms }) => {
    const containerRef = useRef(null);
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        // Generate grid positions for cleaner layout
        const cols = 6;
        const rows = Math.ceil(platforms.length / cols);
        const newPositions = platforms.map((_, index) => {
            const col = index % cols;
            const row = Math.floor(index / cols);
            return {
                x: (col / (cols - 1)) * 80 + 10, // 10% to 90% horizontal
                y: row * 50 + 25, // center in row
            };
        });
        setPositions(newPositions);
    }, [platforms]);

    return (
        <div
            ref={containerRef}
            className="floating-logos-container"
            style={{
                position: 'relative',
                width: '100%',
                minHeight: '300px',
                padding: '2rem',
                overflow: 'hidden',
            }}
        >
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: '2rem',
                maxWidth: '1000px',
                margin: '0 auto',
                justifyItems: 'center',
            }}>
                {platforms.map((platform, index) => (
                    <motion.div
                        key={platform.name}
                        className="floating-logo-item"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05, duration: 0.4 }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.75rem',
                        }}
                    >
                        <motion.div
                            animate={{
                                y: [0, -8, 0],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: index * 0.2,
                            }}
                            style={{
                                width: '80px',
                                height: '80px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: '16px',
                                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                                overflow: 'hidden',
                                padding: '0.75rem',
                            }}
                        >
                            {platform.image ? (
                                <img
                                    src={platform.image}
                                    alt={platform.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                    }}
                                />
                            ) : (
                                <span style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#fff',
                                }}>
                                    {platform.name.charAt(0)}
                                </span>
                            )}
                        </motion.div>
                        <span className="logo-name" style={{
                            fontSize: '0.85rem',
                            color: 'rgba(255, 255, 255, 0.7)',
                            fontWeight: '500',
                            textAlign: 'center',
                        }}>
                            {platform.name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default FloatingLogos;
