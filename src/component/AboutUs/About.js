export default function AboutData() {
    const content = [
      "Intelisync empowers businesses to navigate digital transformation with innovative solutions and collaborative strategies. With a presence in Dubai, USA, India, and Singapore, our global teams bring together technology expertise and creative insights to drive business growth in a rapidly evolving digital landscape. Our core services revolve around Web3 marketing, Blockchain ecosystems, AI automation, RWA tokenization, and multi-chain interoperability, helping businesses unlock sustainable digital growth and enhance operational efficiency. As Web3 reshapes the digital world, Intelisync enables brands to build decentralized communities, leverage blockchain-based advertising, and adopt data-driven strategies. We craft bespoke marketing solutions that amplify online presence, improve customer engagement, and connect businesses with niche audiences on emerging platforms. By integrating AI-powered analytics, blockchain security, and multi-chain interoperability, Intelisync delivers scalable, future-ready solutions that empower businesses to thrive in the digital-first economy. Our commitment to collaborative partnerships and cutting-edge technologies positions Intelisync as a trusted partner in driving digital transformation."
    ];
  
    return (
      <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32 relative flex items-center justify-center ">
        <div className="max-w-2xl relative ">
          
        {/*  background effect   */}
        <div className="absolute w-[300px] h-[300px] blur-[100px] top-[0px] -left-50 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
         </div>

          <h2 className="font-poppins font-medium text-[30px] leading-[50px] tracking-tight  text-[#06FFF0] ">
            About Us
          </h2>

          {content.map((paragraph, index) => (
            <p
              key={index}
              className="font-poppins font-normal text-[17px] leading-[30px] tracking-tight text-gray-300 mt-4"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    );
  }
  

