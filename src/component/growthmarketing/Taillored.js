import { GrowthCards } from "@/utils/Cards_Data";

export default function Tailored() {
    return (
        <div className="bg-[#020B17] text-white py-12 px-6 sm:px-12 md:px-20 lg:px-32">
            {/* Header Section */}
            <div className="text-center mb-10">
                <h1 className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-bold leading-tight text-[#06FFFB]">
                    Tailored Growth Marketing Services
                </h1>
                <p className="font-poppins text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[28px] text-gray-300 mt-4 max-w-3xl mx-auto">
                    Having a great product or service is just the start—strategic, effective growth marketing is essential to driving sustained success. 
                    Our growth marketing services are designed to expand your reach, boost engagement, and build lasting trust with your audience across multiple channels. 
                    Heres how we can help:
                </p>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {GrowthCards.map((solution, index) => (
                    <div
                        key={index}
                        className="p-6 border border-cyan-400 rounded-lg bg-[#081828] shadow-lg transition-transform duration-300 hover:scale-105"
                    >
                        <h2 className="font-poppins font-semibold text-[18px] sm:text-[20px] leading-[24px]">
                            {solution.title}
                        </h2>

                        <p className="font-poppins text-[14px] sm:text-[15px] leading-[22px] sm:leading-[24px] text-gray-300 mt-2">
                            {solution.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
