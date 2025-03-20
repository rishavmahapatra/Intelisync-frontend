'use client'
import Link from "next/link";

export default function PublicRelatoin() {
    return (
        <div
        className="flex items-center justify-center bg-[url('/banner.webp')] bg-cover bg-center bg-no-repeat h-screen w-full text-white bg-[#020B17]"
        >
            <div className="text-center max-w-3xl">
                <h1 className="font-poppins font-semibold text-[32px] leading-[40px] sm:leading-[50px] md:leading-[55px] tracking-[-0.01%] text-center">
                   Crypto PR Agency for Effective Blockchain & Web3 Public Relations
                </h1>

                <p className="font-poppins text-[18px] leading-[28px] text-center mt-6 sm:mt-8">
                A crypto PR agency specializing in blockchain & Web3 public relations, helping projects build credibility, gain media exposure, & connect with the right audience. 
                </p>

                <button className="mt-6 sm:mt-8 w-[160px] sm:w-[200px] h-[45px] sm:h-[55px] bg-white text-black rounded-full font-semibold shadow-md hover:bg-gray-200 transition">
                    Book a demo
                </button>
            </div>
        </div>
    );
}
