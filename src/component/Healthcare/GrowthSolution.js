import { BlockchainSolution, HealthcareCards } from "@/utils/Cards_Data";

export default function GrowthSolution() {
    
    return (
        <div className="bg-[#020B17] h-screen text-white py-16 px-6 md:px-20 lg:px-32">
            <div className="text-center mb-10">
                <h1><p className="font-poppins font-normal text-[25px] leading-[20px] tracking-[-0.01%] text-gray-300 mt-4 max-w-3xl mx-auto">
                Intelisync offers a range of growth driven solutions, including:
                </p>
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {HealthcareCards.map((solution, index) => (
                    <div key={index} className="p-6 border border-cyan-400 rounded-lg bg-[#081828] shadow-lg w-[300px] h-auto">
                        <h2 className="font-poppins font-semibold text-[19px] leading-[20px] tracking-[-0.01%] mb-3">
                            {solution.title}
                        </h2>
                        <ul className="text-gray-300 text-[14px] leading-[24px]">
                            {solution.items.map((item, idx) => (
                                <li key={idx} className="list-disc ml-5">{item}</li>
                            ))}
                        </ul>    
                    </div>
                ))}
            </div>
        </div>
    );
}
