export default function BlockchainSolutions() {
    const solutions = [
        {
            title: "Social media branding",
            description:
                "From vision to execution, we help you develop and implement actionable strategies that achieve measurable results. Our approach ensures that your business strategy is effective and aligned with your long-term goals."
        },
        {
            title: "Website branding",
            description:
                "Build a website that converts leads into loyal customers with our expert design and marketing strategies. We create cross-platform sites that boost brand exposure and drive growth."
        },
        {
            title: "NFT Branding",
            description:
                "Prepare for the unexpected with our proactive crisis management services. We develop and execute crisis response strategies that protect your brand’s reputation, minimize negative impact, and rebuild trust with key stakeholders."
        },
        {
            title: "Community-driven Branding",
            description:
                "Focuses on building a brand with the active participation and contribution of the community, leveraging Web3's emphasis on peer-to-peer collaboration."
        },
        {
            title: "Metaverse Branding",
            description:
                "Position your brand as an industry leader with our thought leadership services. We craft compelling narratives, develop executive visibility plans, and publication opportunities to enhance your brand’s authority and influence."
        },
        {
            title: "DAO (Decentralized Autonomous Organization) Branding",
            description:
                "Building a brand around the principles of DAOs, where community members have a direct role in decision-making and governance."
        },
    ];

    return (
        <div className="bg-[#020B17] text-white py-24 px-6 sm:px-12 md:px-24 lg:px-32">
            <div className="text-left mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-[500px] leading-tight text-[#06FFFB]">
                    Strategic Branding Solutions for Unforgettable Impact
                </h2>
                <p className="text-[14px] sm:text-[16px] leading-[22px] tracking-tight text-gray-300 mt-2 max-w-3xl">
                    Empower your business with branding solutions designed to elevate your identity, build trust, and set you apart. Our tailored strategies ensure your brand resonates with your audience and stands the test of time. Here&apos;s how we can help:
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {solutions.map((solution, index) => (
                    <div key={index} className="p-px relative rounded-2xl shadow-lg bg-[#081828] min-h-[250px] md:min-h-[280px] lg:min-h-[300px]">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00EEDF] via-[#7F7F7F] to-[#00A9CA]"></div>

                        <div className="p-4 bg-[#0B1522] rounded-2xl relative h-full py-6 px-6 sm:py-8 sm:px-10">
                            <h2 className="font-poppins font-[700px] text-lg sm:text-xl leading-[25px] tracking-tight">
                                {solution.title}
                            </h2>
                            <p className="font-poppins font-[400px] text-sm sm:text-base leading-[20px] tracking-tight text-gray-300 mt-4 break-words">
                                {solution.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

