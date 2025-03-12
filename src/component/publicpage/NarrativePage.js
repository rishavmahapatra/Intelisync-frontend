import Link from "next/link";
export default function NarrativePage() {
  const content = [
   "Conversations about your brand are happening continuously, both online and offline whether you're aware of them or not. Don’t let third parties, who may not have your brand’s best interests at heart, dominate the narrative.",
   "By partnering with Intelisync for targeted PR services, you can take control of the conversation surrounding your business. Many members of our PR team have roots in the media industry, which gives us a unique advantage. With our extensive network of media connections, we help clients shape and sustain a positive public image that resonates with their audience.",
   "Our team leverages proven PR strategies to amplify your brand’s message, increase media coverage, and build lasting relationships with key influencers. Whether you're looking to enhance your reputation, manage crises, or boost brand awareness, we’re here to ensure your brand stands out in a competitive landscape. With our expertise, we guide your brand through every step of strategic communication to achieve measurable results and long-term success."
  ];

  return (
    <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32">
      <div className="text-gray-400 text-sm mb-6">
        <Link href="/" className="hover:text-white transition duration-200">
          Homepage
        </Link>
        <span> &gt; </span>
        <Link href="/service" className="hover:text-white transition duration-200">
          Services
        </Link>
        <span> &gt; </span>
        <span className="text-[#06FFFB]">Public Relation</span>
      </div>
      <div className="max-w-3xl">
        <h1 className="font-poppins font-medium text-[40px] leading-[50px] tracking-[-0.01%]">
        Harness Our Vast Media Network to Influence and Enhance Your Brand’s Narrative
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
