"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import logo from "../../../public/photos/intelsynclogo.png";

const blogs = [
  {
    title:
      "Empowering your business with innovative Blockchain, Web3, and AI solutions for a digital future.",
    image: "/photos/blog1.webp",
    content:
      "The digital landscape is evolving rapidly, and with it comes the rise of Web 3.0 development. The terms Internet and Web are often used interchangeably, but they hold distinct meanings. As technology advances, we transition from static, text-heavy Web 1.0 to interactive Web 2.0, and now to a decentralized, user-centric Web 3.0. <br><br> Web 3.0 marks a significant leap forward by integrating decentralized systems, smart contracts, AI, and blockchain to create a secure and transparent digital environment.",
  },
  {
    title: "How to Create a Successful Meme Coin Exchange in 2025?",
    image: "/photos/blog2.webp",
    content:
      "Quirky charm, viral potential, affordability, and 100x moonshot potential—this confluence of technology and entertainment is capturing millions’ imaginations (and wallets). Once dismissed as frivolous internet experiments, meme coins have carved a niche in the digital economy, boasting vibrant communities and significant market capitalization.<br><br> In 2024, these whimsical tokens experienced a whopping 500% rise from a $20 billion market capitalization to $120 million by December.",
  },
  {
    title: "Web3 Development Services for Business Evolution?",
    image: "/photos/blog3.webp",
    content:
      "Currently, groundbreaking technologies like Web3, Blockchain, Metaverse, NFTs, and cryptocurrencies are poised to revolutionize industries. The internet, presently dominated by Web 2.0, has thrived with cloud computing and social media platforms. However, 2023 and beyond mark the advent of Web3 a decentralized ecosystem with immense potential to reshape conventional business models. <br><br> As internet meme culture and social media buzz continue to inspire new markets, dedicated platforms will emerge to support this ecosystem.",
  },
];

function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <div className="bg-[#000B18] ">
      <section className="container bg-[#000B18] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
        {/* <div className="flex justify-center mb-10 md:mb-15">
          <div className="inline-block bg-gradient-to-r from-[#07CDFF] to-[#06FFF0] opacity-100 bg-clip-text text-transparent">
            <h2 className="text-[24px] md:text-[30px] leading-[26px] tracking-tight  font-semibold font-[Poppins] border-b border-white pb-2">
              Blog- Our Expert Articles
            </h2>
          </div>
        </div> */}

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          ref={ref}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
          }
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {blogs.map((post, index) => (
            <div
              key={index}
              // read more button adjust
              className="relative border-[1px] border-[rgba(0,143,183,1)] rounded-lg shadow-lg w-full max-w-md mx-auto overflow-hidden pb-13 bg-[#141E29]"
            >
              <div className="relative ">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-md brightness-110 contrast-110"
                  style={{ opacity: "0.5", color: "black" }}
                />

                <div className="absolute inset-0 flex items-center justify-center bg-[black/50] pt-4">
                  <h3 className="text-lg font-semibold text-white text-center p-6">
                    {post.title}
                  </h3>
                </div>

                
              </div>
              {/* blog contain data  */}
              <div className="text-white px-6 py-4 pt-13 bg-[#141E29]">
                <p
                  className="text-gray-300 text-[15px] font-[500] leading-[140%]"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                ></p>
              </div>

              {/* read more button  */}

              <div className="absolute bottom-8 left-2">
                <button className="px-4 text-[15px] font-[500] leading-[140%] text-[#2BFAFF] rounded-md transition-all duration-300 hover:underline focus:underline">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

export default Blog;
