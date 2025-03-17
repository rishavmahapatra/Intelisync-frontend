'use client';
import React from 'react';

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

]

function Ourservice() {
    return (
        <div>
            <section className="bg-[#000B18] text-white flex flex-col items-center justify-center py-8 lg:py-16 px-5 md:px-10 lg:px-20 relative">
                {/* Background Blur */}
                <div className="absolute w-[200px] h-[500px] blur-[100px] top-[-50px] right-0 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
                </div>

                {/* Services Title */}
                <div className="relative flex flex-col items-center justify-center text-center py-20 w-full max-w-screen-xl mx-auto">

                    {/* Large Background Text */}
                    <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4rem] md:text-[8rem] lg:text-[12rem] xl:text-[15rem] 
                font-bold uppercase tracking-wide text-transparent outline-text opacity-20 z-0">
                        SERVICES
                    </h1>

                    {/* Section Title */}
                    <div className="relative px-5 py-6 text-white font-medium z-10 text-center">
                        <div className="inline-block bg-gradient-to-r from-[#07CDFF] to-[#06FFF0] bg-clip-text text-transparent">
                            <h2 className="text-[24px] md:text-[30px] leading-[26px] tracking-tight font-medium font-[Poppins]">
                                Our Services
                            </h2>
                        </div>
                        <div className="w-[8rem] h-0.5 bg-[#06FFF0] mx-auto mt-2"></div>

                        <p className="relative mt-2 text-gray-300 max-w-xl mx-auto text-sm md:text-base">
                            Empowering your business with innovative Blockchain, Web3, and AI solutions for a digital future.
                        </p>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8 mt-6 px-2 md:px-4 lg:px-6 w-full max-w-screen-xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative w-full max-w-[350px] h-[300px] opacity-90 transition-all shadow-lg duration-300 group hover:scale-105 mx-auto"
                        >
                            {/* Card with Gradient Border */}
                            <div className="relative w-full h-full p-[2px] rounded-[10px] bg-gradient-to-r from-[#00EEDF] via-[#4C4C4C] to-[#008EAA]">
                                {/* Inner Content */}
                                <div className="w-full h-full p-6 flex flex-col gap-3 rounded-[8px] bg-black">
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
    );
}

export default Ourservice;
