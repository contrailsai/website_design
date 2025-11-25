"use client"; // Add this line at the top

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // Import framer-motion
import { Cpu, Minimize, Zap, ChartPie, Blocks, Rocket, ChevronRight } from "lucide-react";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TextGenerateEffect from "@/components/TextGenerateEffect";

// Animation Variants (reusable animation definitions)
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const enterprise_cards = [
  {
    title: "AI Content Detection",
    description: "Spot fakes in any format instantly",
  },
  {
    title: "Brand Protection",
    description: "Keep customer support intact",
  },
  {
    title: "Harmful Content Labeling",
    description: "Classify risk for fast response",
  },
  {
    title: "Automatic Policy Review",
    description: "Match detection with your content rules",
  },
  {
    title: "Human Assist Labels",
    description: "Give moderators clarity and context",
  },
  {
    title: "Faster, Cheaper Actions",
    description: "Scale decisions without scaling costs",
  },
];

const numbers_section = [
  {
    number: "99.8%",
    description: "Detection Accuracy",
  },
  {
    number: "10M+",
    description: "Content Processed Daily",
  },
  {
    number: "85%",
    description: "Cost Reduction",
  },
  {
    number: "24/7",
    description: "Automated Monitoring",
  },
];

const features = [
  {
    icon: <Cpu className=" stroke-[#DF6501] " />,
    title: "Multi-Modal Detection",
  },
  {
    icon: <Minimize className=" stroke-[#DF6501] " />,
    title: "Scaleable Performance",
  },
  {
    icon: <Zap className=" stroke-[#DF6501] fill-[#DF6501]" />,
    title: "Lightning-Fast Results",
  },
  {
    icon: <ChartPie className=" stroke-[#DF6501] " />,
    title: "Verified Reports",
  },
  {
    icon: <Blocks className=" stroke-[#DF6501] " />,
    title: "Deep Explainability",
  },
];

const dotSpacing = 30; // Reduced spacing between dots
const dotsPerRow = 70; // More dots to fill the screen
const dotsPerCol = 70; // More dots vertically

