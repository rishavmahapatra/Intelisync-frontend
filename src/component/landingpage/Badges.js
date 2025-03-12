"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import Framer Motion

const badges = [
  { id: 1, name: "logo", image: "/photos/logo1.png" },
  { id: 2, name: "logo", image: "/photos/logo2.png" },
  { id: 3, name: "logo", image: "/photos/logo3.png" },
  { id: 4, name: "logo", image: "/photos/logo4.png" },
  { id: 5, name: "logo", image: "/photos/logo5.png" },
];

export default function BadgesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" }); // Triggers on every scroll into view

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
      className="flex flex-col items-center   py-20"
    >
      {/* Animated Button */}
      <motion.button
        initial={{ opacity: 0, scale: 1 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="relative px-6 py-2 text-white text-xl font-semibold rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 shadow-md transition-all duration-300 ease-in-out"
      >
        Our Badges
      </motion.button>

      {/* Badges Grid */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-12 max-w-5xl place-items-center">
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
            className="p-8 m-4 transition-transform duration-300 "
            >
            <div className="w-[150px] h-[150px] flex items-center justify-center p-4 m-4">
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
