"use client"; // Required for using hooks and framer-motion

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatePresence, motion } from "framer-motion"; // Import framer-motion

import Link from "next/link";
import { CheckCircleIcon } from "lucide-react"
import { write_message_to_slack } from "@/lib/slack_funcitons";
import { useState } from "react"; // Removed useEffect as it was unused

// Animation variants (unchanged)
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
        
        console.log(name, email, company);

        const data = `
<--NEW LEAD FROM SB 53 PAGE-->\n
NAME: ${name},\n
EMAIL: ${email},\n
COMPANY: ${company},\n
        `;

        try {
            const resp = await write_message_to_slack(data);
            if (!resp.success) {
                // Throw an error that we can catch and display to the user
                throw new Error(resp.error || "An unknown error occurred.");
            }
            
            set_submitted(true);

            // Trigger the download
            const link = document.createElement('a');
            link.href = '/SB53_Readiness_Checklist.pdf'; // Make sure this PDF is in your /public directory
            link.download = 'SB53_Readiness_Checklist.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (e) {
            console.error(`Submission Error: ${e.message}`);
            setError("Sorry, something went wrong. Please try again.");
        } finally {
            setIsLoading(false); // Stop loading state regardless of outcome
        }
    };

    return (
        <>
            <div className=" bg-gradient-to-b from-blue-800 to-black/20 md:px-15 overflow-x-hidden">
                <Navbar />

                <div className=" flex flex-col md:flex-row pt-20 justify-between items-start min-h-screen ">
                    {/* HERO SECTION */}
                    <motion.div
                        className="text-white w-full min-h-[20vh] md:min-h-[40vh] flex flex-col justify-end px-5 md:px-10 mb-20 "
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div className=" text-5xl md:text-[55px]" variants={fadeInUp}>
                            We've made an SB 53 Readiness Checklist
                        </motion.div>
                        <motion.div className="font-thin text-sm" variants={fadeInUp}>
                            SB 53 aims to set global benchmarks for safe, trustworthy, and innovative AI through transparency, public safety, and accountability.
                        </motion.div>
                    </motion.div>
                    {
                        submitted ?
                            (
                                <motion.div
                                    className=" bg-white rounded-3xl min-h-96 p-10 w-full flex flex-col gap-5 items-center justify-center text-black "
                                    variants={fadeInUp}
                                >
                                    <div className="bg-orange-500 rounded-full ">
                                        <CheckCircleIcon className="size-12 stroke-1 stroke-white" />
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl text-center">
                                            Success! Your download has started.
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        Thank you for your interest in our SB 53 Readiness Checklist. <br/> You can follow us on
                                        <Link href={"https://www.linkedin.com/company/contrails-ai"} className=" mx-2 font-bold underline text-blue-600" >
                                            LinkedIn
                                        </Link>
                                        for latest updates.
                                    </div>
                                </motion.div>
                            )
                            :
                            (
                                <motion.div
                                    className="w-full min-h-[95vh]  md:mx-4  flex flex-col md:flex-row items-start justify-center gap-10 mb-16"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    variants={staggerContainer}
                                >
                                    <motion.div
                                        className="w-full md:w-fit md:min-w-[400px] lg:min-w-[500px] bg-white flex flex-col gap-8 px-4 md:px-10 py-10 rounded-3xl "
                                        variants={staggerContainer}
                                    >
                                        <motion.div className=" text-3xl md:text-3xl" variants={fadeInUp}>
                                            Download the Report
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

                                            {/* Show error message to user if submission fails */}
                                            {error && (
                                                <motion.div className="text-red-600 bg-red-100 p-3 rounded-lg text-center" variants={fadeInUp}>
                                                    {error}
                                                </motion.div>
                                            )}

                                            <motion.button
                                                className="bg-orange-500 w-fit px-4 py-2 mt-5 text-xl rounded-lg text-white cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
                                                variants={fadeInUp}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                type="submit"
                                                disabled={isLoading} // Disable button while loading
                                            >
                                                {isLoading ? "Submitting..." : "Get Access"}
                                            </motion.button>
                                        </form>
                                    </motion.div>
                                </motion.div>
                            )
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default UI_page;