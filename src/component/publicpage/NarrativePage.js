import Link from "next/link";

export default function NarrativePage() {
  const content = [
         "In crypto, your brand’s reputation can shape its success. Conversations are happening everywhere, on social media, in investor circles, and across news platforms. If you are not actively shaping the narrative, someone else will. That is where the right crypto PR agency makes a difference.",
         "At Intelisync, we focus on crypto public relations for blockchain projects, startups, and established crypto brands. Our team has deep industry knowledge and strong media connections, helping you get featured in top publications, build trust with your audience, and stand out in a competitive space.",
         "From press public relations to advertising and public relations, we create strategies that keep people talking about your project for the right reasons. Whether you are launching a token, handling a PR challenge, or looking to grow your brand’s presence, we ensure your message reaches the right people.",
         "In crypto, perception is everything. Work with a public relations agency that understands Web3 and knows how to get results. Let us put your brand in the spotlight."
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
                    Public Relation
                    </span>
                </div>
                <div className="absolute w-[200px] h-[500px] blur-[100px] top-[-50px] left-0 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
                </div>
                {/* Title */}
                <h2 className="font-poppins font-[500px] text-[28px] sm:text-[40px] leading-[35px] sm:leading-[50px] tracking-tight">
                Get Your Crypto Brand Noticed with a Leading Crypto PR Agency
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
