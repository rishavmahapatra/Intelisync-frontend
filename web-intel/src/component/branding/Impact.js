export default function BlockchainSolutions() {
    const solutions = [
        {
            title: "Social media branding",
            description:
                " From vision to execution, we help you develop and implement actionable strategies that achieve measurable results. Our approach ensures that your business strategy is effective and aligned with your long-term goals."        },
        {
            title: "Website branding",
            description:
                "Build a website that converts leads into loyal customers with our expert design and marketing strategies. We create cross-platform sites that boost brand exposure and drive growth.",
        },
        {
            title: "NFT Branding",
            description:
                "Prepare for the unexpected with our proactive crisis management services. We develop and execute crisis response strategies that protect your brand’s reputation, minimize negative impact, and rebuild trust with key stakeholders",
        },
        {
            title: "Community-driven Branding",
            description:
                "Focuses on building a brand with the active participation and contribution of the community, leveraging Web3's emphasis on peer-to-peer collaboration.",
        },
        {
            title: "Metaverse Branding",
            description:
                "Position your brand as an industry leader with our thought leadership services. We craft compelling narratives, develop executive visibility plans, and publication opportunities to enhance your brand’s authority and influence.",
        },
        {
            title: "DAO (Decentralized Autonomous Organization) Branding",
            description:
                "Building a brand around the principles of DAOs, where community members have a direct role in decision-making and governance.",
        },

    ];
 
    return (
        <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32">
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight" style={{ fontSize: "30px", color: "#06FFFB" }}>
                    Empower Your Vision with Innovative Blockchain Solutions
                </h1>
                <p className="font-poppins font-normal text-[13px] leading-[20px] tracking-[-0.01%] text-gray-300 mt-4 max-w-3xl mx-auto">
                    Unlock new opportunities with blockchain technology. Our expert services cover every aspect of blockchain development, from strategy and implementation to optimization, ensuring your project stands out in today’s decentralized world.
                </p>
 
            </div>
 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {solutions.map((solution, index) => (
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