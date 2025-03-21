"use client";

import { GamingServices } from "@/utils/Cards_Data";

export default function GamingMarketingServices() {
  return (
    <section className="py-16 bg-[#000B18] text-white relative px-4 sm:px-6 lg:px-12">
      {/* Background Blur Effect */}
      <div className="absolute w-[250px] h-[200px] blur-[100px] top-[50%] left-0 -translate-y-1/2 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
      </div>

      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="font-semibold text-[24px] sm:text-[25px] leading-[32px] sm:leading-[40px]">
          Intelisync’s Gaming Marketing Services
        </h2>
        <p className="text-gray-400 mt-3 text-[14px] sm:text-[15px] leading-[24px] max-w-lg mx-auto">
          We specialize in crafting marketing strategies that resonate with gamers and elevate your
          game’s presence. Explore the solutions we offer to take your game to the next level.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {GamingServices.map((service, index) => (
          <div key={index} className="bg-gradient-to-b from-[#000B18] to-[rgba(0,11,24,0.3)] border border-cyan-400 p-6 sm:p-8 rounded-lg">
            <h3 className="text-[16px] sm:text-[18px] font-semibold">{service.title}</h3>
            <p className="text-gray-300 mt-2 text-[14px] leading-[20px]">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
