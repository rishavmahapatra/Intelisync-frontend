import ContactUs from "@/component/ContactUs/ContactUs";
import FAQSection from "@/component/FAQ/FAQ";
import Blog from "@/component/Blogs/Blogs";
import AdvisoryServices from "@/component/strategicpage/AdvisoryServices";
import Elevate from "@/component/strategicpage/Elevate";
import SmartSection from "@/component/strategicpage/SmartSection";
import { Startegicfaqs } from "@/utils/FAQ_Data";
import TrustedBrands from "@/component/TrustedInnovators/Trusted";
import TrustedInnovators from "@/component/TrustedInnovators/TrustedInnovators";

export const metadata = {
  title: "Expert Strategy Advisory  to Drive Your Business Forward",
  description:
    "Strategy advisory to help your business grow smarter. Intelisync offers expert guidance, real world solutions, and data backed insights for sustainable success",
  keywords: "Strategy Advisory Development Services",
  openGraph: {
    title: "Expert Strategy Advisory  to Drive Your Business Forward",
    description:
      "Strategy advisory to help your business grow smarter. Intelisync offers expert guidance, real world solutions, and data backed insights for sustainable success",
    url: "https://intelisync.ai/services/strategy-advisor/",
  },
  alternates: {
    canonical: "https://intelisync.ai/services/strategy-advisor/",
  },
  // robots: "follow, index",
  // verification: {
  //     google: "4mQzwqWNPRYEif77XJ2YEz25DRLcrmsRpXuiA2dFa5Q"
  // }
};

function page() {
  return (
    <>
      <Elevate />
      <AdvisoryServices />
      <SmartSection />
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
      <FAQSection faqs={Startegicfaqs} />
      <Blog />
      <ContactUs />
    </>
  );
}

export default page;
