"use client"; // Required for using hooks and framer-motion

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion"; // Import framer-motion

import { write_message_to_slack } from "@/lib/slack_funcitons";

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

//  # Functions to fetch channels where the bot is a member and send the message there
    // def get_channels(SLACK_BOT_TOKEN):
    //     // headers = {
    //     //     "Authorization": f"Bearer {SLACK_BOT_TOKEN}"
    //     // }
    //     // params = {
    //     //     'types': 'public_channel,private_channel'  # Fetch both public and private channels
    //     // }
    //     CONVERSATIONS_LIST_URL = "https://slack.com/api/conversations.list"
    //     response = requests.get(CONVERSATIONS_LIST_URL, headers=headers, params=params)

    //     if response.status_code != 200:
    //         print(f"Error fetching channels: {response.status_code},")
    //         return []

    //     data = response.json()
    //     if not data.get("ok", False):
    //         error = data.get('error', 'Unknown error')
    //         print(f"Error fetching channels: {error}")
    //         return []

    //     channels = data.get('channels', [])
    //     # Filter channels where the bot is a member
    //     return [channel['id'] for channel in channels if channel.get('is_member', False)]

    // def send_slack_message(SLACK_BOT_TOKEN, channel_id, message):
    //     headers = {
    //         "Authorization": f"Bearer {SLACK_BOT_TOKEN}",
    //         "Content-Type": "application/json"
    //     }
    //     payload = {
    //         "channel": channel_id,
    //         "text": message
    //     }
    //     POST_MESSAGE_URL = "https://slack.com/api/chat.postMessage"
    //     response = requests.post(POST_MESSAGE_URL, headers=headers, data=json.dumps(payload))

    //     if response.status_code != 200:
    //         print(f"Error sending message to {channel_id}: {response.status_code}, {response.text}")
    //     else:
    //         response_data = response.json()
    //         if not response_data.get("ok", False):
    //             print(f"Slack API error while sending message to {channel_id}: {response_data.get('error')}")
    //         else:
    //             print(f"Message sent to channel {channel_id}")



const Page = () => {

    const handle_submit = async (e)=>{
        e.preventDefault();

        const name = e.target[0].value;
        const email = e.target[1].value;
        const company = e.target[2].value;
        const message = e.target[3].value;
        console.log(name, email, company, message)

        const data = `
NAME: ${name},\n
EMAIL: ${email},\n
COMPANY: ${company},\n
MESSAGE: ${message},\n
        `

        const resp = await write_message_to_slack(data)

        console.log(resp);
        alert("FORM SUBMITTED");
    }

    return (
        <>
            <div className=" bg-gradient-to-b from-blue-800 to-black/20 md:px-15 overflow-x-hidden">
                <Navbar />

                <div className=" flex pt-20 justify-between items-start ">
                    {/* HERO SECTION */}
                    <motion.div
                        className="text-white w-full min-h-[20vh] md:min-h-[40vh] flex flex-col justify-end px-10 mb-20"
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
                        className=" w-full min-h-[95vh]  mx-4  flex flex-col md:flex-row items-center justify-center gap-10 mb-16"
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
                                    <label>Full Name</label>
                                    <input className=" px-3 py-2 rounded-lg border border-gray-400 "  placeholder="Enter Full Name" />
                                </motion.div>
                                <motion.div className="flex flex-col gap-2" variants={fadeInUp}>
                                    <label>Work Email</label>
                                    <input className=" px-3 py-2 rounded-lg border border-gray-400 " type="email"  placeholder="Enter Work Email" />
                                </motion.div>
                                <motion.div className="flex flex-col gap-2" variants={fadeInUp}>
                                    <label>Company Name</label>
                                    <input className=" px-3 py-2 rounded-lg border border-gray-400 " placeholder="Enter Company Name" />
                                </motion.div>
                                <motion.div className="flex flex-col gap-2" variants={fadeInUp}>
                                    <label>Message</label>
                                    <textarea rows={5} className=" px-3 py-2 rounded-lg border border-gray-400 " placeholder="Enter Your Message" />
                                </motion.div>
                                <motion.button
                                    className="bg-orange-500 w-fit px-4 py-2 text-xl rounded-lg text-white font-semibold cursor-pointer"
                                    variants={fadeInUp}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                >
                                        Submit
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
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Page;