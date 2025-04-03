'use client';

import Link from "next/link";

export default function Singaporebanner() {
    return (
        <div className="relative flex items-center justify-center md:justify-start w-full min-h-screen text-white bg-[#000B18] z-10">

            {/* Background Image */}
            <div className="absolute  inset-0  bg-cover bg-center bg-no-repeat -z-10"
                style={{ backgroundImage: "url('/Singaporeimage.webp')", height: "90vh" }}>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00121A] via-[#002442bb] to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="w-[90%] md:w-[82%] lg:w-[80%] mx-auto text-center sm:text-left">

                <h1 className="font-poppins font-semibold text-[32px] sm:text-[32px] md:text-[50px] leading-[36px] sm:leading-[40px] md:leading-[58px] text-white">
                    Accelerating Blockchain & AI in <br /> Asia&apos;s Smart Tech Capital
                </h1>

                <p className="font-poppins font-medium mt-4 text-gray-200 text-[16px] sm:text-[18px] md:text-[18px] leading-[24px] sm:leading-[26px] md:leading-[28px]">
                    Singapore, a global leader in fintech and smart innovation, is Intelisync&apos;s hub <br />
                    for blockchain, Web3, and AI solutions across Asia. In a city-state that&apos;s shaping <br />
                    2025&apos;s digital frontier, we&apos;re empowering businesses to lead with sustainable, <br />
                    scalable technology.
                </p>

                {/* Button */}
                <div className="mt-8 flex justify-center md:justify-start">
                    <Link href="/contact">
                        <button className="w-[200px] sm:w-[250px] h-[45px] sm:h-[50px] 
                            bg-gradient-to-r from-[#00CBE2] via-[#148FBC] to-[#006AFF] 
                            text-white rounded-full font-medium text-lg shadow-md 
                            transition-all duration-300 border-2 border-transparent
                            hover:bg-none hover:bg-transparent hover:border-white hover:text-white">
                            Schedule a meeting
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}
