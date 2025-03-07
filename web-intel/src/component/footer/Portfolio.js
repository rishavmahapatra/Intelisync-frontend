"use client";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-black text-white text-center px-4">
      
      {/* Glowing Effect in the Top-Left Corner */}
      <div className="glow-effect1"></div>

      <h1 className="text-[14rem] font-bold uppercase tracking-wide text-transparent outline-text opacity-20 z-10">
        Portfolio
      </h1>

      {/* Centered Button and Text */}
      <div className="absolute top-1/4 transform -translate-y-1/2 flex flex-col items-center z-20">
        <button className="relative px-9 py-2 text-white font-medium rounded-full bg-gradient-to-r from-[#00B6F3] to-[#00EDDF] shadow-[0px_0px_20px_#00EDDF] hover:scale-105 transition-all opacity-80">
          Our Portfolio
        </button>
        <p className="mt-2 max-w-3xl text-sm text-gray-400">
          Empowering your business with innovative Blockchain,
        </p>
        <p className="mt-1 max-w-3xl text-sm text-gray-400">
          Web3, and AI solutions for a digital future.
        </p>
      </div>

      {/* Main Portfolio Image */}
      <div className="relative w-full max-w-3xl mt-10 z-10">
        <Image
          src="/Portfolio.png"
          alt="Portfolio Image"
          width={928}
          height={499}
          className="rounded-lg shadow-lg"
          priority
        />
      </div>

      
    </div>
  );
}
