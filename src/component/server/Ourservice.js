'use client';
import React from 'react';

const services = [
    {
        title: "Artificial Intelligence",
        description:
            "Intelisync delivers advanced AI development services, integrating machine learning, predictive analytics, and intelligent automation to optimize business processes. As a leading AI development company, we create scalable AI solutions that enhance decision-making and efficiency across industries.",
        icon: <img src="/AIimage.png" alt="AI Icon" className="w-7 h-7" />
    },
    {
        title: "Growth Marketing",
        description:
            "Boost your brand with growth marketing services, including social media,     community management, influencer collaborations, and campaign activations. As   a leading growth marketing company, we drive engagement, visibility, and conversions. ",
        icon: <img src="/Growth Marketing.png" alt="growth icon" className="w-7 h-7" />
    },
    {
        title: "Blockchain Services",
        description:
            "We help businesses integrate blockchain for secure, efficient, and scalable solutions. From blockchain app development services to smart contracts and DeFi, our blockchain development agency builds real world solutions that drive growth. Let’s simplify blockchain solutions development for you.",
        icon: <img src="/Blockchain Services.png" alt="blockchain icon" className="w-7 h-7" />
    },
    {
        title: "Public Relations",
        description:
            "Build credibility and industry presence with our public relation agency. We craft strategic PR campaigns, manage advertising/public relations, and connect brands with media and influencers to amplify their reach and impact.",
        icon: <img src="/Public Relations.png" alt="blockchain icon" className="w-7 h-7" />
    },
    {
        title: "Strategic Advisory",
        description:
            "Get expert strategy advisory services to tackle business challenges. Our strategic advisors offer practical insights, helping you make smart decisions, improve operations, and achieve long-term growth in a competitive market.",
        icon: <img src="/Strategic Advisory.png" alt="blockchain icon" className="w-7 h-7" />,
    },
    {
        title: "Branding",
        description:
            "Your brand is your identity. We create a strong market presence with strategic storytelling and design. Understanding the importance of branding in marketing, we help businesses build trust and stand out. As a leading branding agency, we ensure your branding and marketing drive real impact.",
        icon: <img src="/Branding.png" alt="blockchain icon" className="w-7 h-7" />,
    },
    {
        title: "Community Management",
        description:
            "A strong community builds a strong brand. Our community management services foster engagement, trust, and loyalty, helping businesses turn audiences into lasting advocates. Let a skilled community manager drive meaningful interactions for your brand.",
        icon: <img src="/Community Management.png" alt="blockchain icon" className="w-7 h-7" />,
    },

    {
        title: "Influencer Marketing",
        description:
            "Expand your reach with influencers who truly connect with your audience. Our crypto influencer marketing agency helps you partner with the top crypto influencers, driving engagement and trust for your brand.",
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
            <section className="bg-[#000B18] text-white flex flex-col items-center justify-center py-8 lg:py-16 px-5 md:px-10 lg:px-30 relative">
                {/* Background Blur */}
                <div className="absolute w-[200px] h-[500px] blur-[100px] top-[-50px] right-0 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
                </div>

                {/* Services Title */}
                <div className="relative flex flex-col items-center justify-center text-center py-20 w-full max-w-screen-xl mx-auto">

                    {/* Large Background Text */}
                    <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4rem] md:text-[8rem] lg:text-[12rem] xl:text-[17rem] 
                font-semibold uppercase tracking-wide text-transparent outline-text opacity-5 z-0 ">
                        SERVICES
                    </h1>

                    {/* Section Title */}
                    <div className="relative px-5 py-6 text-white font-medium z-10 text-center">
                        <div className="inline-block bg-gradient-to-r from-[#07CDFF] to-[#06FFF0] opacity-100 bg-clip-text text-transparent">
                            <h2 className="text-[24px] md:text-[30px] leading-[26px] tracking-tight font-medium font-[Poppins]">
                                Our Services
                            </h2>
                        </div>
                        
                        <div className="w-[10rem] h-0.5 bg-[#06FFF0] mx-auto mt-2"></div>

                        <p className="relative mt-2 text-gray-300 max-w-xl mx-auto text-sm md:text-base">
                            Empowering your business with innovative Blockchain,
                        </p>
                        <p className='text-gray-300'>
                             Web3, and AI solutions for a digital future.

                        </p>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 md:gap-12 mt-6 px-2 md:px-6 lg:px-10 w-full max-w-screen-xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative w-full max-w-[300px] h-[300px] opacity-90 transition-all hover:scale-104 cursor-default shadow-lg group mx-auto"
                        >
                            {/* Card with Gradient Border */}
                           < div className="relative w-[341px] h-full p-px rounded-3xl bg-gradient-to-r from-[#00EEDF] via-[#4C4C4C] to-[#008EAA]">
                                {/* Inner Content */}
                                <div className="w-full h-full p-6 flex flex-col gap-3 rounded-3xl bg-gradient-to-t from-[#081824] to-[#022932]">
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
