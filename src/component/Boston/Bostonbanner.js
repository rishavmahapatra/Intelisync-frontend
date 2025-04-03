'use client';

import Link from "next/link";

export default function Bostonbanner() {
    return (
        <div className="relative flex items-center justify-center md:justify-start w-full min-h-screen text-white bg-[#000B18] z-10">
 
            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
                style={{ backgroundImage: "url('/Bostan.webp')" }}>
                
                {/* Right Side Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00121A] via-[#002442bb] to-transparent"></div>
            </div>
 
            {/* Content Container */}
            <div className="w-[90%] sm:w-[82%] mx-auto text-center md:text-left px-4 md:px-0">
 
                <h1 className="font-Poppins font-semibold text-2xl sm:text-3xl md:text-5xl leading-tight text-white">
                    Unleashing Blockchain & AI Potential <br className="hidden md:block"/>in America&apos;s Innovation Core
                </h1>
 
                <p className="font-Poppins font-medium mt-4 text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed">
                    Boston, a cradle of intellectual and technological progress, is Intelisync&apos;s base
                    for delivering blockchain, Web3, and AI solutions across the U.S. In a city where
                    academia meets cutting-edge startups, we&apos;re driving digital transformation for
                    2025&apos;s most pressing challenges, from healthcare to fintech.
                </p>
 
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