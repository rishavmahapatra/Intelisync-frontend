import Link from "next/link";

export default function BlockchainBusiness() {
    const content = [
      "AI is no longer just a futuristic concept. It is transforming businesses by making operations smarter and more efficient. Whether you are new to artificial intelligence for beginners or looking to integrate AI development services into your business, we are here to make the process smooth and effective",
      "As a leading AI development company, we do more than just build AI solutions. We create strategies that align with your business goals and deliver measurable impact. Our artificial intelligence development services help automate processes, analyze data for better decision making, and enhance customer experiences, giving your business a competitive edge.",
      "With deep expertise in AI driven innovation, our AI services company develops practical solutions tailored to your industry. From machine learning models that optimize performance to AI powered chatbots that improve customer interactions and automation that boosts efficiency, we ensure AI works to your advantage.",
      "Work with a trusted AI development agency that understands both the technology and its real world impact on businesses. Let’s create intelligent solutions that drive long term growth and keep you ahead of the competition."
    ];
   
    return (
      <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32">
        <div className="max-w-6xl">

        <div className="text-gray-400 text-sm mb-6 h-[20px] w-[389px] ">
                <Link href="/" className="hover:text-gray-300 transition text-[15px]">Homepage</Link>
                <span className="mx-1">&gt;</span>

                <Link href="/services" className="hover:text-gray-300 text-[15px] transition">Services</Link>
                <span className="mx-1">&gt;</span>

                <span className="text-cyan-400 font-medium text-[15px] hover:text-cyan-300 transition">
                    Artificial Intelligence (AI)
                </span>
            </div>

          <h2 className="font-poppins font-[500px] text-[40px] leading-[50px] tracking-[-0.01%]">
           Artificial Intelligence Development Services <br/>to Help Your Business Grow
           

          </h2>
          </div>

          {content.map((paragraph, index) => (
            <p key={index} className="font-poppins  text-[16px] font-[400px] leading-[30px] tracking-[-0.01%] text-gray-300 mt-4 w-[50%]">
              {paragraph}
            </p>
   
          ))}
      </div>
    );
  }