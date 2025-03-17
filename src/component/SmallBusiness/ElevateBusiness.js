import Link from "next/link";

export default function ElevateBusiness() {
  const content = [
    "Small businesses aren’t just smaller versions of big corporations—they have their own unique stories, challenges, and opportunities. To thrive, you need more than cookie-cutter marketing strategies. You need a partner that understands how to turn your distinct brand into a competitive advantage.",
    "Our small business marketing team specializes in crafting bespoke strategies that help you build your brand, connect with your target audience, and drive growth. We take a hands-on, data-driven approach, fine-tuning every campaign to align with your business goals and budget.",
    "From boosting your online presence to nurturing loyal customers, we deliver real, lasting results. With our help, you’ll transform challenges into opportunities and rise above the competition in today’s digital marketplace. Ready to grow? We’re here to help every step of the way.",
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-[#020B17] text-white py-16 px-6 sm:px-12 md:px-20 lg:px-32 min-h-screen gap-10">
      {/* Image on the Left (Hidden on Small Screens) */}
      <div className="flex-shrink-0 md:block hidden">
        <img
          src="/gamingMarketingLogo.png"
          alt="Fintech Icon"
          width={100}
          height={100}
          className="w-[80px] md:w-[100px]"
        />
      </div>

      {/* Text Content */}
      <div className="max-w-4xl text-center md:text-left">
        <h1 className="font-poppins font-medium text-[26px] sm:text-[32px] md:text-[35px] leading-[36px] sm:leading-[42px] md:leading-[50px] tracking-[-0.01px]">
          Elevate Your<span className="text-cyan-500"> Small Business </span> 
          with Smart, Tailored <br className="hidden md:block"/> Marketing Solutions
        </h1>

        {content.map((paragraph, index) => (
          <p key={index} className="font-poppins font-normal text-[15px] sm:text-[16px] leading-[26px] sm:leading-[30px] text-gray-300 mt-6">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
