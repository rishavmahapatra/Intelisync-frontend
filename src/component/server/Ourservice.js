"use client";
import Link from "next/link";
import { useRef } from "react";
import { FaAngleRight } from "react-icons/fa6";

const services = [
    {
        title: "Artificial Intelligence",
        description:
            "Intelisync delivers advanced AI development services, integrating machine learning, predictive analytics, and intelligent automation to optimize business processes. As a leading AI development company, we create scalable AI solutions that enhance decision-making and efficiency across industries.",
        icon: <img src="/AIimage.webp" alt="Web3 Marketing" className="w-7 h-7" />,
        link: "/services/ai-development-services",
    },
    {
        title: "Growth Marketing",
        description:
            "Boost your brand with growth marketing services, including social media,     community management, influencer collaborations, and campaign activations. As   a leading growth marketing company, we drive engagement, visibility, and conversions. ",
        icon: (
            <img src="/Growth Marketing.webp" alt="Web3 Marketing" className="w-7 h-7" />
        ),
        link: "/services/growth-marketing-agency"

    },
    {
        title: "Blockchain Services",
        description:
            "We help businesses integrate blockchain for secure, efficient, and scalable solutions. From blockchain app development services to smart contracts and DeFi, our blockchain development agency builds real world solutions that drive growth. Let’s simplify blockchain solutions development for you.",
        icon: (
            <img
                src="/Blockchain Services.webp"
                alt="Web3 Marketing"
                className="w-7 h-7"
            />
        ),
        link: "/services/blockchain-development-services"
    },
    {
        title: "Public Relations",
        description:
            "Build credibility and industry presence with our public relation agency. We craft strategic PR campaigns, manage advertising/public relations, and connect brands with media and influencers to amplify their reach and impact.",
        icon: <img src="/Public Relations.webp" alt="Web3 Marketing" className="w-7 h-7" />,
        link: "/services/public-relation"
    },
    {
        title: "Strategic Advisory",
        description:
            "Get expert strategy advisory services to tackle business challenges. Our strategic advisors offer practical insights, helping you make smart decisions, improve operations, and achieve long-term growth in a competitive market.",
        icon: (
            <img
                src="/Strategic Advisory.webp"
                alt="Web3 Marketing"
                className="w-7 h-7"
            />
        ),
        link: "/services/strategy-advisor"
    },
    {
        title: "Branding",
        description:
            "Your brand is your identity. We create a strong market presence with strategic storytelling and design. Understanding the importance of branding in marketing, we help businesses build trust and stand out. As a leading branding agency, we ensure your branding and marketing drive real impact.",
        icon: <img src="/Branding.webp" alt="Web3 Marketing" className="w-7 h-7" />,
        link: "/services/web3-branding-agency/"
    },
    {
        title: "Community Management",
        description:
            "A strong community builds a strong brand. Our community management services foster engagement, trust, and loyalty, helping businesses turn audiences into lasting advocates. Let a skilled community manager drive meaningful interactions for your brand.",
        icon: (
            <img
                src="/Community Management.webp"
                alt="Web3 Marketing"
                className="w-7 h-7"
            />
        ),
        link: "/services/web3-community-Management-agency"
    },
    {
        title: "Influencer Marketing",
        description:
            "Expand your reach with influencers who truly connect with your audience. Our crypto influencer marketing agency helps you partner with the top crypto influencers, driving engagement and trust for your brand.",
        icon: (
            <img
                src="/Influencer Marketing.webp"
                alt="Web3 Marketing"
                className="w-7 h-7"
            />
        ),
        link: "/services/web3-influencer-marketing/"
    },
    {
        title: "Web App Development",
        description:
            "Elevate your online presence with innovative, user-centric web design from a proven web development company. We specialize in creating high-performing, visually captivating websites that reflect your brand’s identity and drive engagement.",
        icon: (
            <img
                src="/Web App Development.webp"
                alt="Web3 Marketing"
                className="w-7 h-7"
            />
        ),
        link: "/services/web-app-development/"
    },

];

function Ourservice() {
    const scrollRef = useRef(null);
    const scrollRight = () => {
        if (window.innerWidth < 768 && scrollRef.current) {
            // Scroll only on mobile (screen width < 768px)
            scrollRef.current.scrollLeft += scrollRef.current.clientWidth;
        }
    };
    return (
        <div className="w-full max-w-[1440px] mx-auto">
            <section className="bg-[#000B18] overflow-x-hidden text-white flex flex-col items-center justify-center py-8 lg:py-16 px-5   md:px-10 lg:px-20 xl:px-32 relative">
                {/* Background Blur */}
                <div className="absolute w-[200px] h-[500px] blur-[100px] top-[-50px] right-25 rotate-[148.52deg]
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
                </div>

                {/* Services Title */}
                <div className="relative flex flex-col items-center justify-center text-center py-20 w-full max-w-screen-xl mx-auto">
                    {/* Large Background Text */}
                    <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[10rem] xl:text-[13rem] font-semibold uppercase tracking-wide text-transparent outline-text opacity-5 z-0">
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
                            Empowering your business with innovative Blockchain,<br /> Web3, and AI solutions for a digital future.
                        </p>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="relative w-full md:w-auto overflow-x-auto md:overflow-visible scrollbar-hide">
                    <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-6 px-2 md:px-6 w-full max-w-screen-xl mx-auto">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="relative min-w-[80%] sm:min-w-[45%] md:min-w-0 max-w-[341px] min-h-[250px] sm:h-[300px] opacity-90 transition-all cursor-default shadow-lg group mx-auto rounded-3xl
                                hover:shadow-[4px_7px_22.7px_rgba(6,255,240,0.35)] hover:bg-gradient-to-bl hover:from-[#175351] hover:via-[#18374B] hover:to-[#24292B]"
                            >
                                {/* Border Effect */}
                                <div className="relative w-full h-auto sm:h-full p-px rounded-3xl bg-gradient-to-bl from-[#00EEDF] via-[#4C4C4C] to-[#008EAA]">
                                    {/* Inner Content */}
                                    <Link href={service.link} >
                                        <div
                                            className="w-full h-[250px] sm:h-full p-6 flex flex-col gap-3 rounded-3xl bg-gradient-to-t from-[#081824] to-[#022932]
                                        transition-all duration-300 group-hover:bg-gradient-to-bl group-hover:from-[#175351] group-hover:via-[#18374B] group-hover:to-[#24292B]">
                                            <div className="flex items-center gap-3 min-h-[20%]">
                                                {service.icon}
                                                <h2 className="text-lg font-semibold text-white">{service.title}</h2>
                                            </div>
                                            <p className="text-gray-300 text-sm line-clamp-2 sm:line-clamp-none">
                                                {service.description}
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                        {/* <button
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 p-2 rounded-full z-10 sm:hidden block"
                            onClick={scrollRight}
                        >
                            <FaAngleRight />
                        </button> */}
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Ourservice;