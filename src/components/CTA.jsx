"use client"
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const AnimatedCTA = () => {
    const dotSpacing = 30;
    const dotsPerRow = 70;
    const dotsPerCol = 70;
    const ctaRef = useRef(null);
    const isInView = useInView(ctaRef, { once: true, margin: "-100px" });

    // Animated text that reveals word by word
    const text = "Talk to us and discover the fastest path to trusted content moderation.";
    const words = text.split(' ');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.06,
                delayChildren: 0.2
            }
        }
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    };

    // Dot animation variants
    const dotVariants = {
        initial: { scale: 0, opacity: 0 },
        animate: (custom) => ({
            scale: 1,
            opacity: [0, 0.2, 0.2],
            transition: {
                duration: 0.5,
                delay: custom * 0.001,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2
            }
        })
    };

    return (
        <div ref={ctaRef} className="relative md:h-screen py-10 md:py-32 px-5">
            {/* ANIMATED DOT PATTERN BACKGROUND */}
            <div className="absolute h-[70vh] md:h-screen w-screen top-0 left-0 md:-left-15 -z-10 overflow-hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox={`0 0 ${dotsPerRow * dotSpacing} ${dotsPerCol * dotSpacing}`}
                    opacity="1"
                    className="w-full h-full"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <defs>
                        {/* Gradient for dots */}
                        <radialGradient id="dotGradient">
                            <stop offset="0%" stopColor="rgba(255, 255, 255, 1)" />
                            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.7)" />
                        </radialGradient>

                        <pattern
                            id="dotPattern"
                            x="0"
                            y="0"
                            width={dotSpacing}
                            height={dotSpacing}
                            patternUnits="userSpaceOnUse"
                        >
                            <motion.circle
                                r="2"
                                cx={dotSpacing / 2}
                                cy={dotSpacing / 2}
                                fill="url(#dotGradient)"
                                initial={{ scale: 0.8, opacity: 0.2 }}
                                animate={{
                                    scale: [0.8, 1.2, 0.8],
                                    opacity: [0.2, 0.3, 0.2]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </pattern>
                    </defs>
                    <rect
                        width="100%"
                        height="100%"
                        fill="url(#dotPattern)"
                    />
                </svg>

                {/* Animated gradient overlay */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"
                    animate={{
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            {/* MAIN CONTENT */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 text-white bg-black h-full px-10 md:px-15 py-5 md:py-15 flex flex-col items-start justify-center"
            >
                {/* Animated Text */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-4xl md:text-[68px] md:leading-19 text-pretty"
                >
                    {words.map((word, index) => (
                        <motion.span
                            key={index}
                            variants={wordVariants}
                            style={{ display: 'inline-block', marginRight: '0.3em' }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.div>

                {/* Animated CTA Button */}
                <motion.a
                    href="https://cal.com/ami-contrails/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    // transition={{ duration: 0.6, delay: 0.8 }}
                    // whileHover={{
                    //     scale: 1.05,
                    //     boxShadow: "0 20px 40px rgba(251, 146, 60, 0.3)"
                    // }}
                    whileTap={{ scale: 0.98 }}
                    className="text-white bg-orange-400 min-w-56 w-fit py-2 px-6 flex items-center justify-between gap-4 rounded-lg mt-16 cursor-pointer relative overflow-hidden group"
                >
                    <span className="text-xl relative z-10">
                        Book a Demo
                    </span>

                    <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative z-10"
                    >
                        <ChevronRight />
                    </motion.div>

                </motion.a>
            </motion.div>
        </div>
    );
};

export default AnimatedCTA;