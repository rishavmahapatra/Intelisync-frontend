import Image from "next/image";
import Link from 'next/link'

export default function Marketing() {
  const content = [
    "Building a successful fintech business goes beyond innovation, it requires a smart, strategic approach to drive growth. With the right marketing strategy, you can effortlessly attract high-quality leads, strengthen your brand, and focus on scaling your operations, while we take care of the rest.",
    "We specialize in delivering fintech marketing strategies that produce tangible results. Combining our deep industry insights with tailored approaches, we help you navigate the fintech landscape with ease. From boosting visibility to enhancing customer engagement, our strategies put your business ahead of the curve. With a data-driven approach and continuous optimization, we ensure your growth remains sustainable and in line with evolving market trends. Let us craft the perfect marketing strategy to position your fintech business as an industry leader and drive long-term success.",
  ];

  return (
    <div className="bg-[#000B18] text-white py-16 px-6 sm:px-12 md:px-20 lg:px-32 flex flex-col md:flex-row justify-center items-center min-h-screen gap-8 md:gap-12">
      
      {/* Image Section */}
      <div className="mt-4 md:ml-8 flex-shrink-0">
        <Image 
          src="/photos/industry_logo.png" 
          alt="Fintech Marketing Agency" 
          width={80} 
          height={80} 
          className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] mx-auto md:mx-0"
        />
      </div>

      {/* Text Section */}
      <div className="max-w-2xl w-full text-center md:text-left">
        <h2 className="font-poppins font-medium text-[24px] sm:text-[30px] leading-[36px] sm:leading-[40px] tracking-[-0.01%]">
          Get ahead of the competition with focused
        </h2>
        <p className="font-poppins decoration-cyan-500 decoration-2 font-semibold text-[24px] sm:text-[30px] bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent mx-auto md:mx-0">
          Fintech <Link href='/services/web3-influencer-marketing/' className='underline'>Marketing</Link>  Strategies
        </p>

        {content.map((paragraph, index) => (
          <p key={index} className="font-poppins font-normal text-[16px] sm:text-[17px] leading-[28px] sm:leading-[30px] tracking-[-0.01%] text-gray-300 mt-4">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
