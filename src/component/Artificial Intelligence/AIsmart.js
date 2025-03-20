import { Artificial } from "@/utils/Cards_Data"


export default function Artificialservice() {

    return (
        
        <div className="bg-[#020B17] text-white py-24 px-8 md:px-32 lg:px-32">
            <div className="text-left mb-12">
                <h2 className="text-3xl md:text-5xl font-500 leading-tight " style={{ fontSize: "30px", color: "#06FFFB" }}>
                Artificial Intelligence Development Services for Smarter Business Growth
                </h2>
                <p className="text-[13px] leading-[20px] tracking-[-0.01%] text-gray-300 mt-1 max-w-3xl">
                Boost efficiency and innovation with expert AI development services. Whether you are exploring artificial intelligence for beginners or seeking advanced solutions, our AI services company provides the right expertise. </p> 

                <p className="text-[13px] leading-[20px] tracking-[-0.01%] text-gray-300 mt-1 max-w-3xl">
                As a leading AI development company, we help businesses automate processes, enhance decision-making, and leverage data-driven insights. Partner with a trusted AI development agency to bring powerful artificial intelligence development services to your business.
                </p>                
            </div>
 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Artificial.map((solution, index) => (
                    
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