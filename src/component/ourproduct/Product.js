'use client';
import React, { useState, useEffect,  } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function Product() {
  const [activeIndex, setActiveIndex] = useState(1);
  

  const cards = [
    { id: 1, img: "/removebg.webp", title: "RWA", text: "Intelisync’s RWA solutions enable tokenization of real-world assets for enhanced liquidity and transparency." },
    { id: 2, img: "/Group.webp", title: "GPU.NET", text: "Intelisync’s GPU.NET delivers scalable GPU cloud computing for AI, analytics, and 3D rendering." },
    { id: 3, img: "/Vector.webp", title: "OWNLY MARKETPLACE", text: "Ownly Marketplace offers a decentralized platform for secure, transparent trading of tokenized assets." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="relative h-auto sm:min-h-screen bg-[#000B18] flex flex-col items-center justify-baseline sm:justify-center overflow-hidden px-4 sm:px-6 lg:px-12 ">
      <div className="absolute w-[200px] h-[500px] blur-[100px] top-[-50px] left-0 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
      </div>

      <div className="text-center relative mt-10">
        <h2 className="absolute top-4 sm:top-15 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[2rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[12rem]
                font-semibold uppercase tracking-wide text-transparent outline-text opacity-5 z-0">
          PRODUCTS
        </h2>
      </div>

      <div className="relative px-5 py-1 sm:py-6 text-white font-medium text-center">
        <div className="inline-block bg-gradient-to-r from-[#07CDFF] to-[#06FFF0] opacity-100 bg-clip-text text-transparent">
          <h2 className="text-[20px] sm:text-[24px] md:text-[28px] leading-[26px] tracking-tight font-semibold font-[Poppins] border-b border-white pb-2">
            Our Product
          </h2>
        </div>
        <p className="text-gray-300 text-xs sm:text-sm md:text-base text-opacity-80 mt-2">
          Explore Intelisync’s product suite, built to enhance performance,
        </p>
        <p className="text-gray-300 text-xs sm:text-sm md:text-base text-opacity-80">
          transparency, and scalability in the digital era.
        </p>
      </div>

      <div className="relative flex items-center justify-center w-full max-w-[95%] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] h-[400px] mt-2 sm:mt-10 overflow-hidden">
        {cards.map((card, index) => {
          const isActive = index === activeIndex;
          const position = (index - activeIndex + cards.length) % cards.length;

          let translateX = "0px";
          let zIndex = 1;
          let scale = 0.8;
          let opacity = 0.6;

          if (position === 0) {
            translateX = "-100%";
          } else if (position === 1) {
            translateX = "0px";
            scale = 1;
            opacity = 1;
            zIndex = 10;
          } else if (position === 2) {
            translateX = "100%";
          }

          return (
            <motion.div
              key={card.id}
              className="absolute transition-all ease-in-out"
              animate={{
                x: translateX,
                scale: scale,
                opacity: opacity,
                zIndex: zIndex,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                mass: 0.5,
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              <div className="w-[260px] sm:w-[300px] md:w-[320px] h-[350px] rounded-4xl p-2  mt-5 ">
                <div className="relative w-full h-full bg-[rgba(46,130,149,0)] backdrop-blur-[50px] rounded-2xl p-[2px] flex items-center justify-center border-cyan-500 shadow-lg shadow-cyan-500/40 ">
                  <div className="relative w-[240px] sm:w-[270px] md:w-[290px] h-[320px] p-6 flex flex-col items-center text-center  bg-[rgba(46,130,149,0)]  shadow-lg border-custom" >
                    <div className="flex justify-center items-center mt-5">
                      <Image src={card.img} alt='Web3 Marketing' width={60} height={60} className="sm:w-[70px] sm:h-[70px]" />
                    </div>
                    <h3 className={`font-semibold text-white transition-all ${isActive ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"}`}>
                      {card.title}
                    </h3>
                    <p className={`text-gray-200 mt-4 transition-all ${isActive ? "text-sm sm:text-base" : "text-xs sm:text-sm"}`}>
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
