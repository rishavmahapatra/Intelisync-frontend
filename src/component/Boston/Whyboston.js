
export default function Whyboston() {
    const content = [
         "Boston’s ecosystem home to MIT, Harvard, and a booming venture capital scene fuels Intelisync’s mission. In 2025, the city is a hotspot for privacy-focused blockchain and AI-driven biotech, with federal pushes for regulated DeFi adoption. We’re leveraging Boston’s strengths to pioneer solutions that resonate nationwide."
    ];

    return (
        <div className="bg-[#020B17] text-white px-6 md:px-20 lg:px-32 relative mt-20">
            <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full opacity-80 z-[50] blur-[90px]
        bg-[radial-gradient(circle,_rgba(4,158,188,0.8)_20%,_rgba(0,55,90,0.7)_50%,_rgba(73,0,116,0.6)_80%)]">
        </div> 
            <div className="max-w-4xl">
       
                {/* Title */}
                <h2 className="font-poppins font-[500px] text-[40px] sm:text-[40px] leading-[35px] sm:leading-[50px] tracking-tight">
                Why Bostan? 
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
