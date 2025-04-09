import Banner from "@/component/branding/Banner";
import Homepage from "@/component/branding/Homepage";
import Impact from "@/component/branding/Impact";
import Blog from "@/component/Blogs/Blogs";
import Contactservice from "@/component/branding/Contactservice";
import FAQSection from "@/component/FAQ/FAQ";
import { Brandingfaqs } from "@/utils/FAQ_Data";
import TrustedBrands from "@/component/TrustedInnovators/Trusted";
import TrustedInnovators from "@/component/TrustedInnovators/TrustedInnovators";
import SocialIcons from "@/component/SocialIcons";

export const metadata = {
  title: "Intelisync | Web3 Branding Agency for Strong Digital Identity",
  description:
    "Get expert branding solutions from a top Web3 agency. We help businesses build trust, stand out, and create a strong digital identity in the competitive Web3 space.",
  keywords: "Web3 Branding Agency",
  openGraph: {
    title: "Intelisync | Web3 Branding Agency for Strong Digital Identity",
    description:
      "Get expert branding solutions from a top Web3 agency. We help businesses build trust, stand out, and create a strong digital identity in the competitive Web3 space.",
    url: "https://www.intelisync.ai/services/web3-branding-agency/",
  },
  alternates: {
    canonical: "https://www.intelisync.ai/services/web3-branding-agency/",
  },
  // robots: "follow, index",
  // verification: {
  //     google: "4mQzwqWNPRYEif77XJ2YEz25DRLcrmsRpXuiA2dFa5Q"
  // }
};

export default function Home() {
  return (
    <>
      <Banner />
      <Homepage />
      <Impact />
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
      <FAQSection faqs={Brandingfaqs} />
      <div className="text-center text-white mt-10">
        <h2 className="min-[320px]:max-[480px]:text-[20px] text-[32px] leading-[26px] text-center inline-block relative after:content-[''] after:block after:h-[1px] after:w-full after:max-w-full after:bg-gradient-to-r after:from-[#07CDFF] after:to-[#06FFF0] after:absolute after:bottom-0 after:left-0 pb-4">
          Blog- Our Expert Articles
        </h2>
      </div>

      <Blog />
      <Contactservice />
      <SocialIcons/>
    </>
  );
}
