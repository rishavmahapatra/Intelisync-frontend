"use client";

import React, { useRef } from "react";
import { StartupData } from "@/utils/Cards_Data";
import { ChevronRight } from "lucide-react"; // Import right arrow icon
import Link from 'next/link'

export default function GrowthSolution() {
    const scrollRef = useRef(null);

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" }); // Scroll right by 300px
        }
    };

    return (
        <div className="bg-[#020B17] relative text-white py-16 px-6 sm:px-12 md:px-20 lg:px-32 h-auto">
            {/* Gradient Background Effect */}
            <div className="absolute w-[200px] h-[500px] blur-[100px] top-[-50px] left-0 rotate-[148.52deg] 
                bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
            </div>

            {/* Heading Section */}
            <div className="text-center mb-10">
                <h2 className="font-poppins font-[500] text-[25px] sm:text-[30px] sm:leading-[40px] tracking-[-0.01%] text-white mt-4 max-w-4xl mx-auto">
                    We offer a comprehensive suite of <Link href='/services/public-relation/' className='underline'>services</Link> designed to<br className="hidden sm:block"/> fuel growth and expand your digital footprint
                </h2>
            </div>

            {/* Cards Section */}
            <div className="relative mt-10">
                <div 
                    ref={scrollRef} 
                    className="flex space-x-6 overflow-x-auto sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 
                               scrollbar-hide snap-x snap-mandatory"
                >
                    {StartupData.map((solution, index) => (
                        <div 
                            key={index}
                            className="p-7 border border-cyan-400 rounded-lg bg-[#081828] shadow-lg h-auto 
                                       min-w-[80%] sm:min-w-0 snap-start"
                        >
                            <h2 className="font-poppins font-[600] text-[18px] text-white leading-[22px] tracking-[-0.01%] mb-3">
                                {solution.title}
                            </h2>
                            <p className="font-poppins font-[400] text-gray-300 text-[14px] leading-[20px] tracking-[-0.01%] mb-5">
                                {solution.description}
                            </p>    
                        </div>
                    ))}
                </div>

                {/* Right Arrow Button (Hidden on Large Screens) */}
                <button 
                    onClick={scrollRight} 
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 sm:hidden 
                               w-10 h-10 flex items-center justify-center rounded-full bg-transparent backdrop-blur-md"
                >
                    <ChevronRight className="text-white opacity-60" size={24} />
                </button>
            </div>
        </div>
    );
}
``
