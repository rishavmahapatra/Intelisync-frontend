"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import motion and useInView

// Importing images from the same path
const globals = [
  { id: 1, name: "Dubai - UAE", image: "/photos/global1.png" },
  { id: 2, name: "Singapore", image: "/photos/global2.png" },
  { id: 3, name: "Boston", image: "/photos/global3.png" },
  { id: 4, name: "London - United Kingdom", image: "/photos/global5.png" },
  { id: 5, name: "Riyadh", image: "/photos/global4.png" },
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
      className="bg-gray-900 border border-gray-700 p-4 shadow-lg flex flex-col items-center pb-10"
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
    <div className="relative bg-[#000B18] ">
      <div className="min-h-screen flex flex-col items-center py-12 pb-20">
        {/* Glowing Button */}
        <div className="relative px-5 py-6 text-white font-medium text-center">

          {/* Gradient Text */}
          <h2 className="text-[30px] leading-[26px] tracking-tightest font-medium font-[Poppins] 
            bg-gradient-to-r from-[#07CDFF] to-[#06FFF0] bg-clip-text text-transparent">
            Our Global Presence
          </h2>


          {/* Underline (centered & dynamic width) */}
          <div className="mt-3 mx-auto h-0.5 bg-[#06FFF0] w-[calc(100%-2rem)] max-w-[18rem]"></div>
            </div>
          {/* Card Container */}
          <div className="mt-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 px-4">
            {globals.map((location) => (
              <GlobalCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </div>
      );
}

      export default GlobalData;
