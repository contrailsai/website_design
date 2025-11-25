// components/Navbar.jsx

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: "/use-cases", label: "Use Cases" },
        { href: "/blogs", label: "Blogs" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    // Animation variants for the desktop navbar items
    const navItemVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.4, ease: "easeInOut" },
        },
    };

    // Stagger container for desktop nav
    const navContainerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    // Animation variants for the mobile menu container
    const mobileMenuVariants = {
        hidden: { y: "100%", opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 20 } },
        exit: { y: "100%", opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
    };

    // Animation variants for the backdrop
    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
    };

    return (
        <>
            <motion.div
                className="relative z-30 top-2.5 text-white flex items-center justify-between h-16 w-full p-2"
                variants={navContainerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Left side: Burger Menu (mobile) and Logo */}
                <motion.div className="flex items-center" variants={navItemVariants}>
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="md:hidden py-2 pr-2 cursor-pointer"
                        aria-label="Open menu"
                    >
                        <Menu size={28} />
                    </button>
                    <Link href={"/"} className="relative select-none max-w-[150px] md:max-w-[200px]">
                        <Image src={"/logo_txt.svg"} width={188} height={100} alt="logo" />
                    </Link>
                </motion.div>

                {/* Desktop Navigation Links */}
                <motion.div
                    className="hidden md:flex gap-10 text-sm z-20 relative"
                    variants={navContainerVariants}
                >
                    {navLinks.map((link) => (
                        <motion.div key={link.href} variants={navItemVariants}>
                            <Link className="cursor-pointer hover:text-gray-100" href={link.href}>
                                {link.label}
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Book a Demo Button */}
                <motion.div
                    variants={navItemVariants}
                    className=" bg-white text-black hover:bg-orange-500 hover:text-white transition-all duration-200 w-fit px-4 py-2 text-xl rounded-lg font-semibold cursor-pointer flex "
                    // variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                >
                    <Link
                        href={"https://cal.com/ami-contrails/30min"}
                        target="_blank"
                        className="w-fit h-fit rounded-lg text-sm font-semibold cursor-pointer "
                    >
                        Book a Demo
                    </Link>
                </motion.div>
            </motion.div>

            {/* --- Mobile Menu --- */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        onClick={() => setIsMenuOpen(false)}
                        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <motion.div
                            onClick={(e) => e.stopPropagation()}
                            className="fixed bottom-0 left-0 right-0 z-50 w-full bg-[#1c1c1c]/90 text-white rounded-t-2xl shadow-lg p-6"
                            variants={mobileMenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <div className="flex justify-end mb-4">
                                <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className="p-2">
                                    <X size={28} />
                                </button>
                            </div>

                            <motion.div
                                className="flex flex-col items-center gap-8 text-lg"
                                // Stagger children for a nice reveal effect
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }}
                            >
                                {navLinks.map((link) => (
                                    <motion.div
                                        key={link.href}
                                        // Individual item animation
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="cursor-pointer hover:text-gray-300"
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;