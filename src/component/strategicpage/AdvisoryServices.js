import Link from "next/link";
export default function BlockchainBusiness() {
  const content = [
   "In a fast-paced and competitive business landscape, the right strategy can propel your company to success. Our strategic advisory services offer tailored solutions that enhance performance, optimize operations, and foster innovation.",
      "We collaborate with you to understand your unique challenges and objectives, crafting actionable strategies that align with your business goals. With deep industry insights and market research, we provide the guidance you need to stay ahead.",
      "Specializing in emerging technologies like blockchain, fintech, and digital transformation, our experts help you navigate the complexities of today's business world. Partner with us to streamline processes, boost efficiency, and achieve sustainable growth.",
      "Let us guide you towards long-term success with our strategic advisory services, turning your vision into reality."
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
        <span className="text-[#06FFFB]">Strategic Page</span>
      </div>
      <div className="max-w-3xl">
        <h1 className="font-poppins font-medium text-[40px] leading-[50px] tracking-[-0.01%]">
        Harness Our Vast Media Network to Influence and Enhance Your Brand’s Narrative
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
