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
    icon: <Cpu className=" stroke-[#DF6501] " />,
    title: "Multi modal Detection"
  },
  {
    icon: <Minimize className=" stroke-[#DF6501] " />,
    title: "Scaleable performance"
  },
  {
    icon: <Zap className=" stroke-[#DF6501] fill-[#DF6501]" />,
    title: "Lightning fast results"
  },
  {
    icon: <ChartPie className=" stroke-[#DF6501] " />,
    title: "Verified reports"
  },
  {
    icon: <Blocks className=" stroke-[#DF6501] " />,
    title: "Deep explainability"
  }
]

const dotSpacing = 30; // Reduced spacing between dots
const dotsPerRow = 70; // More dots to fill the screen
const dotsPerCol = 70; // More dots vertically


export default function Home() {
  return (
    <div className="bg-black w-full  md:px-15">

      {/* BACK SCREENS */}
      <div className=" bg-gradient-to-br from-[#1A1DD8] to-[#07102A] absolute h-[185vh] md:h-[240vh] w-screen top-0 left-0" />

      <div className="bg-gradient-to-b from-transparent to-[#1A1DD8]/80 absolute h-[110vh]  md:h-[130vh] w-screen top-[270vh] md:top-[288vh] left-0 overflow-hidden">
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
          <div className=" relative   flex flex-col md:flex-row text-white justify-between items-end px-3 md:px-10 mt-6 md:mt-20">

            {/* TEXT CONTENT */}
            <div className="relative md:top-16 flex flex-col gap-6 md:text-4xl text-center  md:max-w-[40vw]">

              <div className=" text-4xl md:text-[80px] md:leading-[80px] max-w-[80vw] md:max-w-[100vw] text-left text-pretty ">
                GenAI Content Governance and Intelligence Across &nbsp;
                <span className="text-[#DF6501] font-semibold ">VIDEO</span>
              </div>
              <div className=" text-base leading-7 text-left font-light max-w-md">
                detect deepfakes, misinformation, fraud, and harmful content at enterprise scale.
              </div>

              <div className="bg-orange-500 px-6 py-2 rounded-lg text-white text-base font-semibold cursor-pointer w-fit">
                Book a Demo
              </div>
            </div>

            {/* ILLUSTRATION */}
            <div className="relative w-full h-[550px]">
              {/* PATTERNS */}
              <div className=" z-10 absolute -left-[5vw] -top-[27vh] min-h-[100vh] min-w-[100vw] md:-left-[7vw] md:-top-[20vh] md:min-h-[60vw] md:min-w-[60vw] md:h-full object-contain ">
                <Image src={"/hero_section_dots.svg"} fill alt="" />
                <div className="relative rounded-full h-[400px] md:h-full top-[165px] md:top-0 overflow-hidden blur-xs md:blur">
                  <Image src={"/hero_section_dots_blur.svg"} fill alt="" className="" />
                </div>
                <div className="absolute rounded-full  left-1/3 -translate-x-1/4 top-1/3 -translate-y-1/4 bg-[#D9D9D9]/5 h-2/3 w-2/3 blur-[84.12px]" />
              </div>

              {/* IMAGE */}
              <div className=" relative top-24 left-2 flex flex-col items-center gap-8">
                <div className=" rounded-xl overflow-hidden relative w-[175px] h-[167.69px] md:w-[350px] md:h-[333.5px]  ">
                  <div className="absolute h-full w-full bg-blue-900/60 rounded-xl " />
                  <Image src={'/hero_img.svg'} width={350} height={350} alt="" />
                </div>

                <div className=" text-xs md:text-base relative z-10 font-semibold border border-white backdrop-blur-md p-1 md:p-3 rounded-full w-fit bg-white/5">
                  Every <span className="underline"> 5 Minutes </span>, a deepfake attempt occurs
                </div>
              </div>

            </div>
            {/* <div className="h-full w-full bg-yellow-800" /> */}
          </div>
        </div>

        {/* ENTERPRISE SECTION */}
        <div className=" flex md:flex-wrap gap-[1px] pb-36 md:pb-20 pt-10 overflow-scroll px-6 md:px-0 scroll-smooth scrollbar-hide" >

          <div className="bg-white min-h-96 min-w-[285px] md:min-w-[22.7vw] w-0 px-10 p-10 flex flex-col justify-between rounded-3xl">
            <div className="text-[36px] leading-10" >AI Safety at  Enterprise Scale</div>
            <div className="text-xl font-thin" >Designed for platforms that need accuracy, speed, and trust.</div>
          </div>

          {
            enterprise_cards.map((card, index) => (
              <div key={index} className="bg-white/90 min-h-96 min-w-[300px] md:w-[22.7vw] px-10 p-10 flex flex-col justify-between rounded-3xl">
                <div className="flex items-start gap-3">
                  <div className="bg-[#FF7300] rounded-full size-3 mt-1.5" />
                  <div className=" md:text-lg font-bold tracking-wider" >{card.title}</div>
                </div>
                <div className="text-xl font-thin" >{card.description}</div>
              </div>
            ))
          }
        </div>

        {/* CLAIMS */}
        <div className=" h-2/3 md:h-88 w-full flex flex-col md:flex-row gap-10 md:gap-0 justify-between px-10 py-16 md:py-0 items-start md:items-center text-white">

          {/* TRUSTED WORLDWIDE */}
          <div className="flex flex-col items-start gap-2 md:gap-5">
            <div className=" text-4xl md:text-5xl max-w-[200px] ">
              Trusted Worldwide
            </div>
            <div className="font-thin text-sm md:text-base max-w-[250px]">
              From marketplace to media, AI moderation you can rely on.
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 md:gap-5">
            <div className=" text-4xl md:text-5xl max-w-[200px] ">
              99.8%
            </div>
            <div className="font-thin text-sm md:text-base max-w-[250px]">
              Detection Accuracy
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 md:gap-5">
            <div className=" text-4xl md:text-5xl max-w-[200px] ">
              85%
            </div>
            <div className="font-thin text-sm md:text-base max-w-[250px]">
              Cost Reduction
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 md:gap-5">
            <div className=" text-4xl md:text-5xl max-w-[200px] ">
              24/7
            </div>
            <div className="font-thin text-sm md:text-base max-w-[250px]">
              Automated Monitoring
            </div>
          </div>
        </div>

        {/* Complete AI safety platform */}
        <div className=" h-[111vh] md:h-[130vh] py-16 md:py-0 px-4 flex flex-col relative md:justify-center gap-7 text-white">

          <div className=" text-[40px] leading-12 md:leading-18 md:text-7xl md:max-w-2/5 ">
            Features that Powers Trust
          </div>
          <div className="md:max-w-4/9 font-thin text-sm tracking-wider">
            From monitoring to compliance, our platform provides everything you need to deploy AI safety and confidently at enterprise scale.
          </div>

          <div className="flex flex-col items-center justify-center gap-6">

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
                    className=" md:absolute w-80 md:w-88 flex items-center justify-center text-white backdrop-blur-xs rounded-full"
                  >
                    <div className="w-2/3 h-full absolute border-t border-l rounded-bl-full rounded-tl-full top-0 left-0 " />
                    <div className="w-2/3 h-full absolute border-b border-r rounded-tr-full rounded-br-full top-0  right-0 " />
                    <div className=" px-6 py-5 md:p-10 w-full flex items-center justify-start gap-5 rounded-full">
                      {val.icon}
                      <span className=" text-base md:text-xl font-thin">
                        {val.title}
                      </span>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>

        {/* PROVEN RESULTS */}
        <div className=" text-white bg-black h-screen px-5 md:px-10 py-10 md:py-24 flex flex-col gap-5 md:gap-14" >
          <div className=" text-base font-thin md:text-2xl ">
            Recognized on the World Stage
          </div>
          <div className=" text-3xl/relaxed md:text-5xl/normal text-balance  ">
            From global AI forums to trust & safety summits, Contrails AI is shaping the conversation where it matters most.
          </div>
          {/* images */}
          <div className=" w-full max-w-[100vw] md:h-52 flex flex-row flex-wrap  items-center justify-between">
            <div className="relative w-[150px] h-[100px] md:w-[180px] md:h-[120px] ">
              <Image src={"/conference_logos/marketplace_risk.png"} width={180} height={120} alt="marketplace_risk" />
            </div>
            <div className="relative w-[150px] h-[100px] md:w-[180px] md:h-[120px] ">
              <Image src={"/conference_logos/trust_con.png"} width={180} height={120} alt="marketplace_risk" />
            </div>
            <div className="relative w-[150px] h-[100px] md:w-[180px] md:h-[120px] ">
              <Image src={"/conference_logos/rsac.png"} width={180} height={120} alt="marketplace_risk" />
            </div>
            <div className="relative w-[150px] h-[100px] md:w-[180px] md:h-[120px] ">
              <Image src={"/conference_logos/fosi.png"} width={180} height={120} alt="marketplace_risk" />
            </div>
            <div className="relative w-[150px] h-[100px] md:w-[180px] md:h-[120px] ">
              <Image src={"/conference_logos/ai_risk_summit.png"} width={180} height={120} alt="marketplace_risk" />
            </div>
          </div>
        </div>

        {/* Dont let AI Compomise business */}
        <div className="h-[150vh] md:h-[125vh] w-full relative flex items-center md:justify-center ">
          <div className="absolute bg-[#0a0e0e] h-[125vh] w-[100vw] top-0 md:-left-15 -z-10 " />

          <div className="z-10 relative top-0 flex flex-col md:flex-row items-center justify-start md:justify-center h-full py-20  md:items-center gap-10 text-white w-full ">

            <div className=" flex flex-col gap-5 max-w-screen md:max-w-[40vw] w-full h-full md:h-fit px-5 md:px-9 ">
              <div className=" text-3xl md:text-[68px] md:leading-19  "> Safeguard Your Digital Content with Enterprise- Grade AI Safety </div>
              <div className="md:w-2/3 text-sm/relaxed">Talk to us and discover the fastest path to trusted content moderation.</div>
            </div>

            <div className=" px-5 flex flex-row md:flex-col flex-wrap justify-between h-full w-full md:h-[35rem] md:w-[45rem] gap-[1px] text-black " >
              {/* deploy in 30 mins */}
              <div className=" h-52 md:h-full w-full md:w-1/2 flex flex-col justify-between bg-white px-10 py-10 md:py-16 rounded-3xl">
                <div className=" text-xl md:text-3xl">
                  Deploy in <br className="hidden md:block" /> 30 minutes
                </div>
                <div className="text-xl font-thin">
                  Simple SDK <br className="hidden md:block" /> integration with <br className="hidden md:block" /> existing systems
                </div>
                <Rocket className=" hidden md:block size-18 stroke-[1.5]" />
              </div>
              <div className=" h-52 md:h-[50%] w-full md:w-1/2 flex flex-col justify-between bg-white px-10 py-10 md:py-16 rounded-3xl">
                <div className=" text-xl md:text-3xl">
                  Enterprise <br className="hidden md:block" /> security
                </div>
                <div className="text-xl font-thin">
                  SOC2 certified with bank grade encryption
                </div>
              </div>
              <div className=" h-52 md:h-[49.8%] w-full md:w-1/2 flex flex-col justify-between bg-white px-10 py-10 md:py-16 rounded-3xl">
                <div className=" text-xl md:text-3xl">
                  24/7 expert <br className="hidden md:block" /> support
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
