
'use client';
import { useRef } from "react";
import { Webdevelopment } from "@/utils/Cards_Data";
import { ChevronRight } from "lucide-react";

export default function Web_Carts() {
    const scrollRef = useRef(null);

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <div className="bg-[#020B17] text-white py-8 px-6 md:px-20 lg:px-32 relative">
            <div className="text-left mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-[500px] leading-tight text-[#06FFFB]">
                    Tailored Web Development Services to Drive Your Business Forward
                </h2>

                <p className="text-[14px] sm:text-[16px] leading-[22px] tracking-tight text-gray-300 mt-2 max-w-3xl">
                    From custom solutions to platform enhancements, our web app development services help businesses stay ahead with secure, scalable, and high-performing applications.
                </p>

                <p className="font-poppins font-[400px] text-[17px] leading-[20px] tracking-[-0.01%] text-gray-300 mt-4 max-w-3xl mb-10 ">
                    Our full-service web development offerings include:
                </p>
            </div>

            <div className="relative">
                <div
                    ref={scrollRef}
                    className="flex space-x-6 overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 scrollbar-hide snap-x snap-mandatory"
                >
                    {Webdevelopment.map((solution, index) => (
                        <div key={index} className="relative p-px rounded-2xl shadow-lg bg-[#081828] min-w-[80%] sm:min-w-0 snap-start">
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00EEDF] via-[#7F7F7F] to-[#00A9CA]"></div>

                            {/* Card Content */}
                            <div className="p-4 bg-[#0B1522] rounded-2xl relative h-full py-6 sm:py-8 px-6 sm:px-10">
                                <h2 className="font-poppins font-[700px] text-[19px] sm:text-[20px] leading-[25px] tracking-tight">
                                    {solution.title}
                                </h2>

                                <p className="font-poppins font-[400px] text-[13px] sm:text-[15px] leading-[22px] tracking-tight text-gray-300 mt-4 break-words">
                                    {solution.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Arrow Button (Only on Mobile) */}
                <button
                    onClick={scrollRight}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 sm:hidden 
                                w-10 h-10 flex items-center justify-center border-opacity-40 
                                rounded-full bg-transparent backdrop-blur-md"
                >
                    <ChevronRight className="text-white opacity-60" size={24} />
                </button>
            </div>
        </div>
    );
}
