"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import logo from "../../../public/photos/intelsynclogo.png";

const blogs = [
  {
    title: "Empowering your business with innovative Blockchain, Web3, and AI solutions for a digital future.",
    image: "/photos/blog1.png", //
     content: "The digital landscape is evolving rapidly, and with it comes the rise of Web 3.0 development. The terms Internet and Web are often used interchangeably, but they hold distinct meanings. As technology advances, we transition from static, text-heavy Web 1.0 to interactive Web 2.0, and now to a decentralized, user-centric Web 3.0. <br><br> Web 3.0 marks a significant leap forward by integrating decentralized systems, smart contracts, AI, and blockchain to create a secure and transparent digital environment.",
  },
  {
    title: "How to Create a Successful Meme Coin Exchange in 2025?",
    image: "/photos/blog2.png",
    content: "Quirky charm, viral potential, affordability, and 100x moonshot potential—this confluence of technology and entertainment is capturing millions’ imaginations (and wallets). Once dismissed as frivolous internet experiments, meme coins have carved a niche in the digital economy, boasting vibrant communities and significant market capitalization.<br><br> In 2024, these whimsical tokens experienced a whopping 500% rise from a $20 billion market capitalization to $120 million by December.",
    
  },
  {
    title: "Web3 Development Services for Business Evolution?",
    image: "/photos/blog3.png",
    content: "Currently, groundbreaking technologies like Web3, Blockchain, Metaverse, NFTs, and cryptocurrencies are poised to revolutionize industries. The internet, presently dominated by Web 2.0, has thrived with cloud computing and social media platforms. However, 2023 and beyond mark the advent of Web3 a decentralized ecosystem with immense potential to reshape conventional business models. <br><br> As internet meme culture and social media buzz continue to inspire new markets, dedicated platforms will emerge to support this ecosystem.",
  }
];

function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true});

  return (
    <div className="relative bg-[#000B18]">
      <div className="absolute w-[200px] h-[500px] blur-[100px] top-[-50px] right-0 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
                    </div>
    <section className="container bg-[#000B18] mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
      
      <div className="relative px-5 py-6 text-white font-medium text-center">
    
    {/* Gradient Text */}
    <h2 className="text-[30px] leading-[46px] font-medium font-[Poppins] 
               bg-gradient-to-r from-[#07CDFF] to-[#06FFF0] bg-clip-text text-transparent " >
            Blog- Our Expert Articles
          </h2>


    {/* Underline (centered & dynamic width) */}
    <div className="mt-3 mx-auto h-0.5 bg-[#06FFF0] w-[calc(100%-2rem)] max-w-[22rem]"></div>

</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((post, index) => (
          <motion.div
            key={index}
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}

            // read more button addjust 
            className="relative border border-gray-700 rounded-lg shadow-lg w-full max-w-md mx-auto overflow-hidden pb-16" 
          >
            <div className="relative">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-md brightness-110 contrast-110"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/50 pt-4">
                <h3 className="text-lg font-semibold text-white text-center p-6">
                  {post.title}
                </h3>
              </div>

              <div className="absolute -bottom-6 left-4">
                <Image
                  src={logo}
                  alt="Intelisync Logo"
                  width={56}
                  height={56}
                  className="w-16 h-16 rounded-full bg-black p-1 opacity-95 shadow-lg border-2 border-gray-1000"
                />
              </div>
            </div>
           {/* blog contain data  */}
            <div className="text-white mt-10 px-6 py-4">
              <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: post.content }}></p>
            </div>

          {/* read more button  */}
            
            <div className="absolute bottom-4 left-6">
               <button className="px-4 py-2 text-sm font-bold text-teal-400 rounded-md transition-all duration-300 hover:underline focus:underline">
                 Read More
               </button>
             </div>
          </motion.div>
        ))}
      </div>
    </section>
    </div>
  );
}

export default Blog;



