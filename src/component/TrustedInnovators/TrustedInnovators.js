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
        <div className="bg-[#000B18] text-white py-16 px-6 md:px-20 lg:px-32">
            <div className="relative w-fit mx-auto pb-2">
                <div className="absolute w-[200px] h-[500px] blur-[100px] top-[50%] left-[50%] rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
                </div>
                <h2 className="min-[320px]:max-[480px]:text-[20px] text-[32px] leading-[26px] text-center relative after:content-[''] after:block after:h-[1px] after:w-full after:bg-gradient-to-r after:from-[#07CDFF] after:to-[#06FFF0] after:absolute after:bottom-0 after:left-0 pb-4">
                    Trusted by Top Innovators
                </h2>
            </div>

            {/* Logo Grid */}
            <div className="grid grid-cols-3 mt-10 w-full max-w-[70%] mx-auto">
                {logos.map((brand, index) => (
                    <div
                        key={index}
                        className={`flex justify-center items-center h-40
                      ${index < logos.length - 3 ? "border-b-2 border-gray-700" : ""}
                      ${index % 3 !== 2 ? "border-r-2 border-gray-700" : ""}
                      ${index % 3 === 1 ? "border-l-2 border-gray-700" : ""}`}
                    >
                        <Image src={brand.src} alt={brand.name} width={150} height={100} />
                    </div>
                ))}
            </div>
        </div>
    );
}
