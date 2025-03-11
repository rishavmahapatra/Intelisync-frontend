import Link from "next/link";
export default function BlockchainBusiness() {
  const content = [
    "As digital transformation reshapes industries, businesses must embrace opportunities to leverage advanced technologies for growth. Blockchain stands at the forefront of this change, offering a highly secure and transparent method for managing data and transactions. From enhancing financial systems to optimizing supply chains, blockchain’s potential is vast.",
    "Our blockchain development services provide tailor-made solutions to elevate your business. With a team of experienced blockchain experts, we design and implement secure-based platforms that boost efficiency and innovation. Let us transform your vision into reality quickly, cost-effectively, and seamlessly.",
    "We work closely with clients to understand their unique needs, delivering scalable blockchain solutions that maximize results and long-term success. By integrating blockchain into your business, you'll experience increased transparency, reduced costs, and enhanced security."
  ];

  return (
    <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32">
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
      <div className="max-w-3xl">
        <h1 className="font-poppins font-medium text-[40px] leading-[50px] tracking-[-0.01%]">
          Unlock Greater Business Performance through Blockchain Collaboration
        </h1>

        {content.map((paragraph, index) => (
          <p key={index} className="font-poppins font-normal text-[17px] leading-[30px] tracking-[-0.01%] text-gray-300 mt-4">
            {paragraph}
          </p>

        ))}
      </div>
    </div>
  );
}
