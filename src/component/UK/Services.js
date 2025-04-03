"use client";

import { London_services } from "@/utils/Cards_Data";
import { ChevronRight } from "lucide-react";
import { useRef } from "react";
import Link from 'next/link';

export default function Services() {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#020B17] text-white py-10 px-6 sm:px-12 md:px-20 lg:px-32">
      <div className="text-left mb-10">
        <h2 className="font-poppins font-semibold text-[30px] sm:text-[36px] md:text-[40px] leading-[38px] sm:leading-[44px] md:leading-[50px] tracking-tight">
          Our Services in London
        </h2>
      </div>

      <div className="relative">
        {/* Card Container with Responsive Design */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 scrollbar-hide snap-x snap-mandatory"
        >
          {London_services.map((solution, index) => (
            <div
              key={index}
              className="relative min-w-[250px] sm:min-w-[300px] md:min-w-0 p-px rounded-2xl shadow-lg bg-[#081828] snap-start"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00EEDF] via-[#7F7F7F] to-[#00A9CA]"></div>

              {/* Card Content */}
              <div className="p-4 bg-[#07121E] rounded-2xl relative h-full py-6 sm:py-8 px-6 sm:px-10">
                <h2 className="font-poppins font-semibold text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] tracking-tight">
                  {solution.title}
                </h2>
                <p className="font-poppins font-normal text-[13px] sm:text-[15px] leading-[22px] tracking-tight text-gray-300 mt-3">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Button for Mobile View */}
        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 sm:hidden w-10 h-10 flex items-center justify-center bg-black/30 backdrop-blur-md rounded-full"
        >
          <ChevronRight className="text-white opacity-70" size={24} />
        </button>
      </div>
    </div>
  );
}
