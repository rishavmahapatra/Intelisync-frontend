'use client';
import React, { useState } from 'react'
import { Sparkles, Users, Blocks, Megaphone, Briefcase, PenTool } from "lucide-react";
import { RiMicAiFill } from "react-icons/ri";


const services = [
    {
        title: "Artificial Intelligence",
        description:
            "Unlock efficiency and innovation with custom AI and machine learning models, leveraging  natural language processing, computer vision, and intelligent automation to drive smarter business decisions.",
        icon: <Sparkles size={28} className="text-cyan-300" />,
    },
    {
        title: "Growth Marketing",
        description:
            "Social Media Management, Community Management, Influencers & AMAs, Campaigns & Activations & more",
        icon: <Users size={28} className="text-cyan-300" />,
    },
    {
        title: "Blockchain Services",
        description:
            "We help businesses integrate blockchain to enhance security, streamline operations, and unlock new opportunities in asset management and decentralized systems.",
        icon: <Blocks size={28} className="text-cyan-300" />,
    },
    {
        title: "Public Relations",
        description:
            "Enhance your brand’s reputation and visibility with strategic PR campaigns, media outreach, and influencer collaborations, ensuring impactful storytelling and strong industry presence.",
        icon: <Megaphone size={28} className="text-cyan-300" />,
    },
    {
        title: "Strategic Advisory",
        description:
            "Personalised advisory services designed to help you overcome the challenges that come with running a successful business.",
        icon: <Briefcase size={28} className="text-cyan-300" />,
    },
    {
        title: "Branding",
        description:
            "Craft a powerful and distinctive brand identity with strategic positioning, compelling storytelling, and design, ensuring your brand stands out in the digital era.",
        icon: <PenTool size={28} className="text-cyan-300" />,
    },
    {
        title: "Community Management",
        description:
            "Build a vibrant, loyal community with proactive engagement and meaningful interactions. Our community management services enhance brand trust, improve customer retention, and turn followers into long-term brand advocates.",
        icon: <PenTool size={28} className="text-cyan-300" />,
    },

    {
        title: "Influencer Marketing",
        description:
            "Boost your brand’s visibility with tailored influencer marketing strategies. We connect you with influencers who align with your brand, helping to expand reach, drive engagement, and build lasting trust with your target audience.",
        icon: <PenTool size={28} className="text-cyan-300" />,
    },

    {
        title: "Web App Development",
        description:
            "Elevate your online presence with innovative, user-centric web design from a proven web development company. We specialize in creating high-performing, visually captivating websites that reflect your brand’s identity and drive engagement",
        icon: <PenTool size={28} className="text-cyan-300" />,
    },

];

function Ourservice() {
    return (
        <div>
            <section className="bg-black text-white flex flex-col items-center justify-center py-1 px-6 lg:px-20 relative">
                <div className="relative flex flex-col items-center justify-center text-center py-20 ">

                    {/* Large Background "SERVICES" Text with Outline Effect */}
                    {/* <h1 className="text-[8rem] font-bold uppercase tracking-wide text-transparent outline-text">
                        SERVICES
                    </h1> */}

                    <h1 className="absolute top-15 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] lg:text-[15rem] 
                font-bold uppercase tracking-wide text-transparent outline-text opacity-20 z-0">
                    SERVICES
                </h1>


                    {/* Button Positioned Over "SERVICES" */}
                    <button className="relative px-9 py-2 text-white font-medium rounded-full 
                             bg-gradient-to-r from-[#06deff] to-[#00a2bb] 
                     shadow-[0px_0px_10px_#06deff] border border-cyan-400 
                        hover:scale-105 transition-all z-20">
                        Our Services
                    </button>

                    {/* Description Text Positioned Below the Button */}
                    <p className="relative mt-4 text-gray-300 max-w-xl z-10">
                        Empowering your business with innovative Blockchain, Web3, and AI solutions for a digital future.
                    </p>

                </div>



                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-1">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative w-[341px] h-[300px] rounded-[25px] p-[2px] opacity-90  transition-all shadow-lg duration-300 group group-hover:backdrop-blur-sm hover:backdrop-blur-none hover:scale-105"
                        >
                            {/* Gradient Border */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#008EAA] via-[#4C4C4C] to-[#00EEDF] rounded-[25px]
                  opacity-50 group-hover:opacity-100 transition-all duration-300"></div>

                            {/* Card Content */}
                            <div className="relative w-full h-full bg-gradient-to-t from-[#252525] to-[#026a7f] rounded-[25px] p-6 flex flex-col gap-4  group-hover:blur-sm hover:blur-none 
                      group-hover:shadow-none hover:shadow-[0_0_20px_rgba(6,255,240,0.5)] 
                      transition-all duration-300">
                                {/* Icon and Title */}
                                <div className="flex items-center gap-3">
                                    {service.icon}
                                    <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                                </div>

                                {/* Description - No Extra Space */}
                                <p className="text-gray-200 text-sm">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Ourservice
