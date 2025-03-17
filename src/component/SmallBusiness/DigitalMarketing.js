import { SmallBusinessCard } from "@/utils/Cards_Data";

export default function DigitalMarketing() {
    return (
        <div className="bg-[#020B17] text-white py-16 px-6 sm:px-12 md:px-20 lg:px-32">
            {/* Heading Section */}
            <div className="text-center mb-10">
                <h1 className="font-poppins font-semibold text-[26px] sm:text-[30px] md:text-[35px] leading-[35px] sm:leading-[40px] text-gray-300 mx-auto">
                    Digital Marketing Services for Small Businesses
                </h1>
                <p className="font-poppins font-normal text-[15px] sm:text-[18px] md:text-[20px] leading-[24px] text-gray-400 mt-4 mx-auto max-w-3xl">
                    Our tailored digital marketing solutions are designed to unlock your business full potential and fuel long-term growth. Explore our comprehensive services below:
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {SmallBusinessCard.map((solution, index) => (
                    <div 
                        key={index} 
                        className="p-6 border border-cyan-400 rounded-lg bg-[#081828] shadow-lg w-full h-auto"
                    >
                        <h2 className="font-poppins font-semibold text-[18px] sm:text-[19px] leading-[24px] mb-3">
                            {solution.title}
                        </h2>
                        <ul className="text-gray-300 text-[14px] leading-[22px]">
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
