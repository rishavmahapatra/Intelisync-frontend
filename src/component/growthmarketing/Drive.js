import Link from "next/link";

export default function Drive() {
  const content = [
    "Growth marketing is the key to scaling your business in today’s competitive landscape. Our tailored marketing solutions are designed to optimize your campaigns, enhance customer engagement, and deliver measurable results. By integrating innovative marketing strategies into your business approach, you gain the agility and efficiency needed to stay ahead in a constantly evolving market.",
    "We offer growth marketing strategies that align with your unique business objectives, empowering you to make data-driven decisions and boost productivity. From refining customer acquisition strategies to leveraging advanced analytics, our services help you accelerate growth and maximize ROI.",
    "Whether it’s increasing brand visibility, improving conversion rates, or boosting customer retention, our growth marketing solutions provide the tools you need to thrive in a digital-first world. Let us help you elevate your business’s full potential and drive long-term success.",
  ];

  return (
    <div className="bg-[#020B17] text-white py-12 px-6 sm:px-10 md:px-16 lg:px-32">
      {/* Breadcrumbs */}
      <div className="text-gray-400 text-sm mb-6 flex flex-wrap">
        <Link href="/" className="hover:text-white transition duration-200">
          Homepage
        </Link>
        <span className="mx-1">&gt;</span>
        <Link href="/service" className="hover:text-white transition duration-200">
          Services
        </Link>
        <span className="mx-1">&gt;</span>
        <span className="text-[#06FFFB]">Growth Marketing</span>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto text-center sm:text-left">
        <h1 className="font-poppins font-medium text-[28px] sm:text-[34px] md:text-[40px] leading-[36px] sm:leading-[44px] md:leading-[50px] tracking-tight">
          Drive Business Growth with Customized Marketing Solutions
        </h1>

        {content.map((paragraph, index) => (
          <p key={index} className="font-poppins font-normal text-[15px] sm:text-[17px] md:text-[18px] leading-[24px] sm:leading-[28px] md:leading-[30px] text-gray-300 mt-4">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
