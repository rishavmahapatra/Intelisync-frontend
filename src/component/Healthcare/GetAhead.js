import Link from "next/link";

export default function GetAhead() {
  const content = [
    "Building a successful healthcare business requires more than providing great care—it demands a thoughtful, strategic marketing approach to drive growth. With the right marketing strategy, you can easily attract new patients, engage with your audience, and streamline your operations, while we take care of the marketing.",
    "We specialize in crafting healthcare marketing strategies that deliver measurable results. Our deep industry knowledge and customized approach help you stand out in the competitive healthcare space. Whether it’s increasing visibility or boosting patient engagement, we ensure your business stays at the forefront of the industry. Through data-driven decisions and continuous optimization, we make sure your growth is sustainable and aligns with industry trends. Let us design a marketing strategy that positions your healthcare business as an authority and drives long-term success."
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-center bg-[#020B17] text-white px-6 lg:px-32 items-center min-h-screen py-10 gap-6 lg:gap-8">
      
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img 
          src="/gamingMarketingLogo.png" 
          alt="Healthcare Icon" 
          width={80} 
          height={80} 
          className="hidden md:block w-20 h-20 lg:w-24 lg:h-24 mx-auto lg:mx-0"
        />
      </div>

      {/* Text Section */}
      <div className="w-full max-w-4xl flex flex-col items-center">
        <h1 className="font-poppins font-medium text-[28px] sm:text-[35px] leading-[40px] sm:leading-[50px] tracking-[-0.01px] text-center">
          Get ahead of the competition with tailored <br/>
          marketing strategies for <span className="text-cyan-500">The Healthcare Industry</span>
        </h1>

       
        <div className="mt-4 sm:mt-6 max-w-2xl text-left">
          {content.map((paragraph, index) => (
            <p key={index} className="font-poppins font-normal text-[15px] sm:text-[16px] leading-[28px] sm:leading-[30px] tracking-[-0.05px] text-gray-300 mt-3 sm:mt-5">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
