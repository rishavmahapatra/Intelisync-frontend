"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const events = [
  {
    title: "Token 2049 Singapore – September 2024",
    description:
      "Immersing in the Future of Web3, Forging Global Alliances, and Driving the Next Wave of Blockchain Innovation!",
    image: "/photos/event1.webp",
    text:'BlockChain Technology'
  },
  {
    title: `Token 2049 Dubai –\nApril 2024`,
    description:
      "Intelisync at Token 2049 Dubai, Connecting with Industry Leaders, and Accelerating the Evolution of Blockchain.",
    image: "/photos/event2.webp",
    text:'Crypto Marketing'
  },
  {
    title: "Cyber Security Exhibition",
    description:
      "Bridging Innovation and Strategy to Shape the Web3 Landscape, and Build a Decentralized Future.",
    image: "/photos/event3.webp",
    text:'BlockChain Technology'
  },
  {
    title: "Global Blockchain Congress",
    description:
      "Intelisync at Future Blockchain Summit, Collaborating with Visionaries, Exploring Disruptive Technologies, and Defining the Next Era of Blockchain.",
    image: "/photos/event4.webp",
    text:'Crypto Marketing'
  },
];

function EventGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <div className="bg-[#000B18] relative  text-white font-medium text-center h-auto sm:min-h-screen pb-0 pt-10 sm:py-20  ">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex flex-col items-center justify-center max-w-screen-xl mx-auto "
      >
        <div className=" pt-10 inline-block bg-gradient-to-r from-[#07CDFF] to-[#06FFF0] opacity-100 bg-clip-text text-transparent mb-8">
          <h2 className="text-[24px] md:text-[30px] leading-[26px] tracking-tight  font-semibold font-[Poppins] border-b border-white pb-2">
            Intelisync Event Highlights
          </h2>
        </div>
        {/* Event Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-5 w-full">
          {events.map((event, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden shadow-lg ${index === 0 ? "md:col-span-2 md:row-span-2 h-[32rem]"
                : index === 3
                  ? "md:col-span-2"
                  : ""
                }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={event.image}
                  alt={event.text}
                  className="object-cover w-full h-full" fill
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gray-900/60 p-4 text-white">
                <h3 className="text-base font-bold mb-1 leading-tight whitespace-pre-line">
                  {event.title}
                </h3>
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



