import Link from "next/link";

export default function Whysingapore() {
    const content = [
        "Singapore’s Smart Nation vision, blockchain-friendly Monetary Authority (MAS), and 2025 focus on green tech make it Intelisync’s Asian powerhouse. As a Web3 leader, Singapore drives institutional adoption and metaverse growth perfect for our cutting-edge solutions in fintech, gaming, and trade. "
    ];

    return (
        <div className="bg-[#020B17] text-white px-6 md:px-20 lg:px-32 relative ">
             
            <div className="max-w-4xl">
       
                {/* Title */}
                <h2 className="font-poppins font-[500px] text-[40px] sm:text-[40px] leading-[40px] sm:leading-[50px] tracking-tight">
                Why Singapore? 
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
