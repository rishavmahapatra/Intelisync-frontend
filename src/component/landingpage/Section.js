"use client";
import { Link } from "lucide-react";
import React from "react";
import Link from "next/link";

const Section = () => {
  return (
    <section className="relative bg-[#000B18] text-white  flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden pt-16  ">
      {/* Header Content */}
      <header className="relative z-10 max-w-screen-xl mx-auto  mt-3">
        <div className="flex justify-center items-center w-full h-auto mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[66px] leading-tight font-bold text-white text-center mt-15">
            SPECIALISING IN <br />
            <span className="bg-gradient-to-r from-[#06FFF0] to-[#0192BA] bg-clip-text text-transparent ">
              WEB3
            </span>{" "}
            &{" "}
            <span className="bg-gradient-to-r from-[#06FFF0] to-[#0192BA] bg-clip-text text-transparent">
              EMERGING TECH
            </span>
          </h1>
        </div>
      </header>
      {/* Paragraph Content */}
      <p className="mt-4 text-sm sm:text-base md:text-lg relative z-10 text-center max-w-4xl leading-relaxed font-normal text-white">
        <span className="bg-gradient-to-r from-[#06FFF0] to-[#0192BA] bg-clip-text text-transparent font-bold">
          Intelisync
        </span>
        , a Dubai UAE-based leader in Web3, blockchain, and GenAI, enables
        brands to scale, secure, and decentralize opportunities by unlocking
        innovative blockchain marketing and development opportunities. We are
        one of the leading Web3 marketing agencies.
      </p>

      {/* Get Started Button */}

      <div className="relative flex flex-col items-center w-full z-20 mt-6">
        <div className="relative rounded-full transition duration-100 ease-in-out hover:bg-gray-100 hover:shadow-lg p-0.5">
         <Link href="/contact">
          <button className="w-[164px] h-[54px] bg-white text-black text-[18px] font-semibold rounded-full shadow-xl flex items-center justify-center cursor-pointer">
            Get Started
          </button>
         </Link>

        </div>
      </div>

      {/* Glowing Line Section */}
      <div className="relative flex items-center justify-center w-full mt-16">
        <div className="relative w-[100%] h-[20px]">
          {/* Core Bright Line */}
          <div className="absolute inset-0 h-[4px] bg-gradient-to-r from-transparent via-[#06FFF0] to-transparent opacity-100"></div>

          {/* Strong Inner Glow (Fades Outward from Center) */}
          <div className="absolute inset-0 h-[12px] bg-gradient-to-r from-transparent via-[#06FFF0] to-transparent opacity-100 blur-sm"></div>

          {/* Centralized Glow Burst */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[50%] h-[20px] bg-gradient-to-r from-transparent via-[#0192BA] to-transparent opacity-100 blur-lg"></div>
          </div>

          {/* Outer Glow (Expands More Widely from Center) */}
          <div className="absolute inset-0 h-[40px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-90 blur-[40px]"></div>

          {/* Extended Bottom Reflection (Enhanced Center Light) */}
          <div className="absolute bottom-[-8px] w-full h-[35px] bg-gradient-to-r from-transparent via-indigo-600 to-transparent opacity-70 blur-xl"></div>

          {/* Subtle Radial Glow to Reinforce Center Light */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[30%] h-[30px] bg-[#06FFF0] opacity-90 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="text-center my-4  pt-16 pb-0">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white relative inline-block mb-6 pb-2">
          Trusted by Top Innovators
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-[#06FFF0] via-[#00aaff] to-[#0192BA]"></span>
        </h2>
      </div>
    </section>
  );
};

export default Section;
