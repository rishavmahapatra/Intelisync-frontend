'use client'
import Link from "next/link";

export default function Accelerate() {
    return (
        <div className="relative flex items-center justify-center w-full min-h-screen text-white bg-[#020B17] z-10 sm:px-6 py-16 px-6 md:px-20 lg:px-32">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/banner.webp')] bg-cover bg-center bg-no-repeat -z-10"></div>

            {/* Content */}
            <div className="text-center max-w-5xl">
                {/* Title */}
                <h1 className="font-[600px] text-[24px] sm:text-[28px] md:text-[35px] leading-[32px] sm:leading-[38px] md:leading-[45px] tracking-tight text-center">
                    Growth Marketing Agency
                </h1>

                {/* Description */}
                <p className="font-[500px] text-[14px] sm:text-[16px] md:text-[20px] leading-[24px] sm:leading-[30px] md:leading-[40px] text-center mt-2">
                    From targeted campaigns to data-driven insights, we help your business <br className="hidden sm:block"/> scale, attract customers, and maximize ROI
                </p>

                {/* Button */}
                <button className="mt-6 w-[227px] h-[55px] text-[20px] bg-[linear-gradient(90.08deg,#00CBE2_0.07%,#148FBC_62.33%,#006AFF_140.3%)]

                   text-white rounded-full font-[500px] shadow-md transition 
                   hover:border hover:border-white hover:bg-none hover:text-white">
               
                <Link href='/contact' >Book a demo</Link>
                </button>
            </div>
        </div>
    );
}







