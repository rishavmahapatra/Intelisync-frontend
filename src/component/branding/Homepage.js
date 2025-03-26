import Link from "next/link";

export default function BlockchainBusiness() {
    const content = [
        "What makes your brand unique and how do you communicate its value to your audience? In today’s competitive landscape, branding is more than just a logo. It is about creating an identity that resonates with your audience and leaves a lasting impact.",
        "The importance of branding in marketing cannot be overstated. A well-defined brand builds trust, enhances visibility, and drives customer loyalty. If you are wondering what is the importance of branding, it is simple. Branding shapes how your business is perceived and ensures consistency across every interaction.",
        "As a branding agency, we specialize in crafting strategies that help businesses thrive. Our expertise spans branding and marketing, ensuring your brand tells a compelling story that connects with your audience. Whether you need guidance from top branding agencies or are looking for a specialized Web3 branding agency, we create impactful branding solutions that set you apart.",
        "With our tailored approach, we help businesses build strong, authentic brands that stand out in today’s evolving market. Let’s create a brand that speaks directly to your audience and drives long-term success."
    ];

    return (
        <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32 relative">
            <div className="max-w-6xl">
                {/* Breadcrumb Navigation */}
                <div className="text-gray-400 font-[400] mb-6">
                    <Link href="/" className="hover:text-gray-300 transition text-[15px]">Homepage</Link>
                    <span className="mx-1">&gt;</span>

                    <Link href="/services" className="hover:text-gray-300 text-[15px] transition">Services</Link>
                    <span className="mx-1">&gt;</span>

                    <span className="text-cyan-400 font-medium text-[15px] hover:text-cyan-300 transition">
                        Branding
                    </span>
                </div>
                <div className="absolute w-[200px] h-[500px] blur-[100px] top-[-50px] left-0 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
               </div>
                {/* Title */}
                <h2 className="font-poppins font-[500px] text-2xl md:text-[40px] sm:text-3xl  leading-tight tracking-tight">
                    Web3 Branding Agency Helping You Build <br className="hidden sm:block"/> a Powerful Digital Presence
                </h2>

                {/* Content */}
                <div className="max-w-6xl">
                    {content.map((paragraph, index) => (
                        <p key={index} className="font-poppins text-[16px] sm:text-[16px] font-[400px] leading-[30px] sm:leading-[30px] tracking-tight text-gray-300 mt-4 w-full md:w-[80%]">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}
