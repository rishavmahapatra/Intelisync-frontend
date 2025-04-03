'use client';

import Link from "next/link";

export default function Ukbanner() {
    return (
        <div className="relative flex items-center justify-center md:justify-start w-full min-h-screen text-white bg-[#000B18] z-10">
    
            {/* Background Image */}
            <div className="absolute  inset-0  bg-cover bg-center bg-no-repeat -z-10"
                style={{ backgroundImage: "url('/Ukimage.webp')", height: "90vh" }}>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00121A] via-[#002442bb] to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] mx-auto text-center sm:text-left">

                <h1 className="font-Poppins font-semibold text-[28px] sm:text-[34px] md:text-[48px] leading-[34px] sm:leading-[42px] md:leading-[56px]">
                    Revolutionizing Blockchain & AI{'\u00A0'} 
                    <br className="hidden md:block" /> Across Europe&apos;s Financial Epicenter
                </h1>

                <p className="font-Poppins font-medium mt-4 text-gray-300 text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[28px]">
                    London, a global titan in finance and tech, is Intelisync&apos;s launchpad for{'\u00A0'}
                    blockchain, Web3, and AI solutions across Europe. From Canary Wharf&apos;s trading{'\u00A0'}
                    floors to Shoreditch&apos;s creative hubs, we&apos;re empowering businesses to dominate{'\u00A0'}
                    the decentralized landscape of 2025.
                </p>

                {/* Button */}
                <div className="mt-6 sm:mt-8 flex justify-center md:justify-start">
                    <Link href="/contact">
                        <button className="w-[200px] sm:w-[250px]  h-[45px] sm:h-[50px]  
                            bg-gradient-to-r from-[#00CBE2] via-[#148FBC] to-[#006AFF] 
                            text-white rounded-full font-medium text-lg shadow-md 
                            transition-all duration-300 border-2 border-transparent
                            hover:bg-none hover:bg-transparent hover:border-white hover:text-white">
                            Schedule a Meeting
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}
