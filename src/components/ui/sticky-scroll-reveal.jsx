"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

export const StickyScroll = ({ content }) => {
    const [activeCard, setActiveCard] = useState(0);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
            const distance = Math.abs(latest - breakpoint);
            if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                return index;
            }
            return acc;
        }, 0);
        setActiveCard(closestBreakpointIndex);
    });

    const linearGradients = [
        "linear-gradient(to bottom right, #06b6d4, #10b981)",
        "linear-gradient(to bottom right, #ec4899, #6366f1)",
        "linear-gradient(to bottom right, #f97316, #eab308)",
        "linear-gradient(to bottom right, #c4ff3c, #87d300)",
    ];

    const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

    useEffect(() => {
        setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    }, [activeCard]);

    return (
        <div
            ref={containerRef}
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '60px',
                position: 'relative',
                padding: '40px 0',
            }}
        >
            {/* Left content - scrolls normally */}
            <div style={{ flex: 1, maxWidth: '550px' }}>
                {content.map((item, index) => (
                    <motion.div
                        key={item.title + index}
                        animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                        style={{
                            marginBottom: index === content.length - 1 ? '0' : '150px',
                            transition: 'opacity 0.3s ease',
                        }}
                    >
                        <h2 style={{
                            fontSize: '32px',
                            fontWeight: 'bold',
                            color: '#c4ff3c',
                            marginBottom: '20px',
                        }}>
                            {item.title}
                        </h2>
                        <p style={{
                            fontSize: '17px',
                            color: '#a1a1aa',
                            lineHeight: '1.8',
                        }}>
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Right sticky card - stays fixed while scrolling */}
            <div style={{
                position: 'sticky',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '400px',
                height: '350px',
                flexShrink: 0,
                alignSelf: 'flex-start',
                marginTop: '100px',
            }}>
                <motion.div
                    animate={{ background: backgroundGradient }}
                    transition={{ duration: 0.5 }}
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                        overflow: 'hidden',
                    }}
                >
                    {content[activeCard].content ?? null}
                </motion.div>
            </div>
        </div>
    );
};
