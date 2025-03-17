import { PublicRelationCards } from "@/utils/Cards_Data";

export default function PRServicesPage() {
  return (
    <div className="bg-[#020B17] text-white py-12 px-6 sm:px-12 md:px-20 lg:px-32">
      
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-bold leading-tight text-[#06FFFB]">
          Public Relations Services to Elevate Your Brand
        </h1>

        <p className="font-poppins text-[14px] sm:text-[16px] md:text-[18px] leading-[24px] sm:leading-[26px] md:leading-[28px] text-gray-300 mt-4 max-w-3xl mx-auto">
          Our public relations services are crafted to help your brand build trust, enhance visibility, and drive meaningful engagement. 
          We position your business as an industry leader with targeted communication strategies. Here’s how we can support your brand:
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PublicRelationCards.map((solution, index) => (
          <div
            key={index}
            className="p-6 border border-cyan-400 rounded-lg bg-[#081828] shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="font-poppins font-semibold text-[18px] sm:text-[20px] leading-[24px] text-white">
              {solution.title}
            </h2>

            <p className="font-poppins text-[14px] sm:text-[16px] leading-[22px] text-gray-300 mt-2">
              {solution.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
                                  