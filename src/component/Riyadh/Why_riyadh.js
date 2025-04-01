import Link from "next/link";

export default function Whyriyadh() {
    const content = [
        "Saudi Arabia’s strategic investments in blockchain, AI, and digital transformation make Riyadh a prime location for Web3 adoption. With strong government backing, an evolving regulatory framework, and increasing private sector involvement, the city is poised to lead the next wave of decentralized technology. "
    ];

    return (
        <div className="bg-[#020B17] text-white px-6 md:px-20 lg:px-32 relative ">
             
            <div className="max-w-4xl">
       
                {/* Title */}
                <h2 className="font-poppins font-[500px] text-[40px] sm:text-[40px] leading-[40px] sm:leading-[50px] tracking-tight">
                Why Riyadh? 
                </h2>
            </div>
        
            {/* Content */}
            <div className="max-w-6xl">
                {content.map((paragraph, index) => (
                    <p key={index} className="font-poppins text-[18px] sm:text-[18px] font-[500px] leading-[28px] sm:leading-[30px] tracking-tight text-gray-300 mt-4 w-full md:w-[80%]">
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    );
}
