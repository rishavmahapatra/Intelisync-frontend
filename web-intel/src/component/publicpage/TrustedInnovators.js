import Image from "next/image";

export default function TrustedInnovators() {
    const logos = [
        { name: "IDEEZA", src: "/Public_Assets/IDEEZA.png" },
        { name: "ANGEVERSE", src: "/Public_Assets/Angeverse.png" },
        { name: "LAXCE", src: "/Public_Assets/Laxce.png" },
        { name: "MetaCasino", src: "/Public_Assets/MetaCasino.png" },
        { name: "Suitstakes", src: "/Public_Assets/Suistake.png" },
        { name: "SimPredict", src: "/Public_Assets/Simpredict.png" },
        { name: "JoyStix", src: "/Public_Assets/Joystix.png" },
        { name: "TechZino", src: "/Public_Assets/Techzino.png" },
        { name: "CLEMENTINE", src: "/Public_Assets/Clementine.png" },
    ];

    return (
        <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32">
            <div className="relative w-fit mx-auto pb-2">
                <h2 className="font-poppins font-semibold text-[30px] leading-[40px] tracking-[-0.01%] text-center">
                    Trusted by Top Innovators
                </h2>
                <div className="absolute bottom-0 left-0 w-full h-[4px] bg-cyan-400"></div>
            </div>

            {/* Logo Grid */}
            <div className="grid grid-cols-3 mt-10 w-full max-w-[1200px] mx-auto">
                {logos.map((logo, index) => (
                    <div
                        key={index}
                        className={`flex justify-center items-center h-40
              ${index < logos.length - 3 ? "border-b-2 border-gray-700" : ""}
              ${index % 3 !== 2 ? "border-r-2 border-gray-700" : ""}
              ${index % 3 === 1 ? "border-l-2 border-gray-700" : ""}`}
                    >
                        <Image src={logo.src} alt={logo.name} width={200} height={200} />
                    </div>
                ))}
            </div>
        </div>
    );
}
