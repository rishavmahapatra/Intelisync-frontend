"use client";

import { GamingServices } from "@/utils/Cards_Data";

export default function GamingMarketingServices() {

  return (
    <section className="py-16 bg-[#000B18] text-white relative">
      <div className="absolute w-[300px] h-[200px] blur-[100px] top-[50%] bottom-[50%] left-0 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
      </div>
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto px-4">
        <h2 className="font-semibold text-[25px] md:text-[25px] leading-[40px]">
          Intelisync’s Gaming Marketing Services
        </h2>
        <p className="text-gray-400 mt-3 text-[14px] leading-[24px] w-[80%] mx-auto">
          We specialize in crafting marketing strategies that resonate with gamers and elevate your
          game’s presence. Explore the solutions we offer to take your game to the next level.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 px-6">
        {GamingServices.map((service, index) => (
          <div key={index} className="bg-gradient-to-b from-[#000B18] to-[rgba(0,11,24,0.3)] border border-cyan-400 p-8 rounded-lg">
            <h3 className="text-[18px] font-semibold text-left">{service.title}</h3>
            <p className="text-gray-300 mt-2 text-[14px] leading-[20px]">{service.description}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
