import { useRef, useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import './ScrollStackCards.css';

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
                height: `${cards.length * 25}vh`,
            }}
        >
            <div className="scroll-stack-sticky">
                {/* Split Layout Container */}
                <div className="scroll-stack-split">
                    {/* Left Side - Content Cards Stack */}
                    <div className="scroll-stack-left">
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
                                    pointerEvents: index === activeIndex ? 'auto' : 'none',
                                }}
                            >
                                <div className="stack-card-inner">
                                    {/* Card Number */}
                                    <div className="stack-card-number">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>

                                    <h3 className="stack-card-title">
                                        {card.title}
                                    </h3>

                                    {card.badge && (
                                        <span className="stack-card-badge">
                                            {card.badge}
                                        </span>
                                    )}

                                    <p className="stack-card-desc">
                                        {card.description}
                                    </p>

                                    {/* Progress Dots */}
                                    <div className="stack-card-dots">
                                        {cards.map((_, i) => (
                                            <div
                                                key={i}
                                                className="stack-dot"
                                                style={{
                                                    width: i === activeIndex ? '20px' : '8px',
                                                    background: i === activeIndex
                                                        ? 'rgba(196, 255, 60, 0.8)'
                                                        : 'rgba(255, 255, 255, 0.2)',
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Side - Image */}
                    <div className="scroll-stack-right">
                        <div className="stack-image-container">
                            {cards.map((card, index) => (
                                <motion.div
                                    key={card.title}
                                    className="stack-image-wrapper"
                                    initial={false}
                                    animate={{
                                        opacity: index === activeIndex ? 1 : 0,
                                        scale: index === activeIndex ? 1 : 1.1,
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {card.image ? (
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            className="stack-image"
                                        />
                                    ) : (
                                        <div className="stack-placeholder">
                                            <div className="stack-placeholder-num">
                                                {String(index + 1).padStart(2, '0')}
                                            </div>
                                            <div className="stack-placeholder-label">
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
        </div>
    );
};

export default ScrollStackCards;
