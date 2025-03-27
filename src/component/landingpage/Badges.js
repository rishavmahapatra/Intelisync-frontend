"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const badges = [
  { id: 1, name: "logo", image: "/photos/logo1.webp" },
  { id: 2, name: "logo", image: "/photos/logo2.webp" },
  { id: 3, name: "logo", image: "/photos/logo3.webp" },
  { id: 4, name: "logo", image: "/photos/logo4.webp" },
  { id: 5, name: "logo", image: "/photos/logo5.webp" },
];

export default function BadgesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind `sm` breakpoint (640px)
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative bg-[#000B18] w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
      {/* Background Gradient Effect */}
      <div className="absolute w-[200px] h-[500px] blur-[100px] top-[-50px] left-0 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
      </div>

      <div ref={ref} className="flex flex-col items-center">
        {/* Section Title */}
        <div className="relative z-10 py-6 text-white font-medium text-center">
          <div className="inline-block bg-gradient-to-r from-[#07CDFF] to-[#06FFF0] opacity-100 bg-clip-text text-transparent">
            <h2 className="text-lg sm:text-xl md:text-2xl leading-[26px] tracking-tight font-semibold font-[Poppins] border-b border-white pb-2">
              Our Badges
            </h2>
          </div>
        </div>

        {/* Mobile: Infinite Scrolling */}
        {isMobile ? (
          <div className="relative w-full overflow-hidden px-4">
            <motion.div
              className="flex space-x-6"
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                duration: 10, // Adjust for speed
              }}
            >
              {[...badges, ...badges].map((badge, index) => (
                <div key={index} className="shrink-0 p-2">
                  <div className="w-[120px] h-auto flex items-center justify-center">
                    <Image
                      src={badge.image}
                      alt={badge.name}
                      width={120}
                      height={120}
                      className="mx-auto"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        ) : (
          // Desktop: Static Grid Layout
          <div className="hidden sm:grid sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-12 max-w-5xl place-items-center">
            {badges.map((badge, index) => (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, scale: 1 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: index * 0.1, // Staggered effect
                }}
                className="p-2 sm:p-4 m-2 sm:m-4 transition-transform duration-300"
              >
                <div className="w-[120px] sm:w-[150px] h-auto flex items-center justify-center p-2 sm:p-4">
                  <Image
                    src={badge.image}
                    alt={badge.name}
                    width={150}
                    height={150}
                    className="mx-auto transition-transform duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
