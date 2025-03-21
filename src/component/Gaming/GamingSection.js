'use client';

import Link from "next/link";

export default function GamingSection() {
  return (
    <div className="relative flex items-center justify-center md:justify-start w-full min-h-screen text-white bg-[#000B18] z-10 px-6 md:px-16 lg:px-24">
      {/* Background Image */}
      <div className="absolute -top-40 inset-0 bg-[url('/banner.webp')] bg-cover bg-center bg-no-repeat -z-10"></div>

      {/* Content Container */}
      <div className="w-full max-w-3xl md:max-w-4xl text-center md:text-left">
        <h1 className="font-poppins font-medium text-[28px] sm:text-[35px] leading-[36px] sm:leading-[42px] text-white">
          Gaming Marketing Solutions Fuel Your <br className="hidden md:block"/> Game’s Growth and Impact
        </h1>
        <p className="font-poppins font-normal mt-4 text-gray-200 text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px]">
          Unlock the full potential of your gaming business with our expert marketing <br className="hidden md:block"/> strategies tailored to the gaming industry.
        </p>
        
        {/* CTA Button */}
        <button className="mt-6 sm:mt-8 px-6 py-3 sm:w-[200px] sm:h-[50px] bg-gradient-to-r from-[#00CBE2] via-[#148FBC] to-[#006AFF] text-white rounded-full font-semibold shadow-md transition-all hover:bg-transparent hover:border-2 hover:border-white">
        <Link href="/contact">Book a demo</Link>
        </button>
      </div>
    </div>
  );
}
