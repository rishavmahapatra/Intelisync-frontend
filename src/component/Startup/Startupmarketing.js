import Image from "next/image"

export default function Marketing() {
    const content = [
        "Is your startup struggling to gain traction and attract the right customers? Building brand awareness and customer loyalty can feel like an uphill battle, but you don’t have to face it alone",
        "We specialize in crafting tailored marketing strategies that drive growth and establish a strong market presence for new businesses. Our team of industry experts brings diverse insights and years of experience to help you accelerate your success. Through data-driven analysis, creative content strategies, and strategic planning, we unlock the full potential of your product or service, enabling you to achieve your goals efficiently and effectively. Let us help you make your startup stand out and thrive in today’s competitive market.",
        "With our expertise, you can overcome common startup hurdles like limited visibility, low brand recognition, and ineffective customer outreach. We’re committed to helping you refine your brand, connect with your target audience, and fuel sustainable growth. Trust us to navigate the complexities of marketing while you focus on scaling your business."
    ];
   
    return (
      <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32 flex justify-center items-center min-h-screen gap-10">

        <div className="mt-6 md:ml-8">
          <Image src="/photos/industry_logo.png" alt="Fintech Icon" width={100} height={100} />
        </div>

        <div className="max-w-2xl">
          <h1 className="font-poppins font-medium text-[30px] leading-[40px] tracking-[-0.01%]">
             Unleash Your Startup’s True Potential with
        </h1>
          <p className=" font-poppins font-semibold text-[30px]  bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent mx-auto w-[75%]">
          Expert Marketing Strategies
          </p>

          {content.map((paragraph, index) => (
            <p key={index} className="font-poppins font-normal text-[17px] leading-[30px] tracking-[-0.01%] text-gray-300 mt-4">
              {paragraph}
            </p>   
          ))}
        </div>
      </div>
    );
  } 



