"use client"; // Required for using hooks and framer-motion

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatePresence, motion } from "framer-motion"; // Import framer-motion

import Link from "next/link";
import { CheckCircleIcon } from "lucide-react"
import { write_message_to_slack } from "@/lib/slack_funcitons";
import { useEffect, useState } from "react";

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

const UI_page = () => {

    const [submitted, set_submitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handle_submit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Set loading state
        setError(null); // Clear previous errors

        // 2. Use FormData for robust and safe access to form values
        const formData = new FormData(e.target);
        const name = formData.get("fullName");
        const email = formData.get("workEmail");
        const company = formData.get("companyName");
        const message = formData.get("message");

        console.log(name, email, company, message);

        const data = `
        <-- CONTACT FORM SUBMISSION -->\n
NAME: ${name},\n
EMAIL: ${email},\n
COMPANY: ${company},\n
MESSAGE: ${message},\n
        `

        try {
            const resp = await write_message_to_slack(data);
            if (!resp.success) {
                // Throw an error that we can catch and display to the user
                throw new Error(resp.error || "An unknown error occurred.");
                }
            set_submitted(true);
        }
        catch (e) {
            // console.error(`Submission Error: ${e.message}`);
            setError("Sorry, something went wrong. Please try again.");
        } finally {
            setIsLoading(false); // Stop loading state regardless of outcome
        }
    }

    return (
        <>
            <div className=" bg-gradient-to-b from-blue-800 to-black/20 md:px-15 overflow-x-hidden">
                <Navbar />

                <div className=" flex flex-col md:flex-row pt-20 justify-between items-start min-h-screen ">
                    {/* HERO SECTION */}
                    <motion.div
                        className="text-white w-full min-h-[20vh] md:min-h-[40vh] flex flex-col justify-end px-5 md:px-10 mb-20"
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
                    {
                        submitted ?
                            (
                                <motion.div
                                    className=" bg-white rounded-3xl  min-h-96 p-10 w-full flex flex-col gap-5 items-center justify-center text-black "
                                    variants={fadeInUp}
                                >
                                    <div className="bg-orange-500 rounded-full ">
                                        <CheckCircleIcon className="size-12 stroke-1 stroke-white" />
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl text-center">
                                            Thank you for reaching out!
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        We will get back to you shortly. Meanwhile you can follow us on
                                        <Link href={"https://www.linkedin.com/company/contrails-ai"} className=" mx-2 font-bold underline text-blue-600" >
                                            @linkedIn
                                        </Link>
                                        for updates.
                                    </div>
                                </motion.div>
                            )
                            :
                            (
                                <>
                                    {/* CONTACT US*/}
                                    <motion.div
                                        className="w-full min-h-[95vh]  md:mx-4  flex flex-col md:flex-row items-center justify-center gap-10 mb-16"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.2 }}
                                        variants={staggerContainer}
                                    >
                                        {/* FORM */}
                                        <motion.div
                                            className="w-fit bg-white flex flex-col gap-8 px-4 md:px-10 py-10 rounded-3xl "
                                            variants={staggerContainer} // Nested stagger for form fields
                                        >
                                            <motion.div className=" text-3xl md:text-3xl" variants={fadeInUp}>
                                                How can we assist you today?
                                            </motion.div>
                                            <form onSubmit={handle_submit} className="flex flex-col gap-5 md:max-w-[450px]">
                                                <motion.div className="flex flex-col gap-2" variants={fadeInUp}>
                                                    <label htmlFor="fullName">Full Name</label>
                                                    <input id="fullName" name="fullName" className=" px-3 py-2 rounded-lg border border-gray-400 " placeholder="Enter Full Name" required />
                                                </motion.div>
                                                <motion.div className="flex flex-col gap-2" variants={fadeInUp}>
                                                    <label htmlFor="workEmail">Work Email</label>
                                                    <input id="workEmail" name="workEmail" className=" px-3 py-2 rounded-lg border border-gray-400 " type="email" placeholder="Enter Work Email" required />
                                                </motion.div>
                                                <motion.div className="flex flex-col gap-2" variants={fadeInUp}>
                                                    <label htmlFor="companyName">Company Name</label>
                                                    <input id="companyName" name="companyName" className=" px-3 py-2 rounded-lg border border-gray-400 " placeholder="Enter Company Name" required />
                                                </motion.div>
                                                <motion.div className="flex flex-col gap-2" variants={fadeInUp}>
                                                    <label htmlFor="message">Message</label>
                                                    <textarea id="message" name="message" rows={5} className=" px-3 py-2 rounded-lg border border-gray-400 " placeholder="Enter Your Message" />
                                                </motion.div>

                                                {/* Show error message to user if submission fails */}
                                                {error && (
                                                    <div className="text-red-600 bg-red-100 p-3 rounded-lg text-center transition-all">
                                                        {error}
                                                    </div>
                                                )}

                                                <motion.button
                                                    className="bg-orange-500 w-fit px-4 py-2 mt-5 text-xl rounded-lg text-white cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
                                                    variants={fadeInUp}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    type="submit"
                                                    disabled={isLoading} // Disable button while loading
                                                >
                                                    {isLoading ? "Submitting..." : "Submit"}
                                                </motion.button>
                                            </form>
                                        </motion.div>

                                        {/* CONTACT INFO */}
                                        {/* <motion.div
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
                                        </motion.div> */}
                                    </motion.div>
                                </>
                            )
                    }
                </div>
            </div>
            <Footer />
        </>

    )
}

export default UI_page;