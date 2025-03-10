"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import motion and useInView

// Importing images from the same path
const globals = [
  { id: 1, name: "Dubai - UAE", image: "/photos/global1.png" },
  { id: 2, name: "Singapore", image: "/photos/global2.png" },
  { id: 3, name: "Boston", image: "/photos/global3.png" },
  { id: 4, name: "London - United Kingdom", image: "/photos/global4.png" },
  { id: 5, name: "Riyadh", image: "/photos/global5.png" },
  { id: 6, name: "India-Pune", image: "/photos/global6.png" },
];

function GlobalData() {
  return (
    <div>
      <div className="bg-black min-h-screen flex flex-col items-center py-12 pb-20 ">
        {/* Glowing Button */}
        <button className="px-6 py-2 text-white text-lg font-semibold rounded-full
               bg-gradient-to-r from-cyan-500 to-teal-500 shadow-lg
                transition-all duration-300 mt-20">
          Our Global Presence
        </button>

        {/* Card Container */}
        <div className="mt-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 px-4">
          {globals.map((location, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref); // Each card gets its own inView tracking

              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.6, ease: "easeInOut"  }} // Staggered effect
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
                <p className="text-white text-center mt-5 font-normal">
                  {location.name}
                </p>
              </motion.div>
            
          })}
        </div>
      </div>
    </div>
  );
}

export default GlobalData;
