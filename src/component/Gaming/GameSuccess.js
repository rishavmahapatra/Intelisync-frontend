"use client";

import Image from "next/image";

export default function GameSuccess() {
  return (
    <section className="py-16 bg-gradient-to-bl from-[#020d19] to-[#081b32] text-white">
      {/* Heading */}
      <h2 className="text-center font-semibold text-[28px] md:text-[28px] leading-[36px]">
        Fuel Your Game’s Success with Our <br /> 
        <span>Experts To&nbsp;:</span>
      </h2>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 justify-center gap-6 px-6">
        {/* Left Side */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Image src="/Gaming_Assets/traffic.png" alt="Traffic Icon" width={24} height={24} />
            <p className="text-gray-300 text-[16px] leading-[25px]">
              Drive traffic and increase player conversion.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Image src="/Gaming_Assets/community.png" alt="Community Icon" width={24} height={24} />
            <p className="text-gray-300 text-[16px] leading-[25px]">
              Build a loyal player base and grow your community.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Image src="/Gaming_Assets/revenue.png" alt="Revenue Icon" width={24} height={24} />
            <p className="text-gray-300 text-[16px] leading-[25px]">
              Boost revenue and improve in-game purchases.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            {/* <Image src="/icons/engagement.svg" alt="Engagement Icon" width={24} height={24} /> */}
            <p className="text-gray-300 w-4xl text-[16px] leading-[25px]">
              Strengthen your brand’s online presence and foster engagement.
            </p>
          </div>
          <div className="flex items-center gap-4">
            {/* <Image src="/icons/growth.svg" alt="Growth Icon" width={24} height={24} /> */}
            <p className="text-gray-300 text-[16px] leading-[25px]">
              Implement strategies that scale growth and maximize profitability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
