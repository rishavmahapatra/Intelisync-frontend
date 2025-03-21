'use client';

import Link from "next/link";

export default function Innovation() {
    return (
        <div className="relative flex items-center justify-center md:justify-start w-full min-h-screen text-white bg-[#000B18] z-10 px-6 sm:px-10">
            {/* Background Image */}
            <div className="absolute -top-40 inset-0 bg-[url('/banner.webp')] bg-cover bg-center bg-no-repeat -z-10"></div>
            
            {/* Content Container */}
            <div className="w-full max-w-3xl md:max-w-4xl text-center md:text-left md:pl-[5%]">
                <h1 className="font-Poppins font-medium text-[28px] sm:text-[32px] md:text-[35px] leading-[36px] sm:leading-[40px] md:leading-[42px]">
                    Healthcare Marketing Agency Driving Growth <br/> and Innovation in Healthcare
                </h1>
                <p className="font-Poppins font-normal mt-4 text-gray-200 text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[26px] md:leading-[28px]">
                    Count on our healthcare marketing strategies to elevate your practice, hospital, <br className="hidden md:block"/> or healthcare technology company.
                </p>
                
                {/* Button */}
                <button className="mt-8 w-[180px] sm:w-[200px] h-[45px] sm:h-[50px] bg-gradient-to-r from-[#00CBE2] via-[#148FBC] to-[#006AFF] text-white rounded-full font-semibold shadow-md transition relative overflow-hidden hover:bg-transparent hover:border-2 hover:border-white">
                  <Link href="/contact">Book a demo</Link>  
                </button>
            </div>
        </div>
    );
}
