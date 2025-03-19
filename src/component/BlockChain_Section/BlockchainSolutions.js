import { BlockchainSolution } from "@/utils/Cards_Data";

export default function BlockchainSolutions() {
    
    return (
        <div className="bg-[#020B17] text-white py-8 px-6 md:px-20 lg:px-32">
            <div className="mb-10">
                <h1 className="text-3xl md:text-5xl min-[320px]:max-[480px]:leading-[40px] sm:leading-[40px] leading-[25px] font-[500]" style={{ fontSize: "30px", color: "#06FFFB" }}>
                    Empower Your Vision with Innovative Blockchain Solutions
                </h1>
                <p className="font-poppins font-[400] text-[13px] leading-[20px] tracking-[-0.01%] text-gray-300 mt-4">
                    Unlock new opportunities with blockchain technology. Our expert services cover every aspect of blockchain development,<br/> from strategy and implementation to optimization, ensuring your project stands out in today’s decentralized world.
                </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {BlockchainSolution.map((solution, index) => (
                    <div
                        key={index}
                        className="p-6 border border-cyan-400 rounded-lg bg-[#D9D9D908] shadow-lg"
                    >
                        <h2 className="font-[500] text-[19px] leading-[25px] tracking-[-0.01em] w-[80%]">
                            {solution.title}
                        </h2>

                        <p className="font-poppins font-normal text-[13px] leading-[20px] tracking-[-0.01%] text-gray-300 mt-2">
                            {solution.description}
                        </p>

                    </div>
                ))}
            </div>
        </div>
    );
}
