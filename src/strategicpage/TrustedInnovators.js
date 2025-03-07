'use client';
import React from 'react';
import Image from "next/image";

function TrustedInnovators() {
    const logos = [
        { name: "IDEEZA", src: "/ideeza.png" },
        { name: "ANGEVERSE", src: "/angeverse.png" },
        { name: "LAXCE", src: "/Laxce.png" },
        { name: "MetaCasino", src: "/MetaCasino.png" },
        { name: "Suitstakes", src: "/suistakes.png" },
        { name: "SimPredict", src: "/Simpredict.png" },
        { name: "JoyStix", src: "/Joystix.png" },
        { name: "TechZino", src: "/Techzino.png" },
        { name: "CLEMENTINE", src: "/clementine.png" },
    ];
  return (
    <div>
      <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32">
            <div className="relative w-fit mx-auto pb-2">
                <h2 className="font-poppins font-semibold text-[30px] leading-[40px] tracking-[-0.01%] text-center">
                    Trusted by Top Innovators
                </h2>
 
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400"></div>
 
            </div>
 
 
            {/* Logo Grid */}
            <div className="grid grid-cols-3 mt-20 w-[1004px] mx-auto ">
                {logos.map((logo, index) => (
                    <div
                        key={index}
                        className={`flex justify-center items-center h-28
              ${index < logos.length - 3 ? "border-b border-gray-700" : ""}
              ${index % 3 !== 2 ? "border-r border-gray-700" : ""}`}
                    >
                        <Image src={logo.src} alt={logo.name} width={120} height={60} />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TrustedInnovators
