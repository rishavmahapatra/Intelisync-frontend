import Navbar from "@/component/navbar/Navbar";
import AIbanner from "@/component/Artificial Intelligence/AIbanner";
import AIhomepage from "@/component/Artificial Intelligence/AIhomepage";
import AIsmart from "@/component/Artificial Intelligence/AIsmart";
import Footer from "@/component/footer/Footer";
import { AIfaq } from "@/utils/FAQ_Data";
import FAQSection from "@/component/FAQ/FAQ";
import Blog from "@/component/Blogs/Blogs";
import ContactUs from "@/component/ContactUs/ContactUs";
import TrustedBrands from "@/component/TrustedInnovators/Trusted";
import TrustedInnovators from "@/component/TrustedInnovators/TrustedInnovators";
import SocialIcons from "@/component/SocialIcons";

export const metadata = {
  title: "AI Development Services for Web3 | Automate, Grow & Innovate",
  description:
    "Our AI development services help your Web3 business grow, streamline tasks, and make smarter decisions with ease for maximum efficiency.",
  keywords: "AI Development Services",
  openGraph: {
    title: "AI Development Services for Web3 | Automate, Grow & Innovate",
    description:
      "Our AI development services help your Web3 business grow, streamline tasks, and make smarter decisions with ease for maximum efficiency.",
    url: "https://www.intelisync.ai/services/ai-development-services/",
  },
  alternates: {
    canonical: "https://www.intelisync.ai/services/ai-development-services/",
  },
  // robots: "follow, index",
  // verification: {
  //     google: "4mQzwqWNPRYEif77XJ2YEz25DRLcrmsRpXuiA2dFa5Q"
  // }
};

export default function page() {
  return (
    <div>
      <AIbanner />
      <AIhomepage />
      <AIsmart />

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
      <FAQSection faqs={AIfaq} />
      <div className="text-center text-white mt-10">
        <h2 className="min-[320px]:max-[480px]:text-[20px] text-[32px] leading-[26px] text-center inline-block relative after:content-[''] after:block after:h-[1px] after:w-full after:max-w-full after:bg-gradient-to-r after:from-[#07CDFF] after:to-[#06FFF0] after:absolute after:bottom-0 after:left-0 pb-4">
        Blog- Our Expert Articles
        </h2>
      </div>
      <Blog />
      <ContactUs />
      <SocialIcons/>
    </div>
  );
}
