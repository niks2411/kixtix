import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HorizontalScroll = ({ items }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    const x = useTransform(scrollYProgress, [0, 1], ['0%', `-${(items.length - 1) * 100}%`]);

    return (
        <div
            ref={containerRef}
            className="horizontal-scroll-container"
            style={{
                position: 'relative',
                height: `${items.length * 25}vh`,
            }}
        >
            <div className="horizontal-scroll-sticky" style={{
                position: 'sticky',
                top: 0,
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
            }}>
                <motion.div
                    className="horizontal-scroll-track"
                    style={{
                        display: 'flex',
                        gap: '2rem',
                        x,
                        padding: '0 10vw',
                    }}
                >
                    {items.map((item, index) => (
                        <motion.div
                            key={item.title}
                            className="horizontal-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            style={{
                                flexShrink: 0,
                                width: '80vw',
                                maxWidth: '600px',
                                minHeight: '400px',
                                background: 'rgba(10, 15, 50, 0.85)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(196, 255, 60, 0.15)',
                                borderRadius: '24px',
                                padding: '3rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                        >
                            <div className="horizontal-card-number" style={{
                                fontSize: '5rem',
                                fontWeight: '800',
                                color: 'rgba(196, 255, 60, 0.15)',
                                lineHeight: 1,
                                marginBottom: '1rem',
                            }}>
                                {String(index + 1).padStart(2, '0')}
                            </div>
                            <h3 className="horizontal-card-title" style={{
                                fontSize: '2rem',
                                fontWeight: '600',
                                color: '#fff',
                                marginBottom: '1rem',
                            }}>
                                {item.title}
                            </h3>
                            <p className="horizontal-card-description" style={{
                                fontSize: '1.1rem',
                                lineHeight: '1.8',
                                color: 'rgba(255, 255, 255, 0.7)',
                            }}>
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default HorizontalScroll;
