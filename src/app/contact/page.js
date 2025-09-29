"use client"; // Required for using hooks and framer-motion

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion"; // Import framer-motion

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


const Page = () => {
    return (
        <div className=" bg-gradient-to-b from-blue-800 to-black/20 md:px-15 overflow-x-hidden">
            <Navbar />

            {/* HERO SECTION */}
            <motion.div
                className="text-white min-h-[20vh] md:min-h-[40vh] flex flex-col justify-end px-10 mb-20"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <motion.div className=" text-5xl md:text-[80px]" variants={fadeInUp}>
                    Get in Touch
                </motion.div>
                <motion.div className="font-thin text-sm" variants={fadeInUp}>
                    From solving GenAI content moderation problems to exploring our <br /> solutions, our team is here to help you.
                </motion.div>
            </motion.div>

            {/* CONTACT US*/}
            <motion.div
                className="bg-white min-h-[95vh] rounded-3xl mx-4 px-4 md:px-10 py-10 flex flex-col md:flex-row gap-10 mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                {/* FORM */}
                <motion.div
                    className="w-full flex flex-col gap-8"
                    variants={staggerContainer} // Nested stagger for form fields
                >
                    <motion.div className=" text-3xl md:text-4xl" variants={fadeInUp}>
                        How can we assist you today?
                    </motion.div>
                    <div className="flex flex-col gap-5 md:pr-18">
                        <motion.div className="flex flex-col gap-2" variants={fadeInUp}>
                            <label>Full Name</label>
                            <input className=" px-3 py-2 rounded-lg border border-gray-400 " placeholder="Enter Full Name" />
                        </motion.div>
                        <motion.div className="flex flex-col gap-2" variants={fadeInUp}>
                            <label>Work Email</label>
                            <input className=" px-3 py-2 rounded-lg border border-gray-400 " placeholder="Enter Work Email" />
                        </motion.div>
                        <motion.div className="flex flex-col gap-2" variants={fadeInUp}>
                            <label>Company Name</label>
                            <input className=" px-3 py-2 rounded-lg border border-gray-400 " placeholder="Enter Company Name" />
                        </motion.div>
                        <motion.div className="flex flex-col gap-2" variants={fadeInUp}>
                            <label>Message</label>
                            <textarea rows={5} className=" px-3 py-2 rounded-lg border border-gray-400 " placeholder="Enter Your Message" />
                        </motion.div>
                        <motion.div
                            className="bg-orange-500 w-fit px-4 py-2 text-xl rounded-lg text-white font-semibold cursor-pointer"
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Submit
                        </motion.div>
                    </div>
                </motion.div>

                {/* CONTACT INFO */}
                <motion.div
                    className="w-full flex items-center justify-center "
                    // Apply variant directly to the column for a smooth entrance
                    variants={fadeInUp}
                >
                    <div className=" px-5 md:px-10 py-12 shadow-sm border border-gray-300 rounded-3xl bg-orange-100 max-w-[460px] max-h-[520px]  h-full w-full flex flex-col gap-12">
                        <div className=" text-3xl md:text-4xl" >Contact</div>
                        <div>
                            <div className="font-bold text-xl">Phone</div>
                            <div>+91 987 654 3210</div>
                        </div>
                        <div>
                            <div className="font-bold text-xl">Email</div>
                            <div>contact@contrails.ai</div>
                        </div>
                        <div>
                            <div className="font-bold text-xl">Address</div>
                            <div>Bengaluru</div>
                            <div>Karnataka</div>
                            <div>India</div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
            <Footer />
        </div>
    )
}

export default Page;