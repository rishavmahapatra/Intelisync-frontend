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
        <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32">
            <div className="relative w-fit mx-auto pb-2">
                <h2 className="font-poppins font-semibold text-[25px] leading-[40px] tracking-[-0.01%] text-center">
                    Trusted by Top Innovators
                </h2>

                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400"></div>

            </div>


            {/* Logo Grid */}
            <div className="grid grid-cols-3 mt-10 w-[1004px] mx-auto">
                {logos.map((logo, index) => (
                    <div
                        key={index}
                        className={`flex justify-center items-center h-28
              ${index < logos.length - 3 ? "border-b border-gray-700" : ""} 
              ${index % 3 !== 2 ? "border-r border-gray-700" : ""}`}
                    >
                        <Image src={logo.src} alt={logo.name} width={120} height={60} />
                    </div>
                ))}
            </div>
        </div>
    );
}
