import { HealthcareCards } from "@/utils/Cards_Data";

export default function GrowthSolution() {
  return (
    <div className="relative bg-[#000B18] min-h-screen text-white py-16 px-6 md:px-20 lg:px-32">
      <div className="absolute w-[200px] h-[500px] blur-[100px] bottom-[-200px] left-0 rotate-[148.52deg] 
                    bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
      </div>

      {/* Header */}
      <div className="text-center mt-20 mb-12 px-4">
        <h2 className="font-poppins font-normal text-[22px] sm:text-[25px] leading-[30px] tracking-[-0.01%] text-gray-300 max-w-3xl mx-auto">
          Intelisync offers a range of growth-driven <br className="hidden sm:block" /> solutions, including:
        </h2>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {HealthcareCards.map((solution, index) => (
          <div key={index} className="p-6 border border-cyan-400 rounded-lg bg-[#081828] shadow-lg w-full h-auto">
            <h2 className="font-poppins font-semibold text-[18px] leading-[26px] tracking-[-0.01%] mb-4">
              {solution.title}
            </h2>
            <ul className="text-gray-300 text-[14px] leading-[26px] space-y-1">
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
