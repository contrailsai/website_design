import Image from "next/image";
import { Cpu, Minimize, Zap, ChartPie, Blocks, Rocket, ChevronRight, Globe, Shield, Settings } from "lucide-react"
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const enterprise_cards = [
  {
    title: "AI Content Detection",
    description: "Spot fakes in any format instantly"
  },
  {
    title: "Brand Protection",
    description: "keep customer support intact"
  },
  {
    title: "Harmmful Content Labeling",
    description: "Classify risk for fast response"
  },
  {
    title: "Automatic Policy Review",
    description: "Match detection with your content rules"
  },
  {
    title: "Human Assist Labels",
    description: "Give moderators clarity and context"
  },
  {
    title: "Faster, Cheaper Actions",
    description: "Scale decisions without scaling costs"
  }
]

const numbers_section = [
  {
    number: "99.8%",
    description: "Detection Accuracy"
  },
  {
    number: "10M+",
    description: "Content Processed Daily"
  },
  {
    number: "85%",
    description: "Cost Reduction"
  },
  {
    number: "24/7",
    description: "Automated Monitoring"
  }
]

const features = [
  {
    icon: <Cpu />,
    title: "Multi modal Detection"
  },
  {
    icon: <Minimize />,
    title: "Scaleable performance"
  },
  {
    icon: <Zap className="fill-white" />,
    title: "Lightning fast results"
  },
  {
    icon: <ChartPie />,
    title: "Verified reports"
  },
  {
    icon: <Blocks />,
    title: "Deep explainability"
  }
]

const dotSpacing = 30; // Reduced spacing between dots
const dotsPerRow = 70; // More dots to fill the screen
const dotsPerCol = 70; // More dots vertically


