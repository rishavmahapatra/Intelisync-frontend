import Link from "next/link";

export default function BlockchainBusiness() {
    const content = [
        "AI is no longer just a futuristic concept. It is transforming businesses by making operations smarter and more efficient. Whether you are new to artificial intelligence for beginners or looking to integrate AI development services into your business, we are here to make the process smooth and effective.",
        "As a leading AI development company, we do more than just build AI solutions. We create strategies that align with your business goals and deliver measurable impact. Our artificial intelligence development services help automate processes, analyze data for better decision-making, and enhance customer experiences, giving your business a competitive edge.",
        "With deep expertise in AI-driven innovation, our AI services company develops practical solutions tailored to your industry. From machine learning models that optimize performance to AI-powered chatbots that improve customer interactions and automation that boosts efficiency, we ensure AI works to your advantage.",
        "Work with a trusted AI development agency that understands both the technology and its real-world impact on businesses. Let’s create intelligent solutions that drive long-term growth and keep you ahead of the competition."
    ];

    return (
        <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32 relative">
             
            <div className="max-w-6xl">
                {/* Breadcrumb Navigation */}
                <div className="text-gray-400 text-sm mb-6">
                    <Link href="/" className="hover:text-gray-300 transition text-[15px]">Homepage</Link>
                    <span className="mx-1">&gt;</span>

                    <Link href="/services" className="hover:text-gray-300 text-[15px] transition">Services</Link>
                    <span className="mx-1">&gt;</span>

                    <span className="text-cyan-400 font-medium text-[15px] hover:text-cyan-300 transition">
                        Artificial Intelligence (AI)
                    </span>
                </div>
                    <div className="absolute w-[200px] h-[500px] blur-[100px] top-[-50px] left-0 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
                    </div>

                {/* Title */}
                <h2 className="font-poppins font-[500px] text-[28px] sm:text-[40px] leading-[35px] sm:leading-[50px] tracking-tight">
                    Artificial Intelligence Development Services <br className="hidden sm:block"/> 
                    to Help Your Business Grow
                </h2>
            </div>

            {/* Content */}
            <div className="max-w-6xl">
                {content.map((paragraph, index) => (
                    <p key={index} className="font-poppins text-[16px] sm:text-[18px] font-[400px] leading-[28px] sm:leading-[30px] tracking-tight text-gray-300 mt-4 w-full md:w-[80%]">
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    );
}
