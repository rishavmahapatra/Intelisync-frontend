import Link from "next/link";
export default function BlockchainBusiness() {
  const content = [
    "As digital transformation reshapes industries, businesses must embrace opportunities to leverage advanced technologies for growth. Blockchain stands at the forefront of this change, offering a highly secure and transparent method for managing data and transactions. From enhancing financial systems to optimizing supply chains, blockchain’s potential is vast.",
    "Our blockchain development services provide tailor-made solutions to elevate your business. With a team of experienced blockchain experts, we design and implement secure-based platforms that boost efficiency and innovation. Let us transform your vision into reality quickly, cost-effectively, and seamlessly.",
    "We work closely with clients to understand their unique needs, delivering scalable blockchain solutions that maximize results and long-term success. By integrating blockchain into your business, you'll experience increased transparency, reduced costs, and enhanced security."
  ];

  return (
    <div className="bg-[#000B18] relative text-white py-16 px-6 md:px-20 lg:px-32">
      <div className="text-gray-400 text-sm mb-6">
        <Link href="/" className="hover:text-white transition duration-200">
          Homepage
        </Link>
        <span> &gt; </span>
        <Link href="/service" className="hover:text-white transition duration-200">
          Services
        </Link>
        <span> &gt; </span>
        <span className="text-[#06FFFB]">Blockchain Development</span>
      </div>
      <div className="absolute w-[200px] h-[500px] blur-[100px] top-[-50px] left-0 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
      </div>
      <div className="w-[60%]">
        <h1 className="font-poppins font-medium text-[40px] leading-[50px] tracking-[-0.01%]">
          Unlock Greater Business Performance through Blockchain Collaboration
        </h1>

        {content.map((paragraph, index) => (
          <p key={index} className="font-poppins font-normal text-[16px] leading-[30px] tracking-[-0.01%] text-gray-300 mt-4">
            {paragraph}
          </p>

        ))}
      </div>
    </div>
  );
}
