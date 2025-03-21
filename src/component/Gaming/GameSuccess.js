"use client";

import Image from "next/image";

export default function GameSuccess() {
  return (
    <section className="py-16 bg-[#000B18] text-white relative px-6">
      <div className="absolute w-[200px] h-[300px] blur-[100px] top-0 left-[85%] rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
      </div>

      {/* Heading */}
      <h2 className="text-center font-semibold text-[24px] sm:text-[28px] md:text-[30px] leading-[34px] sm:leading-[38px] md:leading-[40px]">
        Fuel Your Game’s Success with Our <br />
        <span>Experts To&nbsp;:</span>
      </h2>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        {/* Left Side */}
        <div className="space-y-6">
          {[
            { img: "/Gaming_Assets/traffic.webp", text: "Drive traffic and increase player conversion." },
            { img: "/Gaming_Assets/community.webp", text: "Build a loyal player base and grow your community." },
            { img: "/Gaming_Assets/revenue.webp", text: "Boost revenue and improve in-game purchases." }
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <Image src={item.img} alt="Feature Icon" width={28} height={28} className="min-w-[28px]" />
              <p className="text-gray-300 text-[16px] leading-[24px]">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          {[
            "Strengthen your brand’s online presence and foster engagement.",
            "Implement strategies that scale growth and maximize profitability."
          ].map((text, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-[28px] h-[28px] min-w-[28px]"></div>  
              <p className="text-gray-300 text-[16px] leading-[24px]">{text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
