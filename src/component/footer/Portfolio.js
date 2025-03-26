
"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from 'framer-motion';

export default function Portfolio() {
  const images = [
    { id: 1, src: "/portfolio10.png", name: "IDEEZA" },
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


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

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
    <div className="relative flex flex-col justify-center items-center bg-[#000B18] text-white text-center px-4 sm:px-6 md:px-12 lg:px-20  my-12 sm:my-0 sm:min-h-screen ">
      {/* Gradient Effect */}
      <div
        className="absolute w-[150px] h-[500px] blur-[100px] top-[-20px] left-0 rotate-[148.52deg] 
                    bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]"
      ></div>

      <div className="relative text-white font-medium text-center w-full max-w-6xl mx-auto">

        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[12rem]
                font-bold uppercase tracking-wide text-transparent outline-text opacity-5 z-0">
          PORTFOLIO
        </h2>

        {/* Portfolio Heading */}
        <div className="relative text-white font-medium text-center mt-0">
          <div className="inline-block bg-gradient-to-r from-[#07CDFF] to-[#06FFF0] opacity-100 bg-clip-text text-transparent">
            <h2 className="text-[24px] md:text-[30px] leading-[26px] tracking-tight  font-semibold font-[Poppins] border-b border-white pb-2">
              Our Porfolio
            </h2>
          </div>

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
      <div className="relative p-0 sm:p-5 md:p-5 rounded-lg w-full max-w-xl md:max-w-7xl mx-auto mt-10">

      {/* Left Arrow (Only on Large Screens) */}
      <button
        onClick={prevImage}
        className="hidden sm:flex absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white z-10"
      >
        <ChevronLeft size={36} />
      </button>

      {/* Image Display with Smooth Animation */}
      <div className="flex justify-center">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].name}
            width={928}
            height={499}
            className="rounded-lg"
          />
        </motion.div>
      </div>

      {/* Right Arrow (Only on Large Screens) */}
      <button
        onClick={nextImage}
        className="hidden sm:flex absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white z-10"
      >
        <ChevronRight size={36} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full transition-all ${
              index === currentIndex ? "bg-cyan-400 scale-125" : "bg-gray-500"
            }`}
          ></span>
        ))}
      </div>
    </div>
    </div>
  );
}



