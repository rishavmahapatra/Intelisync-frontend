'use client';

import Link from "next/link";

export default function Startupbanner() {
    return (
        <div className="relative flex items-center justify-center md:justify-start w-full min-h-screen text-white bg-[#000B18] z-10 px-6 sm:px-12 lg:px-24">
            {/* Background Image */}
            <div className="absolute -top-40 inset-0 bg-[url('/banner.webp')] bg-cover bg-center bg-no-repeat -z-10"></div>

            <div className="w-full max-w-5xl text-center md:text-left">
                <h1 className="font-Poppins font-[500] text-[32px] sm:text-[38px] md:text-[45px] leading-[38px] sm:leading-[42px] text-white">
                    Drive Startup Growth with Expert Marketing <br className="hidden sm:block"/> Solutions 
                </h1>
                <p className="font-Poppins font-[400] mt-4 text-gray-200 text-[18px] sm:text-[20px] md:text-[22px] leading-[26px] sm:leading-[28px]">
                    Partner with Intelisync to enhance your startup&apos;s success. Create a strong digital <br className="hidden sm:block"/> presence and transform your business idea into a growth-driven reality.
                </p>
                
                <button className="mt-6 sm:mt-8 w-[180px] sm:w-[200px] h-[45px] sm:h-[50px] bg-gradient-to-r from-[#00CBE2] via-[#148FBC] to-[#006AFF] text-white rounded-full font-semibold shadow-md transition relative overflow-hidden hover:bg-transparent hover:border-2 hover:border-white">
                 <Link href="/contact">Book a demo</Link>
                </button>
            </div>
        </div>
    );
}
