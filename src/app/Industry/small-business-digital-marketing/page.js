import Blog from "@/component/Blogs/Blogs";
import ContactUs from "@/component/ContactUs/ContactUs";
import FAQSection from "@/component/FAQ/FAQ";
import DigitalMarketing from "@/component/SmallBusiness/DigitalMarketing";
import ElevateBusiness from "@/component/SmallBusiness/ElevateBusiness";
import MarketingFule from "@/component/SmallBusiness/MarketingFule";
import { SmallBusinessfaqs } from "@/utils/FAQ_Data";
import React from "react";

export const metadata = {
  title: "Small Business Digital Marketing  | Intelisync.ai",
  description:
    "Fuel your small business growth with Intelisync.ai. Partner with experts who understand your needs and deliver results-driven marketing strategies.",
  keywords: "Small Business Digital Marketing ",
  openGraph: {
    title: "Small Business Digital Marketing  | Intelisync.ai",
    description:
      "Fuel your small business growth with Intelisync.ai. Partner with experts who understand your needs and deliver results-driven marketing strategies.",
    url: "https://intelisync.ai/Industry/small-business-digital-marketing/",
  },
  alternates: {
    canonical:
      "https://intelisync.ai/Industry/small-business-digital-marketing/",
  },
  // robots: "follow, index",
  // verification: {
  //     google: "4mQzwqWNPRYEif77XJ2YEz25DRLcrmsRpXuiA2dFa5Q"
  // }
};

function page() {
  return (
    <>
      <MarketingFule />
      <ElevateBusiness />
      <DigitalMarketing />
      <FAQSection faqs={SmallBusinessfaqs} />
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
