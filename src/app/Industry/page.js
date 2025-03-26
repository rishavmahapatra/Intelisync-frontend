import Blog from "@/component/Blogs/Blogs";
import ContactUs from "@/component/ContactUs/ContactUs";
import FAQSection from "@/component/FAQ/FAQ";
import Footer from "@/component/footer/Footer";
import IndustrySection from "@/component/Industry/IndustrySection";
import OurServices from "@/component/Industry/OurServices";
import Navbar from "@/component/navbar/Navbar";
import PartnersBackers from "@/component/PartnersBackers/PartnersBackers";
import TrustedBrands from "@/component/TrustedInnovators/Trusted";
import TrustedInnovators from "@/component/TrustedInnovators/TrustedInnovators";
import { Industryfaqs } from "@/utils/FAQ_Data";

export const metadata = {
  title: "Next-Gen Solutions for Modern Industries | Intelisync",
  description:
    "Explore next-gen solutions for modern industries with Intelisync. Drive innovation, efficiency, and growth with our cutting-edge AI-driven strategies.",
  keywords: "Fintech, HealthCare, Gaming, Crypto, Small Bussiness, StartUp",
  openGraph: {
    title: "Next-Gen Solutions for Modern Industries | Intelisync",
    description:
      "Explore next-gen solutions for modern industries with Intelisync. Drive innovation, efficiency, and growth with our cutting-edge AI-driven strategies.",
    url: "https://intelisync.ai/Industry/",
  },
  alternates: {
    canonical: "https://intelisync.ai/Industry/",
  },
  // robots: "follow, index",
  // verification: {
  //     google: "4mQzwqWNPRYEif77XJ2YEz25DRLcrmsRpXuiA2dFa5Q"
  // }
};

export default function page() {
  return (
    <div>
      <IndustrySection />
      <OurServices />
      <div className="block sm:block md:hidden">
        <TrustedBrands />
      </div>
      <div className="hidden md:block">
        <TrustedInnovators />
      </div>
      <FAQSection faqs={Industryfaqs} />
      <PartnersBackers />
      <div className="text-center text-white mt-10">
        <h2 className="min-[320px]:max-[480px]:text-[20px] text-[32px] leading-[26px] text-center inline-block relative after:content-[''] after:block after:h-[1px] after:w-full after:max-w-full after:bg-gradient-to-r after:from-[#07CDFF] after:to-[#06FFF0] after:absolute after:bottom-0 after:left-0 pb-4">
          Blog- Our Expert Articles
        </h2>
      </div>
      <Blog />
      <ContactUs />
    </div>
  );
}
