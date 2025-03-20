import { SmallBusinessCard } from "@/utils/Cards_Data";

export default function DigitalMarketing() {
    return (
        <div className="bg-[#020B17] relative text-white mt-10 py-16 px-6 sm:px-12 md:px-20 lg:px-32">
          
           <div className="absolute w-[200px] h-[500px] blur-[100px] top-[-50px] left-0 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
           </div>
            <div className="text-center mb-10">
                <h2 className="font-poppins font-[600] text-[30px] sm:text-[30px] md:text-[35px] leading-[35px] sm:leading-[40px] text-white mx-auto">
                    Digital Marketing Services for Small Businesses
                </h2>
                <p className="font-poppins font-[400] text-[15px] sm:text-[18px] md:text-[20px] leading-[24px] text-gray-400 mt-4 mx-auto max-w-3xl">
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
