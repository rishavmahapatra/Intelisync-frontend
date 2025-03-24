"use client";
import React from 'react';

const services = [
    {
        title: "Artificial Intelligence",
        description:
            "Intelisync delivers advanced AI development services, integrating machine learning, predictive analytics, and intelligent automation to optimize business processes.",
        icon: <img src="/AIimage.png" alt="AI Icon" className="w-7 h-7" />
    },
    {
        title: "Growth Marketing",
        description:
            "Boost your brand with growth marketing services, including social media, community management, influencer collaborations, and campaign activations.",
        icon: <img src="/Growth Marketing.png" alt="growth icon" className="w-7 h-7" />
    },
    {
        title: "Blockchain Services",
        description:
            "We help businesses integrate blockchain for secure, efficient, and scalable solutions. From blockchain app development services to smart contracts and DeFi, our blockchain development agency builds real-world solutions that drive growth.",
        icon: <img src="/Blockchain Services.png" alt="blockchain icon" className="w-7 h-7" />
    },
    {
        title: "Public Relations",
        description:
            "Build credibility and industry presence with our public relation agency. We craft strategic PR campaigns, manage advertising/public relations, and connect brands with media and influencers.",
        icon: <img src="/Public Relations.png" alt="pr icon" className="w-7 h-7" />
    },
    {
        title: "Strategic Advisory",
        description:
            "Get expert strategy advisory services to tackle business challenges. Our strategic advisors offer practical insights to help you make smart decisions and achieve long-term growth.",
        icon: <img src="/Strategic Advisory.png" alt="advisory icon" className="w-7 h-7" />,
    },
    {
        title: "Branding",
        description:
            "Your brand is your identity. We create a strong market presence with strategic storytelling and design, helping businesses build trust and stand out.",
        icon: <img src="/Branding.png" alt="branding icon" className="w-7 h-7" />,
    },
    {
        title: "Community Management",
        description:
            "A strong community builds a strong brand. Our community management services foster engagement, trust, and loyalty, helping businesses turn audiences into lasting advocates.",
        icon: <img src="/Community Management.png" alt="community icon" className="w-7 h-7" />,
    },
    {
        title: "Influencer Marketing",
        description:
            "Expand your reach with influencers who truly connect with your audience. Our influencer marketing agency helps you partner with top influencers to drive engagement.",
        icon: <img src="/Influencer Marketing.png" alt="influencer icon" className="w-7 h-7" />,
    },
    {
        title: "Web App Development",
        description:
            "Elevate your online presence with innovative, user-centric web design. We specialize in creating high-performing, visually captivating websites that reflect your brand’s identity.",
        icon: <img src="/Web App Development.png" alt="web app icon" className="w-7 h-7" />,
    },
];

function Ourservice() {
    return (
        <div className="w-full max-w-[1440px] mx-auto">
            <section className="bg-[#000B18] text-white flex flex-col items-center justify-center py-8 lg:py-16 px-5 md:px-10 lg:px-20 xl:px-32 relative">
                
                {/* Background Blur */}
                <div className="absolute w-[200px] h-[500px] blur-[100px] top-[-50px] right-25 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
                </div>
                
                {/* Services Title */}
                <div className="relative flex flex-col items-center justify-center text-center py-20 w-full max-w-screen-xl mx-auto">
                    
                    {/* Large Background Text */}
                    <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[10rem] xl:text-[13rem] 
                font-semibold uppercase tracking-wide text-transparent outline-text opacity-5 z-0">
                        SERVICES
                    </h2>
                    
                    {/* Section Title */}
                    <div className="relative px-5 py-6 text-white font-medium z-10 text-center">
                        <div className="inline-block bg-gradient-to-r from-[#07CDFF] to-[#06FFF0] opacity-100 bg-clip-text text-transparent">
                            <h2 className="text-lg sm:text-xl md:text-2xl leading-[26px] tracking-tight font-semibold font-[Poppins] border-b border-white pb-2">
                                Our Services
                            </h2>
                        </div>
                        <p className="relative mt-2 text-gray-300 max-w-xl mx-auto text-sm md:text-base">
                            Empowering your business with innovative Blockchain, Web3, and AI solutions for a digital future.
                        </p>
                    </div>
                </div>
                
                {/* Services Grid */}
                <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-10 mt-6 px-2 md:px-6 w-full max-w-screen-xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative w-full max-w-[341px] h-[300px] opacity-90 transition-all cursor-default shadow-lg group mx-auto rounded-3xl hover:shadow-cyan-400"
                        >
                            <div className="relative w-full h-full p-px rounded-3xl bg-gradient-to-r from-[#00EEDF] via-[#4C4C4C] to-[#008EAA]">
                                <div className="w-full h-full p-6 flex flex-col gap-3 rounded-3xl bg-gradient-to-t from-[#081824] to-[#022932]">
                                    <div className="flex items-center gap-3">
                                        {service.icon}
                                        <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                                    </div>
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
