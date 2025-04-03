"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const brands = [
  { id: 1, name: "IDEEZA", image: "/photos/first.webp" },
  { id: 2, name: "IDEEZA", image: "/photos/second.webp" },
  { id: 3, name: "IDEEZA", image: "/photos/third.webp" },
  { id: 4, name: "IDEEZA", image: "/photos/fourth.webp" },
  { id: 5, name: "IDEEZA", image: "/photos/fifth.webp" },
  { id: 6, name: "IDEEZA", image: "/photos/six.webp" },
  { id: 7, name: "IDEEZA", image: "/photos/seven.webp" },
  { id: 8, name: "IDEEZA", image: "/photos/eight.webp" },
  { id: 9, name: "IDEEZA", image: "/photos/nine.webp" },
  { id: 10, name: "IDEEZA", image: "/photos/ten.webp" },
];


export default function TrustedBrands() {
  return (
    <div className="flex flex-col justify-center items-center  bg-[#000B18] overflow-hidden ">
      
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
                alt='Web3 Marketing' 
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
