'use client';

import Link from "next/link";

export default function Cryptobanner() {
    return (
        <div className="relative flex items-center justify-center md:justify-start w-full min-h-[110vh] sm:min-h-screen text-white bg-[#000B18] z-10 px-6 md:px-16 lg:px-24">
            {/* Background Image */}
            <div className="absolute -top-40 inset-0 bg-[url('/banner.webp')] bg-cover bg-center bg-no-repeat -z-10"></div>

            <div className="w-full max-w-4xl text-center md:text-left">
                <h1 className="font-poppins font-[500] text-[28px] sm:text-[35px] leading-[36px] sm:leading-[42px] text-white">
                    Ignite Your Blockchain & Crypto Project’s <br className="hidden md:block"/> Growth and Watch It Boom!
                </h1>
                <p className="font-poppins font-[400] mt-4 text-gray-200 text-[16px] sm:text-[20px] leading-[24px] sm:leading-[28px]">
                    Accelerate your blockchain and crypto project’s growth with Intelisync’s tailored <br className="hidden md:block"/> 
                    marketing strategies. We focus on expanding your reach, enhancing engagement, <br className="hidden md:block"/> 
                    and helping you lead in a dynamic digital landscape.
                </p>

                <button className="mt-6 sm:mt-8 px-6 py-3 sm:w-[200px] sm:h-[50px] bg-gradient-to-r from-[#00CBE2] via-[#148FBC] to-[#006AFF] text-white rounded-full font-semibold shadow-md transition-all hover:bg-transparent hover:border-2 hover:border-white">
                   <Link href="/contact">Book a demo</Link>
                </button>
            </div>
        </div>
    );
}
