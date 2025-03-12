import Image from "next/image";
import { FaChartLine, FaHandshake, FaDollarSign } from "react-icons/fa";
 
export default function GrowthHealthcare(){
  return (
    <section className="bg-[#0B1320] text-white py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-1 font-poppins text-[30px] leading-[40px]">
          Propel Your Business Forward with
        </h2>
        <h2 className="font-poppins text-2xl md:text-3xl font-semibold mb-10">
          Our Fintech Experts To
        </h2>
      </div>
 
      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 ">
        {/* Left Column */}
        <div className="space-y-12">
          <div className="flex items-center space-x-5">
            <Image src="/photos/expert1.png" alt="Expert 1" width={40} height={40} />
            <p className="font-poppins">Increase patient acquisition and retention.</p>
          </div>
          <div className="flex items-center space-x-5">
            <Image src="/photos/expert2.png" alt="Expert 2" width={40} height={40} />
            <p className="font-poppins">Build trust and establish authority in the healthcare sector.</p>
          </div>
          <div className="flex items-center space-x-5">
            <Image src="/photos/expert3.png" alt="Expert 3" width={40} height={40} />
            <p className="font-poppins">Drive revenue and improve profitability through strategic marketing.</p>
          </div>
        </div>
 
        {/* Right Column */}
        <div className="space-y-16 mt-2">
          <p className="font-poppins">Strengthen your digital presence and enhance patient engagement.</p>
          <p className="font-poppins">Optimize your marketing approach for sustainable, long term growth.</p>
        </div>
      </div>
    </section>
  );
}