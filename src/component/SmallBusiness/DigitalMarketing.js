import SmallBusinessCard, { BlockchainSolution, HealthcareCards } from "@/utils/Cards_Data";

export default function DigitalMarketing() {
    
    return (
        <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32">
            <div className="text-center mb-10">
            <h1><p className="font-poppins font-normal text-[30px] leading-[40px] tracking-[-0.01%] text-gray-300 mt-4 max-w-3xl mx-auto">
            Digital Marketing Services for Small Businesses
                </p>
                </h1>
                <h1><p className="font-poppins font-normal text-[15px] leading-[20px] tracking-[-0.01%] text-gray-300 mt-4 max-w-3xl mx-auto">
                Our tailored digital marketing solutions are designed to unlock your business full potential and fuel long-term growth. Explore our comprehensive services below:
                </p>
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SmallBusinessCard.map((solution, index) => (
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
