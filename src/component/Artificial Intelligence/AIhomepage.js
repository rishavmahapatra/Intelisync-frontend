export default function BlockchainBusiness() {
    const content = [
      "AI is reshaping the business landscape, unlocking new opportunities for growth and innovation. Our customized AI solutions are designed to optimize operations, improve decision-making, and enhance customer experiences, driving measurable results. By incorporating AI into your business strategy, you gain the agility and efficiency required to stay competitive in an ever-evolving market.",
      "We provide tailored AI solutions that align with your unique business goals, empowering smarter decisions and boosting productivity. From automating processes to leveraging data-driven insights, our AI services help you stay ahead of the competition and future-proof your business.",
      "Our approach is tailored to ensure your brand speaks directly to your target audience, fostering a deep emotional connection. We guide you through the entire branding process, making sure your business stands out and stays relevant in today’s competitive market.",
    ];
   
    return (
      <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32">
        <div className="max-w-2xl">
          <h1 className="font-poppins font-medium text-[40px] leading-[50px] tracking-[-0.01%]">
           Maximize Your Business&apos;s Full Potential with Customized AI Solutions and Advanced Technology
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