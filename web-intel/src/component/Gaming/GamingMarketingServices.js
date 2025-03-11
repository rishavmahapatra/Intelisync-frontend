"use client";

import { GamingServices } from "@/utils/Cards_Data";

export default function GamingMarketingServices() {

  return (
    <section className="py-16 bg-gradient-to-bl from-[#020d19] to-[#081b32] text-white">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto px-4">
        <h2 className="font-semibold text-[24px] md:text-[25px] leading-[35px]">
          Intelisync’s Gaming Marketing Services
        </h2>
        <p className="text-gray-400 mt-3 text-[14px] leading-[24px]">
          We specialize in crafting marketing strategies that resonate with gamers and elevate your
          game’s presence. Explore the solutions we offer to take your game to the next level.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {GamingServices.map((service, index) => (
          <div key={index} className="bg-[#0F172A] p-6 rounded-lg border border-[#1E293B]">
            <h3 className="text-[18px] font-semibold text-right">{service.title}</h3>
            <p className="text-gray-300 mt-2 text-[14px]">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
