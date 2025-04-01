"use client";

import React, { useRef } from "react";
import { IndustryOurservices } from "@/utils/Cards_Data";
import { ChevronRight } from "lucide-react"; // Import right arrow icon
import Link from 'next/link'

export default function OurServices() {
    const scrollRef = useRef(null);

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" }); // Scroll right by 300px
        }
    };

    return (
        <section className="py-16 bg-[#000B18] text-white relative">
            {/* Gradient Background Effect */}
            <div className="absolute w-[200px] h-[500px] blur-[100px] top-[18%] left-0 bottom-[50%] rotate-[148.52deg] 
                bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
            </div>

            {/* Heading Section */}
            <div className="max-w-5xl mx-auto text-center">
                <div className="inline-block bg-gradient-to-r from-[#07CDFF] to-[#06FFF0] opacity-100 bg-clip-text text-transparent">
                    <Link href='/services/' className="text-lg sm:text-xl md:text-2xl leading-[26px] tracking-tight font-semibold font-[Poppins] border-b border-white pb-2">
                        Our Services
                    </Link>
                </div>
                <p className="mt-4 w-[70%] mx-auto text-gray-300 text-[17px] leading-[25px] text-center">
                    From automation to decentralization, our solutions redefine industry standards.
                    Discover how Intelisync empowers businesses across industries with scalable,
                    future-proof technology, driving efficiency, security, and growth.
                </p>
            </div>

            {/* Cards Section */}
            <div className="relative mt-10">
                <div
                    ref={scrollRef}
                    className="flex space-x-6 overflow-x-auto sm:grid sm:grid-cols-2 md:grid-cols-3 gap-6 
                               scrollbar-hide snap-x snap-mandatory w-11/12 max-w-6xl mx-auto"
                >
                    {IndustryOurservices.map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#001e2a] border-b border-cyan-400 rounded-2xl p-6 text-left 
                                       transition-all duration-500 hover:shadow-[0px_0_15px_0px] 
                                       hover:bg-gradient-to-b from-[#000B18] to-[rgba(0,11,24,0.3)] 
                                       hover:shadow-cyan-400 min-w-[80%] sm:min-w-0 snap-start"
                        >
                            <Link href={service.link} className="text-[19px] underline leading-[30px] font-semibold text-center">
                                {service.title}
                            </Link>
                            <p className="mt-2 text-gray-300 text-[13px] leading-[20px]">{service.description}</p>
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
        </section>
    );
}
