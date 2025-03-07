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
    }, []);
    
  return (
    <div>
      <div className="relative min-h-screen bg-[#020D17] flex flex-col items-center justify-center">
            <div className="text-center relative mt-10">
                <h1 className="absolute top-15 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] lg:text-[15rem] font-bold uppercase tracking-wide text-transparent outline-text opacity-20 z-0">
                    PRODUCTS
                </h1>
                <button className="px-6 py-2 text-white font-medium rounded-full bg-gradient-to-r from-[#06DEFF] to-[#00A2BB] shadow-[0px_0px_10px_#06DEFF] border border-cyan-400 hover:scale-105 transition-all relative z-10">
                    Our Product
                </button>
                <p className="text-gray-100 max-w-lg mt-2 relative z-10">
                    Explore Intelisync’s product suite, built to enhance performance, transparency, and scalability in the digital era.
                </p>
            </div>

            <div className="relative flex items-center justify-center w-full">
                {cards.map((card, index) => {
                    const isActive = index === activeIndex;
                    const position = (index - activeIndex + cards.length) % cards.length;

                    let translateX = position === 0 ? "-150px" : position === 1 ? "0px" : "150px";
                    let scale = position === 1 ? 1.2 : 0.85;
                    let opacity = position === 1 ? 1 : 0.7;
                    let zIndex = position === 1 ? 10 : 1;

                    return (
                        <motion.div 
                            key={card.id} 
                            className="absolute transition-all duration-700 ease-in-out"
                            animate={{ x: translateX, scale, opacity, zIndex }}
                        >
                            <div className={`relative w-[${isActive ? '350px' : '280px'}] h-[${isActive ? '380px' : '320px'}] rounded-2xl p-2 gap-4`}>                                
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00A2BB] to-[#003D47] opacity-50"></div>
                                <div className="relative w-full h-full bg-[#03131E] rounded-2xl p-6 flex flex-col items-center text-center shadow-lg">
                                    <div className="flex justify-center items-center mt-5">
                                        <Image src={card.img} alt={card.title} width={70} height={70} />
                                    </div>
                                    <h3 className={`text-lg font-semibold text-white ${isActive ? 'text-2xl' : 'text-lg'}`}>{card.title}</h3>
                                    <p className={`text-gray-200 leading-tight mt-4 ${isActive ? 'text-sm' : 'text-xs'}`}>{card.text}</p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    </div>
  )
}

export default Product
