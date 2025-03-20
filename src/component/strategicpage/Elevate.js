'use client'
import Link from "next/link";

export default function Elevate() {
    return (
        <div
        className="flex items-center justify-center bg-[url('/banner.webp')] bg-cover bg-center bg-no-repeat h-screen w-full text-white bg-[#020B17]"
        >
        
            <div className="text-center max-w-3xl">
                <h1 className="font-poppins font-semibold text-[32px] leading-[40px] tracking-[-0.01%] text-center">
                Expert Strategy Advisory  to Drive Your Business Forward
                </h1>
 
                <p className="font-poppins text-[18px] leading-[28px] text-center mt-6 sm:mt-8">
                Strategy advisory to help your business grow smarter. Intelisync offers expert guidance,real world solutions, and data backed insights for sustainable success

                </p>

                <button className="mt-6 w-[227px] h-[55px] text-[20px] bg-[linear-gradient(90.08deg,#00CBE2_0.07%,#148FBC_62.33%,#006AFF_140.3%)]

                   text-white rounded-full font-semibold shadow-md transition 
                   hover:border hover:border-white hover:bg-none hover:text-white">
                   Book a demo
                </button>
            </div>
        </div>
    );
}

