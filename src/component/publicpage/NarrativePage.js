import Link from "next/link";

export default function NarrativePage() {
  const content = [
    "In crypto, your brand’s reputation can shape its success. Conversations are happening everywhere, on social media, in investor circles, and across news platforms. If you are not actively shaping the narrative, someone else will. That is where the right crypto PR agency makes a difference.",
    "At Intelisync, we focus on crypto public relations for blockchain projects, startups, and established crypto brands. Our team has deep industry knowledge and strong media connections, helping you get featured in top publications, build trust with your audience, and stand out in a competitive space.",
    "From press public relations to advertising and public relations, we create strategies that keep people talking about your project for the right reasons. Whether you are launching a token, handling a PR challenge, or looking to grow your brand’s presence, we ensure your message reaches the right people.",
    "In crypto, perception is everything. Work with a public relations agency that understands Web3 and knows how to get results. Let us put your brand in the spotlight."
  ];

  return (
    <div className="bg-[#020B17] text-white py-12 px-6 sm:px-12 md:px-20 lg:px-32">
      
      {/* Breadcrumb Navigation */}
      <div className="text-gray-400 text-sm mb-6">
        <Link href="/" className="hover:text-white transition duration-200">
          Homepage
        </Link>
        <span> &gt; </span>
        <Link href="/service" className="hover:text-white transition duration-200">
          Services
        </Link>
        <span> &gt; </span>
        <span className="text-[#06FFFB]">Public Relation</span>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="font-poppins font-semibold text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] leading-[34px] sm:leading-[42px] md:leading-[50px] text-[#06FFFB]">
        Get Your Crypto Brand Noticed with a Leading Crypto PR Agency
        </h2>

        {content.map((paragraph, index) => (
          <p key={index} className="font-poppins text-[14px] sm:text-[16px] md:text-[18px] leading-[24px] sm:leading-[26px] md:leading-[28px] text-gray-300 mt-4">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
