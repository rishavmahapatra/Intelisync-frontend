"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import logo from "../../../public/photos/intelsynclogo.png";
import Link from "next/link";

const blogs = [
  {
    title:
      "Mastering Web3 Marketing: Strategies to Build, Scale, and Engage Communities ",
    image: "/photos/blog1.webp",
    content:
      "Mastering Web3 Marketing: Strategies to Build, Scale, and Engage CommunitiesThe digital landscape is undergoing a massive transformation with the rise of Web3 technologies. As decentralization, blockchain, and token-based ecosystems reshape industries, businesses must adapt their marketing strategies to thrive in this new paradigm. Web3 marketing introduces innovative approaches to community engagement, brand promotion, and customer interaction. This guide explores the key concepts, strategies, and best practices essential for navigating Web3 marketing.<br>  What is Web3?Web3, often referred to as the next phase of the internet, represents a decentralized ecosystem powered by blockchain technology. ",
      link:'/blogpage/WEB3_Marketing_Blog'
  },
  {
    title: "Blockchain Marketing Book: How to Position Your Project in the Decentralized Era ",
    image: "/photos/blog2.webp",
    content:
      "Blockchain technology is changing how businesses operate and interact with customers. It brings transparency, security, and trust to digital transactions. With the rise of blockchain, marketing strategies are evolving to fit this new landscape. This guide explains blockchain marketing in simple words, offering strategies, benefits, and future trends to help businesses adapt.<br>What is Blockchain?<br> Blockchain is a digital ledger that stores information across multiple computers. It ensures that data is secure, transparent, and cannot be changed once recorded. This technology removes the need for middlemen, making transactions faster and more trustworthy.",
      link:"/blogpage/Blockchain_Blog"
  },
  {
    title: "Crypto Wallet Marketing: Driving Adoption in the Digital Asset Economy ",
    image: "/photos/blog3.webp",
    content:"In the dynamic world of blockchain and cryptocurrencies, success is not solely determined by technology or market performance—it's powered by people. A vibrant crypto community can propel a project from obscurity to mainstream adoption. Community members act as the project's voice, advocates, and early adopters, making them an essential element in any crypto venture’s journey.Whether you're launching a new token, building a decentralized application, or promoting blockchain solutions, creating a strong community requires strategy, dedication, and ongoing engagement. This guide explores actionable steps to cultivate a loyal crypto community that supports your project’s vision and fuels long-term growth.",
      link:'/blogpage/Community_Management_Blog'
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
                <Link href={post.link}>
                <button className="px-4 text-[15px] font-[500] leading-[140%] text-[#2BFAFF] rounded-md transition-all duration-300 hover:underline focus:underline">
                  Read More
                </button>
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

export default Blog;
