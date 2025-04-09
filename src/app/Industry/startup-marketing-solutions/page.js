import Startupbanner from "@/component/Startup/Startupbanner";
import Startupmarketing from "@/component/Startup/Startupmarketing";
import Startupcards from "@/component/Startup/Startupcards";
import FAQSection from "@/component/FAQ/FAQ";
import { expertData } from "@/utils/FAQ_Data";
import Blog from "@/component/Blogs/Blogs";
import ContactUs from "@/component/ContactUs/ContactUs";
import SocialIcons from "@/component/SocialIcons";

export const metadata = {
  title: "Startup Marketing Solutions | Intelisync.ai",
  description:
    "Accelerate your startup’s growth with Intelisync.ai. Our expert startup marketing solutions drive visibility, engagement, and success for emerging businesses",
  keywords: "Startup Marketing Solutions",
  openGraph: {
    title: "Startup Marketing Solutions | Intelisync.ai",
    description:
      "Accelerate your startup’s growth with Intelisync.ai. Our expert startup marketing solutions drive visibility, engagement, and success for emerging businesses",
    url: "https://www.intelisync.ai/Industry/startup-marketing-solutions/",
  },
  alternates: {
    canonical: "https://www.intelisync.ai/Industry/startup-marketing-solutions/",
  },
  // robots: "follow, index",
  // verification: {
  //     google: "4mQzwqWNPRYEif77XJ2YEz25DRLcrmsRpXuiA2dFa5Q"
  // }
};

export default function page() {
  return (
    <>
      <Startupbanner />
      <Startupmarketing />
      <Startupcards />
      <FAQSection faqs={expertData} />
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
