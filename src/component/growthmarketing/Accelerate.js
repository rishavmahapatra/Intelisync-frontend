'use client'
import Link from "next/link";

export default function Accelerate() {
    return (
        <div
        className="flex items-center justify-center bg-[url('/banner.webp')] bg-cover bg-center bg-no-repeat h-[70vh] w-full text-white bg-black"
        >
            <div className="max-w-4xl">
                <h1 className="font-poppins font-semibold text-[28px] sm:text-[36px] md:text-[48px] leading-[36px] sm:leading-[44px] md:leading-[55px] tracking-tight">
                    Accelerate Business Growth with Expert Marketing Solutions
                </h1>

                <p className="font-poppins text-[16px] sm:text-[20px] md:text-[24px] leading-[26px] sm:leading-[32px] md:leading-[40px] mt-6">
                    From targeted campaigns to data-driven insights, we help your business scale, attract customers, and maximize ROI.
                </p>

                <div className="mt-8">
                    <button className="w-full sm:w-[250px] h-[55px] bg-white text-black rounded-full font-semibold shadow-md hover:bg-gray-200 transition">
                        Book a demo
                    </button>
                </div>
            </div>
        </div>
    );
}
