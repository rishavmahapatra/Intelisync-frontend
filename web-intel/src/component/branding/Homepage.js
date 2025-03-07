export default function BlockchainBusiness() {
    const content = [
      "How do you distinguish your business from competitors? Are you clearly communicating your brand’s value to your audience? These are crucial questions that every brand must address. Your brand needs to create a meaningful connection with consumers at every touchpoint of your marketing strategy, and it must remain consistent throughout.",
      "When executed correctly, strong branding can reshape how customers perceive and interact with your company. It builds trust, boosts visibility, and drives sales, fostering loyalty and long-term engagement.",
      "As a leading branding agency, we specialize in helping businesses navigate these challenges. We know that effective branding leads to increased market presence and long-term success.",
      "Our approach is tailored to ensure your brand speaks directly to your target audience, fostering a deep emotional connection. We guide you through the entire branding process, making sure your business stands out and stays relevant in today’s competitive market."
    ];
   
    return (
      <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32">
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