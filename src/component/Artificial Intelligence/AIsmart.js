"use client";

import { Artificial } from "@/utils/Cards_Data";
import { useRef } from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";

export default function Artificialservice() {
    const scrollRef = useRef(null);

    const handleScroll = () => {
        scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    };

    return (
        <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32 relative">
            <div className="text-left mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-[500px] leading-tight text-[#06FFFB]">
                    Artificial Intelligence Development Services for Smarter Business Growth
                </h2>

                <p className="text-[14px] sm:text-[16px] leading-[22px] tracking-tight text-gray-300 mt-2 max-w-3xl">
                    Boost efficiency and innovation with expert AI development services. Whether you are exploring artificial intelligence for beginners or seeking advanced solutions, our AI services company provides the right expertise.
                </p>

                <p className="text-[17px] sm:text-[16px] leading-[22px] tracking-tight text-gray-300 mt-2 max-w-3xl">
                    As a leading AI development company, we help businesses automate processes, enhance decision-making, and leverage data-driven insights. Partner with a trusted AI development agency to bring powerful artificial intelligence development services to your business.
                </p>
            </div>

            {/* Card Container - Horizontal Scroll */}
            <div className="relative">
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6"
                >
                    {Artificial.map((solution, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-72 sm:w-auto relative p-px rounded-2xl shadow-lg bg-[#081828] min-h-[250px]"
                        >
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00EEDF] via-[#7F7F7F] to-[#00A9CA]"></div>

                            {/* Card Content */}
                            <div className="p-4 bg-[#0B1522] rounded-2xl relative h-full py-6 sm:py-8 px-6 sm:px-10">
                                <h2 className="font-poppins font-[700px] text-[19px] sm:text-[20px] leading-[25px] tracking-tight">
                                    {solution.title}
                                </h2>

                                <p className="font-poppins font-[400px] text-[13px] sm:text-[15px] leading-[22px] tracking-tight text-gray-300 mt-4 break-words">
                                    {solution.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Arrow Button - Transparent with Border */}
                <button
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent border border-gray-300 rounded-full p-2 focus:outline-none opacity-50 hover:opacity-80 hover:border-[#06FFFB] transition block md:hidden"
                    onClick={handleScroll}
                >
                    <ChevronRightIcon className="w-8 h-8 text-gray-300" />
                </button>
            </div>
        </div>
    );
}

