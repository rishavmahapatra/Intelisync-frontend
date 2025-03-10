import { Artificial } from "@/utils/Cards_Data"


export default function Artificialservice() {

    return (
        // <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32">
        //     <div className="text-center mb-10">
        <div className="bg-[#020B17] text-white py-24 px-8 md:px-32 lg:px-48">
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight" style={{ fontSize: "30px", color: "#06FFFB" }}>
                    Empower Your Vision with Innovative Blockchain Solutions
                </h1>
                <p className="font-poppins font-normal text-[13px] leading-[20px] tracking-[-0.01%] text-gray-300 mt-4 max-w-3xl mx-auto">
                    Unlock new opportunities with blockchain technology. Our expert services cover every aspect of blockchain development, from strategy and implementation to optimization, ensuring your project stands out in today’s decentralized world.
                </p>
 
            </div>
 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Artificial.map((solution, index) => (
                    <div
                        key={index}
                        className="p-6 border border-cyan-400 rounded-lg bg-[#081828] shadow-lg"
                    >
                        <h2 className="font-poppins font-semibold text-[19px] leading-[20px] tracking-[-0.01%]">
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