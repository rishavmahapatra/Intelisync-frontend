export default function Drive() {
    const content = [
      "Growth marketing is the key to scaling your business in today’s competitive landscape. Our tailored marketing solutions are designed to optimize your campaigns, enhance customer engagement, and deliver measurable results. By integrating innovative marketing strategies into your business approach, you gain the agility and efficiency needed to stay ahead in a constantly evolving market.",
      "We offer growth marketing strategies that align with your unique business objectives, empowering you to make data-driven decisions and boost productivity. From refining customer acquisition strategies to leveraging advanced analytics, our services help you accelerate growth and maximize ROI.",
      "Whether it’s increasing brand visibility, improving conversion rates, or boosting customer retention, our growth marketing solutions provide the tools you need to thrive in a digital-first world. Let us help you elevate your business’s full potential and drive long-term success."
    ];
   
    return (
      <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32">
        <div className="max-w-3xl">
          <h1 className="font-poppins font-medium text-[40px] leading-[50px] tracking-[-0.01%]">
          Drive Business Growth with Customized Marketing Solutions
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