"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const events = [
  {
    title: "Token 2049 Singapore – September 2024",
    description: "Immersing in the Future of Web3, Forging Global Alliances, and Driving the Next Wave of Blockchain Innovation!",
    image: "/photos/event1.png",
  },
  {
    title: `Token 2049 Dubai –\nApril 2024`,
    description: "Intelisync at Token 2049 Dubai, Connecting with Industry Leaders, and Accelerating the Evolution of Blockchain.",
    image: "/photos/event2.png",
  },
  {
    title: "Cyber Security Exhibition",
    description: "Bridging Innovation and Strategy to Shape the Web3 Landscape, and Build a Decentralized Future.",
    image: "/photos/event3.png",
  },
  {
    title: "Global Blockchain Congress",
    description: "Intelisync at Future Blockchain Summit, Collaborating with Visionaries, Exploring Disruptive Technologies, and Defining the Next Era of Blockchain.",
    image: "/photos/event4.png",
  },
];

function EventGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <div className="relative bg-[#000B18] py-10 px-4">

      {/* Gradient Background Effect */}
      <div className="absolute w-[200px] h-[500px] blur-[100px] top-[-50px] left-0 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4"
      >
        {/*  Button */}
        <div className="text-center my-10">
          <h2 className="text-cyan-400 text-3xl md:text-4xl font-bold">
            Intelisync Event Highlights
          </h2>

          {/* Animated Underline */}
          <div className="w-full h-1 bg-gradient-to-r from-cyan-400 to-teal-500 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Event Grid (Mobile-First) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className={`relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer ${index === 0 ? "sm:col-span-2 sm:row-span-2 lg:col-span-2" : index === 3 ? "lg:col-span-2" : ""
                }`}
              whileHover={{ scale: 1.05 }}
            >
              {/* Image Container */}
              <div className="relative w-full h-64 md:h-72 lg:h-80">
                <Image
                  src={event.image}
                  alt={event.title}
                  className="object-cover"
                  fill
                  priority
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-white">
                <h3 className="text-base font-bold mb-1 leading-tight whitespace-pre-line">{event.title}</h3>
                <p className="text-xs leading-snug">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </div>
  );
}

export default EventGallery;
