import ContactUs from "@/component/ContactUs/ContactUs";
import FAQSection from "@/component/FAQ/FAQ";
import Blog from "@/component/Blogs/Blogs";
import CartMemorable from "@/component/Web_Development/CartMemorable";
import Expert_web from "@/component/Web_Development/Expert_web";
import Future_Ready from "@/component/Web_Development/Future_Ready";
import Web_Carts from "@/component/Web_Development/Web_Carts";
import WebBanner from "@/component/Web_Development/WebBanner";
import { Webfaqs } from "@/utils/FAQ_Data";
import TrustedBrands from "@/component/TrustedInnovators/Trusted";
import TrustedInnovators from "@/component/TrustedInnovators/TrustedInnovators";

import React from "react";
import SocialIcons from "@/component/SocialIcons";

export const metadata = {
  title: "Expert Web App Development | Fast, Secure & Custom Solutions",
  description:
    "Get expert web app development services to build fast,  and scalable applications. We create custom solutions that enhance user experience and drive growth.",
  keywords: "Web App Development Services",
  openGraph: {
    title: "Expert Web App Development | Fast, Secure & Custom Solutions",
    description:
      "Get expert web app development services to build fast,  and scalable applications. We create custom solutions that enhance user experience and drive growth.",
    url: "https://www.intelisync.ai/services/web-app-development/",
  },
  alternates: {
    canonical: "https://www.intelisync.ai/services/web-app-development/",
  },
  // robots: "follow, index",
  // verification: {
  //     google: "4mQzwqWNPRYEif77XJ2YEz25DRLcrmsRpXuiA2dFa5Q"
  // }
};

function page() {
  return (
    <>
      <WebBanner />
      <CartMemorable />
      <Expert_web />
      <Future_Ready />
      <Web_Carts />
      <div className="text-center pt-16 md:hidden block">
        <h2 className="text-[20px] md:text-2xl font-[500] text-white relative inline-block mb-6 pb-2 tracking-[-0.01%]">
          Trusted by Top Innovators
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-[#06FFF0] via-[#00aaff] to-[#0192BA]"></span>
        </h2>
      </div>
      <div className="block sm:block md:hidden">
        <TrustedBrands />
      </div>
      <div className="hidden md:block">
        <TrustedInnovators />
      </div>

      <FAQSection faqs={Webfaqs} />
      <div className="text-center text-white mt-10">
        <h2 className="min-[320px]:max-[480px]:text-[20px] text-[32px] leading-[26px] text-center inline-block relative after:content-[''] after:block after:h-[1px] after:w-full after:max-w-full after:bg-gradient-to-r after:from-[#07CDFF] after:to-[#06FFF0] after:absolute after:bottom-0 after:left-0 pb-4">
          Blog- Our Expert Articles
        </h2>
      </div>
      <Blog />
      <ContactUs />
      <SocialIcons/>
    </>
  );
}

export default page;
