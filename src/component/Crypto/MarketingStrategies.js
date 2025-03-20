import React from 'react'
import Image from "next/image";

function MarketingStrategies() {
    const content = [
        "Crypto projects aren’t just another business—they’re digital revolutions with unique opportunities and untapped potential. To thrive in this fast-paced space, you need more than one-size-fits-all marketing. You need a partner who understands your vision and knows how to ignite real growth",
        "Our expert crypto marketing team crafts bold, customized strategies that amplify your project, engage your community, and accelerate your success. With a data-driven approach, we fine-tune every campaign to align with your goals and deliver results that matter.",
        "From skyrocketing visibility to building a loyal user base, we help you cut through the noise and lead the way in the competitive crypto market. Ready to elevate your crypto project? We’re here to power your next level of growth."
       ];
  return (
    <div>
        <div className="flex justify-center bg-[#020B17] text-white h-[720px] lg:px-32 items-center min-h-screen gap-10">
      {/* Image on the middle left side */}
      <div className="flex items-center gap-6">
        <div className="flex-shrink-0">
          <Image src="/Marketing.png" alt="Fintech Icon" width={100} height={100} className="md:block hidden" />
        </div>
       
        {/* Text Content */}
        <div className="max-w-4xl mt-0">
          <h2 className="font-poppins text-center font-medium text-[35px] leading-[50px] tracking-[-0.01px]">
          Supercharge Your Crypto Project with Dynamic  <br />
          <span className='' style={{ color: "rgba(6, 255, 251, 1)" }}>Marketing Strategies</span>
          </h2>
         
          {content.map((paragraph, index) => (
            <p key={index} className="font-poppins font-normal text-[16px] leading-[30px] tracking-[-0.05px] text-gray-300 mt-6">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default MarketingStrategies