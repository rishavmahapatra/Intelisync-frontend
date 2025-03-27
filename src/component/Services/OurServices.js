"use client";

import { services } from "@/utils/Cards_Data";
import { ChevronRight } from "lucide-react";
import { useRef } from "react";
import Link from 'next/link'

export default function OurServices() {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="bg-[#000B18] relative text-white py-16 px-6 md:px-20 lg:px-32 text-center">
        <div className="absolute w-[200px] h-[500px] blur-[100px] top-[-50px] left-0 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
        </div>
        <h2 className="inline-block text-[25px] md:text-[30px] font-semibold bg-gradient-to-r from-[#07CDFF] to-[#06FFF0] bg-clip-text text-transparent leading-[26px] tracking-[-0.01em] border-b border-white pb-2">
          Our Services
        </h2>
        <p className="text-gray-300 mt-4 max-w-3xl mx-auto text-[17px] leading-[25px] tracking-[ -0.01em] pb-3">
          From multi-chain interoperability to tokenization, our solutions are built to scale and
          transform businesses. Discover how Intelsync can take your vision to the next level.
        </p>
        <div className="relative">
          {/* Card Container with responsive design */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto lg:grid-cols-3 scrollbar-hide snap-x snap-mandatory md:grid md:grid-cols-3 gap-8 gap-y-15 mt-10 p-3"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#001e2a] border-b border-cyan-400 rounded-2xl p-6 text-left transition-all duration-500 hover:shadow-[0px_0_15px_0px] hover:bg-gradient-to-b from-[#000B18] to-[rgba(0,11,24,0.3)] hover:shadow-cyan-400 min-w-[280px] sm:min-w-[300px] md:min-w-0"
              >
                <Link href={service.link} className="text-[19px] font-semibold leading-[30px] tracking-[-0.01em]">
                  {service.title}
                </Link>
                <p className="mt-2 text-[13px] leading-[20px] text-gray-300 tracking-[-0.01em]">
                  {service.description}
                </p>
                
              </div>
            ))}
            <button
          onClick={scrollRight}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 md:hidden 
                                   w-10 h-10 flex items-center justify-center bg-transparent backdrop-blur-md"
        >
          <ChevronRight className="text-white opacity-60" size={24} />
        </button>
          </div>
        </div>

        {/* Scroll Button for Mobile View */}
        
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
