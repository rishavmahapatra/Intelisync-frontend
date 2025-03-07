'use client'
import Link from "next/link";
export default function BrandPage() {
    return (
        <div
            className="flex items-center justify-center h-[595px] bg-gradient-to-r from-blue-500 to-purple-500 text-white"
            style={{
                background: "linear-gradient(254.95deg, #086CC4 -2.44%, #9F30FF -2.43%, #00BBD8 50.15%, #00B0C4 68.3%, #068BFF 99.46%, #00468C 99.46%, #009CAD 99.46%)",
            }}
        >
            <div className="text-center max-w-3xl">
                <h1 className="font-poppins font-semibold text-[48px] leading-[55px] tracking-[-0.01%] text-center">
                   Amplify Brand Visibility
                </h1>
 
                <p className="font-poppins font-medium text-[30px] leading-[55px] tracking-[-0.01%] text-center mt-2">
                    Boost Brand Visibility and Strengthen Your <br /> Reputation with Strategic PR Solutions
                </p>

                    <button className="mt-6 w-[200px] h-[55px] bg-white text-black rounded-full font-semibold shadow-md hover:bg-gray-200 transition">
                        Book a demo
                    </button>
            </div>
        </div>
    );
}
