'use client'
import Link from "next/link";
export default function Elevate() {
    return (
        <div
            className="flex items-center justify-center h-[70vh] sm:h-auto min-h-[595px] bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-12"
            style={{
                background: "linear-gradient(254.95deg, #086CC4 -2.44%, #9F30FF -2.43%, #00BBD8 50.15%, #00B0C4 68.3%, #068BFF 99.46%, #00468C 99.46%, #009CAD 99.46%)",
            }}
        >
            <div className="text-center max-w-3xl">
                <h1 className="font-poppins font-semibold text-[32px] sm:text-[40px] md:text-[32px] leading-[40px] sm:leading-[50px] md:leading-[55px] tracking-[-0.01%] text-center">
                Elevate Your Business with Expert Guidance
                </h1>
 
                <p className="font-poppins text-[18px] sm:text-[24px] md:text-[30px] leading-[28px] sm:leading-[35px] md:leading-[40px] text-center mt-6 sm:mt-8">
                Unlock your companys potential with our strategic <br/> advisory services.
                </p>

                    <button className="mt-6 sm:mt-8 w-[160px] sm:w-[200px] h-[45px] sm:h-[55px] bg-white text-black rounded-full font-semibold shadow-md hover:bg-gray-200 transition">
                        Book a demo
                    </button>
            </div>
        </div>
    );
}
