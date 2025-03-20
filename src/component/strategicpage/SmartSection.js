import { StrategicCards } from "@/utils/Cards_Data"


export default function SmartSection() {

    return (
        <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight" style={{ fontSize: "30px", color: "#06FFFB" }}>
                Strategy Consulting service for Smarter Growth
                </h2>
                <p className="font-poppins font-normal text-[13px] leading-[20px] tracking-[-0.01%] text-gray-300 mt-4 max-w-3xl mx-auto">
                At Intelisync, we provide strategic advisory services to help businesses tackle challenges, make informed decisions, and drive sustainable growth. Our strategy consultants offer data backed insights and practical solutions tailored to your goals. Let’s build a future ready business together.

                </p>
 
            </div>
 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {StrategicCards.map((solution, index) => (
                    
                    <div
                        key={index}
                        className="p-px relative rounded-2xl shadow-lg bg-[#081828] h-[250px]  "

                    >
                         <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00EEDF] via-[#7F7F7F] to-[#00A9CA]"></div>

                         <div className="p-4 bg-[#0B1522] rounded-2xl relative h-full py-8 px-10">

                        <h2 className="font-poppins font-[700px] text-[19px] leading-[25px] tracking-[-0.01%] whitespace-pre-line ">
                            {solution.title}
                        </h2>
 
                        <p className="font-poppins font-[400px] text-[13px] leading-[20px] tracking-[-0.01%] text-gray-300 mt-4 break-words ">
                            {solution.description}
                        </p>
                        </div>
 
                    </div>
                ))}


            </div>
        </div>
    );
}
