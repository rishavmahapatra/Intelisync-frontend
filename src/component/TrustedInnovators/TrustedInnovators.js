import Image from "next/image";

export default function TrustedInnovators() {
    const logos = [
        { name: "IDEEZA", src: "/BlockChain_Assets/IDEEZA.png" },
        { name: "ANGEVERSE", src: "/BlockChain_Assets/angeverse.png" },
        { name: "LAXCE", src: "/BlockChain_Assets/Laxce.png" },
        { name: "MetaCasino", src: "/BlockChain_Assets/metacasino.png" },
        { name: "Suitstakes", src: "/BlockChain_Assets/suitstakes.png" },
        { name: "SimPredict", src: "/BlockChain_Assets/simpredict.png" },
        { name: "JoyStix", src: "/BlockChain_Assets/Joystix.png" },
        { name: "TechZino", src: "/BlockChain_Assets/techzino.png" },
        { name: "CLEMENTINE", src: "/BlockChain_Assets/clementine.png" },
    ];

    return (
        <div className="bg-[#000B18] text-white py-10 px-4">
            {/* Title Section */}
            <div className="relative text-center pb-4">
                <h2 className="font-poppins font-semibold text-[26px] sm:text-[30px] leading-[40px] tracking-tight">
                    Trusted by Top Innovators
                </h2>
                {/* Underline */}
                <div className="w-24 mx-auto mt-2 h-[2px] bg-cyan-400"></div>
            </div>

            {/* Logo Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10 mx-auto">
                {logos.map((logo, index) => (
                    <div
                        key={index}
                        className="flex justify-center items-center h-24 border border-gray-700 rounded-lg p-4"
                    >
                        <Image src={logo.src} alt={logo.name} width={120} height={60} className="object-contain" />
                    </div>
                ))}
            </div>
        </div>
    );
}
