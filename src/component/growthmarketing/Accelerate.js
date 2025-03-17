'use client'
import Link from "next/link";

export default function Accelerate() {
    return (
        <div
            className="flex items-center justify-center min-h-screen px-6 md:px-12 text-white text-center"
            style={{
                background: "linear-gradient(254.95deg, #086CC4 -2.44%, #9F30FF -2.43%, #00BBD8 50.15%, #00B0C4 68.3%, #068BFF 99.46%, #00468C 99.46%, #009CAD 99.46%)",
            }}
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
