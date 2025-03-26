import ContactUs from "@/component/ContactUs/ContactUs";
import Cryptobanner from "@/component/Crypto/Cryptobanner";
import CryptoCarts from "@/component/Crypto/CryptoCarts";
import MarketingStrategies from "@/component/Crypto/MarketingStrategies";
import FAQSection from "@/component/FAQ/FAQ";
import Blog from "@/component/Blogs/Blogs";
import Navbar from "@/component/navbar/Navbar";
import { Cryptofaqs } from "@/utils/FAQ_Data";
import React from "react";

export const metadata = {
  title: "Blockchain & Crypto Marketing | Intelisync.ai",
  description:
    "Ignite your blockchain and crypto project's growth with Intelisync.ai. Drive adoption, engagement, and success with expert marketing strategies.",
  keywords: "Blockchain and Crypto Marketing",
  openGraph: {
    title: "Blockchain & Crypto Marketing | Intelisync.ai",
    description:
      "Ignite your blockchain and crypto project's growth with Intelisync.ai. Drive adoption, engagement, and success with expert marketing strategies.",
    url: "https://intelisync.ai/Industry/crypto-marketing/",
  },
  alternates: {
    canonical: "https://intelisync.ai/Industry/crypto-marketing/",
  },
  // robots: "follow, index",
  // verification: {
  //     google: "4mQzwqWNPRYEif77XJ2YEz25DRLcrmsRpXuiA2dFa5Q"
  // }
};

function page() {
  return (
    <>
      <Cryptobanner />
      <MarketingStrategies />
      <CryptoCarts />
      <FAQSection faqs={Cryptofaqs} />
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
