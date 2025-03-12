import Link from "next/link";
export default function GetAhead() {
  const content = [
   "Building a successful healthcare business requires more than providing great care—it demands a thoughtful, strategic marketing approach to drive growth. With the right marketing strategy, you can easily attract new patients, engage with your audience, and streamline your operations, while we take care of the marketing.",
   "We specialize in crafting healthcare marketing strategies that deliver measurable results. Our deep industry knowledge and customized approach help you stand out in the competitive healthcare space. Whether it’s increasing visibility or boosting patient engagement, we ensure your business stays at the forefront of the industry. Through data-driven decisions and continuous optimization, we make sure your growth is sustainable and aligns with industry trends. Let us design a marketing strategy that positions your healthcare business as an authority and drives long-term success."
  ];

  return (
    <div className="flex justify-center bg-[#020B17] text-white h-[720px] lg:px-32 items-center min-h-screen gap-10">
      {/* Image on the middle left side */}
      <div className="flex items-center gap-6">
        <div className="flex-shrink-0">
          <img src="/gamingMarketingLogo.png" alt="Fintech Icon" width={100} height={100} className="md:block hidden" />
        </div>
        
        {/* Text Content */}
        <div className="max-w-4xl mt-0">
          <h1 className="font-poppins font-medium text-[35px] leading-[50px] tracking-[-0.01px]">
            Get ahead of the competition with tailored <br/>marketing strategies for <span className='text-cyan-500'>The Healthcare industry</span>
          </h1>
          
          {content.map((paragraph, index) => (
            <p key={index} className="font-poppins font-normal text-[16px] leading-[30px] tracking-[-0.05px] text-gray-300 mt-6">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
