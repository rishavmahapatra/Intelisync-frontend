import Image from "next/image"; 
import { FaChartLine, FaHandshake, FaDollarSign } from "react-icons/fa";

export default function FintechSection(){
  return (
    <section className="bg-[#000B18] text-white py-10 px-6 sm:px-8 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-1 font-poppins text-[28px] sm:text-[30px] leading-[38px] sm:leading-[40px]">
          Propel Your Business Forward with
        </h2>
        <h2 className="font-poppins text-2xl md:text-3xl font-semibold mb-10">
          Our Fintech Experts To
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        
        {/* Left Column */}
        <div className="space-y-8 sm:space-y-12">
          <div className="flex items-center space-x-4 sm:space-x-5">
            <Image src="/photos/expert1.png" alt="Fintech Marketing Agency" width={40} height={40} />
            <p className="font-poppins text-[16px] sm:text-[18px]">Boost website traffic and enhance lead conversion.</p>
          </div>
          <div className="flex items-center space-x-4 sm:space-x-5">
            <Image src="/photos/expert2.png" alt="Fintech Marketing Agency" width={40} height={40} />
            <p className="font-poppins text-[16px] sm:text-[18px]">Build trust and establish authority in your industry.</p>
          </div>
          <div className="flex items-center space-x-4 sm:space-x-5">
            <Image src="/photos/expert3.png" alt="Fintech Marketing Agency" width={40} height={40} />
            <p className="font-poppins text-[16px] sm:text-[18px]">Increase revenue and maximize business profitability.</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8 sm:space-y-16 mt-4 sm:mt-2">
          <p className="font-poppins text-[16px] sm:text-[18px]">Strengthen your online presence and grow customer engagement.</p>
          <p className="font-poppins text-[16px] sm:text-[18px]">Optimize digital strategies to accelerate sustainable growth.</p>
        </div>
      </div>
    </section>
  );
}
