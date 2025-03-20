import { StartupData } from "@/utils/Cards_Data"
export default function GrowthSolution() {
   
    return (
        <div className="bg-[#020B17] relative text-white py-16 px-6 md:px-20 lg:px-32">
            <div className="absolute w-[200px] h-[500px] blur-[100px] top-[-50px] left-0 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
      </div>
            <div className="text-center mb-10">
            <h2><p className="font-poppins font-[600] text-[30px] sm:text-[25px] sm:leading-[40px] tracking-[-0.01%] text-white mt-4 max-w-3xl mx-auto">
            We offer a comprehensive suite of services designed to<br/> fuel growth and expand your digital footprint
                </p>
                </h2>
            </div>
 
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
                {StartupData.map((solution, index) => (
                    <div key={index} className="p-7 border border-cyan-400 rounded-lg bg-[#081828] shadow-lg  h-auto">
                        <h2 className="font-poppins font-[600] text-[18px] text-white leading-[22px] tracking-[-0.01%] mb-3">
                            {solution.title}
                        </h2>
                        <p className="font-poppins font-[400] text-gray-300 text-[14px] leading-[20px] tracking-[-0.01%] mb-5">{solution.description}</p>    
                    </div>
                ))}
            </div>
        </div>
    );
}