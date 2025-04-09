import Blog from "@/component/Blogs/Blogs";
import CommunitySection from "@/component/CommunityManagement/CommunitySection";
import CommunityServices from "@/component/CommunityManagement/CommunityServices";
import CryptoCommunityManagement from "@/component/CommunityManagement/CryptoCommunityManagement";
import ContactUs from "@/component/ContactUs/ContactUs";
import FAQSection from "@/component/FAQ/FAQ";
import Footer from "@/component/footer/Footer";
import Navbar from "@/component/navbar/Navbar";
import PartnersBackers from "@/component/PartnersBackers/PartnersBackers";
import SocialIcons from "@/component/SocialIcons";
import TrustedBrands from "@/component/TrustedInnovators/Trusted";
import TrustedInnovators from "@/component/TrustedInnovators/TrustedInnovators";
import { Communityfaqs } from "@/utils/FAQ_Data";

export const metadata = {
  title: "Web3 Community Management | Grow & Engage Your Project",
  description:
    "Our Web3 community management agency helps blockchain projects grow by building active, loyal communities across Discord, Telegram, and social platforms.",
  keywords: "Community Management Development Services",
  openGraph: {
    title: "Web3 Community Management | Grow & Engage Your Project",
    description:
      "Our Web3 community management agency helps blockchain projects grow by building active, loyal communities across Discord, Telegram, and social platforms.",
    url: "https://www.intelisync.ai/services/web3-community-Management-agency/",
  },
  alternates: {
    canonical:
      "https://www.intelisync.ai/services/web3-community-Management-agency/",
  },
  // robots: "follow, index",
  // verification: {
  //     google: "4mQzwqWNPRYEif77XJ2YEz25DRLcrmsRpXuiA2dFa5Q"
  // }
};

export default function page() {
  return (
    <div>
      <CommunitySection />
      <CryptoCommunityManagement />
      <CommunityServices />

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

      <FAQSection faqs={Communityfaqs} />
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
