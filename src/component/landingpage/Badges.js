"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import Framer Motion

const badges = [
  { id: 1, name: "logo", image: "/photos/logo1.webp" },
  { id: 2, name: "logo", image: "/photos/logo2.webp" },
  { id: 3, name: "logo", image: "/photos/logo3.webp" },
  { id: 4, name: "logo", image: "/photos/logo4.webp" },
  { id: 5, name: "logo", image: "/photos/logo5.webp" },
];

export default function BadgesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" }); // Triggers on every scroll into view

  return (
    <div className="relative bg-[#000B18]">
      <div className="absolute w-[200px] h-[500px] blur-[100px] top-[-50px] left-0 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
      </div>
      <div
        ref={ref}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex flex-col items-center   "
      >
       

        <div className="relative  py-6 text-white font-medium text-center">

          {/* Gradient Text */}
          <h2 className="text-[30px] leading-[46px] font-medium font-[Poppins] 
               bg-gradient-to-r from-[#07CDFF] to-[#06FFF0] bg-clip-text text-transparent " >
            Our Badges
          </h2>

          {/* Underline (centered & dynamic width) */}
          <div className="mt-3 mx-auto h-0.5 bg-[#06FFF0] w-[calc(100%-2rem)] max-w-[18rem]"></div>

        </div>


        {/* Badges Grid */}
        <div className="mt-5 grid grid-cols-2 md:grid-cols-5 gap-12 max-w-5xl place-items-center">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, scale: 1 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: index * 0.0, // Staggered effect
              }}
              className="p-4 m-4 transition-transform duration-300 "
            >
              <div className="w-[150px] h-[150px] flex items-center justify-center p-4">
                <Image
                  src={badge.image}
                  alt={badge.name}
                  width={150}
                  height={150}
                  className={`mx-auto transition-transform duration-300 ${badge.id === 1 ? "scale-145" : ""}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
