import Blog from "@/component/Blogs/Blogs";
import ContactUs from "@/component/ContactUs/ContactUs";
import FAQSection from "@/component/FAQ/FAQ";
import Footer from "@/component/footer/Footer";
import GetAhead from "@/component/Healthcare/GetAhead";
import GrowthHealthcare from "@/component/Healthcare/GrowthHealthcare";
import GrowthSolution from "@/component/Healthcare/GrowthSolution";
import Innovation from "@/component/Healthcare/Innovation";
import StayAhead from "@/component/Healthcare/StayAhead";
import Navbar from "@/component/navbar/Navbar";
import SocialIcons from "@/component/SocialIcons";
import TrustedInnovators from "@/component/TrustedInnovators/TrustedInnovators";
import { HealthcareCards } from "@/utils/Cards_Data";
import { Healthcarefaqs } from "@/utils/FAQ_Data";

export const metadata = {
  title: " Top Healthcare Marketing Agency | Driving Growth & Innovation",
  description:
    "Intelisync.ai drives growth for healthcare practices, hospitals, and health tech firms with expert marketing strategies for branding, SEO, and patient engagement.",
  keywords: "Healthcare Marketing Agency",
  openGraph: {
    title: " Top Healthcare Marketing Agency | Driving Growth & Innovation",
    description:
      "Intelisync.ai drives growth for healthcare practices, hospitals, and health tech firms with expert marketing strategies for branding, SEO, and patient engagement.",
    url: "https://www.intelisync.ai/Industry/healthcare-marketing-agency/",
  },
  alternates: {
    canonical: "https://www.intelisync.ai/Industry/healthcare-marketing-agency/",
  },
  // robots: "follow, index",
  // verification: {
  //     google: "4mQzwqWNPRYEif77XJ2YEz25DRLcrmsRpXuiA2dFa5Q"
  // }
};

function page() {
  return (
    <>
      <Innovation />
      <GetAhead />
      <GrowthHealthcare />
      <GrowthSolution />
      <StayAhead />
      <FAQSection faqs={Healthcarefaqs} />
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
