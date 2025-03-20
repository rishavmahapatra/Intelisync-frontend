import { HealthcareCards } from "@/utils/Cards_Data";

export default function GrowthSolution() {
  return (
    <div className="relative bg-[#000B18] min-h-screen text-white py-16 px-6 md:px-20 lg:px-32">
      
      {/* Content Wrapper (Ensures Cards Stay Above Blur) */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mt-20 mb-16">
          <h1 className="font-poppins font-normal text-[25px] leading-[30px] tracking-[-0.01%] text-gray-300 max-w-3xl mx-auto">
            Intelisync offers a range of growth-driven <br /> solutions, including:
          </h1>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-14 gap-y-8">
          {HealthcareCards.map((solution, index) => (
            <div key={index} className="relative rounded-lg w-[300px] h-[325px] p-[2px] bg-gradient-to-r from-[#00EEDF] via-[#7F7F7F] to-[#00A9CA]">

              <div className="relative z-10 bg-[#000B18] rounded-lg h-full flex items-center justify-center">
                <div className="p-8 bg-transparent rounded-lg w-full h-full flex flex-col space-y-8">
                  <h2 className="font-poppins font-semibold text-[18px] leading-[26px] tracking-[-0.01%] mb-4">
                    {solution.title}
                  </h2>
                  <ul className="text-gray-300 text-[14px] leading-[26px] space-y-0">
                    {solution.items.map((item, idx) => (
                      <li key={idx} className="list-disc ml-5">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
