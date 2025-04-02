export default function Bostonimpact() {
    const impactcontent = [
        "Intelisync powers Boston’s digital ascent with blockchain-secured healthcare networks (reducing breaches by 30%), tokenized funding for startups, and AI tools for personalized education. In 2025, our privacy-first DeFi platforms attract institutional players, while our sustainable blockchain initiatives align with Boston’s green tech push. We collaborate with local innovators to set U.S. industry standards."
    ];

    const leadcontent = [
        "Partner with Intelisync to lead 2025’s blockchain and AI revolution, tailored to Boston’s legacy of disruption. Let’s shape America’s digital future, together."
    ];

    return (
        <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32 relative">
            <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full opacity-80 z-[50] blur-[90px] bg-[radial-gradient(circle,_rgba(4,158,188,0.8)_20%,_rgba(0,55,90,0.7)_50%,_rgba(73,0,116,0.6)_80%)]"></div>
            
            <div className="max-w-4xl text-center md:text-left">
                {/* Title */}
                <h2 className="font-poppins font-[500] text-[40px] sm:text-[40px] leading-[43px] sm:leading-[50px] tracking-tight">
                    Our Impact in Boston? 
                </h2>
            </div>
            
            {/* Content */}
            <div className="max-w-6xl text-center md:text-left">
                {impactcontent.map((paragraph, index) => (
                    <p key={index} className="font-poppins text-[18px] sm:text-[18px] font-[500] leading-[28px] sm:leading-[30px] tracking-tight text-gray-300 mt-4 w-full md:w-[80%]">
                        {paragraph}
                    </p>
                ))}
            </div>

            <div className="max-w-4xl mt-16 text-center md:text-left">
                {/* Title */}
                <h2 className="font-poppins font-[500] text-[40px] sm:text-[40px] leading-[43px] sm:leading-[50px] tracking-tight">
                    Ready to Lead in Boston? 
                </h2>
            </div>

            {/* Content */}
            <div className="max-w-6xl text-center md:text-left">
                {leadcontent.map((paragraph, index) => (
                    <p key={index} className="font-poppins text-[18px] sm:text-[18px] font-[500] leading-[28px] sm:leading-[30px] tracking-tight text-gray-300 mt-4 w-full md:w-[80%]">
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    );
}