"use client";
import Image from "next/image";
import React from "react";

// Importing images from the same path
const globals = [
  { id: 1, name: "Dubai - UAE", image: "/photos/global1.webp" },
  { id: 2, name: "Singapore", image: "/photos/global2.webp" },
  { id: 3, name: "Boston", image: "/photos/global3.webp" },
  { id: 4, name: "London - United Kingdom", image: "/photos/global5.webp" },
  { id: 5, name: "Riyadh", image: "/photos/global4.webp" },
  { id: 6, name: "India-Pune", image: "/photos/shanivarwada.png" },
];

function GlobalCard({ location }) {
  return (
    <div className="p-4 shadow-lg flex flex-col items-center pb-10">
      {/* Using Next.js <Image> component */}
      <Image
        src={location.image}
        alt={location.name}
        width={300} // Default size
        height={400}
        className="rounded-lg object-cover w-[95%] max-w-[250px] sm:max-w-[200px]" 
      />
      <p className="text-white text-center mt-5 font-normal">{location.name}</p>
    </div>
  );
}

function GlobalData() {
  return (
    <div id="global" className="relative bg-[#000B18]">
      <div className="min-h-screen flex flex-col items-center py-12 pb-20">
        {/* Glowing Button */}
        <div className="relative px-5 py-6 text-white font-medium text-center">
          <div className="inline-block bg-gradient-to-r from-[#07CDFF] to-[#06FFF0] opacity-100 bg-clip-text text-transparent">
            <h2 className="text-[24px] md:text-[30px] leading-[26px] tracking-tight font-semibold font-[Poppins] border-b border-white pb-2">
              Our Global Presence
            </h2>
          </div>
        </div>

        {/* Mobile Scrollable Wrapper */}
        <div className="sm:hidden overflow-x-auto scrollbar-hide flex w-full bg-gray-900">
          <div className="flex w-full  ">
            {globals.map((location) => (
              <div key={location.id} className="min-w-full">
                <GlobalCard location={location} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 px-4 bg-gray-900 rounded-xl">
          {globals.map((location) => (
            <GlobalCard key={location.id} location={location} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GlobalData;
