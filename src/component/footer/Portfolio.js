"use client";
import { useState } from "react";
import Image from "next/image";

export default function Portfolio() {
  const images = [
    {id: 1, src: "/portfolio.png", name: "IDEEZA" },
    {id: 2, src: "/portfolio1.png", name: "Angelverse" },
    {id: 3, src: "/portfolio2.png", name: "laxce" },
    {id: 4, src: "/portfolio4.png", name: "Laughter economy" },
    {id: 5, src: "/portfolio5.png", name: "SImpredicts" },
    {id: 6, src: "/portfolio6.png", name: "joystix" },
    {id: 7, src: "/portfolio7.png", name: "TechZino" },
    {id: 8, src: "/portfolio8.png", name: "Super" },
    {id: 9, src: "/portfolio9.png", name: "Clementine" },

  ];

  // ✅ Define state for selected image
  const [selectedImage, setSelectedImage] = useState(images[0]); // Default to first image

  return (
    <div className="relative flex flex-col justify-center items-center  bg-[#000B18] text-white text-center px-4">
      {/* Gradient Effect */}
      <div
        className="absolute w-[200px] h-[500px] blur-[100px] top-[-50px] right-0 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]"
      ></div>
      <div className="text-center relative mt-10">
                <h1 className="absolute top-15 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem]
                font-bold uppercase tracking-wide text-transparent outline-text opacity-20 z-0">
                    PORTFOLIO
                </h1>
            </div>

      {/* Section Header */}
      <div className="relative px-5 py-6 text-white font-medium text-center">
        <h2 className="text-[30px] leading-[26px] tracking-tightest font-medium font-[Poppins] 
        bg-gradient-to-r from-[#07CDFF] to-[#06FFF0] bg-clip-text text-transparent">
          Portfolio
        </h2>
        <div className="mt-3 mx-auto h-0.5 bg-[#06FFF0] w-[calc(100%-2rem)] max-w-[10rem]"></div>
        <p className="mt-2 max-w-3xl text-sm text-gray-400">
          Empowering your business with innovative Blockchain,
        </p>
        <p className="mt-1 max-w-3xl text-sm text-gray-400">
          Web3, and AI solutions for a digital future.
        </p>
      </div>

      {/* Portfolio Content */}
      <div className="relative flex justify-between items-center  bg-[#000B18] text-white text-center px-2 ">
        <div>
          
        </div>
       

        
       
      </div>
    </div>
  );
}
