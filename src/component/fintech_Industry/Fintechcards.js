import { FintechData } from "@/utils/Cards_Data";

export default function Fintechcards() {
  return (
    <div className="relative bg-[#000B18] min-h-screen text-white py-16 px-6 sm:px-12 md:px-20 lg:px-32">
      
      {/* Background Gradient Effect */}
      <div className="absolute w-[200px] h-[500px] blur-[100px] top-[-50px] left-0 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
      </div>

      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="font-poppins font-semibold text-[22px] sm:text-[24px] md:text-[25px] leading-[28px] sm:leading-[32px] tracking-[-0.01%] text-gray-200 mt-4 max-w-3xl mx-auto">
          Intelisync offers a range of growth-driven <br className="hidden md:block"/> solutions, including:
        </h2>
      </div>

      {/* Responsive Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {FintechData.map((solution, index) => (
          <div key={index} className="p-6 border border-cyan-400 rounded-lg bg-[#081828] shadow-lg w-full h-auto">
            <h2 className="font-poppins font-semibold text-[18px] sm:text-[19px] leading-[25px] tracking-[-0.01%] mt-2 mb-4">
              {solution.title}
            </h2>
            <ul className="text-gray-300 text-[14px] leading-[22px] space-y-2">
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
