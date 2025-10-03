"use client"

import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShoppingCart, Plane, Users, MessageSquare, Image as ImageIcon, Gamepad2, Package, Store, Trophy, Newspaper, Radio, FileText, ChevronRight } from 'lucide-react';

// import Image from "next/image";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from 'next/link';


// Animated text component that reveals words one by one
const AnimatedText = ({ text, className = "", delay = 0 }) => {
    const words = text.split(' ');

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.01, delayChildren: delay }
        })
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    };

    return (
        <motion.div
            className={className}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    key={index}
                    style={{ display: 'inline-block', marginRight: '0.3em' }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

// Section reveal animation hook
const SectionReveal = ({ children, delay = 0 }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

// Card component with hover animations
const FeatureCard = ({ title, icon: Icon, items, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            // whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="bg-white h-96 w-full min-w-[300px] rounded-3xl flex flex-col gap-12 px-5 md:px-10 py-5 md:py-10 shadow-lg"
        >
            <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
                {/* <Icon className="w-8 h-8 stroke-[1.5]" /> */}
                <div className="text-2xl">{title}</div>
            </motion.div>
            <ul className="pl-6 list-disc font-thin flex flex-col gap-5">
                {items.map((item, i) => (
                    <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 + i * 0.1 }}
                    >
                        {item}
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    );
};

const UI_page = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ['Marketplace', 'Online Communities', 'Brand Platforms', 'Media and Publishing Houses'];

    const marketplaceCards = [
        {
            title: 'E-commerce marketplaces',
            icon: ShoppingCart,
            items: [
                'Spot manipulated product images or videos before listings go live',
                'Identify fraudulent or misleading product claims',
                'Automate harmful content labeling to scale moderation'
            ]
        },
        {
            title: 'Travel and hospitality platforms',
            icon: Plane,
            items: [
                'Prevent fake rental or booking listings powered by AI',
                'Detect fraudulent host or property photos/videos',
                'Support automated policy checks to keep users safe'
            ]
        },
        {
            title: 'Peer-to-peer resale and rental platforms',
            icon: Users,
            items: [
                'Flag scammer profiles with manipulated identity docs',
                'Catch AI-generated content in user listings',
                'Provide verified reports for compliance and dispute resolution'
            ]
        }
    ];

    const communityCards = [
        {
            title: 'Social platforms',
            icon: MessageSquare,
            items: [
                'Flag manipulated memes, viral media, or offensive comments',
                'Prevent AI-generated misinformation from spreading in feeds',
                'Provide moderators with explainable AI-backed recommendations'
            ]
        },
        {
            title: 'Content discovery & curation platforms',
            icon: ImageIcon,
            items: [
                'Validate the authenticity of user-submitted photos, videos, or assets',
                'Protect creators and users with verified content integrity',
                'Detect copyright violations or AI-generated stock imagery'
            ]
        },
        {
            title: 'Dating and gaming platforms',
            icon: Gamepad2,
            items: [
                'Verify user identities to stop catfish or fake accounts',
                'Monitor abusive messages and toxic chatrooms with explainable AI',
                'Spot deepfake uploads or manipulated profile media'
            ]
        }
    ];

    const brandCards = [
        {
            title: 'Consumer goods and lifestyle brands',
            icon: Package,
            items: [
                'Block offensive or harmful user-generated content',
                'Detect AI-driven impersonations targeting brand reputation',
                'Automate policy checks across global campaigns'
            ]
        },
        {
            title: 'Direct-to-consumer (DTC) platforms',
            icon: Store,
            items: [
                'Spot manipulated reviews or testimonial content',
                'Prevent fake profiles from entering loyalty programs',
                'Provide AI-powered content labeling to assist human moderators'
            ]
        },
        {
            title: 'Entertainment and sports brands',
            icon: Trophy,
            items: [
                'Detect manipulated videos or fan submissions before publishing',
                'Filter inappropriate content during large-scale events',
                'Deliver explainable reports to maintain community trust'
            ]
        }
    ];

    const publishingCards = [
        {
            title: 'Newsrooms and digital publishers',
            icon: Newspaper,
            items: [
                'Detect deepfakes in video submissions before stories go live',
                'Flag AI-written misinformation in article drafts',
                'Provide verification reports for editorial teams'
            ]
        },
        {
            title: 'Media syndication platforms',
            icon: Radio,
            items: [
                'Validate third-party images, audio, and video before redistribution',
                'Automate harmful content detection for large volumes of content',
                'Support policy compliance with explainable AI'
            ]
        },
        {
            title: 'Online magazines and blogs',
            icon: FileText,
            items: [
                'Filter AI-generated submissions in text, images, and video',
                'Detect manipulated visuals in lifestyle and cultural content',
                'Provide scalable moderation to protect editorial standards'
            ]
        }
    ];

    return (
        <>
            <div className="relative md:px-15 bg-gradient-to-b from-blue-800 to-black/10">
                <Navbar />

                {/* HERO SECTION */}
                <div className="text-white py-5 px-4 md:pl-10 h-[44vh] md:h-[60vh] flex flex-col items-start justify-end gap-16">
                    <AnimatedText
                        text="Safeguarding Trust Across Every Industry, Every Interaction"
                        className="text-[38px] leading-10 tracking-normal md:text-[78px] md:leading-20 md:tracking-wide"
                        delay={0.2}
                    />

                    {/* TABS */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="overflow-y-auto max-w-[95vw] rounded-s-3xl scrollbar-hide"
                    >
                        <div className="h-10 w-[750px] rounded-full bg-white/30 flex justify-between p-1">
                            {tabs.map((tab, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`text-sm px-6 py-1 rounded-full flex items-center transition-colors ${activeTab === index ? 'font-semibold bg-white text-black' : ''
                                        }`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link href={'#' + tab.toLowerCase().split(" ").join("_")}>
                                        {tab}
                                    </Link>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* MARKETPLACE SECTION */}
                <SectionReveal delay={0.1}>
                    <div id='marketplace' className=" max-h-[1000px] h-[150vh] md:h-[135vh] w-full">
                        <div className="flex flex-col-reverse md:flex-row justify-between gap-5 pb-10 md:pb-0 ">
                            <div className="text-white  md:max-w-[40vw] flex flex-col items-center px-3 md:ml-10 gap-8 justify-center ">
                                <AnimatedText
                                    text="Protect Trust & Safety in Online Marketplaces"
                                    className="font-thin md:font-normal text-3xl md:text-5xl"
                                />
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="font-thin"
                                >
                                    Contrails helps marketplaces prevent fraud, misinformation, and harmful content before it reaches buyers and sellers.
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="relative p-10"
                            >
                                <div className=" overflow-hidden relative w-[300px] h-[240px] md:w-[530px] md:h-[354px] bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-3xl flex items-center justify-center">
                                    {/* <div className='absolute h-full w-full top-0 left-0 bg-blue-900/30 z-10 ' /> */}
                                    {/* <Image className=" " src={"/use_cases_illus/ecom_illus.png"} width={530} height={354} alt="" /> */}
                                    <div className='bg-blue-800/70 h-full w-full bg-[url(/use_cases_illus/ecom_illus.png)] bg-blend-color-dodge  bg-cover relative' />
                                </div>
                            </motion.div>
                        </div>
                        <div className="flex px-3 py-4 scrollbar-hide overflow-x-auto overflow-y-hidden gap-[1px]">
                            {marketplaceCards.map((card, index) => (
                                <FeatureCard key={index} {...card} index={index} />
                            ))}
                        </div>
                    </div>
                </SectionReveal>

                {/* ONLINE COMMUNITIES SECTION */}
                <SectionReveal delay={0.1}>
                    <div id='online_communities' className=" max-h-[1000px] h-[150vh] md:h-[135vh] w-full">
                        <div className="flex flex-col-reverse md:flex-row justify-between gap-5 pb-10 md:pb-0 ">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="text-white md:max-w-[40vw] flex flex-col items-center px-3 md:ml-10 gap-8 justify-center"
                            >
                                <AnimatedText
                                    text="Preserve the Integrity of Online Communities"
                                    className="font-thin md:font-normal text-3xl md:text-5xl"
                                />
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="font-thin"
                                >
                                    We secure online communities by moderating harmful UGC and AIGC at scale.
                                </motion.div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="relative p-10"
                            >
                                <div className=" overflow-hidden relative w-[300px] h-[240px] md:w-[530px] md:h-[354px] bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-3xl flex items-center justify-center">
                                    {/* <div className='absolute h-full w-full top-0 left-0 bg-blue-900/30 z-10 ' /> */}
                                    {/* <Image className=" " src={"/use_cases_illus/ecom_illus.png"} width={530} height={354} alt="" /> */}
                                    <div className='bg-blue-800/70 h-full w-full bg-[url(/use_cases_illus/online_illus.png)] bg-blend-luminosity bg-contain bg-no-repeat bg-center relative' />
                                </div>
                            </motion.div>

                        </div>
                        <div className="flex px-3 pt-5 scrollbar-hide overflow-x-auto overflow-y-hidden gap-[1px]">
                            {communityCards.map((card, index) => (
                                <FeatureCard key={index} {...card} index={index} />
                            ))}
                        </div>
                    </div>
                </SectionReveal>

                {/* SAFEGUARD BRAND PLATFORMS SECTION */}
                <SectionReveal delay={0.1}>
                    <div id='brand_platforms' className="max-h-[1000px] h-[150vh] md:h-[135vh] w-full">
                        <div className="flex flex-col-reverse md:flex-row justify-between gap-5 pb-10 md:pb-0">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="text-white md:max-w-[40vw] flex flex-col items-center px-3 md:ml-10 gap-8 justify-center"
                            >
                                <AnimatedText
                                    text="Safeguard Brand Platforms and Customer Communities"
                                    className="font-thin md:font-normal text-3xl md:text-5xl"
                                />
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="font-thin"
                                >
                                    We enable brands to protect reputation, campaigns, and user engagement by filtering harmful, manipulated, or misleading content.
                                </motion.div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="relative p-10"
                            >
                                <div className=" overflow-hidden relative w-[300px] h-[240px] md:w-[530px] md:h-[354px] bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-3xl flex items-center justify-center">
                                    <div className='bg-blue-800/70 h-full w-full bg-[url(/use_cases_illus/brand_illus.png)] bg-blend-color-dodge  bg-contain bg-no-repeat bg-center relative' />
                                </div>
                            </motion.div>
                        </div>

                        <div className="flex px-3 py-5 scrollbar-hide overflow-x-auto overflow-y-hidden gap-[1px]">
                            {brandCards.map((card, index) => (
                                <FeatureCard key={index} {...card} index={index} />
                            ))}
                        </div>
                    </div>
                </SectionReveal>

                {/* DIGITAL PUBLISHING SECTION */}
                <SectionReveal delay={0.2}>
                    <div id='media_and_publishing_houses' className=" max-h-[1000px] h-[150vh] md:h-[135vh] w-full">
                        <div className="flex flex-col-reverse md:flex-row justify-between gap-5 pb-10 md:pb-0 ">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="text-white md:max-w-[40vw] flex flex-col items-center px-3 md:ml-10 gap-8 justify-center"
                            >
                                <AnimatedText
                                    text="Ensure Credibility and Trust in Digital Publishing"
                                    className="font-thin md:font-normal text-3xl md:text-5xl"
                                />
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="font-thin"
                                >
                                    Backed by Contrials, media organizations can verify content, detect manipulations, and protect their editorial integrity at scale.
                                </motion.div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="relative p-10"
                            >
                                <div className=" overflow-hidden relative w-[300px] h-[240px] md:w-[530px] md:h-[354px] bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-3xl flex items-center justify-center">
                                    {/* <div className='absolute h-full w-full top-0 left-0 bg-blue-900/30 z-10 ' /> */}
                                    {/* <Image className=" " src={"/use_cases_illus/ecom_illus.png"} width={530} height={354} alt="" /> */}
                                    <div className='bg-blue-800/70 h-full w-full bg-[url(/use_cases_illus/digital_illus.png)] bg-blend-luminosity bg-contain bg-no-repeat bg-center relative' />
                                </div>
                            </motion.div>
                        </div>
                        <div className="flex px-3 scrollbar-hide overflow-x-auto overflow-y-hidden gap-[1px]">
                            {publishingCards.map((card, index) => (
                                <FeatureCard key={index} {...card} index={index} />
                            ))}
                        </div>
                    </div>
                </SectionReveal>

            </div>
            <CTA />
            <Footer />
        </>
    )
}

export default UI_page;