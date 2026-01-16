import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

const OrbitingCircles = ({
    className,
    children,
    reverse = false,
    duration = 20,
    delay = 0,
    radius = 50,
    path = false,
    startAngle = 0,
}) => {
    return (
        <>
            {path && (
                <svg className="pointer-events-none absolute inset-0 size-full">
                    <circle
                        className="stroke-[rgba(196,255,60,0.15)]"
                        cx="50%"
                        cy="50%"
                        r={radius}
                        fill="none"
                        strokeWidth="1"
                    />
                </svg>
            )}
            <motion.div
                className={cn(
                    "absolute flex items-center justify-center",
                    className
                )}
                initial={{ rotate: startAngle }}
                animate={{
                    rotate: reverse ? startAngle - 360 : startAngle + 360,
                }}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: "linear",
                    delay: delay,
                }}
                style={{
                    transformOrigin: "center center",
                }}
            >
                <div
                    style={{
                        transform: `translateY(-${radius}px)`,
                    }}
                >
                    <motion.div
                        initial={{ rotate: -startAngle }}
                        animate={{
                            rotate: reverse ? -startAngle + 360 : -startAngle - 360,
                        }}
                        transition={{
                            duration: duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: delay,
                        }}
                    >
                        {children}
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
};

export { OrbitingCircles };

