"use client"
import {motion} from "framer-motion"

// A subtle animation for elements to fade and slide in from below
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

// A container variant to orchestrate staggered animations for its children
const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const Blogs_hero = () => {
    return (
        <>
            {/* HERO SECTION */}
            < motion.div
                className="text-white min-h-[20vh] md:min-h-[40vh]  flex flex-col justify-end px-10 pt-16 md:pt-0 md:mb-20 mb-10 gap-7"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <motion.div className=" text-5xl md:text-[80px]" variants={fadeInUp}>
                    Blogs
                </motion.div>
                <motion.div className="font-thin text-sm" variants={fadeInUp}>
                    Get the latest insights on AI-powered detection, moderation, and compliance, <br/> built for modern digital communities.
                    {/* From solving GenAI content moderation problems to exploring our <br /> solutions, our team is here to help you. */}
                </motion.div>
            </motion.div >
        </>
    )
}

export default Blogs_hero;