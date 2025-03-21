import Link from "next/link";

export default function BlockchainBusiness() {
  const content = [
    "Growth marketing is about finding what works best for your business and building strategies that attract the right audience, increase engagement, and drive long-term success.",
    "As one of the leading growth marketing companies, we shape our approach to match your business goals, helping you refine customer acquisition, improve conversion rates, and strengthen brand loyalty. Our growth marketing services focus on real results, using practical methods to grow your business.",
    "What is growth marketing? It’s about testing new ideas, improving campaigns, and making smart choices that help your brand stand out. Our expert growth marketers guide you through every step, ensuring your business stays ahead and continues to grow.",
    "Whether you want to increase brand visibility, improve conversion rates, or boost customer retention, our marketing solutions give you the right strategies to succeed in today’s digital world. We focus on real, lasting growth to help your business reach its full potential and achieve long-term success."
  ];

  return (
    <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32 w-full max-w-full">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumbs */}
        <div className="text-gray-400 text-sm mb-6 flex flex-wrap gap-1">
          <Link href="/" className="hover:text-gray-300 transition text-[14px] sm:text-[15px]">
            Homepage
          </Link>
          <span className="mx-1">&gt;</span>
          <Link href="/services" className="hover:text-gray-300 text-[14px] sm:text-[15px] transition">
            Services
          </Link>
          <span className="mx-1">&gt;</span>
          <span className="text-cyan-400 font-[400px] text-[14px] sm:text-[15px] hover:text-cyan-300 transition">
            Growth Marketing
          </span>
        </div>

        {/* Title */}
        <h2 className="font-poppins font-[500px] text-[28px] sm:text-[35px] md:text-[40px] leading-[38px] sm:leading-[45px] md:leading-[50px] tracking-tight">
          Growth Marketing Agency Helping You <br className="hidden sm:block" /> Scale Smarter
        </h2>

        {/* Content */}
        <div className="mt-6">
          {content.map((paragraph, index) => (
            <p key={index} className="font-poppins text-[14px] sm:text-[16px] font-[400px] leading-[26px] sm:leading-[30px] tracking-tight text-gray-300 mt-4 w-full md:w-[80%] lg:w-[50%]">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}



