import ContactUs from "@/component/ContactUs/ContactUs";
import FAQSection from "@/component/FAQ/FAQ";
import Footer from "@/component/footer/Footer";
import InfluencerPartnership from "@/component/InfluencerMarketing/InfluencerPartnerShip";
import InfluencerCampaign from "@/component/InfluencerMarketing/InfluencerSection";
import InfluencerStrategies from "@/component/InfluencerMarketing/MarketingStrategies";
import Navbar from "@/component/navbar/Navbar";
import PartnersBackers from "@/component/PartnersBackers/PartnersBackers";
import TrustedInnovators from "@/component/TrustedInnovators/TrustedInnovators";
import { InfluencerMarketingfaqs } from "@/utils/FAQ_Data";
import TrustedBrands from "@/component/TrustedInnovators/Trusted";
import Blog from "@/component/Blogs/Blogs";
import SocialIcons from "@/component/SocialIcons";

export const metadata = {
  title: "Web3 Influencer Marketing Agency | Grow Your Brand & Reach",
  description:
    "The best Web3 influencer marketing agency to help grow your brand with trusted influencers. Increase visibility, engagement, and reach in the Web3 space.",
  keywords: "Community Management Development Services",
  openGraph: {
    title: "Web3 Influencer Marketing Agency | Grow Your Brand & Reach",
    description:
      "The best Web3 influencer marketing agency to help grow your brand with trusted influencers. Increase visibility, engagement, and reach in the Web3 space.",
    url: "https://www.intelisync.ai/services/web3-influencer-marketing/",
  },
  alternates: {
    canonical: "https://www.intelisync.ai/services/web3-influencer-marketing/",
  },
  // robots: "follow, index",
  // verification: {
  //     google: "4mQzwqWNPRYEif77XJ2YEz25DRLcrmsRpXuiA2dFa5Q"
  // }
};

export default function page() {
  return (
    <div>
      <InfluencerCampaign />
      <InfluencerPartnership />
      <InfluencerStrategies />
      <div className="block sm:block md:hidden">
        <TrustedBrands />
      </div>
      <div className="hidden md:block">
        <TrustedInnovators />
      </div>
      <FAQSection faqs={InfluencerMarketingfaqs} />
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
