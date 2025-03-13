'use client';
import React, { useState } from 'react'
import { Sparkles, Users, Blocks, Megaphone, Briefcase, PenTool } from "lucide-react";
import { RiMicAiFill } from "react-icons/ri";


const services = [
    {
        title: "Artificial Intelligence",
        description:
            "Unlock efficiency and innovation with custom AI and machine learning models, leveraging  natural language processing, computer vision, and intelligent automation to drive smarter business decisions.",
        icon: <img src="/AIimage.png" alt="AI Icon" className="w-7 h-7" />
    },
    {
        title: "Growth Marketing",
        description:
            "Social Media Management, Community Management, Influencers & AMAs, Campaigns & Activations & more",
        icon: <img src="/Growth Marketing.png" alt="growth icon" className="w-7 h-7" />
    },
    {
        title: "Blockchain Services",
        description:
            "We help businesses integrate blockchain to enhance security, streamline operations, and unlock new opportunities in asset management and decentralized systems.",
        icon: <img src="/Blockchain Services.png" alt="blockchain icon" className="w-7 h-7" />
    },
    {
        title: "Public Relations",
        description:
            "Enhance your brand’s reputation and visibility with strategic PR campaigns, media outreach, and influencer collaborations, ensuring impactful storytelling and strong industry presence.",
        icon: <img src="/Public Relations.png" alt="blockchain icon" className="w-7 h-7" />
    },
    {
        title: "Strategic Advisory",
        description:
            "Personalised advisory services designed to help you overcome the challenges that come with running a successful business.",
        icon: <img src="/Strategic Advisory.png" alt="blockchain icon" className="w-7 h-7" />,
    },
    {
        title: "Branding",
        description:
            "Craft a powerful and distinctive brand identity with strategic positioning, compelling storytelling, and design, ensuring your brand stands out in the digital era.",
        icon: <img src="/Branding.png" alt="blockchain icon" className="w-7 h-7" />,
    },
    {
        title: "Community Management",
        description:
            "Build a vibrant, loyal community with proactive engagement and meaningful interactions. Our community management services enhance brand trust, improve customer retention, and turn followers into long-term brand advocates.",
        icon: <img src="/Community Management.png" alt="blockchain icon" className="w-7 h-7" />,
    },

    {
        title: "Influencer Marketing",
        description:
            "Boost your brand’s visibility with tailored influencer marketing strategies. We connect you with influencers who align with your brand, helping to expand reach, drive engagement, and build lasting trust with your target audience.",
        icon: <img src="/Influencer Marketing.png" alt="blockchain icon" className="w-7 h-7" />,
    },

    {
        title: "Web App Development",
        description:
            "Elevate your online presence with innovative, user-centric web design from a proven web development company. We specialize in creating high-performing, visually captivating websites that reflect your brand’s identity and drive engagement",
        icon: <img src="/Web App Development.png" alt="blockchain icon" className="w-7 h-7" />,
    },

];

function Ourservice() {
    return (
        <div>
            <section className="bg-[#000B18] text-white flex flex-col items-center justify-center py-1 px-6 lg:px-20 relative">
                <div className="absolute w-[200px] h-[500px] blur-[100px] top-[-50px] right-0 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
                </div>
                <div className="relative flex flex-col items-center justify-center text-center py-20 ">


                    <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem] lg:text-[15rem] 
                font-bold uppercase tracking-wide text-transparent outline-text opacity-20 z-0">
                        SERVICES
                    </h1>


                    {/* Button Positioned Over "SERVICES" */}
                    <div className="relative px-5 py-6 text-white font-medium  z-10 text-center">
                        {/* Gradient Text */}
                        <div className="inline-block bg-gradient-to-r from-[#07CDFF] to-[#06FFF0] bg-clip-text text-transparent ">
                            <h2 className="text-[30px] leading-[26px] tracking-tightest font-medium font-[Poppins]">Our Services</h2>
                        </div>

                        {/* Underline */}
                        <div className="w-[8rem] h-0.5 bg-gray-400 mx-auto mt-2"></div>

                        {/* Description */}
                        <p className="relative mt-1 text-gray-300 max-w-xl mx-auto ">
                            Empowering your business with innovative Blockchain,
                        </p>
                        <p className='text-gray-300 max-w-xl mx-auto'> Web3, and AI solutions for a digital future.</p>
                    </div>

                </div>



                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 px-4">
  {services.map((service, index) => (
    <div
      key={index}
      className="relative w-full max-w-[350px] h-[300px] rounded-[10px] 
                 opacity-90 transition-all shadow-lg duration-300 group hover:scale-105"
    >
      {/* Card with Gradient Border */}
      <div
        className="relative w-full h-full p-[2px] transition-all duration-300 rounded-[10px]"
        style={{
          border: "2px solid",
          borderImage: "linear-gradient(228.92deg, #00EEDF 0.09%, #4C4C4C 51.92%, #008EAA 99.91%)",
          borderImageSlice: 1,
        }}
      >
        {/* Card Content */}
        <div className="relative w-full h-full bg-gradient-to-b from-[#06FFF020] to-[#41414120] 
                        p-6 flex flex-col gap-3 rounded-[10px]">
        
          {/* Icon and Title */}
          <div className="flex items-center gap-3">
            {service.icon}
            <h3 className="text-lg font-semibold text-white">{service.title}</h3>
          </div>
    
          {/* Description */}
          <p className="text-gray-300 text-sm">{service.description}</p>
        </div>
      </div>
    </div>
  ))}
</div>



            </section>
        </div>
    )
}

export default Ourservice
