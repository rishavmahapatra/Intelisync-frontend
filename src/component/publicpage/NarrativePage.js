import Link from "next/link";

export default function NarrativePage() {
  const content = [
    "Conversations about your brand are happening continuously, both online and offline whether you're aware of them or not. Don’t let third parties, who may not have your brand’s best interests at heart, dominate the narrative.",
    "By partnering with Intelisync for targeted PR services, you can take control of the conversation surrounding your business. Many members of our PR team have roots in the media industry, which gives us a unique advantage. With our extensive network of media connections, we help clients shape and sustain a positive public image that resonates with their audience.",
    "Our team leverages proven PR strategies to amplify your brand’s message, increase media coverage, and build lasting relationships with key influencers. Whether you're looking to enhance your reputation, manage crises, or boost brand awareness, we’re here to ensure your brand stands out in a competitive landscape. With our expertise, we guide your brand through every step of strategic communication to achieve measurable results and long-term success."
  ];

  return (
    <div className="bg-[#020B17] text-white py-12 px-6 sm:px-12 md:px-20 lg:px-32">
      
      {/* Breadcrumb Navigation */}

           <div className="text-gray-400 text-sm mb-6 h-[20px] w-[389px] ">
                <Link href="/" className="hover:text-gray-300 transition text-[15px] font-[400]">Homepage</Link>
                <span className="mx-1">&gt;</span>

                <Link href="/service" className="hover:text-gray-300 text-[15px] font-[400]transition">Services</Link>
                <span className="mx-1">&gt;</span>

                <span className="text-cyan-400 font-[400] text-[15px] hover:text-cyan-300 transition">
                Public Relation
                </span>
            </div>

      {/* Content Section */}
      <div className="max-w-6xl">
        <h1 className="font-poppins font-[500px] text-[40px] leading-[50px] tracking-[-0.01%] ">
          Harness Our Vast Media <br/> Network to Influence and <br/>Enhance Your Brand’s Narrative
        </h1>

        {content.map((paragraph, index) => (
          <p key={index} className="font-poppins  text-[17px] font-[400px] leading-[30px] tracking-[-0.01%] text-gray-300 mt-5 w-[50%]">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
