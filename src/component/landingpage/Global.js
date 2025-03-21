"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import motion and useInView

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Hook now inside a valid React function

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className=" p-4 shadow-lg flex flex-col items-center pb-10"
    >
      {/* Using Next.js <Image> component */}
      <Image
        src={location.image}
        alt={location.name}
        width={200}
        height={337}
        className="rounded-lg object-cover"
      />
      <p className="text-white text-center mt-5 font-normal">{location.name}</p>
    </motion.div>
  );
}

function GlobalData() {
  return (
    <div id="global" className="relative bg-[#000B18] ">
      <div className="min-h-screen flex flex-col items-center py-12 pb-20">
        {/* Glowing Button */}
        <div className="relative px-5 py-6 text-white font-medium text-center">

          <div className="inline-block bg-gradient-to-r from-[#07CDFF] to-[#06FFF0] opacity-100 bg-clip-text text-transparent">
            <h2 className="text-[24px] md:text-[30px] leading-[26px] tracking-tight  font-semibold font-[Poppins] border-b border-white pb-2">
            Our Global Presence
            </h2>
          </div>


        </div>
        {/* Card Container */}
        <div className="relative mt-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 px-4 bg-gray-900 rounded-xl">
          {/* <div className="absolute inset-0  bg-yellow-400 rounded-xl "></div> */}
          {globals.map((location) => (
            <GlobalCard key={location.id} location={location} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GlobalData;
