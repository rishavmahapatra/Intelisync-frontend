import { FintechData } from "@/utils/Cards_Data";

export default function Fintechcards() {
  return (
    <div className="bg-[#000B18] relative min-h-screen text-white py-16 px-6 md:px-20 lg:px-32">
         <div className="absolute w-[200px] h-[500px] blur-[100px] top-[-50px] left-0 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
      </div>
      <div className="text-center mb-10">
        <h2>
          <p className="font-poppins font-normal text-[25px] sm:text-[25px] sm:leading-[35px] tracking-[-0.01%] text-gray-200 mt-4 max-w-3xl mx-auto">
            Intelisync offers a range of growth-driven <br/>solutions, including:
          </p>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-14 gap-y-8">
        {FintechData.map((solution, index) => (
          <div key={index} className="relative p-[2px] rounded-lg shadow-lg w-[298px] h-[298px] overflow-hidden">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#00EEDF] via-[#7F7F7F] to-[#00A9CA]"></div>

            <div className="relative p-6 bg-[#081828] rounded-lg h-full flex flex-col space-y-8">
              <h2 className="font-poppins font-semibold text-[19px] leading-[25px] tracking-[-0.01%] mt-4 mb-4">
                {solution.title}
              </h2>
              <ul className="text-gray-300 text-[14px] leading-[22px] space-y-2">
                {solution.items.map((item, idx) => (
                  <li key={idx} className="list-disc ml-5">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
