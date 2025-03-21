import Blog from "@/component/Blogs/Blogs";
import ContactUs from "@/component/ContactUs/ContactUs";
import FAQSection from "@/component/FAQ/FAQ";
import Footer from "@/component/footer/Footer";
import GameSuccess from "@/component/Gaming/GameSuccess";
import GamingMarketing from "@/component/Gaming/GamingMarketing";
import GamingMarketingServices from "@/component/Gaming/GamingMarketingServices";
import GamingSection from "@/component/Gaming/GamingSection";
import Navbar from "@/component/navbar/Navbar";
import PartnersBackers from "@/component/PartnersBackers/PartnersBackers";
import { Gamingfaqs } from "@/utils/FAQ_Data";

export const metadata = {
    title: " Gaming Marketing Solutions | Intelisync.ai",
    description: "Boost your game’s growth and impact with Intelisync.ai. We offer expert gaming marketing solutions, including branding, user acquisition, and engagement.",
    keywords: "Gaming Marketing Solutions",
    openGraph: {
        title: " Gaming Marketing Solutions | Intelisync.ai",
        description: "Boost your game’s growth and impact with Intelisync.ai. We offer expert gaming marketing solutions, including branding, user acquisition, and engagement.",
        url: "https://intelisync.ai/Industry/Gaming-marketing-solutions",
    },
    alternates: {
        canonical: "https://intelisync.ai/Industry/Gaming-marketing-solutions",
    }
    // robots: "follow, index",
    // verification: {
    //     google: "4mQzwqWNPRYEif77XJ2YEz25DRLcrmsRpXuiA2dFa5Q"
    // }
  };

export default function page() {
    return (
        <div>
            <GamingSection/>
            <GamingMarketing/>
            <GameSuccess/>
            <GamingMarketingServices/>
            <FAQSection faqs={Gamingfaqs} />
            <Blog />
            <ContactUs />
        </div>
    );
}
