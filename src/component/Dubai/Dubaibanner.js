'use client';

import Link from "next/link";

export default function Dubaibanner() {
    return (
        <div className="relative flex flex-col md:flex-row items-center justify-center md:justify-start w-full min-h-screen bg-[#000B18] text-white z-10">

            {/* Background Image */}
            <div className="absolute  inset-0 bg-cover bg-center bg-no-repeat -z-10"
                style={{ backgroundImage: "url('/Dubai.webp')", height: "90vh" }}>

                {/* Right Side Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00121A] via-[#002442bb] to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="w-[90%] sm:w-[82%] mx-auto text-center md:text-left px-4 md:px-0 flex flex-col items-center md:items-start">

                <h1 className="font-Poppins font-semibold text-[32px] sm:text-[36px] md:text-[50px] leading-[40px] sm:leading-[46px] md:leading-[58px] text-white">
                    Forging the Future of Blockchain <br />& AI in the Middle East
                </h1>

                <p className="font-Poppins font-medium mt-4 text-gray-200 text-[16px] sm:text-[18px] md:text-[18px] leading-[24px] sm:leading-[26px] md:leading-[28px]">
                    Dubai, a global icon of futuristic innovation, is Intelisync&apos;s strategic hub for <br />
                    delivering blockchain, Web3, and AI solutions. As the UAE&apos;s fintech revolution <br />
                    accelerates, our Dubai office is at the forefront, empowering businesses to <br />
                    thrive in a city that&apos;s setting the pace for the decentralized economy of 2025.<br />
                    With a skyline that mirrors its ambition, Dubai is where we turn visionary ideas <br />
                    into tangible success.
                </p>

                {/* Button */}
                <div className="mt-8 w-full sm:w-auto flex justify-center md:justify-start">
                    <button className="w-full sm:w-[250px] h-[45px] sm:h-[50px] 
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