export default function Home() {
  return (
    <div className="bg-black w-full px-15">

      {/* BACK SCREENS */}
      <div className=" bg-gradient-to-br from-[#1A1DD8] to-[#07102A] absolute h-[240vh] w-screen top-0 left-0" />

      <div className="bg-gradient-to-b from-transparent to-[#1A1DD8]/80 absolute h-[130vh] w-screen top-[288vh] left-0 overflow-hidden">
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

      <div className=" relative z-10">
        {/* NAVBAR */}
        <Navbar />

        {/* HERO CONTENT */}
        <div className="h-screen w-full">
          <div className=" relative   flex flex-row text-white justify-between items-end px-10 mt-20">

            {/* TEXT CONTENT */}
            <div className="relative top-16  flex flex-col gap-6 text-4xl text-center max-w-[40vw]">

              <div className=" text-[80px] leading-[80px] text-left text-pretty ">
                GenAI Content Governance and Intelligence Across &nbsp;
                <span className="text-[#5E9136] font-semibold ">VIDEO</span>
              </div>
              <div className=" text-base leading-7 text-left max-w-md">
                detect deepfakes, misinformation, fraud, and harmful content at enterprise scale.
              </div>

              <div className="bg-orange-500 px-6 py-2 rounded-lg text-white text-base font-semibold cursor-pointer w-fit">
                Book a Demo
              </div>
            </div>

            {/* ILLUSTRATION */}
            <div className="relative w-full h-[550px]">
              {/* PATTERNS */}
              <div className=" z-10 absolute -left-[7vw] -top-[20vh]  min-h-[60vw] min-w-[60vw] h-full object-contain ">
                <Image src={"/hero_section_dots.svg"} fill alt="" />
                <Image src={"/hero_section_dots_blur.svg"} fill alt="" className=" blur rounded-full" />
                <div className="absolute rounded-full  left-1/3 -translate-x-1/4 top-1/3 -translate-y-1/4 bg-[#D9D9D9]/5 h-2/3 w-2/3 blur-[84.12px]" />
              </div>

              {/* IMAGE */}
              <div className=" relative top-24 left-2 flex flex-col items-center gap-8">
                <div className=" relative ">
                  <div className="absolute h-full w-full bg-blue-900/60 rounded-2xl " />
                  <Image src={'/hero_img.svg'} width={350} height={350} alt="" />
                </div>

                <div className=" relative z-10 font-semibold border border-white backdrop-blur-md p-3 rounded-full w-fit bg-white/5">
                  Every <span className="underline"> 5 Minutes </span>, a deepfake attempt occurs
                </div>
              </div>

            </div>
            {/* <div className="h-full w-full bg-yellow-800" /> */}
          </div>
        </div>

        {/* ENTERPRISE SECTION */}
        <div className=" flex flex-wrap gap-[1px] pb-20 pt-10" >

          <div className="bg-white h-96 w-[22.7vw] px-10 p-10 flex flex-col justify-between rounded-3xl">
            <div className="text-[36px] leading-10" >AI Safety at  Enterprise Scale</div>
            <div className="text-xl font-thin" >Designed for platforms that need accuracy, speed, and trust.</div>
          </div>

          {
            enterprise_cards.map((card, index) => (
              <div key={index} className="bg-white/90 h-96 w-[22.7vw] px-10 p-10 flex flex-col justify-between rounded-3xl">
                <div className="flex items-center gap-3">
                  <div className="bg-[#FF7300] rounded-full size-3" />
                  <div className="text-lg font-bold tracking-wider" >{card.title}</div>
                </div>
                <div className="text-xl font-thin" >{card.description}</div>
              </div>
            ))
          }
        </div>

        {/* CLAIMS */}
        <div className=" h-88 w-full flex justify-evenly px-10 items-center text-white">

          {/* TRUSTED WORLDWIDE */}
          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-row gap-5">
              <div className="relative">
                <Globe className="size-20 stroke-1 relative " />
                <Shield className=" absolute top-8 left-8 size-14 fill-white stroke-black " />
              </div>
              <div className="font-bold text-4xl max-w-[200px] ">
                Trusted Worldwide
              </div>
            </div>
            <div className="font-thin text-sm">
              From marketplace to media, AI moderation you can rely on.
            </div>
          </div>

          {/* TRUSTED ACROSS INDUSTRIES WORLDWIDE */}
          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-row gap-5">
              <div className="relative">
                <Globe className="size-20 stroke-1 relative " />
                <Settings className=" absolute top-0 left-8 size-14 fill-white stroke-black " />
              </div>
              <div className="font-bold text-4xl max-w-[380px] ">
                Trusted Across Industries Worldwide
              </div>
            </div>
            <div className="font-thin text-sm">
              From e-commerce to entertainment, AI moderation done right.
            </div>
          </div>
        </div>

        {/* Complete AI safety platform */}
        <div className="h-[130vh] flex flex-col relative justify-center gap-7 text-white">

          <div className=" text-7xl max-w-2/5 ">
            Features that Powers Trust
          </div>

          <div className="max-w-4/9 font-thin text-sm tracking-wider">
            From monitoring to compliance, our platform provides everything you need to deploy AI safety and confidently at enterprise scale.
          </div>

          {/* FEATURES IN PILL SHAPED */}
          {
            features.map((val, idx) => {
              let top = "0";
              let left = "0";

              if (idx === 0) {
                top = "12%"
                left = "30%"
              }
              if (idx === 1) {
                top = "20%"
                left = "67%"
              }
              if (idx === 2) {
                top = "40%"
                left = "45%"
              }
              if (idx === 3) {
                top = "60%"
                left = "67%"
              }
              if (idx === 4) {
                top = "70%"
                left = "30%"
              }


              return (
                <div key={idx}
                  style={{
                    "top": top,
                    "left": left
                  }}
                  className="absolute w-88 flex items-center justify-center text-white backdrop-blur-xs rounded-full"
                >
                  <div className="w-2/3 h-full absolute border-t border-l rounded-bl-full rounded-tl-full top-0 left-0 " />
                  <div className="w-2/3 h-full absolute border-b border-r rounded-tr-full rounded-br-full top-0  right-0 " />
                  <div className="p-10 flex items-center gap-5 rounded-full">
                    {val.icon}
                    <span className="text-xl">
                      {val.title}
                    </span>
                  </div>
                </div>
              )
            })
          }




        </div>

        {/* PROVEN RESULTS */}
        <div className=" text-white bg-black h-screen px-10 py-24 flex flex-col gap-14" >
          <div className="text-2xl ">
            Recognized on the World Stage
          </div>
          <div className="text-5xl/normal text-pretty  ">
            From global AI forums to trust & safety summits, Contrails AI is shaping the conversation where it matters most.
          </div>
          {/* images */}
          <div className=" w-full h-52 flex flex-row items-center justify-between">
            <Image src={"/conference_logos/marketplace_risk.png"} width={180} height={120} alt="marketplace_risk" />
            <Image src={"/conference_logos/trust_con.png"} width={180} height={120} alt="marketplace_risk" />
            <Image src={"/conference_logos/rsac.png"} width={180} height={120} alt="marketplace_risk" />
            <Image src={"/conference_logos/fosi.png"} width={180} height={120} alt="marketplace_risk" />
            <Image src={"/conference_logos/ai_risk_summit.png"} width={180} height={120} alt="marketplace_risk" />
          </div>
        </div>

        {/* Dont let AI Compomise business */}
        <div className="  h-[125vh] w-full relative flex items-center justify-center ">
          <div className="absolute bg-[#0a0e0e] h-[125vh] w-screen top-0 -left-15 -z-10 " />

          <div className="z-10 relative flex items-center gap-10 text-white w-full ">

            <div className="flex flex-col gap-5 max-w-[40vw] w-full h-full px-9 ">
              <div className=" text-[68px] leading-19  "> Safeguard Your Digital Content with Enterprise- Grade AI Safety </div>
              <div className="w-2/3 text-sm/relaxed">Talk to us and discover the fastest path to trusted content moderation.</div>
            </div>

            <div className="flex flex-col flex-wrap justify-between h-[35rem] w-[45rem] gap-[1px] text-black " >
              {/* deploy in 30 mins */}
              <div className="h-full w-1/2 flex flex-col justify-between bg-white px-10 py-16 rounded-3xl">
                <div className="text-3xl">
                  Deploy in <br /> 30 minutes
                </div>
                <div className="text-xl font-thin">
                  Simple SDK <br /> integration with <br /> existing systems
                </div>
                <Rocket className="size-18 stroke-[1.5]" />
              </div>
              <div className="h-[50%] w-1/2 px-10 py-16 flex flex-col justify-between bg-white rounded-3xl">
                <div className="text-3xl">
                  Enterprise <br /> security
                </div>
                <div className="text-xl font-thin">
                  SOC2 certified with bank grade encryption
                </div>
              </div>
              <div className="h-[49.8%] w-1/2 px-10 py-16 flex flex-col justify-between bg-white rounded-3xl">
                <div className="text-3xl">
                  24/7 expert <br /> support
                </div>
                <div className="text-xl font-thin">
                  Dedicated team for enterprise customers
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* CTA */}
        <CTA />

        {/* FOOTER */}
        <Footer />

      </div>
    </div>
  );
}
