import Fintechbanner from "@/component/fintech_Industry/Fintechbanner";
import Fintechmarketing from "@/component/fintech_Industry/Fintechmarketing";
import Fintechcards from "@/component/fintech_Industry/Fintechcards";
import Fintechexpert from "@/component/fintech_Industry/Fintechexpert";
import Fintechpropel from "@/component/fintech_Industry/Fintechpropel";
// import Fintechcards from "@/component/fintech_Industry/Fintechcards"
import FAQSection from "@/component/FAQ/FAQ";
import { expertData } from "@/utils/FAQ_Data";
import Blog from "@/component/Blogs/Blogs";
import ContactUs from "@/component/ContactUs/ContactUs";

export const metadata = {
  title: " Leading Fintech Marketing Agency | Intelisync.ai",
  description:
    "Intelisync.ai is a leading fintech marketing agency helping brands grow with SEO, PPC, content marketing, and AI-driven strategies for maximum impact.",
  keywords: "Web3 Branding Agency",
  openGraph: {
    title: " Leading Fintech Marketing Agency | Intelisync.ai",
    description:
      "Intelisync.ai is a leading fintech marketing agency helping brands grow with SEO, PPC, content marketing, and AI-driven strategies for maximum impact.",
    url: "https://intelisync.ai/Industry/fintech-marketing-agency/",
  },
  alternates: {
    canonical: "https://intelisync.ai/Industry/fintech-marketing-agency/",
  },
  // robots: "follow, index",
  // verification: {
  //     google: "4mQzwqWNPRYEif77XJ2YEz25DRLcrmsRpXuiA2dFa5Q"
  // }
};

export default function page() {
  return (
    <>
      <Fintechbanner />
      <Fintechmarketing />
      <Fintechexpert />
      <Fintechcards />
      <Fintechpropel />
      <FAQSection faqs={expertData} />
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
