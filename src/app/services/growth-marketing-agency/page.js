import Accelerate from "@/component/growthmarketing/Accelerate";
import Drive from "@/component/growthmarketing/Drive";
import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer/Footer";
import Taillored from "@/component/growthmarketing/Taillored";
import Blog from "@/component/Blogs/Blogs";
import { GrowthMarketingfaqs } from "@/utils/FAQ_Data";
import FAQSection from "@/component/FAQ/FAQ";
import ContactUs from "@/component/ContactUs/ContactUs";
import TrustedBrands from "@/component/TrustedInnovators/Trusted";
import TrustedInnovators from "@/component/TrustedInnovators/TrustedInnovators";

export const metadata = {
  title: "Growth Marketing Agency | Smart Strategies for Business Success",
  description:
    "As a Growth Marketing Agency, we help your business grow with smart strategies that attract the right audience, boost engagement, and drive real results.",
  keywords: "AI Development Services",
  openGraph: {
    title: "Growth Marketing Agency | Smart Strategies for Business Success",
    description:
      "As a Growth Marketing Agency, we help your business grow with smart strategies that attract the right audience, boost engagement, and drive real results.",
    url: "https://intelisync.ai/services/growth-marketing-agency/",
  },
  alternates: {
    canonical: "https://intelisync.ai/services/growth-marketing-agency/",
  },
  // robots: "follow, index",
  // verification: {
  //     google: "4mQzwqWNPRYEif77XJ2YEz25DRLcrmsRpXuiA2dFa5Q"
  // }
};

function page() {
  return (
    <>
      <Accelerate />
      <Drive />
      <Taillored />
      <div className="text-center pt-16 md:hidden block">
        <h2 className="text-[20px] md:text-2xl font-[500] text-white relative inline-block mb-6 pb-2 tracking-[-0.01%]">
          Trusted by Top Innovators
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-[#06FFF0] via-[#00aaff] to-[#0192BA]"></span>
        </h2>
      </div>
      <div className="block md:hidden">
        <TrustedBrands />
      </div>

      <div className="hidden md:block">
        <TrustedInnovators />
      </div>
      <FAQSection faqs={GrowthMarketingfaqs} />
      <div className="text-center text-white mt-10">
        <h2 className="min-[320px]:max-[480px]:text-[20px] text-[32px] leading-[26px] text-center inline-block relative after:content-[''] after:block after:h-[1px] after:w-full after:max-w-full after:bg-gradient-to-r after:from-[#07CDFF] after:to-[#06FFF0] after:absolute after:bottom-0 after:left-0 pb-4">
          Blog- Our Expert Articles
        </h2>
      </div>
      <Blog />
      <ContactUs />
    </>
  );
}

export default page;
