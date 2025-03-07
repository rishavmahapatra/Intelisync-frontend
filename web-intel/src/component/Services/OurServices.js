export default function OurServices() {
    const services = [
      {
        title: "Artificial Intelligence (AI)",
        description:
          "Unlock efficiency and innovation with AI and machine learning models. Leverage natural language processing, computer vision, and intelligent automation to drive smarter business decisions.",
      },
      {
        title: "Growth Marketing",
        description:
          "Social Media Management, Community Management, Influencers & AMAs, Campaigns & Activations & more.",
      },
      {
        title: "Blockchain Services",
        description:
          "Build secure, scalable, and decentralized solutions with custom blockchain development, including smart contracts, tokenization, multi-chain interoperability, and DeFi integration to power the future of digital innovation.",
      },
      {
        title: "Public Relations",
        description:
          "Enhance your brand’s reputation and visibility with strategic PR campaigns, media outreach, crisis management, and influencer collaborations, ensuring impactful storytelling and strong industry presence.",
      },
      {
        title: "Strategic Advisory",
        description:
          "Personalized advisory services designed to help you overcome the challenges that come with running a successful business.",
      },
      {
        title: "Branding",
        description:
          "Craft a powerful and distinctive brand identity with strategic positioning, compelling storytelling, and cutting-edge design, ensuring your brand stands out in the digital era.",
      },
      {
        title: "Community Management",
        description:
          "Build a vibrant, loyal community with proactive engagement and meaningful interactions. Our community management services enhance brand trust, improve customer retention, and turn followers into long-term brand advocates.",
      },
      {
        title: "Influencer Marketing",
        description:
          "Boost your brand’s visibility with tailored influencer marketing strategies. We connect you with influencers who align with your brand, helping to expand reach, drive engagement, and increase brand trust with your target audience.",
      },
      {
        title: "Web App Development",
        description:
          "Elevate your online presence with innovative, user-centric web design from a proven web development company. We specialize in creating high-performing, visually captivating websites that reflect your brand’s identity and drive engagement.",
      },
    ];
  
    return (
      <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32 text-center">
        <h2 className="text-[30px] md:text-[40px] font-semibold text-[#06FFFB]">
          Our Services
        </h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-[16px] leading-[24px]">
          From multi-chain interoperability to tokenization, our solutions are built to scale and
          transform businesses. Discover how Intelsync can take your vision to the next level.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#08182F] border-b border-cyan-400 rounded-lg p-6 text-left"
            >
              <h3 className="text-[19px] font-semibold leading-[20px]">{service.title}</h3>
              <p className="mt-2 text-[13px] leading-[20px] text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  