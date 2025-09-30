import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className=" mb-40 flex flex-col items-center text-white">
            <div className="bg-linear-to-tr from-[#121939]/10 tto-[#DF6501] to-[#092570] bg-clip-text text-center text-[3.7rem] md:text-[16vw] md:leading-[20vw] font-bold text-transparent" >
                Contrails AI
            </div>

            <div className=" relative text-white border border-white flex gap-10 md:gap-0 flex-col md:flex-row md:items-center justify-between px-10 py-10 md:py-0 rounded-3xl md:rounded-full h-full md:h-20 w-[97vw] mb-20 ">
                <span>
                    <Image src={"./logo.svg"} width={31} height={31} alt="logo" />
                </span>

                <div className="flex flex-col md:flex-row gap-4 md:gap-8">

                    <Link className=" cursor-pointer hover:text-gray-100 " href={"/use-cases"}>Use cases</Link>
                    <Link className=" cursor-pointer hover:text-gray-100 " href={"/blog"}>Blog</Link>
                    <Link className=" cursor-pointer hover:text-gray-100 " href={"/about"}>About</Link>
                    <Link className=" cursor-pointer hover:text-gray-100 " href={"/contact"}>Contact</Link>
                    
                    <Link className=" cursor-pointer hover:text-gray-100 " href={"/privacy-policy"}>Privacy Policy</Link>
                    <Link className=" cursor-pointer hover:text-gray-100 " href={"/terms-n-conditions"}>Terms & conditions</Link>
                </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row w-full px-5 gap-3 md:gap-0 justify-between">
                <span className="text-base md:text-sm">© {new Date().getFullYear()} Contrails AI. All rights reserved.</span>
                <div className="flex items-center gap-5">
                    {/* Twitter */}
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_237_933)">
                            <path d="M14.1596 0.839844H16.9196L10.8596 8.05387L17.9396 17.8398H12.3836L8.03359 11.893L3.05359 17.8398H0.293594L6.71359 10.124L-0.0664062 0.839844H5.62759L9.55759 6.27232L14.1596 0.839844ZM13.1936 16.1461H14.7236L4.82359 2.47084H3.17959L13.1936 16.1461Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_237_933">
                                <rect width="18" height="17" fill="white" transform="translate(0 0.839844)" />
                            </clipPath>
                        </defs>
                    </svg>

                    {/* LINKEDIN */}
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M21 21.3398H17.3016V15.0406C17.3016 13.3135 16.6453 12.3483 15.2783 12.3483C13.7912 12.3483 13.0143 13.3527 13.0143 15.0406V21.3398H9.45V9.33984H13.0143V10.9562C13.0143 10.9562 14.0859 8.97323 16.6324 8.97323C19.1777 8.97323 21 10.5275 21 13.7422V21.3398ZM5.19785 7.76854C3.98379 7.76854 3 6.77703 3 5.55419C3 4.33135 3.98379 3.33984 5.19785 3.33984C6.41191 3.33984 7.39512 4.33135 7.39512 5.55419C7.39512 6.77703 6.41191 7.76854 5.19785 7.76854ZM3.35742 21.3398H7.07402V9.33984H3.35742V21.3398Z" fill="white" />
                    </svg>

                </div>
            </div>

        </div>
    )
}

export default Footer;