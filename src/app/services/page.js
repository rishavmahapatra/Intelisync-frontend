import Blog from "@/component/Blogs/Blogs";
import ContactUs from "@/component/ContactUs/ContactUs";
import FAQSection from "@/component/FAQ/FAQ";
import PartnersBackers from "@/component/PartnersBackers/PartnersBackers";
import OurServices from "@/component/Services/OurServices";
import ServiceSection from "@/component/Services/ServiceSection";
import SocialIcons from "@/component/SocialIcons";
import TrustedBrands from "@/component/TrustedInnovators/Trusted";

import TrustedInnovators from "@/component/TrustedInnovators/TrustedInnovators";
import { Servicesfaqs } from "@/utils/FAQ_Data";

export const metadata = {
  title:
    "Top Digital Services | AI, Marketing, Blockchain Development services",
  description:
    "Explore our expert services, including AI, growth marketing, blockchain, PR, web development, branding, and influencer marketing. Scale your business today",
  keywords: "Blockchain Development Services",
  openGraph: {
    title:
      "Top Digital Services | AI, Marketing, Blockchain Development services",
    description:
      "Explore our expert services, including AI, growth marketing, blockchain, PR, web development, branding, and influencer marketing. Scale your business today",
    url: "https://www.intelisync.ai/services/",
  },
  alternates: {
    canonical: "https://www.intelisync.ai/services/",
  },
  // robots: "follow, index",
  // verification: {
  //     google: "4mQzwqWNPRYEif77XJ2YEz25DRLcrmsRpXuiA2dFa5Q"
  // }
};

export default function page() {
  return (
    <div>
      <ServiceSection />
      <OurServices />
      <div className="block sm:block md:hidden">
        <TrustedBrands />
      </div>
      <div className="hidden md:block">
        <TrustedInnovators />
      </div>
      <FAQSection faqs={Servicesfaqs} />
      <PartnersBackers />
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
