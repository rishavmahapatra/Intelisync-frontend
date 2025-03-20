
"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  const images = [
    { id: 1, src: "/portfolio.png", name: "IDEEZA" },
    { id: 2, src: "/portfolio1.png", name: "Angelverse" },
    { id: 3, src: "/portfolio2.png", name: "Laxce" },
    { id: 4, src: "/portfolio4.png", name: "Laughter Economy" },
    { id: 5, src: "/portfolio5.png", name: "SImpredicts" },
    { id: 6, src: "/portfolio6.png", name: "Joystix" },
    { id: 7, src: "/portfolio7.png", name: "TechZino" },
    { id: 8, src: "/portfolio8.png", name: "Super" },
    { id: 9, src: "/portfolio9.png", name: "Clementine" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative flex flex-col justify-center items-center bg-[#000B18] text-white text-center px-4">
      {/* Gradient Effect */}
      <div
        className="absolute w-[150px] h-[500px] blur-[100px] top-[-20px] left-0 rotate-[148.52deg] 
                    bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]"
      ></div>

      <div className="relative text-white font-medium text-center w-[1423px] h-[281px] mx-auto">
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[14rem]
                font-bold uppercase tracking-wide text-transparent outline-text opacity-5 z-0">
          PORTFOLIO
        </h1>

        {/* Portfolio Heading */}
        <div className="relative text-white font-medium text-center mt-30">
          <h2 className="text-[35px] leading-[40px] tracking-tight font-semibold font-[Poppins] 
        bg-gradient-to-r from-[#07CDFF] to-[#06FFF0] bg-clip-text text-transparent">
            Our Portfolio
          </h2>

          <div className="mt-2 mx-auto h-[2px] bg-white w-[calc(100%-1rem)] max-w-[12rem]"></div>

          {/* Description */}
          <p className="mt-2 max-w-3xl mx-auto text-sm text-white">
            Empowering your business with innovative Blockchain,
          </p>
          <p className="mt-1 max-w-3xl mx-auto text-sm text-white">
            Web3, and AI solutions for a digital future.
          </p>
        </div>
      </div>


      {/* Portfolio Carousel */}
      <div className="relative  p-0 sm:p-5 md:p-5 rounded-lg w-full h-[400px] max-w-xl md:max-w-7xl shadow-lg border border-none  min-h-screen px-0">
        {/* Left Arrow */}
        <button
          onClick={prevImage}
          className="absolute left-2 sm:left-4 top-[35%] transform -translate-y-1/2 text-gray-400 hover:text-white"
        >
          <ChevronLeft size={36} />
        </button>

        {/* Image Display */}
        <div className="flex justify-center">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].name}
            width={928}
            height={499}
          />
        </div>



        {/* Right Arrow */}
        <button
          onClick={nextImage}
          className="absolute right-2 sm:right-4 top-[35%] transform -translate-y-1/2 text-gray-400 hover:text-white"
        >
          <ChevronRight size={36} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute ">
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full transition-all ${index === currentIndex ? "bg-cyan-400 scale-125" : "bg-gray-500"
                }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}



