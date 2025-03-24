"use client";  // ✅ Add this at the top

import { useRef } from "react";
import { FintechData } from "@/utils/Cards_Data";
import { ChevronRight } from "lucide-react"; // Icon for arrow

export default function Fintechcards() {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" }); // Scroll right by 300px
    }
  };

  return (
    <div className="relative bg-[#000B18] min-h-screen text-white py-16 px-6 sm:px-12 md:px-20 lg:px-32">
      
      {/* Background Gradient Effect */}
      <div className="absolute w-[200px] h-[500px] blur-[100px] top-[-50px] left-0 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
      </div>

      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="font-poppins font-semibold text-[22px] sm:text-[24px] md:text-[25px] leading-[28px] sm:leading-[32px] tracking-[-0.01%] text-gray-200 mt-4 max-w-3xl mx-auto">
          Intelisync offers a range of growth-driven <br className="hidden md:block"/> solutions, including:
        </h2>
      </div>

      {/* Responsive Cards Container */}
      <div className="relative">
        <div 
          ref={scrollRef} 
          className="flex space-x-6 overflow-x-auto sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 
                     scrollbar-hide snap-x snap-mandatory"
        >
          {FintechData.map((solution, index) => (
            <div key={index} className="p-6 border border-cyan-400 rounded-lg bg-[#081828] shadow-lg min-w-[80%] sm:min-w-0 snap-start">
              <h2 className="font-poppins font-semibold text-[18px] sm:text-[19px] leading-[25px] tracking-[-0.01%] mt-2 mb-4">
                {solution.title}
              </h2>
              <ul className="text-gray-300 text-[14px] leading-[22px] space-y-2">
                {solution.items.map((item, idx) => (
                  <li key={idx} className="list-disc ml-5">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right Arrow Button (Only on Mobile) */}
        <button 
          onClick={scrollRight} 
          className="absolute top-1/2 right-0 transform -translate-y-1/2 sm:hidden 
                     w-10 h-10 flex items-center justify-center border-opacity-40 
                     rounded-full bg-transparent backdrop-blur-md"
        >
          <ChevronRight className="text-white opacity-60" size={24} />
        </button>
      </div>

    </div>
  );
}
