import Image from "next/image"
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="relative top-2.5 text-white flex items-center justify-between h-16 w-full ">

            <Link href={"/"} className="relative select-none">
                <Image src={"/logo_txt.svg"} width={188} height={100} alt="logo" />
            </Link>

            <div className="flex gap-10 text-sm z-20 relative">
                <Link className=" cursor-pointer hover:text-gray-100 " href={"/use-cases"}>Use cases</Link>
                <Link className=" cursor-pointer hover:text-gray-100 " href={"/blog"}>Blog</Link>
                <Link className=" cursor-pointer hover:text-gray-100 " href={"/about"}>About</Link>
                <Link className=" cursor-pointer hover:text-gray-100 " href={"/contact"}>Contact</Link>
            </div>

            <Link href={"https://cal.com/ami-contrails/30min"} target="_blank" className=" w-fit h-fit bg-white px-6 py-2 rounded-lg text-black text-sm font-semibold cursor-pointer">
                Book a Demo
            </Link>

        </div>
    )
}

export default Navbar;