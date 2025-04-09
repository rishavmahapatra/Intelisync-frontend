import Blog from "@/component/Blogs/Blogs";
import ContactUs from "@/component/ContactUs/ContactUs";
import FAQSection from "@/component/FAQ/FAQ";
import NarrativePage from "@/component/publicpage/NarrativePage";
import PRServicesPage from "@/component/publicpage/PRServicesPage";
import PublicRelatoin from "@/component/publicpage/PublicRelation";
import { PublicRelationfaqs } from "@/utils/FAQ_Data";
import TrustedBrands from "@/component/TrustedInnovators/Trusted";
import TrustedInnovators from "@/component/TrustedInnovators/TrustedInnovators";
import SocialIcons from "@/component/SocialIcons";

export const metadata = {
  title: "Crypto PR Agency for Effective Blockchain & Web3 Public Relations",
  description:
    "A crypto PR agency specializing in blockchain & Web3 public relations, helping projects build credibility, gain media exposure, & connect with the right audience.",
  keywords: "Public Relation Development Services",
  openGraph: {
    title: "Crypto PR Agency for Effective Blockchain & Web3 Public Relations",
    description:
      "A crypto PR agency specializing in blockchain & Web3 public relations, helping projects build credibility, gain media exposure, & connect with the right audience.",
    url: "https://www.intelisync.ai/services/public-relation/",
  },
  alternates: {
    canonical: "https://www.intelisync.ai/services/public-relation/",
  },
  // robots: "follow, index",
  // verification: {
  //     google: "4mQzwqWNPRYEif77XJ2YEz25DRLcrmsRpXuiA2dFa5Q"
  // }
};

function page() {
  return (
    <>
      <PublicRelatoin />
      <NarrativePage />
      <PRServicesPage />
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
      <FAQSection faqs={PublicRelationfaqs} />
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
