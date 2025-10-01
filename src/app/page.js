"use client"; // Add this line at the top

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // Import framer-motion
import { Cpu, Minimize, Zap, ChartPie, Blocks, Rocket, ChevronRight } from "lucide-react";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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
    title: "Multi Modal Detection",
  },
  {
    icon: <Minimize className=" stroke-[#DF6501] " />,
    title: "Scaleable Performance",
  },
  {
    icon: <Zap className=" stroke-[#DF6501] fill-[#DF6501]" />,
    title: "Lightning Fast Results",
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
      <div className="bg-black w-full md:px-15 overflow-x-hidden"> {/* Added overflow-x-hidden to prevent horizontal scroll during animations */}

        <div className=" relative z-10">
          {/* NAVBAR */}

          <div className=" relative">

            <div className=" bg-gradient-to-br from-[#1A1DD8] to-[#07102A] absolute h-[185vh] md:h-full w-screen  -left-15 -z-10" />
            <Navbar />

            {/* HERO CONTENT */}
            <div className="h-screen w-full">
              <div className=" relative flex flex-col md:flex-row text-white justify-between items-end px-3 md:px-10 mt-6 md:mt-20">
                {/* TEXT CONTENT */}
                <motion.div
                  className="relative md:top-16 flex flex-col gap-6 md:text-4xl text-center md:max-w-[40vw]"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  <motion.div
                    className=" text-4xl md:text-[80px] md:leading-[80px] max-w-[80vw] md:max-w-[100vw] text-left text-pretty "
                    variants={fadeIn}
                  >
                    GenAI Content Governance and Intelligence Across
                    <span className="text-[#DF6501] font-semibold ml-3">VIDEO</span>
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
                    className="text-white bg-[#DF6501] min-w-56 min-h-10 w-fit py-2 px-6 flex items-center justify-between gap-4 rounded-lg cursor-pointer relative overflow-hidden group"
                  >
                    <span className="text-xl z-10">
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
                  className="relative w-full h-[550px]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {/* PATTERNS */}
                  <div className=" z-20 absolute -left-[5vw] -top-[27vh] min-h-[100vh] min-w-[100vw] md:-left-[7vw] md:-top-[20vh] md:min-h-[60vw] md:min-w-[60vw] md:h-full object-contain ">
                    <Image src={"/hero_section_dots.svg"} fill alt="" />
                    <div className="relative rounded-full h-[54.71vh] md:h-full top-[22.57vh] md:top-0 overflow-hidden blur-xs md:blur">
                      <Image
                        src={"/hero_section_dots_blur.svg"}
                        fill
                        alt=""
                        className=""
                      />
                    </div>
                    <div className="absolute rounded-full left-1/3 -translate-x-1/4 top-1/3 -translate-y-1/4 bg-[#D9D9D9]/5 h-2/3 w-2/3 blur-[84.12px]" />
                  </div>

                  {/* IMAGE */}
                  <div className=" relative top-24 left-2 flex flex-col items-center gap-8">
                    <div className=" rounded-xl overflow-hidden relative w-[12.15vw] h-[22.94vh] md:w-[24.3vw] md:h-[45.62vh] flex justify-center items-center">
                      <div className="absolute h-full w-full bg-blue-900/60 rounded-xl z-10" />\
                      <div className="h-full w-full aspect-[6/5] relative -top-42 ">
                        <Image src={"/hero_image.gif"} width={420} height={350} alt="" className="" />
                      </div>
                    </div>

                    <div className=" text-xs md:text-base relative z-10 font-semibold border border-white backdrop-blur-md p-1 md:p-3 rounded-full w-fit bg-white/5">
                      Every <span className=""> 5 Minutes </span>, a
                      deepfake attempt occurs
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* ENTERPRISE SECTION */}
            <motion.div
              className=" flex md:flex-wrap gap-[1px] pb-36 md:pb-20 pt-10 overflow-scroll px-6 md:px-0 scroll-smooth scrollbar-hide"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div
                className="bg-white min-h-96 min-w-[285px] md:min-w-[22.7vw] w-0 px-10 p-10 flex flex-col justify-between rounded-3xl"
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
                  className="bg-white/90 min-h-96 min-w-[300px] md:w-[22.7vw] px-10 p-10 flex flex-col justify-between rounded-3xl"
                  variants={fadeIn}
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-[#FF7300] rounded-full size-3 mt-1.5" />
                    <div className=" md:text-lg font-bold tracking-wider">
                      {card.title}
                    </div>
                  </div>
                  <div className="text-xl font-thin">{card.description}</div>
                </motion.div>
              ))}

              <motion.div
                className="bg-transparent text-white min-h-96 min-w-[285px] md:min-w-[22.7vw] w-0 px-10 p-10 flex flex-col justify-end rounded-3xl"
                variants={fadeIn}
              >
                <Link href={"/use-cases"} className=" group text-[1.4vw] flex flex-row">
                  See why global <br /> innovators choose us
                  <ChevronRight className="size-[2vw] stroke-[1.5] relative top-[2.2vw] group-hover:translate-x-3 transition-all duration-500" />
                </Link>
              </motion.div>


            </motion.div>

          </div>

          {/* CLAIMS */}
          <motion.div
            className=" h-2/3 md:h-88 w-full flex flex-col md:flex-row gap-10 md:gap-0 justify-between px-10 py-16 md:py-0 items-start md:items-center text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {/* TRUSTED WORLDWIDE */}
            <motion.div
              className="flex flex-col items-start gap-2 md:gap-5"
              variants={fadeIn}
            >
              <div className=" text-4xl md:text-5xl max-w-[200px] ">
                Trusted Worldwide
              </div>
              <div className="font-thin text-sm md:text-base max-w-[250px]">
                From marketplace to media, AI moderation you can rely on.
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col items-start gap-2 md:gap-5"
              variants={fadeIn}
            >
              <div className=" text-4xl md:text-5xl max-w-[200px] ">99.8%</div>
              <div className="font-thin text-sm md:text-base max-w-[250px]">
                Detection Accuracy
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col items-start gap-2 md:gap-5"
              variants={fadeIn}
            >
              <div className=" text-4xl md:text-5xl max-w-[200px] ">85%</div>
              <div className="font-thin text-sm md:text-base max-w-[250px]">
                Cost Reduction
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col items-start gap-2 md:gap-5"
              variants={fadeIn}
            >
              <div className=" text-4xl md:text-5xl max-w-[200px] ">24/7</div>
              <div className="font-thin text-sm md:text-base max-w-[250px]">
                Automated Monitoring
              </div>
            </motion.div>
          </motion.div>

          {/* Complete AI safety platform */}
          <motion.div
            className=" h-[111vh] md:h-[130vh] py-16 md:py-0 px-4 flex flex-col relative md:justify-center gap-7 text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >

            {/* background round dots + gradient */}
            <div className=" -z-10 bg-gradient-to-b from-transparent to-[#1A1DD8]/80 absolute h-[110vh]  md:h-[130vh] w-screen -left-15 overflow-hidden">
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
              className=" text-[40px] leading-12 md:leading-18 md:text-7xl md:max-w-2/5 "
              variants={fadeIn}
            >
              Features that Powers Trust
            </motion.div>
            <motion.div
              className="md:max-w-4/9 font-thin text-sm tracking-wider"
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
                    className=" md:absolute w-80 md:w-88 flex items-center justify-center text-white backdrop-blur-xs rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2/3 h-full absolute border-t border-l rounded-bl-full rounded-tl-full top-0 left-0 " />
                    <div className="w-2/3 h-full absolute border-b border-r rounded-tr-full rounded-br-full top-0  right-0 " />
                    <div className=" px-6 py-5 md:p-10 w-full flex items-center justify-start gap-5 rounded-full">
                      {val.icon}
                      <span className=" text-base md:text-xl font-thin">
                        {val.title}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* PROVEN RESULTS */}
          <motion.div
            className=" text-white bg-black h-screen px-5 md:px-10 py-10 md:py-24 flex flex-col gap-5 md:gap-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div className=" text-base font-thin md:text-2xl " variants={fadeIn}>
              Recognized on the World Stage
            </motion.div>
            <motion.div
              className=" text-3xl/relaxed md:text-5xl/normal text-balance  "
              variants={fadeIn}
            >
              From global AI forums to Trust & Safety summits, Contrails AI is
              shaping the conversation where it matters most.
            </motion.div>
            {/* images */}
            <motion.div
              className=" w-full max-w-[100vw] md:h-52 flex flex-row flex-wrap  items-center justify-between"
              variants={staggerContainer}
            >
              <motion.div
                className="relative w-[150px] h-[100px] md:w-[180px] md:h-[120px] "
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
                className="relative w-[150px] h-[100px] md:w-[180px] md:h-[120px] "
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
                className="relative w-[150px] h-[100px] md:w-[180px] md:h-[120px] "
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
                className="relative w-[150px] h-[100px] md:w-[180px] md:h-[120px] "
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
                className="relative w-[150px] h-[100px] md:w-[180px] md:h-[120px] "
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

          {/* Dont let AI Compomise business */}
          <div className="h-[150vh] md:h-[125vh] w-full relative flex items-center md:justify-center ">
            <div className="absolute bg-[#0a0e0e] h-[125vh] w-[100vw] top-0 md:-left-15 -z-10 " />

            <motion.div
              className="z-10 relative top-0 flex flex-col md:flex-row items-center justify-start md:justify-center h-full py-20  md:items-center gap-10 text-white w-full "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div
                className=" flex flex-col gap-5 max-w-screen md:max-w-[40vw] w-full h-full md:h-fit px-5 md:px-9 "
                variants={fadeIn}
              >
                <div className=" text-3xl md:text-[68px] md:leading-19  ">
                  {" "}
                  Safeguard Your Digital Content with Enterprise- Grade AI Safety{" "}
                </div>
                {/* <div className="md:w-2/3 text-sm/relaxed">
                  Talk to us and discover the fastest path to trusted content
                  moderation.
                </div> */}
              </motion.div>

              <motion.div
                className=" px-5 flex flex-row md:flex-col flex-wrap justify-between h-full w-full md:h-[35rem] md:w-[45rem] gap-[1px] text-black "
                variants={staggerContainer}
              >
                {/* deploy in 30 mins */}
                <motion.div
                  className=" h-52 md:h-full w-full md:w-1/2 flex flex-col justify-between bg-white px-10 py-10 md:py-16 rounded-3xl"
                  variants={fadeIn}
                >
                  <div className=" text-xl md:text-3xl">
                    Deploy in <br className="hidden md:block" /> 30 minutes
                  </div>
                  <div className="text-xl font-thin">
                    Simple SDK <br className="hidden md:block" /> integration
                    with <br className="hidden md:block" /> existing systems
                  </div>
                  <Rocket className=" hidden md:block size-18 stroke-[1.5] stroke-[#DF6501]" />
                </motion.div>
                <motion.div
                  className=" h-52 md:h-[50%] w-full md:w-1/2 flex flex-col justify-between bg-white px-10 py-10 md:py-16 rounded-3xl"
                  variants={fadeIn}
                >
                  <div className=" text-xl md:text-3xl">
                    Enterprise <br className="hidden md:block" /> Security
                  </div>
                  <div className="text-xl font-thin">
                    SOC2 certified with bank grade encryption
                  </div>
                </motion.div>
                <motion.div
                  className=" h-52 md:h-[49.8%] w-full md:w-1/2 flex flex-col justify-between bg-white px-10 py-10 md:py-16 rounded-3xl"
                  variants={fadeIn}
                >
                  <div className=" text-xl md:text-3xl">
                    24/7 Expert <br className="hidden md:block" /> Support
                  </div>
                  <div className="text-xl font-thin">
                    Dedicated team for enterprise customers
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
      <CTA />
      <Footer />
    </>
  );
}