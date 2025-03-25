import Link from "next/link";

export default function BlockchainBusiness() {
  const content = [
        "At Intelisync, we provide expert strategy consulting to help businesses make smart decisions, adapt to market changes, and grow in competitive industries. Whether you’re exploring Web3, blockchain, fintech, or digital transformation, we offer clear, practical guidance to keep you moving forward.",
           "Our strategic advisors work closely with you to understand your challenges, uncover new opportunities, and create a solid plan tailored to your business. Instead of generic advice, we focus on real world solutions that help improve operations, increase efficiency, and drive long-term success.",
           "With experience in emerging technologies and digital markets, we help businesses navigate risks, refine their approach, and take advantage of new trends. Whether you’re looking to expand, strengthen your position, or streamline processes, we make sure you have the right strategy to thrive.",
           "Work with Intelisync to build a stronger, smarter business. Let’s move forward together."
       ];

    return (
        <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32 relative">
            <div className="max-w-6xl">
                {/* Breadcrumb Navigation */}
                <div className="text-gray-400 text-sm mb-6">
                    <Link href="/" className="hover:text-gray-300 transition text-[15px]">Homepage</Link>
                    <span className="mx-1">&gt;</span>

                    <Link href="/services" className="hover:text-gray-300 text-[15px] transition">Services</Link>
                    <span className="mx-1">&gt;</span>

                    <span className="text-cyan-400 font-medium text-[15px] hover:text-cyan-300 transition">
                    Strategic Advisory
                    </span>
                </div>
                <div className="absolute w-[200px] h-[500px] blur-[100px] top-[-50px] left-0 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
               </div>
                {/* Title */}
                <h2 className="font-poppins font-[500px] text-[28px] sm:text-[40px] leading-[35px] sm:leading-[50px] tracking-tight">
                What Intelisync Strategy Consulting Can Do for You
                </h2>
            </div>

            {/* Content */}
            <div className="max-w-6xl">
                {content.map((paragraph, index) => (
                    <p key={index} className="font-poppins text-[16px] sm:text-[18px] font-[400px] leading-[28px] sm:leading-[30px] tracking-tight text-gray-300 mt-4 w-full md:w-[80%]">
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    );
}
