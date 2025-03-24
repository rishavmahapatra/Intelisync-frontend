import Navbar from "@/component/navbar/Navbar";
import AIbanner from "@/component/Artificial Intelligence/AIbanner";
import AIhomepage from "@/component/Artificial Intelligence/AIhomepage";
import AIsmart from "@/component/Artificial Intelligence/AIsmart"
import Footer from "@/component/footer/Footer";
import {AIfaq} from "@/utils/FAQ_Data";
import FAQSection from "@/component/FAQ/FAQ";
import Blog from "@/component/Blogs/Blogs";
import ContactUs from "@/component/ContactUs/ContactUs";
import TrustedBrands from "@/component/TrustedInnovators/Trusted";
import TrustedInnovators from "@/component/TrustedInnovators/TrustedInnovators";


export const metadata = {
    title: "AI Development Services for Web3 | Automate, Grow & Innovate",
    description: "Our AI development services help your Web3 business grow, streamline tasks, and make smarter decisions with ease for maximum efficiency.",
    keywords: "AI Development Services",
    openGraph: {
        title: "AI Development Services for Web3 | Automate, Grow & Innovate",
        description: "Our AI development services help your Web3 business grow, streamline tasks, and make smarter decisions with ease for maximum efficiency.",
        url: "https://intelisync.ai/services/ai-development-services/",
    },
    alternates: {
        canonical: "https://intelisync.ai/services/ai-development-services/",
    }
    // robots: "follow, index",
    // verification: {
    //     google: "4mQzwqWNPRYEif77XJ2YEz25DRLcrmsRpXuiA2dFa5Q"
    // }
};

export default function page() {
    return (
        <div>
            <AIbanner />
            <AIhomepage />
            <AIsmart />
             <div className="block md:hidden">
                    <TrustedBrands />
                  </div>
            
                  <div className="hidden md:block">
                    <TrustedInnovators />
                  </div>
            <FAQSection faqs={AIfaq} />
            <Blog />
            <ContactUs />
        </div>
    );
}
