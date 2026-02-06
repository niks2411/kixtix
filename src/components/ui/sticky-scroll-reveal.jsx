"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import "./StickyScroll.css";

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
        <div className="sticky-scroll-container" ref={containerRef}>
            {/* Left content - scrolls normally */}
            <div className="sticky-scroll-content">
                {content.map((item, index) => (
                    <motion.div
                        key={item.title + index}
                        className="sticky-scroll-item"
                        animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                        style={{
                            marginBottom: index === content.length - 1 ? '0' : '150px',
                        }}
                    >
                        <h2 className="sticky-scroll-title">
                            {item.title}
                        </h2>
                        <p className="sticky-scroll-description">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Right sticky card - stays fixed while scrolling */}
            <div className="sticky-scroll-visual">
                <motion.div
                    className="sticky-scroll-card"
                    animate={{ background: backgroundGradient }}
                    transition={{ duration: 0.5 }}
                >
                    {content[activeCard].content ?? null}
                </motion.div>
            </div>
        </div>
    );
};
