"use client";
import { useState } from "react";
import Image from "next/image";

export default function Portfolio() {
  const images = [
    { src: "/portfolio1.png", name: "IDEEZA" },
    { src: "/portfolio2.png", name: "Laxce" },
    { src: "/portfolio3.png", name: "Joystix" },
    { src: "/portfolio4.png", name: "Suistakes" },
    { src: "/portfolio5.png", name: "Laughter Economy" },
    { src: "/portfolio6.png", name: "Angelverse" },
    { src: "/portfolio8.png", name: "Clementine" },
  ];

  // ✅ Define state for selected image
  const [selectedImage, setSelectedImage] = useState(images[0]); // Default to first image

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-[#000B18] text-white text-center px-4">
      {/* Gradient Effect */}
      <div
        className="absolute w-[200px] h-[500px] blur-[100px] top-[-50px] right-0 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]"
      ></div>

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
      <div className="relative flex flex-col md:flex-row justify-between items-center min-h-screen bg-[#000B18] text-white text-center px-6 md:px-16">
        {/* Left Side - Image List */}
        <div className="w-full md:w-1/3 flex flex-col gap-3 mt-10 md:mt-0">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)} // ✅ Update selected image on click
              className={`w-full px-6 py-4 text-left font-medium 
                rounded-lg transition ${
                  selectedImage.src === image.src
                    ? "bg-gradient-to-r from-[#07CDFF] to-[#06FFF0] text-black"
                    : "bg-gradient-to-r from-[#064d54] to-[#011b24] text-white hover:from-[#07CDFF] hover:to-[#06FFF0]"
                }`}
            >
              {image.name}
            </button>
          ))}
        </div>

        {/* Right Side - Main Image */}
        <div className="relative w-full md:w-2/3 max-w-3xl z-10">
          <Image
            src={selectedImage.src}
            alt={selectedImage.name}
            width={928}
            height={499}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
}
