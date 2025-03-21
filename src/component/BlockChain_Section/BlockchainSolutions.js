import { BlockchainSolution } from "@/utils/Cards_Data";

export default function BlockchainSolutions() {

    return (
        <>
            <div className="bg-[#020B17] text-white py-8 px-6 md:px-20 lg:px-32">
                <div className="mb-10">
                    <h2 className="text-3xl md:text-5xl leading-[40px] md:leading-[25px] font-[500]" style={{ fontSize: "30px", color: "#06FFFB" }}>
                        Bringing Your Blockchain Ideas to Life
                    </h2>
                    <p className="font-poppins font-[400] text-[13px] leading-[20px] tracking-[-0.01%] text-gray-300 mt-4">
                        Blockchain is not merely a technology it&apos;s a game-changer. Whether you&apos;re creating<br /> something new or refining what you have, we secure your blockchain project, make<br /> it efficient, and future-proof it.
                    </p>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {BlockchainSolution.map((solution, index) => (
                        <div
                            key={index}
                            className="p-6 border border-cyan-400 rounded-lg bg-[#D9D9D908] shadow-lg"
                        >
                            <h2 className="font-[500] text-[17px] md:text-[19px] leading-[25px] tracking-[-0.01em] w-[80%]">
                                {solution.title}
                            </h2>

                            <p className="font-poppins font-normal text-[13px] leading-[20px] tracking-[-0.01%] text-gray-300 mt-2">
                                {solution.description}
                            </p>

                        </div>
                    ))}
                </div>
            </div>
            <div className="text-center pt-16 md:hidden block">
                <h2 className="text-[20px] md:text-2xl font-[500] text-white relative inline-block mb-6 pb-2 tracking-[-0.01%]">
                    Trusted by Top Innovators
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-[#06FFF0] via-[#00aaff] to-[#0192BA]"></span>
                </h2>
            </div>
        </>

    );
}
