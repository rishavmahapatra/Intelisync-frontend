"use client";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-[#000B18] text-white text-center px-4">

      <div className="absolute w-[200px] h-[500px] blur-[100px] top-[-50px] right-0 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
      </div>

      {/* Centered Button and Text */}
      <div className="relative px-5 py-6 text-white font-medium text-center">

        {/* Gradient Text */}
        <h2 className="text-[30px] leading-[26px] tracking-tightest font-medium font-[Poppins] 
        bg-gradient-to-r from-[#07CDFF] to-[#06FFF0] bg-clip-text text-transparent">
         Portfolio
        </h2>

        {/* Underline (centered & dynamic width) */}
        <div className="mt-3 mx-auto h-0.5 bg-[#06FFF0] w-[calc(100%-2rem)] max-w-[10rem]"></div>
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
