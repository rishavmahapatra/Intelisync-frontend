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
                    <div className="relative w-[312px] h-[532px] rounded-2xl overflow-hidden border border-gray-700 shadow-lg">
                        <Image
                            src="/founderimage.png"
                            alt="Javed Khan"
                            fill
                            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  // Helps Next.js optimize image loading
                            className="object-contain"
                        />
                    </div>
                    

                    {/* Text Section */}
                    <div className="text-center lg:text-left max-w-2xl">
                        <button className="bg-gradient-to-r from-[rgba(3,190,223,0.75)] to-[rgba(6,255,240,0.75)] opacity-90 text-white px-6 py-2 rounded-full font-semibold mb-4 flex items-center justify-center gap-4">
                        <span className="border-t-1 border-white w-10"></span>
                            Meet our Founder
                        </button>
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#edf1f2] to-[#06FFF0] bg-clip-text text-transparent ">Javed Khan</h2>
                        <span>Visionary Leadership in Web3 & Blockchain Marketing </span>
                        <p className="text-gray-300 f mt-4  font-light">
                        Success in Web3 requires more than just innovation. It takes strategic leadership. At Intelisync, Javed Khan leads the way, bringing over 15 years of expertise in blockchain marketing and Web3 growth strategies. His goal is to help brands navigate the decentralized world with strong marketing, strategic PR, and effective blockchain solutions.
                        </p>
                        <p className='text-gray-300  mt-1  font-light'>
                        Under his leadership, Intelisync has grown into a trusted Web3 marketing agency, offering services in crypto PR, NFT marketing, and blockchain PR. By launching successful Web3 projects and building engaged communities, Intelisync has established itself among the top crypto marketing agencies.

                        </p>
                        <p className='text-gray-300  mt-1  font-light'>
                        With deep expertise in real-world asset tokenization, multi-chain interoperability, and scalable blockchain marketing, Javed has positioned Intelisync at the forefront of the industry. Whether it’s an NFT launch, a DeFi campaign, or a tailored crypto PR strategy, Intelisync helps brands gain the visibility they need in an evolving digital space.
                        </p >

                        <p className='text-gray-300  mt-1  font-light'>With a clear vision for the future of Web3, he transforms ideas into real-world success and helps businesses thrive in the decentralized economy.
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