'use client';

import Link from "next/link";

export default function Ukbanner() {
    return (
        <div className="relative flex items-center justify-center md:justify-start w-full h-screen text-white bg-[#000B18] z-10 ">

            {/* Background Image */}
            <div className="absolute  inset-0  bg-cover bg-center bg-no-repeat -z-10"
                style={{ backgroundImage: "url('/Ukimage.webp')", height: "90vh" }}>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00121A] via-[#002442bb] to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="w-[82%] mx-auto text-left ">

                <h1 className="font-Poppins font-[600] text-[32px] sm:text-[32px] md:text-[50px] leading-[36px] sm:leading-[40px] md:leading-[58px] text-white">
                    Revolutionizing Blockchain & AI <br /> Across Europe’s Financial Epicenter
                </h1>

                <p className="font-Poppins font-[500] mt-4 text-gray-200 text-[16px] sm:text-[18px] md:text-[18px] leading-[24px] sm:leading-[26px] md:leading-[28px]">
                    London, a global titan in finance and tech, is Intelisync&apos;s launchpad for <br />blockchain, Web3, and AI solutions across Europe. From Canary Wharf&apos;s trading <br /> floors to Shoreditch&apos;s creative hubs, we&apos;re empowering businesses to dominate<br />
                    the decentralized landscape of 2025. </p>

                {/* Button */}
                <div className="mt-8 flex justify-center md:justify-start">
                    <button className="w-[200px] sm:w-[250px] h-[45px] sm:h-[50px] 
        bg-gradient-to-r from-[#00CBE2] via-[#148FBC] to-[#006AFF] 
        text-white rounded-full font-medium text-lg shadow-md 
        transition-all duration-300 border-2 border-transparent
        hover:bg-none hover:bg-transparent hover:border-white hover:text-white">
                        <Link href="/contact" className="block w-full h-full flex items-center justify-center">
                            Schedule a meeting
                        </Link>
                    </button>
                </div>

            </div>
        </div>
    );
}





