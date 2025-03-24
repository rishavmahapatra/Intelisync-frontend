import Startupbanner from "@/component/Startup/Startupbanner";
import Startupmarketing from "@/component/Startup/Startupmarketing";
import Startupcards from "@/component/Startup/Startupcards";
import FAQSection from "@/component/FAQ/FAQ";
import { expertData } from "@/utils/FAQ_Data";
import Blog from "@/component/Blogs/Blogs";
import ContactUs from "@/component/ContactUs/ContactUs";

export const metadata = {
    title: "Startup Marketing Solutions | Intelisync.ai",
    description: "Accelerate your startup’s growth with Intelisync.ai. Our expert startup marketing solutions drive visibility, engagement, and success for emerging businesses",
    keywords: "Startup Marketing Solutions",
    openGraph: {
        title: "Startup Marketing Solutions | Intelisync.ai",
        description: "Accelerate your startup’s growth with Intelisync.ai. Our expert startup marketing solutions drive visibility, engagement, and success for emerging businesses",
        url: "https://intelisync.ai/Industry/startup-marketing-solutions/",
    },
    alternates: {
        canonical: "https://intelisync.ai/Industry/startup-marketing-solutions/",
    }
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
        <Blog />
        <ContactUs />
        </>
    );
}
