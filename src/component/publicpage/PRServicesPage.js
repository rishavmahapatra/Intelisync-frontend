import { PublicRelationCards } from "@/utils/Cards_Data";

export default function PRServicesPage() {
  return (
    <div className="bg-[#020B17] text-white py-12 px-6 sm:px-12 md:px-20 lg:px-32">
      
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-bold leading-tight text-[#06FFFB]">
        Crypto Public Relations Agency to Elevate Your Brand
        </h2>

        <p className="font-poppins text-[14px] leading-[24px] text-gray-300 mt-4 max-w-3xl mx-auto">
        In the competitive crypto space, the right PR strategy can make all the difference. Our crypto PR agency helps you build trust, boost visibility, and connect with the right audience. With strong press public relations and media outreach, we position your brand as a leader.
        Partner with a public relations agency that understands crypto and drives real impact. Let’s put your brand in the spotlight
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
                                  