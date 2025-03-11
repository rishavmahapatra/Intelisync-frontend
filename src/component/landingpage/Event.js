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
    <div className="bg-black">
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex flex-col items-center justify-center max-w-screen-xl mx-auto p-12 py-10"
    >
      {/* Centered Animated Button */}
      <button className="mb-20 px-6 py-2 text-white text-lg font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 shadow-lg transition-all duration-300 mt-[-10px]">
        Intelisync Event Highlights
      </button> 

      {/* Event Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
        {events.map((event, index) => (
          <div
            key={index}
            className={`relative rounded-xl overflow-hidden shadow-lg ${
              index === 0 ? "md:col-span-2 md:row-span-2" : index === 3 ? "md:col-span-2" : ""
            }`}
          >
            <div className="relative w-full h-64">
              <Image 
                  src={event.image} alt={event.title} className="object-cover" fill />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gray-900/60 p-4 text-white">
              <h3 className="text-base font-bold mb-1 leading-tight whitespace-pre-line">{event.title}</h3>
              <p className="text-xs leading-snug">{event.description}</p>
            </div>
          </div>
        ))} 
      </div>
    </motion.div>
    </div>
  );  
}

export default EventGallery;

