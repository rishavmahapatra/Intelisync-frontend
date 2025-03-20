import { StrategicCards } from "@/utils/Cards_Data";

export default function SmartSection() {
    
    return (
        <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight" style={{ fontSize: "30px", color: "#06FFFB" }}>
                Strategy Consulting service for Smarter Growth
                </h2>
                <p className="font-poppins font-normal text-[13px] leading-[20px] tracking-[-0.01%] text-gray-300 mt-4 max-w-3xl mx-auto">
                At Intelisync, we provide strategic advisory services to help businesses tackle challenges, make informed decisions, and drive sustainable growth. Our strategy consultants offer data backed insights and practical solutions tailored to your goals. Let’s build a future ready business together.

                </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {StrategicCards.map((solution, index) => (
                    <div
                        key={index}
                        className="p-6 border border-cyan-400 rounded-lg bg-[#081828] shadow-lg"
                    >
                        <h2 className="font-poppins font-semibold text-[19px] leading-[20px] tracking-[-0.01%]">
                            {solution.title}
                        </h2>

                        <p className="font-poppins font-normal text-[13px] leading-[20px] tracking-[-0.01%] text-gray-300 mt-2">
                            {solution.description}
                        </p>

                    </div>
                ))}
            </div>
        </div>
    );
}
