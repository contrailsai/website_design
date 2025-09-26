// components/Navbar.jsx

"use client"; // Add this directive for using React hooks (useState)

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Using lucide-react for icons

const Navbar = () => {
    // State to manage the visibility of the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Array of navigation links for easier mapping
    const navLinks = [
        { href: "/use-cases", label: "Use cases" },
        { href: "/blog", label: "Blog" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <>
            <div className="relative top-2.5 text-white flex items-center justify-between h-16 w-full p-2 ">

                {/* Left side: Burger Menu (mobile) and Logo */}
                <div className="flex items-center">
                    {/* Burger Menu Toggle Button - visible only on mobile */}
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
                </div>

                {/* Desktop Navigation Links - hidden on mobile */}
                <div className="hidden md:flex gap-10 text-sm z-20 relative">
                    {navLinks.map((link) => (
                        <Link key={link.href} className="cursor-pointer hover:text-gray-100" href={link.href}>
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Book a Demo Button - always visible */}
                <Link
                    href={"https://cal.com/ami-contrails/30min"}
                    target="_blank"
                    className="w-fit h-fit bg-white px-3 md:px-6 py-2 rounded-lg text-black text-sm font-semibold cursor-pointer"
                >
                    Book a Demo
                </Link>

            </div>

            {/* --- Mobile Menu --- */}
            {/* It uses a fixed position to overlay the entire screen */}
            {isMenuOpen && (
                <div
                    // Backdrop: covers the screen and closes the menu on click
                    onClick={() => setIsMenuOpen(false)}
                    className="fixed inset-0 z-40 bg-black/60 bg-opacity-50 backdrop-blur-sm md:hidden"
                >
                    <div
                        // Menu Container: slides in from the bottom
                        // `onClick` with `e.stopPropagation()` prevents a click inside the menu from closing it
                        onClick={(e) => e.stopPropagation()}
                        className="fixed bottom-0 left-0 right-0 z-50 w-full bg-[#1c1c1c]/90 text-white rounded-t-2xl shadow-lg p-6 transform transition-transform duration-300 ease-in-out translate-y-0"
                    >
                        {/* Close Button inside the menu */}
                        <div className="flex justify-end mb-4">
                            <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className="p-2">
                                <X size={28} />
                            </button>
                        </div>
                        
                        {/* Mobile Navigation Links */}
                        <div className="flex flex-col items-center gap-8 text-lg">
                             {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)} // Close menu on link click
                                    className="cursor-pointer hover:text-gray-300"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;