'use client';
import React from 'react'
import { motion } from 'framer-motion';

function Section() {
    return (
        <div>
            <section className="relative  bg-[radial-gradient(circle_at_50%_60%,rgb(6,86,66),rgb(0,0,0)_50%)] overflow-hidden  text-white py-16 px-6 lg:px-20">

                <div className="max-w-7xl mx-auto flex flex-col  lg:flex-row items-center justify-between gap-12">

                    {/* Left Side: Content */}
                    <div className="max-w-2xl ">
                    <motion.div 
                    initial={{ x: -100, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    transition={{ duration: 0.6, ease: "easeOut" }} 
                    className="max-w-2xl"
                >
                       
                        {/* About Us Button */}
                        <div className="mb-6">
                            <button className="flex items-center gap-3 px-8 py-2 rounded-full text-white text-lg bg-gradient-to-r from-[#03BEDF] to-[#06FFF0]">
                                <span className="w-10 h-[2px] bg-white"></span> About Us
                            </button>
                        </div>

                        {/* Heading & Text */}
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Who <span className="text-white">We Are?</span>
                        </h2>
                        <p className="mt-4 text-gray-300">
                            At Intelisync, we are driven by innovation and collaboration, helping businesses refine their digital strategies and embark on transformational journeys in an ever-evolving technological landscape.
                        </p>
                        <p className="mt-3 text-gray-300">
                            With a presence in Dubai, the USA, India, and Singapore, our globally connected teams foster creativity  and cutting-edge solutions, ensuring we stay ahead of emerging technologies.
                        </p>
                        <p className="mt-3 text-gray-300">
                            In an era of rapid digital evolution, Intelisync empowers businesses to navigate complexities by leveraging AI, Web 3.0 Marketing, Blockchain, and advanced digital technologies. Our expertise in AI-driven automation, decentralized finance (DeFi), NFT ecosystems, multi-chain interoperability, and tokenization enables organizations to achieve sustainable growth, enhance security, and gain a competitive edge in the digital economy.
                        </p>
                        <p className="mt-3 text-gray-300">
                            Through Web 3.0 marketing strategies, we help brands engage with decentralized communities, optimize blockchain-based advertising, and drive audience growth across emerging platforms. By integrating AI-powered analytics, data-driven decision-making, and blockchain security, Intelisync delivers scalable, future-ready solutions that empower businesses to thrive in the digital-first world.
                        </p>
                        </motion.div>
                    </div>

                    {/* Right Side: 3D Styled Cards */}
                      {/* Right Side: 3D Styled Cards (Slide-in & Pop Animation) */}
                <motion.div 
                    initial={{ x: 100, opacity: 0, scale: 0.9 }} 
                    animate={{ x: 0, opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.3, ease: "easeOut", ease: "easeOut" }} 
                    className="relative flex justify-center"
                >

                    <div className="relative flex justify-center">
                        {/* Back Card */}
                        <div className="relative w-[350px] h-[460px] flex justify-center">
                            {/* Back Card */}
                            <div className="absolute w-[350px] h-[460px] bg-gradient-to-b from-[#2E8295] to-[#0F292F] rounded-[30px] shadow-2xl opacity-40 translate-x-6 translate-y-6">
                                <div className="absolute inset-4 w-[92%] h-[92%] border border-[#1AB0C4] rounded-[25px]"></div>
                            </div>

                            {/* Front Card */}
                            <div className="relative z-10 w-[350px] h-[460px] bg-gradient-to-b from-[#2E8295] to-[#0F292F] rounded-[30px] shadow-2xl flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:z-20">
                                {/* Inner Border */}
                                <div className="absolute w-[90%] h-[90%] border border-[#1AB0C4] rounded-[25px] flex items-center justify-center">
                                    <h2 className="text-white text-2xl font-semibold">WEB 3.0</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                </div>
            </section>
        </div>
    )
}

export default Section
