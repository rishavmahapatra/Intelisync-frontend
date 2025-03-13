"use client";

import Image from "next/image";

export default function GameSuccess() {
  return (
    <section className="py-16 bg-[#000B18] text-white relative">
      <div className="absolute w-[200px] h-[300px] blur-[100px] top-0 left-[90%] right-0 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
      </div>
      {/* Heading */}
      <h2 className="text-center font-semibold text-[30px] md:text-[30px] leading-[40px]">
        Fuel Your Game’s Success with Our <br />
        <span>Experts To&nbsp;:</span>
      </h2>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 justify-center gap-6 px-6">
        {/* Left Side */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Image src="/Gaming_Assets/traffic.png" alt="Traffic Icon" width={24} height={24} />
            <p className="text-gray-300 text-[16px] leading-[14px]">
              Drive traffic and increase player conversion.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Image src="/Gaming_Assets/community.png" alt="Community Icon" width={24} height={24} />
            <p className="text-gray-300 text-[16px] leading-[14px]">
              Build a loyal player base and grow your community.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Image src="/Gaming_Assets/revenue.png" alt="Revenue Icon" width={24} height={24} />
            <p className="text-gray-300 text-[16px] leading-[14px]">
              Boost revenue and improve in-game purchases.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            {/* <Image src="/icons/engagement.svg" alt="Engagement Icon" width={24} height={24} /> */}
            <p className="text-gray-300 w-4xl text-[16px] leading-[30px]">
              Strengthen your brand’s online presence and foster engagement.
            </p>
          </div>
          <div className="flex items-center gap-4">
            {/* <Image src="/icons/growth.svg" alt="Growth Icon" width={24} height={24} /> */}
            <p className="text-gray-300 text-[16px] leading-[30px]">
              Implement strategies that scale growth and maximize profitability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
