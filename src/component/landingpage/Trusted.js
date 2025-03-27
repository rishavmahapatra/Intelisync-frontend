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
    <div className="flex justify-center items-center h-[30vh] bg-black overflow-hidden">
      <div className="w-full max-w-[1222px] relative">
        <motion.div
          className="flex items-center w-max flex-nowrap space-x-20" // Increased spacing for smoother appearance
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", // Smoother acceleration and deceleration
            duration: 15, // Slower and smoother scrolling
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
                unoptimized 
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
