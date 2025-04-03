'use client';

import Link from "next/link";

export default function Dubaibanner() {
    return (
        <div className="relative flex items-center justify-center md:justify-start w-full min-h-screen text-white bg-[#000B18] z-10">

            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
                style={{ backgroundImage: "url('/Riyadhimage.svg')" }}>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00121A] via-[#002442c2] to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] mx-auto text-left">

                <h1 className="font-Poppins font-semibold text-[28px] sm:text-[36px] md:text-[48px] leading-[34px] sm:leading-[42px] md:leading-[56px]">
                    Advancing AI, Gaming, and Blockchain{'\u00A0'} 
                    <br className="hidden md:block" /> in the Heart of the Middle East
                </h1>

                <p className="font-Poppins font-medium mt-4 text-gray-300 text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[28px]">
                    Riyadh is emerging as a global hub for Web3, AI-driven gaming, and{'\u00A0'} 
                    blockchain innovation, fueled by Saudi Arabia&apos;s Vision 2030. Intelisync is at the{'\u00A0'}
                    forefront, empowering businesses with transformative digital solutions that{'\u00A0'}
                    drive growth and innovation.
                </p>

                {/* Button */}
                <div className="mt-6 sm:mt-8 flex justify-center text-center md:justify-start">
                    <Link href="/contact">
                        <button className="w-[200px] sm:w-[250px] h-[45px] sm:h-[50px]  
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
