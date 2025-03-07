export default function BlockchainSolutions() {
    const solutions = [
        {
            title: "Development & Integration",
            description:
                "Achieve optimal performance, transparency, and security in your decentralized financial application with our specialized DeFi development services, tailored to drive success in the rapidly evolving DeFi ecosystem.",
        },
        {
            title: "Non-Fungible Token (NFT)",
            description:
                "NFTs (Non-Fungible Tokens) represent ownership and authenticity in the digital world, and our services ensure your assets are one-of-a-kind, high in demand, and fully protected.",
        },
        {
            title: "Security Token Offering Solution",
            description:
                "Transform real-world assets into digital tokens to achieve your security token offering goals with our expert guidance. We’ll provide you with robust liquidity options and open doors to global securities trading.",
        },
        {
            title: "Play to Earn Game Development",
            description:
                "As a top play-to-earn game development provider, we focus on delivering unique and immersive gaming experiences that transform how players engage with and enjoy the gaming world.",
        },
        {
            title: "DeFi Solutions Development",
            description:
                "Achieve optimal performance, transparency, and security in your decentralized financial application with our specialized DeFi development services, tailored to drive success in the rapidly evolving DeFi ecosystem.",
        },
        {
            title: "Enterprise Blockchain Development",
            description:
                "Achieve optimal performance, transparency, and security in your decentralized financial application with our specialized DeFi development services, tailored to drive success in the rapidly evolving DeFi ecosystem.",
        },
        {
            title: "Cryptocurrency Wallet Development",
            description:
                "Deliver an exceptional experience to your users with intuitive, feature-loaded cryptocurrency wallets that ensure the highest security standards, offering smooth and reliable performance on both mobile and desktop platforms.",
        },
        {
            title: "Smart Contract Development & Audit",
            description:
                "With our smart contract development and audit services, you can trust that we'll enhance performance by automating transactions, boosting security, and reducing costs.",
        },
        {
            title: "Expert Blockchain Consulting & Strategy",
            description:
                "Empower your business with innovative blockchain solutions through our expert consulting services. We identify high-impact use cases, implement scalable strategies, and streamline adoption amidst growth, competitive edge in today's digital landscape.",
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
