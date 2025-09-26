import { ChevronRight} from "lucide-react"
import Link from "next/link";

const CTA = () => {
    const dotSpacing = 30; // Reduced spacing between dots
    const dotsPerRow = 70; // More dots to fill the screen
    const dotsPerCol = 70; // More dots vertically

    return (
        <div className="relative md:h-screen py-10 md:py-32 px-5">
            {/* SURROUNDINGS  */}
            <div className=" absolute h-[70vh] md:h-screen w-screen top-0 left-0 md:-left-15 -z-10 overflow-hidden">
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
                                fill="rgba(255, 255, 255, 0.2)"
                                stroke="rgba(255, 255, 255, 0.2)"
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

            <div className=" relative z-10 text-white bg-black h-full px-10 md:px-15 py-5 md:py-15 flex flex-col items-start justify-center ">

                <div className=" text-4xl md:text-[68px] md:leading-19 text-pretty">
                    Talk to us and discover the fastest <br className="hidden md:block" /> path to trusted content moderation.
                </div>

                <Link href={"https://cal.com/ami-contrails/30min"} target="_blank" className="text-white bg-orange-400 min-w-56 w-fit py-2 px-6 flex items-center justify-between gap-4 rounded-lg mt-16">
                    <span className="text-xl">
                        Book a Demo
                    </span>
                    <ChevronRight />
                </Link>
            </div>
        </div>
    )
}

export default CTA;