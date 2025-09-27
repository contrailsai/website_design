import Image from "next/image";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const page = () => {
    return (
        <div className="relative md:px-15 bg-gradient-to-b from-blue-800 to-black/10">
            <Navbar />

            {/* HERO SECTION */}
            <div className="text-white py-5 px-4 md:pl-10 h-[44vh] md:h-[60vh] flex flex-col items-start justify-end gap-16">
                <div className=" text-[38px] leading-10 tracking-normal md:text-[78px] md:leading-20 md:tracking-wide">
                    Safeguarding <br className="md:hidden" /> Trust Across <br className="hidden md:block" /> Every Industry, Every Interaction
                </div>

                {/* TABS */}
                <div className="overflow-y-auto max-w-[95vw] rounded-s-3xl scrollbar-hide  ">
                    <div className="h-10 w-[588px] rounded-full bg-white/30 flex justify-between">
                        <div className=" font-semibold bg-white text-black text-sm px-6 py-1 rounded-full flex items-center">
                            Marketplace
                        </div>
                        <div className=" text-sm px-6 py-1 rounded-full flex items-center">
                            Brand Platforms
                        </div>
                        <div className=" text-sm px-6 py-1 rounded-full flex items-center">
                            Media and Publishing Houses
                        </div>
                    </div>
                </div>
            </div>

            {/* MARKETPLACE SECTION */}
            <div className=" h-[150vh] md:h-[135vh] w-full">
                <div className="flex flex-col-reverse md:flex-row justify-between gap-5 pb-10 md:pb-0 ">
                    <div className="text-white  md:max-w-[40vw] flex flex-col items-center px-3 md:ml-10 gap-8 justify-center ">
                        <div className=" font-thin md:font-normal text-3xl md:text-5xl ">
                            Protect Trust & Safety in Online Marketplaces
                        </div>
                        <div className="font-thin">
                            Contrails helps marketplaces prevent fraud, misinformation, and harmful content before it reaches buyers and sellers.
                        </div>
                    </div>

                    <div className="relative p-10">
                        {/* <div className="bg-sky-600/50 z-10 w-full h-full absolute" /> */}
                        <Image className="hue-rotate-80 saturate-150 brightness-110 " src={"/use_cases_illus/ecom_illus.png"} width={530} height={354} alt="" />
                    </div>
                </div>
                <div className="flex px-3 scrollbar-hide overflow-x-auto overflow-y-hidden gap-[1px]">
                    <div className="bg-white h-96 w-full min-w-[300px] rounded-3xl flex flex-col gap-12 px-5 md:px-10 py-5 md:py-10 " >
                        <div className="text-2xl">
                            E-commerce <br /> marketplaces
                        </div>
                        <ul className="pl-6 list-disc font-thin flex flex-col gap-5">
                            <li>Spot manipulated product images or videos before listings go live</li>
                            <li>Identify fradulent or misleading product claims </li>
                            <li>Automate harmful content labeling to scale moderation</li>
                        </ul>
                    </div>
                    <div className="bg-white h-96 w-full min-w-[300px] rounded-3xl flex flex-col gap-12 px-5 md:px-10 py-5 md:py-10 " >
                        <div className="text-2xl">
                            Travel and <br /> hospitality Platforms
                        </div>
                        <ul className="pl-6 list-disc font-thin flex flex-col gap-5">
                            <li>Prevent fake rental or booking listings powered by AI</li>
                            <li>Detect fraudulent host or property photos/videos </li>
                            <li>Support automated policy checks to keep users safe</li>
                        </ul>
                    </div>
                    <div className="bg-white h-96 w-full min-w-[300px] rounded-3xl flex flex-col gap-12 px-5 md:px-10 py-5 md:py-10 " >
                        <div className="text-2xl">
                            Peer-to-peer resale <br /> and rental platforms
                        </div>
                        <ul className="pl-6 list-disc font-thin flex flex-col gap-5">
                            <li>Flag scammer profiles with manipulated identity docs</li>
                            <li>Catch AI-generated content in user listings</li>
                            <li>Provide verified reports for compliance and dispute resolution</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* ONLINE COMMUNITIES SECTION */}
            <div className=" h-[150vh] md:h-[135vh] w-full">
                <div className="flex flex-col-reverse md:flex-row justify-between gap-5 pb-10 md:pb-0 ">
                    <div className="text-white  md:max-w-[40vw] flex flex-col items-center px-3 md:ml-10 gap-8 justify-center ">
                        <div className=" font-thin md:font-normal text-3xl md:text-5xl ">
                            Preserve the Integrity of Online Communities 
                        </div>
                        <div className="font-thin">
                            We secure online communities by moderating harmful UGC and AIGC at scale.
                        </div>
                    </div>

                    <div className="relative p-10">
                        <Image className=" brightness-110 " src={"/use_cases_illus/online_illus.png"} width={530} height={354} alt="" />
                    </div>
                </div>
                <div className="flex px-3 scrollbar-hide overflow-x-auto overflow-y-hidden gap-[1px]">
                    <div className="bg-white h-96 w-full min-w-[300px] rounded-3xl flex flex-col gap-12 px-5 md:px-10 py-5 md:py-10 " >
                        <div className="text-2xl">
                            Social platforms
                        </div>
                        <ul className="pl-6 list-disc font-thin flex flex-col gap-5">
                            <li>Flag manipulated memes, viral media, or offensive comments</li>
                            <li>Prevent AI-generated misinformation from spreading in feeds</li>
                            <li>Provide moderators with explainable AI-backed recommendations</li>
                        </ul>
                    </div>
                    <div className="bg-white h-96 w-full min-w-[300px] rounded-3xl flex flex-col gap-12 px-5 md:px-10 py-5 md:py-10 " >
                        <div className="text-2xl">
                            Content discovery & <br/> curation platforms
                        </div>
                        <ul className="pl-6 list-disc font-thin flex flex-col gap-5">
                            <li>Validate the authenticity of user-submitted photos, videos, or assets</li>
                            <li>Protect creators and users with verified content integrity</li>
                            <li>Detect copyright violations or AI-generated stock imagery</li>
                        </ul>
                    </div>
                    <div className="bg-white h-96 w-full min-w-[300px] rounded-3xl flex flex-col gap-12 px-5 md:px-10 py-5 md:py-10 " >
                        <div className="text-2xl">
                            Dating and gaming <br /> platforms
                        </div>
                        <ul className="pl-6 list-disc font-thin flex flex-col gap-5">
                            <li>Verify user identities to stop catfish or fake accounts</li>
                            <li>Monitor abusive messages and toxic chatrooms with explainable AI</li>
                            <li>Spot deepfake uploads or manipulated profile media</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* SAFEGUARD BRAND PLATFORMS SECTION */}
            <div className=" h-[150vh] md:h-[135vh] w-full">
                <div className="flex flex-col-reverse md:flex-row justify-between gap-5 pb-10 md:pb-0 ">
                    <div className="text-white  md:max-w-[40vw] flex flex-col items-center px-3 md:ml-10 gap-8 justify-center ">
                        <div className=" font-thin md:font-normal text-3xl md:text-5xl ">
                            Safeguard Brand Platforms and Customer Communities
                        </div>
                        <div className="font-thin ">
                            We enable brands to protect reputation, campaigns, and user engagement by filtering harmful, manipulated, or misleading content.
                        </div>
                    </div>

                    <div className=" relative p-10">
                        {/* <div className="bg-sky-600/50 z-10 w-full h-full absolute" /> */}
                        <Image className="hue-rotate-80 saturate-150 brightness-110 " src={"/use_cases_illus/brand_illus.png"} width={530} height={354} alt="" />
                    </div>
                </div>
                <div className="flex px-3 scrollbar-hide overflow-x-auto overflow-y-hidden gap-[1px]">
                    <div className="bg-white h-96 w-full min-w-[300px] rounded-3xl flex flex-col gap-12 px-5 md:px-10 py-5 md:py-10 " >
                        <div className="text-2xl">
                            Consumer goods and <br className=" hidden md:block" /> lifestyle brands
                        </div>
                        <ul className="pl-6 list-disc font-thin flex flex-col gap-5">
                            <li>Block offensive or harmful user-generated content</li>
                            <li>Detect AI-driven impersonations targeting brand reputation</li>
                            <li>Automate policy checks across global campaigns</li>
                        </ul>
                    </div>
                    <div className="bg-white h-96 w-full min-w-[300px] rounded-3xl flex flex-col gap-12 px-5 md:px-10 py-5 md:py-10 " >
                        <div className="text-2xl">
                            Direct-to-consumer <br className=" hidden md:block" /> (DTC) platforms
                        </div>
                        <ul className="pl-6 list-disc font-thin flex flex-col gap-5">
                            <li>Spot manipulated reviews or testimonial content</li>
                            <li>Prevent fake profiles from entering loyalty programs </li>
                            <li>Provide AI-powered content labeling to assist human moderators</li>
                        </ul>
                    </div>
                    <div className="bg-white h-96 w-full min-w-[300px] rounded-3xl flex flex-col gap-12 px-5 md:px-10 py-5 md:py-10 " >
                        <div className="text-2xl">
                            Entertainment and <br className=" hidden md:block" /> sports brands
                        </div>
                        <ul className="pl-6 list-disc font-thin flex flex-col gap-5">
                            <li>Detect manipulated videos or fan submissions before publishing</li>
                            <li>Filter inappropriate content during large-scale events</li>
                            <li>Deliver explainable reports to maintain community trust</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* DIGITAL PUBLISHING SECTION */}
            <div className=" h-[150vh] md:h-[135vh] w-full">
                <div className="flex flex-col-reverse md:flex-row justify-between gap-5 pb-10 md:pb-0 ">
                    <div className="text-white  md:max-w-[40vw] flex flex-col items-center px-3 md:ml-10 gap-8 justify-center ">
                        <div className=" font-thin md:font-normal text-3xl md:text-5xl ">
                            Ensure Credibility and Trust in Digital Publishing
                        </div>
                        <div className="font-thin">
                            Backed by Contrials, media organizations can verify content, detect
                            manipulations, and protect their editorial integrity at scale.
                        </div>
                    </div>

                    <div className="relative p-10">
                        {/* <div className="bg-sky-600/50 z-10 w-full h-full absolute" /> */}
                        <Image className="hue-rotate-80 saturate-150 brightness-110 " src={"/use_cases_illus/digital_illus.png"} width={370} height={354} alt="" />
                    </div>
                </div>
                <div className="flex px-3 scrollbar-hide overflow-x-auto overflow-y-hidden gap-[1px]">
                    <div className="bg-white h-96 w-full min-w-[300px] rounded-3xl flex flex-col gap-12 px-5 md:px-10 py-5 md:py-10 " >
                        <div className="text-2xl">
                            Newsrooms and digital <br /> publishers
                        </div>
                        <ul className="pl-6 list-disc font-thin flex flex-col gap-5">
                            <li>Detect deepfakes in video submissions before stories go live</li>
                            <li>Flag AI-written misinformation in article drafts</li>
                            <li>Provide verification reports for editorial teams</li>
                        </ul>
                    </div>
                    <div className="bg-white h-96 w-full min-w-[300px] rounded-3xl flex flex-col gap-12 px-5 md:px-10 py-5 md:py-10 " >
                        <div className="text-2xl">
                            Media syndication <br /> platforms
                        </div>
                        <ul className="pl-6 list-disc font-thin flex flex-col gap-5">
                            <li>Validate third-party images, audio, and video before redistribution</li>
                            <li>Automate harmful content detection for large volumes of content</li>
                            <li>Support policy compliance with explainable AI</li>
                        </ul>
                    </div>
                    <div className="bg-white h-96 w-full min-w-[300px] rounded-3xl flex flex-col gap-12 px-5 md:px-10 py-5 md:py-10 " >
                        <div className="text-2xl">
                            Online magazines <br />and blogs
                        </div>
                        <ul className="pl-6 list-disc font-thin flex flex-col gap-5">
                            <li>Filter AI-generated submissions in text, images, and video</li>
                            <li>Detect manipulated visuals in lifestyle and cultural content</li>
                            <li>Provide scalable moderation to protect editorial standards</li>
                        </ul>
                    </div>

                </div>
            </div>

            <CTA />
            <Footer />
        </div>
    )
}

export default page;