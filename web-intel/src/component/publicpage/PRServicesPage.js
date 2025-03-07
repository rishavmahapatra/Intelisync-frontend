export default function PRServicesPage() {
    const solutions = [
        {
            title: "Strategy Execution",
            description:
                "We implement the strategy by leveraging our vast media network, ensuring your brand is showcased in reputable publications that shape public perception and influence key audiences.",
        },
        {
            title: "Audit & Report",
            description:
                "We start with a comprehensive brand audit to evaluate how your brand is currently perceived. You’ll receive a detailed report with actionable insights and opportunities for improving your brand’s image and market positioning",
        },
        {
            title: "Insight-Driven Strategy",
            description:
                "With a deep understanding of your brand’s perception, our PR team develops a strategic, data-driven plan to improve your brand’s recognition and reputation among your target audience",
        },
        {
            title: "Performance Tracking",
            description:
                "As a top play-to-earn game development provider, we focus on delivering unique and immersive gaming experiences that transform how players engage with and enjoy the gaming world.We continuously track the performance of your media coverage and public sentiment, making real-time adjustments and follow-ups as necessary, while keeping you informed throughout the entire process.",
        },
        {
            title: "Crisis Management",
            description:
                "Prepare for the unexpected with our proactive crisis management services. We develop and execute crisis response strategies that protect your brand’s reputation, minimize negative impact, and rebuild trust with key stakeholders.",
        },
        {
            title: "Thought Leadership Development",
            description:
                "Position your brand as an industry leader with our thought leadership services. We craft compelling narratives, develop executive visibility plans, and publication opportunities to enhance your brand’s authority and influence.",
        },
    ];
 
    return (
        <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32">
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight" style={{ fontSize: "30px", color: "#06FFFB" }}>
                Public Relations Services to Elevate Your Brand
                </h1>
                <p className="font-poppins font-normal text-[13px] leading-[20px] tracking-[-0.01%] text-gray-300 mt-4 max-w-3xl mx-auto">
                Our public relations services are crafted to help your brand build trust, enhance visibility, and drive meaningful engagement. We position your business as an industry leader with targeted communication strategies. Here’s how we can support your brand:
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
 
 