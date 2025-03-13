'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function Product() {
    const [activeIndex, setActiveIndex] = useState(1);
    const cards = [
        { id: 1, img: "/removebg.png", title: "RWA", text: "Intelisync’s RWA solutions enable tokenization of real-world assets for enhanced liquidity and transparency." },
        { id: 2, img: "/Group.png", title: "GPU.NET", text: "Intelisync’s GPU.NET delivers scalable GPU cloud computing for AI, analytics, and 3D rendering." },
        { id: 3, img: "/Vector.png", title: "OWNLY MARKETPLACE", text: "Ownly Marketplace offers a decentralized platform for secure, transparent trading of tokenized assets." }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [cards.length]);

    return (
        <div className="relative min-h-screen bg-[#000B18] flex flex-col items-center justify-center">

            <div className="absolute w-[200px] h-[500px] blur-[100px] top-[-50px] left-0 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
            </div>

            {/* Large Transparent Background Text */}
            <div className="text-center relative mt-10">
                <h1 className="absolute top-15 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] lg:text-[15rem] 
                font-bold uppercase tracking-wide text-transparent outline-text opacity-20 z-0">
                    PRODUCTS
                </h1>

            </div>
            <div className="relative px-5 py-6 text-white font-medium text-center">

                {/* Gradient Text */}
                <h2 className="text-[30px] leading-[26px] tracking-tightest font-medium font-[Poppins] 
     bg-gradient-to-r from-[#07CDFF] to-[#06FFF0] bg-clip-text text-transparent">
                    Our Product
                </h2>

                {/* Underline (centered & dynamic width) */}
                <div className="mt-3 mx-auto h-0.5 bg-gray-200 w-[calc(100%-2rem)] max-w-[18rem]"></div>
                <p className='text-white text-sm text-opacity-80'>
                    Explore Intelisync’s product suite, built to enhance performance,
                </p>
                <p className='text-white text-sm text-opacity-80'>
                    transparency, and scalability in the digital era
                </p>
            </div>


            {/* Product Cards */}
            <div className="relative flex items-center justify-center w-full h-[400px] mt-10">
                {cards.map((card, index) => {
                    const isActive = index === activeIndex;
                    const position = (index - activeIndex + cards.length) % cards.length;

                    let translateX = 0;
                    let zIndex = 1;
                    let scale = 0.8;
                    let opacity = 0.7;

                    if (position === 0) {
                        translateX = "-350px";
                    } else if (position === 1) {
                        translateX = "0px";
                        scale = 1.2;
                        opacity = 1;
                        zIndex = 10;
                    } else if (position === 2) {
                        translateX = "350px";
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
                        <div
                          className={`relative ${isActive ? "w-[350px] h-[380px]" : "w-[280px] h-[320px]"} 
                                      rounded-2xl p-2 mt-20 overflow-hidden border-2 border-transparent`}
                         
                        >
                          <div
                            className="relative w-full h-full bg-[#03131E] rounded-2xl p-[2px] flex items-center justify-center"
                          >
                            <div
                              className="relative w-[280px] min-h-[280px] rounded-2xl p-6 flex flex-col items-center text-center  overflow-hidden
                                         bg-[rgba(46,130,149,0.07)] backdrop-blur-[50px] shadow-lg border-2 "
                              style={{
                                borderImageSource:
                                  "linear-gradient(194.72deg, rgba(89, 220, 212, 0.01) 11.57%, rgba(26, 202, 232, 0.73475) 25.1%, #02C4EF 34.5%, #00FAFA 47.86%, #02C4EF 63.2%, rgba(151, 239, 253, 0.01) 92.73%)",
                                borderImageSlice: 1,
                              }}
                            >
                              <div className="flex justify-center items-center mt-5">
                                <Image src={card.img} alt={card.title} width={70} height={70} />
                              </div>
                              <h3
                                className={`font-semibold text-white transition-all ${isActive ? "text-2xl" : "text-lg"}`}
                              >
                                {card.title}
                              </h3>
                              <p className={`text-gray-200 mt-4 transition-all ${isActive ? "text-sm" : "text-xs"}`}>
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
