import Link from "next/link";
export default function ElevateBusiness() {
  const content = [
   "Small businesses aren’t just smaller versions of big corporations—they have their own unique stories, challenges, and opportunities. To thrive, you need more than cookie-cutter marketing strategies. You need a partner that understands how to turn your distinct brand into a competitive advantage.",
   "Our small business marketing team specializes in crafting bespoke strategies that help you build your brand, connect with your target audience, and drive growth. We take a hands-on, data-driven approach, fine-tuning every campaign to align with your business goals and budget.",
   "From boosting your online presence to nurturing loyal customers, we deliver real, lasting results. With our help, you’ll transform challenges into opportunities and rise above the competition in today’s digital marketplace. Ready to grow? We’re here to help every step of the way.",
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
          Elevate Your<span className='text-cyan-500'> Small Business </span> with Smart, Tailored<br/>Marketing Solutionsmarketing strategies for 
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
