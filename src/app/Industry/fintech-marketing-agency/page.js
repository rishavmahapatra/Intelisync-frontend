import Fintechbanner from "@/component/fintech_Industry/Fintechbanner";
import Fintechmarketing from "@/component/fintech_Industry/Fintechmarketing";
import Fintechcards from "@/component/fintech_Industry/Fintechcards";
import Fintechexpert from "@/component/fintech_Industry/Fintechexpert";
import Fintechpropel from "@/component/fintech_Industry/Fintechpropel";
// import Fintechcards from "@/component/fintech_Industry/Fintechcards"
import FAQSection from "@/component/FAQ/FAQ";
import { expertData } from "@/utils/FAQ_Data";
import Blog from "@/component/Blogs/Blogs";
import ContactUs from "@/component/ContactUs/ContactUs";

export const metadata = {
    title: " Leading Fintech Marketing Agency | Intelisync.ai",
    description: "Intelisync.ai is a leading fintech marketing agency helping brands grow with SEO, PPC, content marketing, and AI-driven strategies for maximum impact.",
    keywords: "Web3 Branding Agency",
    openGraph: {
        title: " Leading Fintech Marketing Agency | Intelisync.ai",
        description: "Intelisync.ai is a leading fintech marketing agency helping brands grow with SEO, PPC, content marketing, and AI-driven strategies for maximum impact.",
        url: "https://intelisync.ai/Industry/fintech-marketing-agency/",
    },
    alternates: {
        canonical: "https://intelisync.ai/Industry/fintech-marketing-agency/",
    }
    // robots: "follow, index",
    // verification: {
    //     google: "4mQzwqWNPRYEif77XJ2YEz25DRLcrmsRpXuiA2dFa5Q"
    // }
  };

export default function page() {
    return (
        <> 
        <Fintechbanner />
        <Fintechmarketing />
        <Fintechexpert />
        <Fintechcards />
        <Fintechpropel />
        <FAQSection faqs={expertData} />
        <Blog />
        <ContactUs />
        </>
    );
}
