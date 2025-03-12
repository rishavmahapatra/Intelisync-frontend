'use client';
import React,  { useRef } from 'react'
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

function Founder() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.2 });

    return (
        <div >
            <section className="bg-[#000B18] text-white py-16 px-0 lg:px-40">
           

            <motion.div
             ref={ref}
             className="bg-gradient-to-r from-[#000B18] to-[#031A26] opacity-90 max-w-8xl w-full h-auto flex flex-col lg:flex-row items-center justify-center gap-20 border-none p-5"
             initial={{ opacity: 0, scale: 0.5 }}
             animate={isInView ? { opacity: 1, scale: 1 } : {}}
             transition={{ duration: 0.6, ease: "easeInOut" }}
             viewport={{ once: true }}
            
                   
                >
                <div className="bg-gradient-to-r from-[#000B18] to-[#031A26] opacity-90 max-w-8xl w-full h-auto flex flex-col lg:flex-row items-center justify-center gap-20 border border-none  p-5">
                    {/* Image Section */}
                    <div className="relative w-67 h-100 rounded-2xl overflow-hidden border border-gray-700 shadow-lg">
                        <Image
                            src="/founderimage.png"
                            alt="Javed Khan"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  // Helps Next.js optimize image loading
                            className="object-cover"
                        />
                    </div>
                    

                    {/* Text Section */}
                    <div className="text-center lg:text-left max-w-2xl">
                        <button className="bg-gradient-to-r from-[rgba(3,190,223,0.75)] to-[rgba(6,255,240,0.75)] opacity-90 text-white px-6 py-2 rounded-full font-semibold mb-4 flex items-center justify-center gap-4">
                        <span className="border-t-1 border-white w-10"></span>
                            Meet our Founder
                        </button>
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#edf1f2] to-[#06FFF0] bg-clip-text text-transparent ">Javed Khan</h2>
                        <p className="text-gray-300 f mt-4  font-light">
                            Javed Khan is the visionary founder and driving force behind Intelisync, with over 15 years of leadership in AI, Blockchain, Web3, and Digital Transformation. Fueled by a passion for innovation, he has been instrumental in developing cutting-edge AI and Web3.0 solutions that help businesses navigate the complexities of the decentralized and data-driven digital world.
                        </p>
                        <p className='text-gray-300  mt-1  font-light'>
                            An expert in AI-driven automation, Layer 2 scalability, multi-chain interoperability, and energy-efficient consensus mechanisms, Javed has led Intelisync to emerge as a key player in RWA (Real-World Asset) Tokenization, Web3.0, and AI-powered blockchain ecosystems. His expertise enables organizations to scale securely, harness decentralized intelligence, and unlock new digital opportunities through AI-enhanced smart contracts, predictive analytics, and autonomous decision-making.
                        </p>
                        <p className='text-gray-300  mt-1  font-light'>
                            With an unwavering commitment to turning technological advancements into real-world solutions, Javed continues to redefine industry standards and shape the future of AI, Web3.0, and decentralized technologies through Intelisync.
                        </p>

                        {/* Social Icons */}
                        <div className="flex justify-center lg:justify-start gap-4 mt-6 ">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-3 rounded-full hover:scale-110 transition">
                                <FaLinkedin className="  text-2xl text-[rgb(61,232,232)]" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"  className="bg-gray-700 p-3 rounded-full hover:scale-110 transition">
                                <FaXTwitter className="text-2xl text-[rgb(61,232,232)]" />
                            </a>
                        </div>
                    </div>
                </div>
                </motion.div>
            </section>
        </div>
    )
}

export default Founder