export default function Home() {
  return (
    <>
      <div className="bg-black w-full lg:px-15 overflow-x-hidden"> {/* Added overflow-x-hidden to prevent horizontal scroll during animations */}

        <div className=" relative z-10">
          {/* NAVBAR */}

          <div className=" relative">

            <div className=" bg-gradient-to-br from-[#1A1DD8] to-[#07102A] absolute h-[185vh] lg:h-full w-screen lg:-left-15 -z-10" />
            <Navbar />

            {/* HERO CONTENT */}
            <div className="h-screen w-full">
              <div className=" relative flex flex-col lg:flex-row text-white justify-between items-start lg:items-end px-3 lg:px-10 mt-6 lg:mt-20">
                {/* TEXT CONTENT */}
                <motion.div
                  className="relative lg:top-16 flex flex-col gap-6 lg:text-4xl text-center lg:max-w-[40vw] z-30"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  <motion.div
                    className="  text-[5vw] lg:text-[80px] lg:leading-[80px] max-w-[80vw] lg:max-w-[100vw] text-left text-pretty "
                    variants={fadeIn}
                  >
                    GenAI Content Governance and Intelligence Across

                    <TextGenerateEffect words={["Video", "Audio", "Text", "Images"]} textClassName={"text-[#DF6501] font-semibold "} />
                    {/* <span className="text-[#DF6501] font-semibold ml-3">VIDEO</span> */}
                  </motion.div>
                  <motion.div
                    className=" text-base leading-7 text-left font-light max-w-md"
                    variants={fadeIn}
                  >
                    Detect deepfakes, misinformation, fraud, and harmful content at
                    enterprise scale.
                  </motion.div>


                  {/* Animated CTA Button */}
                  <motion.a
                    href="https://cal.com/ami-contrails/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.98 }}
                    className="bg-white text-black hover:text-white hover:bg-[#DF6501] transition-all duration-300 lg:min-w-56 min-h-10 w-fit py-2 px-4 lg:px-6 flex items-center justify-between gap-4 rounded-lg cursor-pointer relative overflow-hidden group"
                  >
                    <span className="lg:text-xl z-10">
                      Book a Demo
                    </span>

                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="relative z-10"
                    >
                      <ChevronRight />
                    </motion.div>

                  </motion.a>
                </motion.div>

                {/* ILLUSTRATION */}
                <motion.div
                  className="relative top-16 lg:-top-10 w-full h-[360px] lg:h-[550px] lg:-right-[4vw] flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {/* PATTERNS */}
                  <div className="  z-20 absolute w-full lg:min-h-[60vw] lg:min-w-[60vw] xl:-top-24 lg:h-full object-contain ">
                    <Image src={"/hero_section_dots.svg"} fill alt="" className=" " />
                    <div className="relative rounded-full h-[50vh] lg:h-full overflow-hidden blur-xs lg:blur">
                      <Image
                        src={"/hero_section_dots_blur.svg"}
                        fill
                        alt=""
                        className=""
                      />
                    </div>
                    {/* <div className="absolute rounded-full left-1/3 -translate-x-1/4 top-1/3 -translate-y-1/4 bg-[#D9D9D9]/5 h-2/3 w-2/3 blur-[84.12px]" /> */}
                  </div>

                  {/* IMAGE */}
                  <div className=" relative lg:top-[5.5vw] flex flex-col items-center gap-8">
                    <div className=" rounded-xl overflow-hidden relative w-[40vw] lg:w-[25vw] aspect-[6/5]  lg:aspect-[12/11] flex justify-center items-center">
                      <div className="absolute  h-full w-full aspect-[6/5] bg-blue-900/60 rounded-xl z-10" />
                      <div className=" h-full w-full aspect-[6/5] relative -top-[16vw] lg:-top-[10vw]  ">
                        <Image src={"/hero_image.gif"} width={420} height={350} alt="" className="" />
                      </div>
                    </div>

                    <div className=" text-xs lg:text-base relative z-20 font-semibold border border-white backdrop-blur-md p-1 lg:p-3 rounded-full w-fit bg-white/5">
                      Every <span className=""> 5 minutes</span>, a
                      deepfake attempt occurs
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* ENTERPRISE SECTION */}
            <motion.div
              className=" flex lg:flex-wrap gap-[1px] pb-36 lg:pb-20 pt-10 overflow-scroll px-6 lg:px-0 scroll-smooth scrollbar-hide"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div
                className="bg-white min-h-96 min-w-[300px] lg:w-[22.7vw] px-10 p-10 flex flex-col justify-between rounded-3xl"
                variants={fadeIn}
              >
                <div className="text-[36px] leading-10">
                  AI Safety at Enterprise Scale
                </div>
                <div className="text-xl font-thin">
                  Designed for platforms that need accuracy, speed, and trust.
                </div>
              </motion.div>

              {enterprise_cards.map((card, index) => (
                <motion.div
                  key={index}
                  className="bg-white/90 min-h-96 min-w-[300px] lg:w-[22.7vw] px-10 p-10 flex flex-col justify-between rounded-3xl"
                  variants={fadeIn}
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-[#FF7300] rounded-full size-3 mt-1.5" />
                    <div className=" lg:text-lg font-bold tracking-wider">
                      {card.title}
                    </div>
                  </div>
                  <div className="text-xl font-thin">{card.description}</div>
                </motion.div>
              ))}

              <motion.div
                className="bg-transparent text-white min-h-96 min-w-[285px] lg:min-w-[22.7vw] w-0 px-10 p-10 flex flex-col justify-end rounded-3xl"
                variants={fadeIn}
              >
                <Link href={"/use-cases"} className=" group lg:text-[1.4vw] flex flex-row">
                  See why global <br /> innovators choose us
                  <ChevronRight className=" size-6 lg:size-[2vw] stroke-[1.5] relative top-6 lg:top-[2.2vw] group-hover:translate-x-3 transition-all duration-500" />
                </Link>
              </motion.div>


            </motion.div>

          </div>

          {/* CLAIMS */}
          <motion.div
            className=" h-2/3 lg:h-88 w-full flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between px-10 py-16 lg:py-0 items-start lg:items-center text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {/* TRUSTED WORLDWIDE */}
            <motion.div
              className="flex flex-col items-start gap-2 lg:gap-5"
              variants={fadeIn}
            >
              <div className=" text-4xl lg:text-5xl max-w-[200px] ">
                Trusted Worldwide
              </div>
              <div className="font-thin text-sm lg:text-base max-w-[250px]">
                From marketplace to media, AI moderation you can rely on.
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col items-start gap-2 lg:gap-5"
              variants={fadeIn}
            >
              <div className=" text-4xl lg:text-5xl max-w-[200px] ">99.8%</div>
              <div className="font-thin text-sm lg:text-base max-w-[250px]">
                Detection Accuracy
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col items-start gap-2 lg:gap-5"
              variants={fadeIn}
            >
              <div className=" text-4xl lg:text-5xl max-w-[200px] ">85%</div>
              <div className="font-thin text-sm lg:text-base max-w-[250px]">
                Cost Reduction
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col items-start gap-2 lg:gap-5"
              variants={fadeIn}
            >
              <div className=" text-4xl lg:text-5xl max-w-[200px] ">24/7</div>
              <div className="font-thin text-sm lg:text-base max-w-[250px]">
                Automated Monitoring
              </div>
            </motion.div>
          </motion.div>

          {/* Complete AI safety platform */}
          <motion.div
            className=" h-[111vh] lg:h-[130vh] py-16 lg:py-0 px-4 flex flex-col relative lg:justify-center gap-7 text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >

            {/* background round dots + gradient */}
            <div className=" -z-10 bg-gradient-to-b from-transparent to-[#1A1DD8]/80 absolute h-[110vh]  lg:h-[130vh] w-screen lg:-left-15 overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox={`0 0 ${dotsPerRow * dotSpacing} ${dotsPerCol * dotSpacing}`}
                opacity="1"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <pattern
                    id="dotPattern"
                    x="0"
                    y="0"
                    width={dotSpacing}
                    height={dotSpacing}
                    patternUnits="userSpaceOnUse"
                  >
                    <circle
                      r="2"
                      cx={dotSpacing / 2}
                      cy={dotSpacing / 2}
                      fill="hsla(0, 0%, 80%, 0.2)"
                      stroke="none"
                    />
                  </pattern>
                </defs>

                <rect
                  width="100%"
                  height="100%"
                  fill="url(#dotPattern)"
                />
              </svg>
            </div>

            <motion.div
              className=" text-[40px] leading-12 lg:leading-18 lg:text-7xl lg:max-w-2/5 "
              variants={fadeIn}
            >
              Features that Powers Trust
            </motion.div>
            <motion.div
              className="lg:max-w-4/9 font-thin text-sm tracking-wider"
              variants={fadeIn}
            >
              From monitoring to compliance, our platform provides everything you
              need to deploy AI safety and confidently at enterprise scale.
            </motion.div>

            <div className="flex flex-col items-center justify-center gap-6">
              {/* FEATURES IN PILL SHAPED */}
              {features.map((val, idx) => {
                let top = "0";
                let left = "0";

                if (idx === 0) {
                  top = "12%";
                  left = "30%";
                }
                if (idx === 1) {
                  top = "20%";
                  left = "67%";
                }
                if (idx === 2) {
                  top = "40%";
                  left = "45%";
                }
                if (idx === 3) {
                  top = "60%";
                  left = "67%";
                }
                if (idx === 4) {
                  top = "70%";
                  left = "30%";
                }

                return (
                  <motion.div
                    key={idx}
                    style={{
                      top: top,
                      left: left,
                    }}
                    className=" lg:absolute w-80 lg:w-88 flex items-center justify-center text-white backdrop-blur-xs rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2/3 h-full absolute border-t border-l rounded-bl-full rounded-tl-full top-0 left-0 " />
                    <div className="w-2/3 h-full absolute border-b border-r rounded-tr-full rounded-br-full top-0  right-0 " />
                    <div className=" px-6 py-5 lg:p-10 w-full flex items-center justify-start gap-5 rounded-full">
                      {val.icon}
                      <span className=" text-base lg:text-xl font-thin">
                        {val.title}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Recognized on the World Stage */}
          <motion.div
            className=" text-white bg-black h-screen px-5 lg:px-10 py-10 lg:py-24 flex flex-col gap-5 lg:gap-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div className=" text-base font-thin lg:text-2xl " variants={fadeIn}>
              Recognized on the World Stage
            </motion.div>
            <motion.div
              className=" text-3xl/relaxed lg:text-5xl/normal text-balance  "
              variants={fadeIn}
            >
              From global AI forums to Trust & Safety summits, Contrails AI is
              shaping the conversation where it matters most.
            </motion.div>
            {/* images */}
            <motion.div
              className=" w-full max-w-[100vw] lg:h-52 flex flex-row flex-wrap  items-center justify-between"
              variants={staggerContainer}
            >
              <motion.div
                className="relative w-[150px] h-[100px] lg:w-[180px] lg:h-[120px] "
                variants={fadeIn}
              >
                <Image
                  src={"/conference_logos/marketplace_risk.png"}
                  width={180}
                  height={120}
                  alt="marketplace_risk"
                />
              </motion.div>
              <motion.div
                className="relative w-[150px] h-[100px] lg:w-[180px] lg:h-[120px] "
                variants={fadeIn}
              >
                <Image
                  src={"/conference_logos/trust_con.png"}
                  width={180}
                  height={120}
                  alt="marketplace_risk"
                />
              </motion.div>
              <motion.div
                className="relative w-[150px] h-[100px] lg:w-[180px] lg:h-[120px] "
                variants={fadeIn}
              >
                <Image
                  src={"/conference_logos/rsac.png"}
                  width={180}
                  height={120}
                  alt="marketplace_risk"
                />
              </motion.div>
              <motion.div
                className="relative w-[150px] h-[100px] lg:w-[180px] lg:h-[120px] "
                variants={fadeIn}
              >
                <Image
                  src={"/conference_logos/fosi.png"}
                  width={180}
                  height={120}
                  alt="marketplace_risk"
                />
              </motion.div>
              <motion.div
                className="relative w-[150px] h-[100px] lg:w-[180px] lg:h-[120px] "
                variants={fadeIn}
              >
                <Image
                  src={"/conference_logos/ai_risk_summit.png"}
                  width={180}
                  height={120}
                  alt="marketplace_risk"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* IN THE NEWS */}
          <motion.div
            className=" text-white h-[80vh] px-5 lg:px-3 py-6 flex items-center "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >

            {/* <div className="bg-gradient-to-b from-black to-[#1A1DD8] absolute h-[80vh] w-screen -z-20 lg:-left-15" /> */}
            <div className=' absolute lg:-left-15 bg-white  bg-[url(/30.svg)] w-screen h-[80vh] -z-20 '>
              <div className=' bg-black/80 w-full h-full backdrop-invert '></div>
            </div>

            <div className="flex flex-col justify-center h-4/5 w-full gap-5 lg:gap-2 bg-black px-2 lg:px-7 py-4">
              <motion.div
                className=" text-3xl/relaxed lg:text-5xl/normal text-balance "
                variants={fadeIn}
              >
                In The News
              </motion.div>
              <motion.div className=" text-base font-thin lg:text-2xl " variants={fadeIn}>
                Explore how global media is covering our work on trust, safety, and synthetic media
              </motion.div>
              {/* images */}
              <motion.div
                className=" w-full max-w-[100vw] lg:h-80  flex flex-row flex-wrap  items-center justify-between"
                variants={staggerContainer}
              >
                <motion.div
                  className="relative w-[150px] h-[100px] lg:w-[240px] lg:h-[160px] p-2 bg-white flex items-center justify-center "
                  variants={fadeIn}
                >
                  <Link
                    href={"https://bizweekly.com/strengthening-trust-in-the-digital-world-the-contrails-ai-story/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={"/news_logos/Biz_Weekly.png"}
                      width={600}
                      height={400}
                      alt="Biz_Weekly"
                    />
                  </Link>
                </motion.div>
                <motion.div
                  className="relative w-[150px] h-[100px] lg:w-[240px] lg:h-[160px] p-2 bg-white flex items-center justify-center "
                  variants={fadeIn}
                >
                  <Link
                    href={"https://www.digitaljournal.com/pr/news/revupmarketer/contrails-ai-co-founder-ami-kumar-1703280217.html"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={"/news_logos/Digital_Journal.png"}
                      width={600}
                      height={400}
                      alt="Digital_Journal"
                    />
                  </Link>
                </motion.div>
                <motion.div
                  className="relative w-[150px] h-[100px] lg:w-[240px] lg:h-[160px] p-2 bg-white flex items-center justify-center "
                  variants={fadeIn}
                >
                  <Link href={"https://b2b.economictimes.indiatimes.com/amp/news/entrepreneur/contrails-ai-raises-1-million-in-pre-seed-funding-for-ai-driven-content-detection-platform/124363841"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={"/news_logos/The_Economic_Times.svg"}
                      width={600}
                      height={400}
                      alt="The_Economic_Times"
                    />
                  </Link>
                </motion.div>
                <motion.div
                  className="relative w-[150px] h-[100px] lg:w-[240px] lg:h-[160px] p-2 bg-white flex items-center justify-center "
                  variants={fadeIn}
                >
                  <Link href={"https://yourstory.com/2025/10/startup-news-and-updates-daily-roundup-october-7-2025#582266"} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={"/news_logos/Your_Story.svg"}
                      width={600}
                      height={400}
                      alt="YourStory"
                    />
                  </Link>
                </motion.div>
              </motion.div>
            </div >
          </motion.div >

          {/* Safeguard Your Digital Content  */}
          < div className="h-[150vh] lg:h-[125vh] w-full relative flex items-center lg:justify-center " >
            <div className="absolute bg-[#0a0e0e] h-[125vh] w-[100vw] top-0 lg:-left-15 -z-10 " />

            <motion.div
              className="z-10 relative top-0 flex flex-col lg:flex-row items-center justify-start lg:justify-center h-full py-20  lg:items-center gap-10 text-white w-full "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div
                className=" flex flex-col gap-5 max-w-screen lg:max-w-[40vw] w-full h-full lg:h-fit px-5 lg:px-9 "
                variants={fadeIn}
              >
                <div className=" text-3xl lg:text-[68px] lg:leading-19  ">
                  {" "}
                  Safeguard Your Digital Content with Enterprise- Grade AI Safety{" "}
                </div>
                {/* <div className="lg:w-2/3 text-sm/relaxed">
                  Talk to us and discover the fastest path to trusted content
                  moderation.
                </div> */}
              </motion.div>

              <motion.div
                className=" px-5 flex flex-row lg:flex-col flex-wrap justify-between h-full w-full lg:h-[35rem] lg:w-[45rem] gap-[1px] text-black "
                variants={staggerContainer}
              >
                {/* deploy in 30 mins */}
                <motion.div
                  className=" h-52 lg:h-full w-full lg:w-1/2 flex flex-col justify-between bg-white px-10 py-10 lg:py-16 rounded-3xl"
                  variants={fadeIn}
                >
                  <div className=" text-xl lg:text-3xl">
                    Deploy in <br className="hidden lg:block" /> 30 minutes
                  </div>
                  <div className="text-xl font-thin">
                    Simple SDK <br className="hidden lg:block" /> integration
                    with <br className="hidden lg:block" /> existing systems
                  </div>
                  <Rocket className=" hidden lg:block size-18 stroke-[1.5] stroke-[#DF6501]" />
                </motion.div>
                <motion.div
                  className=" h-52 lg:h-[50%] w-full lg:w-1/2 flex flex-col justify-between bg-white px-10 py-10 lg:py-16 rounded-3xl"
                  variants={fadeIn}
                >
                  <div className=" text-xl lg:text-3xl">
                    Enterprise <br className="hidden lg:block" /> Security
                  </div>
                  <div className="text-xl font-thin">
                    SOC2 certified with bank grade encryption
                  </div>
                </motion.div>
                <motion.div
                  className=" h-52 lg:h-[49.8%] w-full lg:w-1/2 flex flex-col justify-between bg-white px-10 py-10 lg:py-16 rounded-3xl"
                  variants={fadeIn}
                >
                  <div className=" text-xl lg:text-3xl">
                    24/7 Expert <br className="hidden lg:block" /> Support
                  </div>
                  <div className="text-xl font-thin">
                    Dedicated team for enterprise customers
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div >

        </div >
      </div >
      <CTA />
      <Footer />
    </>
  );
}