"use client";
import React from "react";
import { motion } from "framer-motion";

function Section() {
    return (
        <div className="relative  ">
            {/* Background Gradient Shape */}


            {/* Main Section */}
            <section className="relative overflow-hidden text-white min-h-[690px] py-12 px-4 sm:px-6 lg:px-20 bg-[#000B18]">
                <div className="max-w-7xl  flex flex-col lg:flex-row items-center justify-between gap-12 mx-auto">
                    <div className="absolute w-[200px] h-[200px] blur-[100px] top-30 left-10 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
                    </div>
                    {/* Left Side: Content */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="max-w-2xl z-10"
                    >
                        {/* About Us Button */}
                        <div className="mb-6">
                            <button className="flex items-center gap-3 px-8 py-2 rounded-full bg-gradient-to-r from-[rgba(3,190,223,0.75)] to-[rgba(6,255,240,0.75)] opacity-90 text-white text-lg 
                                 hover:opacity-90 transition">
                                <span className="w-10 h-[2px] bg-white"></span> About Us
                            </button>
                        </div>

                        {/* Heading & Text */}
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        What  <span className="text-white">Defines Us</span>
                        </h2>
                        <p className="mt-4 text-md text-gray-200">
                        Intelisync is a Web3 agency focusing specifically on blockchain marketing and development services. We scale businesses in the decentralized world using innovative marketing techniques, community engagement, and brand visibility.
                        </p>
                        <p className="mt-3 text-md text-gray-200">
                        As your trusted Web3 marketing agency, we run campaigns targeted at maximizing visibility and interaction. From crypto PR and NFT marketing to crypto advertising, we do it all making us one of the top crypto marketing agencies. If you&apos;re expanding your brand, or launching a new project, we ensure you reach the right market.
                        </p>
                        <p className="mt-3 text-md text-gray-200">
                        From crypto project marketing to ICO promotions, Intelisync assists brands look for trusted associations within Web3, fostering long lasting trust. We&apos;re happy to help you scale and create an impact in the blockchain world.

                        </p>
                        {/* <p className="mt-3 text-gray-200">
                            Through Web 3.0 marketing strategies, we help brands engage with decentralized communities, optimize blockchain-based
                            advertising, and drive audience growth across emerging platforms.
                        </p> */}
                    </motion.div>

                    {/* Right Side: 3D Styled Cards */}
                    
                        <div className="relative w-[285px] h-[332px] flex justify-center items-center">

                            {/* Back Card  */}
                            <div className="absolute w-full h-full bg-gradient-to-b from-[#2E8295] to-[#0F292F] 
                             rounded-[30px] l opacity-40 translate-x-7 translate-y-10 ">

                                {/* Inner Border for Back Card */}
                                <div className="absolute w-[92%] h-[92%] rounded-[30px] flex items-center justify-center">

                                    {/* Top Right Border */}
                                    <div className="absolute top-0 right-0 w-[60%] h-[2px] bg-gradient-to-l from-transparent via-[#26DDFF] to-transparent rounded-tr-[30px]"></div>
                                    <div className="absolute top-0 right-0 h-[60%] w-[2px] bg-gradient-to-b from-transparent via-[#26DDFF] to-transparent rounded-tr-[30px]"></div>

                                    {/* Bottom Left Border */}
                                    <div className="absolute bottom-0 left-0 w-[60%] h-[2px] bg-gradient-to-r from-transparent via-[#26DDFF] to-transparent rounded-bl-[30px]"></div>
                                    <div className="absolute bottom-0 left-0 h-[60%] w-[2px] bg-gradient-to-t from-transparent via-[#26DDFF] to-transparent rounded-bl-[30px]"></div>

                                </div>
                            </div>

                            {/* Front Card (Remains Straight) */}
                            <div className="relative z-10 w-full h-full bg-gradient-to-b from-[#2E8295] to-[#0F292F] 
                                rounded-[30px] shadow-2xl flex items-center justify-center transition-transform 
                                duration-300 hover:scale-105 hover:z-20 rotate-0">

                                {/* Inner Border for Front Card */}
                                <div className="absolute w-[92%] h-[92%] rounded-[30px] flex items-center justify-center">

                                    {/* Top Right Border */}
                                    <div className="absolute top-0 right-0 w-[60%] h-[2px] bg-gradient-to-l from-transparent via-[#26DDFF] to-transparent rounded-tr-[30px]"></div>
                                    <div className="absolute top-0 right-0 h-[60%] w-[2px] bg-gradient-to-b from-transparent via-[#26DDFF] to-transparent rounded-tr-[30px]"></div>

                                    {/* Bottom Left Border */}
                                    <div className="absolute bottom-0 left-0 w-[60%] h-[2px] bg-gradient-to-r from-transparent via-[#26DDFF] to-transparent rounded-bl-[30px]"></div>
                                    <div className="absolute bottom-0 left-0 h-[60%] w-[2px] bg-gradient-to-t from-transparent via-[#26DDFF] to-transparent rounded-bl-[30px]"></div>

                                    {/* Text Content */}
                                    <h2 className="text-white text-2xl font-semibold">WEB 3.0</h2>
                                </div>
                            </div>
                        </div>
                   
                </div>
            </section>
        </div>
    );
}

export default Section
