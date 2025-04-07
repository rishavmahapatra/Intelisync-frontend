"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Section() {
  const services = [

    { fname: "WEB 3.0", lname: "" },
    { fname: "ARTIFICIAL", lname: "INTELLIGENCE" },
    { fname: "PUBLIC", lname: "RELATIONS" },
    { fname: "BRANDING", lname: "" },
    { fname: "STRATEGIC", lname: "ADVISORY" },
    { fname: "BLOCKCHAIN", lname: "" },
    { fname: "GROWTH", lname: "MARKETING" },
    { fname: "COMMUNITY", lname: "MANAGEMENT" },
    { fname: "INFLUENCER", lname: "/ KOL MARKETING" },


  ];

  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(services.length - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(index); // store current as previous
      setIndex((prevIndex) => (prevIndex + 1) % services.length); // update to next
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);


  const gradientFront =
    "bg-[linear-gradient(180deg,#2E8295_-41.1%,#0F292F_100%)]";
  const gradientBack = "bg-[rgba(46,130,149,0.13)]";

  return (
    <div className="relative">
      {/* Main Section */}
      <section className="relative overflow-hidden text-white min-h-[600px] py-12 px-4 sm:px-6 lg:px-20 bg-[#000B18]">
        <div className="max-w-7xl  flex flex-col lg:flex-row items-center justify-between ">
          {/* Background Gradient */}
          <div
            className="absolute w-[150px] h-[150px] blur-[100px] top-10 left-5 sm:w-[200px] sm:h-[200px] sm:top-30 sm:left-10 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]"
          ></div>

          {/* Left Side: Content */}
          <div className="max-w-2xl z-10 text-center lg:text-left">
            {/* About Us Button */}
            <div className="mb-6 flex justify-center lg:justify-start">
              <button
                className="flex items-center gap-3 px-6 sm:px-8 py-2 rounded-full bg-gradient-to-r from-[rgba(3,190,223,0.75)] to-[rgba(6,255,240,0.75)] opacity-90 text-white text-lg 
                                 hover:opacity-90 transition"
              >
                <span className="w-8 sm:w-10 h-[2px] bg-white"></span> About Us
              </button>
            </div>

            {/* Heading & Text */}
            <h2 className="text-[40px]  leading-tight">
              What <span className="text-white-600">Defines Us</span>
            </h2>
            <p className="mt-3 text-[16px] sm:text-md text-gray-200">
              Intelisync is a Web3 agency focusing specifically on blockchain
              marketing and development services. We scale businesses in the
              decentralized world using innovative marketing techniques,
              community engagement, and brand visibility.
            </p>
            <p className="mt-3 text-[16px] sm:text-md text-gray-200">
              As your trusted Web3 marketing agency, we run campaigns targeted
              at maximizing visibility and interaction. From crypto PR and NFT
              marketing to crypto advertising, we do it all, making us one of
              the top crypto marketing agencies. If you&apos;re expanding your
              brand, or launching a new project, we ensure you reach the right
              market.
            </p>
            <p className="mt-3 text-[16px] sm:text-md text-gray-200">
              From crypto project marketing to ICO promotions, Intelisync
              assists brands looking for trusted associations within Web3,
              fostering long-lasting trust. We&apos;re happy to help you scale
              and create an impact in the blockchain world.
            </p>
          </div>


          {/* Right Side: 3D Styled Cards with Animation */}
          <div className="relative w-[250px] sm:w-[280px] h-[300px] sm:h-[330px] ">
            {/* Back Card (Lower Layer) */}
            <div className="relative w-[250px] sm:w-[280px] h-[300px] sm:h-[330px] ">
              <motion.div
                key={`back-card-${prevIndex}`}
                initial={{ y: -30, opacity: 0.4 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="TopBox moveToBottom absolute top-0 left-0 z-50 flex w-fit items-center justify-center rounded-3xl p-[2px]"
              >
                {/* Back Card */}
                <div className={`relative z-40 w-[230px] h-[280px] sm:w-[260px] sm:h-[310px] overflow-hidden rounded-3xl p-6 text-white flex items-center justify-center text-center ${gradientBack}`}>
                  <div className="relative w-[230px] h-[250px] sm:w-[280px] sm:h-[290px] rounded-3xl p-[3px] border-custom flex items-center justify-center">
                    {/* Display the next service name on the back card */}
                    <span className="text-sm sm:text-lg font-semibold">
                      {services[prevIndex].fname}<br />{services[prevIndex].lname}
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                 key={`front-card-${index}`}
                 initial={{ y: 30, opacity: 0.6 }}
                 animate={{ y: 0, opacity: 1 }}
                 exit={{ y: -20, opacity: 0 }}
                 transition={{ duration: 1, ease: "easeInOut" }}
                className="BottomBox moveToTop absolute top-5 left-5 z-40 flex w-fit items-center justify-center rounded-3xl p-[2px]"
              >
                {/* Front Card */}
                <div className={`relative z-40 w-[230px] h-[280px] sm:w-[260px] sm:h-[310px] overflow-hidden rounded-3xl p-6 text-white flex items-center justify-center text-center ${gradientFront}`}>
                  <div className="relative w-[230px] h-[250px] sm:w-[260px] sm:h-[290px] rounded-3xl p-[3px] border-custom flex items-center justify-center">
                    {/* Display the current service name on the front card */}
                    <span className="text-sm sm:text-lg font-semibold">
                      {services[index].fname}<br /> {services[index].lname}
                    </span>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Section;
