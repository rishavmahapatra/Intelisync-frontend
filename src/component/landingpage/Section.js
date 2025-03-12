"use client";
import React from "react";


const Section = () => {
  return (
    <section
      className="relative bg-black text-white min-h-screen flex flex-col justify-start items-center text-center px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden pt-2 bg-cover bg-center"
      style={{
        backgroundImage: "url('/Mentahan1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundColor: "#020817",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Header Content */}
      <header className="relative z-10 max-w-screen-xl">
        <div className="flex justify-center items-center w-full max-w-[836px] h-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[66px] leading-none font-bold text-white text-center mt-15">
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

      {/* Subheading */}
      <div className="flex justify-center items-center w-full max-w-[483px] h-auto mt-3 relative z-10 py-2">
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-medium text-white text-center drop-shadow-lg">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-[#06FFF0] to-[#0192BA] bg-clip-text text-transparent">
            Intelisync
          </span>
        </h2>
      </div>

      {/* Short Description */}
      <p className="mt-1 text-gray-100 text-lg sm:text-xl md:text-3xl font-medium relative z-10 text-center max-w-screen-lg px-4">
        Your Global Trusted Partner in WEB 3 Innovation
      </p> 

      {/* Paragraph Content */}
      <p className="mt-6 text-sm sm:text-base md:text-lg relative z-10 text-center max-w-2xl leading-relaxed">
        Intelisync leads in Web3, blockchain, and GenAI, providing enterprise-grade solutions. We help businesses
        innovate, scale, and succeed in the evolving blockchain landscape. Partner with us to enhance security and
        unlock new decentralized opportunities.
      </p>

      {/* Get Started Button */}
      <div className="relative flex flex-col items-center w-full z-20 mt-6">
        <div className="relative rounded-full transition duration-100 ease-in-out hover:bg-gray-100 hover:shadow-lg p-0.5">
          <button className="px-6 sm:px-6 py-3 sm:py-2 bg-white text-black text-normal sm:text-xl md:text-xl font-bold rounded-full shadow-xl w-auto">
            Get started
          </button>
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
       
     

          {/* Trusted Section - Placed Over the Glow with High z-index */}
          
          
        </div>
      </div>
    </section>
  );
};

export default Section;







