'use client';

import Link from "next/link";

export default function Ukbanner() {
    return (
        <div className="relative flex items-center justify-center md:justify-start w-full h-screen text-white bg-[#000B18] z-10 ">

            {/* Background Image */}
            <div className="absolute -top-40 inset-0 bg-[url('/banner.webp')] bg-cover bg-center bg-no-repeat -z-10"></div>

            {/* Content Container */}
            <div className="w-[82%] mx-auto text-left">

                <h1 className="font-Poppins font-[600] text-[32px] sm:text-[32px] md:text-[50px] leading-[36px] sm:leading-[40px] md:leading-[58px] text-white">
                Revolutionizing Blockchain & AI <br/> Across Europe’s Financial Epicenter  
                </h1>

                <p className="font-Poppins font-[500] mt-4 text-gray-200 text-[16px] sm:text-[18px] md:text-[18px] leading-[24px] sm:leading-[26px] md:leading-[28px]">
                London, a global titan in finance and tech, is Intelisync&poas;s launchpad for blockchain, Web3, and AI solutions across Europe. From Canary Wharf&poas;s trading floors to Shoreditch&poas;s creative hubs, we&poas;re empowering businesses to dominate the decentralized landscape of 2025.                 </p>
                
                {/* Button */}
                <button className="mt-8 w-[250px] sm:w-[300px] h-[45px] sm:h-[50px] bg-gradient-to-r from-[#00CBE2] via-[#148FBC] to-[#006AFF] text-white rounded-full font-[500] text-[20px] shadow-md transition relative overflow-hidden hover:bg-transparent hover:border-2 hover:border-white">
                  <Link href="/contact">Schedule a meeting</Link>
                </button>

            </div>
        </div>
    );
}





