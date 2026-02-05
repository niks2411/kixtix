import { useRef, useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollStackCards = ({ cards }) => {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (value) => {
            const newIndex = Math.min(Math.floor(value * cards.length), cards.length - 1);
            if (newIndex !== activeIndex && newIndex >= 0) {
                setActiveIndex(newIndex);
            }
        });
        return () => unsubscribe();
    }, [scrollYProgress, cards.length, activeIndex]);

    return (
        <div
            ref={containerRef}
            className="scroll-stack-container"
            style={{
                position: 'relative',
                height: `${cards.length * 25}vh`,
            }}
        >
            <div className="scroll-stack-sticky" style={{
                position: 'sticky',
                top: '100px',
                height: 'calc(100vh - 200px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 2rem',
            }}>
                {/* Split Layout Container */}
                <div className="scroll-stack-split" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '3rem',
                    width: '100%',
                    maxWidth: '1200px',
                    alignItems: 'center',
                }}>
                    {/* Left Side - Content Cards Stack */}
                    <div className="scroll-stack-left" style={{
                        position: 'relative',
                        height: '450px',
                    }}>
                        {cards.map((card, index) => (
                            <motion.div
                                key={card.title}
                                className="stack-card"
                                initial={false}
                                animate={{
                                    opacity: index === activeIndex ? 1 : 0,
                                    y: index === activeIndex ? 0 : 30,
                                    scale: index === activeIndex ? 1 : 0.95,
                                }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: '450px',
                                    pointerEvents: index === activeIndex ? 'auto' : 'none',
                                }}
                            >
                                <div className="stack-card-inner" style={{
                                    background: 'rgba(10, 15, 50, 0.95)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(196, 255, 60, 0.2)',
                                    borderRadius: '24px',
                                    padding: '2.5rem',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                                }}>
                                    {/* Card Number */}
                                    <div style={{
                                        fontSize: '3rem',
                                        fontWeight: '800',
                                        color: 'rgba(196, 255, 60, 0.2)',
                                        lineHeight: 1,
                                        marginBottom: '0.5rem',
                                    }}>
                                        {String(index + 1).padStart(2, '0')}
                                    </div>

                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: '600',
                                        color: '#fff',
                                        marginBottom: '0.5rem',
                                    }}>
                                        {card.title}
                                    </h3>

                                    {card.badge && (
                                        <span style={{
                                            display: 'inline-block',
                                            fontSize: '0.7rem',
                                            color: 'rgba(196, 255, 60, 0.8)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.1em',
                                            marginBottom: '1rem',
                                        }}>
                                            {card.badge}
                                        </span>
                                    )}

                                    <p style={{
                                        fontSize: '0.95rem',
                                        lineHeight: '1.7',
                                        color: 'rgba(255, 255, 255, 0.7)',
                                        flex: 1,
                                        overflow: 'hidden',
                                    }}>
                                        {card.description}
                                    </p>

                                    {/* Progress Dots */}
                                    <div style={{
                                        display: 'flex',
                                        gap: '6px',
                                        marginTop: '1.5rem',
                                    }}>
                                        {cards.map((_, i) => (
                                            <div
                                                key={i}
                                                style={{
                                                    width: i === activeIndex ? '20px' : '8px',
                                                    height: '8px',
                                                    borderRadius: '4px',
                                                    background: i === activeIndex
                                                        ? 'rgba(196, 255, 60, 0.8)'
                                                        : 'rgba(255, 255, 255, 0.2)',
                                                    transition: 'all 0.3s ease',
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Side - Image */}
                    <div className="scroll-stack-right" style={{
                        position: 'relative',
                        height: '450px',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        background: 'linear-gradient(135deg, rgba(196, 255, 60, 0.05) 0%, rgba(10, 15, 50, 0.8) 100%)',
                        border: '1px solid rgba(196, 255, 60, 0.15)',
                    }}>
                        {cards.map((card, index) => (
                            <motion.div
                                key={card.title}
                                initial={false}
                                animate={{
                                    opacity: index === activeIndex ? 1 : 0,
                                    scale: index === activeIndex ? 1 : 1.1,
                                }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                }}
                            >
                                {card.image ? (
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                ) : (
                                    <div style={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexDirection: 'column',
                                    }}>
                                        <div style={{
                                            fontSize: '6rem',
                                            fontWeight: '900',
                                            background: 'linear-gradient(135deg, rgba(196, 255, 60, 0.6) 0%, rgba(196, 255, 60, 0.2) 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            lineHeight: 1,
                                        }}>
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                        <div style={{
                                            fontSize: '1rem',
                                            color: 'rgba(255, 255, 255, 0.4)',
                                            marginTop: '1rem',
                                        }}>
                                            {card.title}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollStackCards;
