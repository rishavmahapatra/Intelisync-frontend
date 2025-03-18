"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const brands = [
  { id: 1, name: "IDEEZA", image: "/photos/first.png" },
  { id: 2, name: "IDEEZA", image: "/photos/second.png" },
  { id: 3, name: "IDEEZA", image: "/photos/third.png" },
  { id: 4, name: "IDEEZA", image: "/photos/fourth.png" },
  { id: 5, name: "IDEEZA", image: "/photos/fifth.png" },
  { id: 6, name: "IDEEZA", image: "/photos/six.png" },
  { id: 7, name: "IDEEZA", image: "/photos/seven.png" },
  { id: 8, name: "IDEEZA", image: "/photos/eight.png" },
  { id: 9, name: "IDEEZA", image: "/photos/nine.png" },
  { id: 10, name: "IDEEZA", image: "/photos/ten.png" },
];


export default function TrustedBrands() {
  return (
    <div className="flex flex-col justify-center items-center h-[30vh] bg-[#000B18] overflow-hidden">
       <div className="text-center my-4">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white relative inline-block mb-6 pb-2">
              Trusted by Top Innovators
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-[#06FFF0] via-[#00aaff] to-[#0192BA]"></span>
            </h1>
          </div>
      <div className="w-full relative">
        <motion.div
          className="flex items-center flex-nowrap space-x-5 md:space-x-20" // Increased spacing for smoother appearance
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", // Smoother acceleration and deceleration
            duration: 5, 
           // times: [0,0.5,1],
          }}
        >
          {[...brands, ...brands].map((brand, index) => (
            <div key={index} className="flex-shrink-0 cursor-pointer">
              <Image 
                src={brand.image} 
                alt={`Logo ${brand.name}`} 
                width={200} 
                height={100} 
                className="w-[100px] sm:w-[200px]" 
                unoptimized 
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
