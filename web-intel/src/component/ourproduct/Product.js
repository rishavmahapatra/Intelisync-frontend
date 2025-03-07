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
<<<<<<< HEAD
      ];

      useEffect(() => {
=======
    ];

    useEffect(() => {
>>>>>>> main
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
        }, 3000); // Change card every 3 seconds

        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <div className="relative min-h-screen bg-[#020D17] flex flex-col items-center justify-center ">
<<<<<<< HEAD
                {/* Large Transparent Text in Background */}

                {/* Section Title */}

                <div className="text-center  mt-0">
                    <h1 className="absolute mt-10 left-1/2 -translate-x-1/2 -translate-y-[55%] text-[15rem] 
                 font-bold uppercase tracking-wide text-transparent outline-text opacity-20 z-10">
                        PRODUCTS
                    </h1>
                    <button className="px-6 py-2 text-white font-medium rounded-full 
                          bg-gradient-to-r from-[#06DEFF] to-[#00A2BB] 
                          shadow-[0px_0px_10px_#06DEFF] border border-cyan-400 
                          hover:scale-105 transition-all relative mt-0">
                        Our Product
                    </button>
                    <p className="text-gray-100 max-w-lg mt-1 body">
=======
                {/* Large Transparent Background Text */}
                <div className="text-center relative mt-10">
                    <h1 className="absolute top-15 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] lg:text-[15rem] 
                    font-bold uppercase tracking-wide text-transparent outline-text opacity-20 z-0">
                        PRODUCTS
                    </h1>
                    <button className="px-6 py-2 text-white font-medium rounded-full 
                    bg-gradient-to-r from-[#06DEFF] to-[#00A2BB] 
                    shadow-[0px_0px_10px_#06DEFF] border border-cyan-400 
                    hover:scale-105 transition-all relative z-10">
                        Our Product
                    </button>
                    <p className="text-gray-100 max-w-lg mt-2 relative z-10">
>>>>>>> main
                        Explore Intelisync’s product suite, built to enhance performance, transparency,
                        and scalability in the digital era.
                    </p>
                </div>

<<<<<<< HEAD
                {/* Product Cards */}
                <div className="relative flex items-center justify-center  w-full">
                {cards.map((card, index) => {
                    // Positioning logic (circular effect)
                    const isActive = index === activeIndex;
                    const position = (index - activeIndex + cards.length) % cards.length;

                    let translateX = 0;
                    let zIndex = 1;
                    let scale = 0.85;
                    let opacity = 0.7;

                    if (position === 0) {
                        // Left position
                        translateX = "-150px";
                    } else if (position === 1) {
                        // Center position (active)
                        translateX = "0px";
                        scale = 1.2;
                        opacity = 1;
                        zIndex = 10;
                    } else if (position === 2) {
                        // Right position
                        translateX = "150px";
                    }

                    return (
                        <motion.div 
                            key={card.id} 
                            className="absolute transition-all duration-700 ease-in-out"
                            animate={{
                                x: translateX,
                                scale: scale,
                                opacity: opacity,
                                zIndex: zIndex
                            }}
                        >
                            {/* Card */}
                            <div className={`relative w-[${isActive ? '350px' : '280px'}] h-[${isActive ? '380px' : '320px'}] rounded-2xl p-[2px] gap-4`}>
                                {/* Glowing Border */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00A2BB] to-[#003D47] opacity-50"></div>

                                {/* Card Content */}
                                <div className="relative w-full h-full bg-[#03131E] rounded-2xl p-6 flex flex-col items-center text-center shadow-lg">
                                    <div className="flex justify-center items-center mt-5">
                                        <Image src={card.img} alt={card.title} width={70} height={70} />
                                    </div>
                                    <h3 className={`text-lg font-semibold text-white ${isActive ? 'text-2xl' : 'text-lg'}`}>{card.title}</h3>
                                    <p className={`text-gray-200 leading-tight mt-4 ${isActive ? 'text-sm' : 'text-xs'}`}>
                                        {card.text}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
=======
                {/* Product Slider (Circular) */}
                <div className="relative flex items-center justify-center  w-full h-[400px] m-10">
                    {cards.map((card, index) => {
                        // Positioning logic (circular effect)
                        const isActive = index === activeIndex;
                        const position = (index - activeIndex + cards.length) % cards.length;
                        let translateX = 0;
                        let zIndex = 1;
                        let scale = 0.8;
                        let opacity = 10;

                        if (position === 0) {
                            // Left position
                            translateX = "-350px";
                        } else if (position === 1) {
                            // Center position (active)
                            translateX = "0px";
                            scale = 1.2;
                            opacity = 1;
                            zIndex = 10;
                        } else if (position === 2) {
                            // Right position
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
                                    zIndex: zIndex
                                }}

                                transition={{
                                    type: "spring",      // Smooth spring animation
                                    stiffness: 100,      // Adjust for smoothness
                                    damping: 15,         // Reduce bounce effect
                                    mass: 0.5,           // Controls natural movement
                                    duration: 0.8,       // Slightly longer transition for fluidity
                                    ease: "easeInOut"    // Ensures smooth acceleration & deceleration
                                }}
                            >
                                {/* Card */}
                                <div className={`relative ${isActive ? 'w-[350px] h-[380px]' : 'w-[280px] h-[320px]'} rounded-2xl p-2 mt-20 overflow-hidden`}>
                                    {/* 🔹 Outer Glowing Border */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00A2BB] to-[#003D47] opacity-70"></div>

                                    {/* 🔹 Inner Border Wrapper */}
                                    <div className="relative w-full h-full bg-[#03131E] rounded-2xl p-[2px] flex items-center justify-center">
                                        {/* 🔹 Inner Border Layer */}
                                        <div className="absolute inset-0 m-auto w-[90%] h-[90%] border border-[#1AB0C4] rounded-[20px] opacity-0"></div>

                                        {/* 🔹 Card Content */}
                                        <div className="relative w-full h-full bg-[#03131E] rounded-2xl p-6 flex flex-col items-center text-center shadow-lg">
                                            {/* Image */}
                                            <div className="flex justify-center items-center mt-5">
                                                <Image src={card.img} alt={card.title} width={70} height={70} />
                                            </div>

                                            {/* Title */}
                                            <h3 className={`font-semibold text-white transition-all ${isActive ? 'text-2xl' : 'text-lg'}`}>{card.title}</h3>

                                            {/* Description */}
                                            <p className={`text-gray-200 mt-4 transition-all ${isActive ? 'text-sm' : 'text-xs'}`}>
                                                {card.text}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </motion.div>
                        );
                    })}
                </div>
>>>>>>> main
            </div>
        </div>
    )
}

export default Product
