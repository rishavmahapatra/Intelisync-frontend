"use client";

import { BlockchainSolution } from "@/utils/Cards_Data";
import { ChevronRight } from "lucide-react";
import { useRef } from "react";
import Link from 'next/link'

export default function BlockchainSolutions() {
    const scrollRef = useRef(null);

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <>
            <div className="bg-[#020B17] text-white py-8 px-6 md:px-20 lg:px-32">
                <div className="mb-10">
                    <h2 className="text-3xl md:text-5xl leading-[40px] md:leading-[25px] font-[500]" style={{ fontSize: "30px", color: "#06FFFB" }}>
                        Bringing Your Blockchain Ideas to Life
                    </h2>
                    <p className="font-poppins font-[400] text-[13px] leading-[20px] tracking-[-0.01%] text-gray-300 mt-4">
                        Blockchain is not merely a technology it&apos;s a game-changer. Whether you&apos;re creating<br /> something new or refining what you have, we secure your blockchain project, make<br /> it efficient, and future-proof it.
                    </p>
                </div>

                {/* Card Container with Scrolling for Mobile */}
                <div className="relative">
                    <div
                        ref={scrollRef}
                        className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide"
                        style={{ scrollSnapType: "x mandatory" }}  // Added inline styling for scroll snap type
                    >

                        {BlockchainSolution.map((solution, index) => (
                            <div
                                key={index}
                                className="p-6 border border-cyan-400 rounded-lg bg-[#D9D9D908] shadow-lg min-w-[280px] md:min-w-0 snap-start"
                            >
                                <Link  href={solution.link} className="font-[500] text-[17px] md:text-[19px] leading-[25px] tracking-[-0.01em] w-[80%]">
                                    {solution.title}
                                </Link>
                                <p className="font-poppins font-normal text-[13px] leading-[20px] tracking-[-0.01%] text-gray-300 mt-2">
                                    {solution.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Scroll Button for Mobile View */}
                    <button
                        onClick={scrollRight}
                        className="absolute bottom-[-20px] top-1/2 right-0 transform -translate-y-1/2 md:hidden 
                                   w-10 h-10 flex items-center justify-center bg-transparent backdrop-blur-md"
                    >
                        <ChevronRight className="text-white opacity-60" size={24} />
                    </button>
                </div>
            </div>

            <div className="text-center pt-16 md:hidden block">
                <h2 className="text-[20px] md:text-2xl font-[500] text-white relative inline-block mb-6 pb-2 tracking-[-0.01%]">
                    Trusted by Top Innovators
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-[#06FFF0] via-[#00aaff] to-[#0192BA]"></span>
                </h2>
            </div>
        </>
    );
}
