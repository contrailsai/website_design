import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const page = () => {
    return (
        <div className=" bg-gradient-to-b from-blue-800 to-black/20  px-15">
            <Navbar />

            {/* HERO SECTION */}
            <div className="text-white min-h-[40vh] flex flex-col justify-end px-10 mb-20">
                <div className="text-[80px]" >
                    Get in Touch
                </div>
                <div className="font-thin text-sm">
                    From solving GenAI content moderation problems to exploring our <br /> solutions, our team is here to help you.
                </div>
            </div>

            {/* CONTACT US*/}
            <div className="bg-white min-h-[95vh] rounded-3xl px-10 py-10 flex gap-10 mb-16">
                {/* FORM */}
                <div className="w-full flex flex-col gap-8">
                    <div className="text-4xl">
                        How can we assist you today?
                    </div>
                    <div className="flex flex-col gap-5 pr-18">
                        <div className="flex flex-col gap-2">
                            <label>Full Name</label>
                            <input className=" px-3 py-2 rounded-lg border border-gray-400 " placeholder="Enter Full Name" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Work Email</label>
                            <input className=" px-3 py-2 rounded-lg border border-gray-400 " placeholder="Enter Work Email" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Company Name</label>
                            <input className=" px-3 py-2 rounded-lg border border-gray-400 " placeholder="Enter Company Name" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Message</label>
                            <textarea rows={5} className=" px-3 py-2 rounded-lg border border-gray-400 " placeholder="Enter Your Message" />
                        </div>

                        <div className="bg-orange-500 w-fit px-4 py-2 text-xl rounded-lg text-white font-semibold ">
                            Submit
                        </div>

                    </div>
                </div>

                {/* CONTACT INFO */}
                <div className="w-full flex items-center justify-center ">
                    <div className=" px-10 py-12 shadow-sm border border-gray-300 rounded-3xl bg-orange-100 max-w-[460px] max-h-[520px]  h-full w-full flex flex-col gap-12">

                        <div className="text-4xl" >Contact</div>

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
                            <div>Address line 1</div>
                            <div>Address line 2</div>
                            <div>City</div>
                            <div>State</div>
                            <div>Country - Pin code</div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default page;