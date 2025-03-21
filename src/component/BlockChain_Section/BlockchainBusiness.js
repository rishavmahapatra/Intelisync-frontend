import Link from "next/link";
export default function BlockchainBusiness() {
  const content = [
    "At Intelisync, we develop blockchain solutions that make business processes efficient, secure, and transparent. Need to simplify transactions, reduce expenses, or introduce a new level of trust? We've got you covered.",
    "We deliver bespoke blockchain solutions that shine in the fields of finance, supply chain, and marketing. We simplify the integration of blockchain through an effortless integration process. Whether you're building a new blockchain platform from scratch or revamping your existing one, we can help you design solutions that bring efficiency and boost profits.",
    "We also leverage blockchain for marketing, helping brands attain visibility through targeted campaigns, NFT launches, and token promotions. "
  ];

  return (
    <div className="bg-[#000B18] relative text-white py-16 px-6 md:px-20 lg:px-32">
      <div className="text-gray-400 text-sm mb-6">
        <Link href="/" className="hover:text-white transition duration-200">
          Homepage
        </Link>
        <span> &gt; </span>
        <Link href="/services" className="hover:text-white transition duration-200">
          Services
        </Link>
        <span> &gt; </span>
        <span className="text-[#06FFFB]">Blockchain Development</span>
      </div>
      <div className="absolute w-[200px] h-[500px] blur-[100px] top-[-50px] left-0 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
      </div>
      <div className="md:w-[60%]">
        <h2 className="font-medium text-[28px] leading-[45px] md:text-[40px] md:leading-[50px]">
          {/* Unlock Greater Business<br/> Performance through<br/> Blockchain Collaboration */}
          Empowering Companies to <br/>Leverage the Full Potential <br/>of Blockchain

        </h2>

        {content.map((paragraph, index) => (
          <p key={index} className="font-normal text-[16px] leading-[30px] tracking-[-0.01%] text-gray-300 mt-4 w-[85%]">
            {paragraph}
          </p>

        ))}
      </div>
    </div>
  );
}
