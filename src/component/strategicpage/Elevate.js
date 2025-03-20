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

                    <button className="mt-6 sm:mt-8 w-[160px] sm:w-[200px] h-[45px] sm:h-[55px] bg-white text-black rounded-full font-semibold shadow-md hover:bg-gray-200 transition">
                        Book a demo
                    </button>
            </div>
        </div>
    );
}
