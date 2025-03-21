import Blog from "@/component/Blogs/Blogs";
import CommunitySection from "@/component/CommunityManagement/CommunitySection";
import CommunityServices from "@/component/CommunityManagement/CommunityServices";
import CryptoCommunityManagement from "@/component/CommunityManagement/CryptoCommunityManagement";
import ContactUs from "@/component/ContactUs/ContactUs";
import FAQSection from "@/component/FAQ/FAQ";
import Footer from "@/component/footer/Footer";
import Navbar from "@/component/navbar/Navbar";
import PartnersBackers from "@/component/PartnersBackers/PartnersBackers";
import TrustedBrands from "@/component/TrustedInnovators/Trusted";
import TrustedInnovators from "@/component/TrustedInnovators/TrustedInnovators";
import { Communityfaqs } from "@/utils/FAQ_Data";

export const metadata = {
    title: "Web3 Community Management | Grow & Engage Your Project",
    description: "Our Web3 community management agency helps blockchain projects grow by building active, loyal communities across Discord, Telegram, and social platforms.",
    keywords: "Community Management Development Services",
    openGraph: {
        title: "Web3 Community Management | Grow & Engage Your Project",
        description: "Our Web3 community management agency helps blockchain projects grow by building active, loyal communities across Discord, Telegram, and social platforms.",
        url: "https://intelisync.ai/services/web3-community-Management-agency",
    },
    alternates: {
        canonical: "https://intelisync.ai/services/web3-community-Management-agency",
    }
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
            <div className="block sm:block md:hidden">
                <TrustedBrands />
            </div>
            <div className="hidden md:block">
                <TrustedInnovators />
            </div>
            <FAQSection faqs={Communityfaqs} />
            <PartnersBackers />
            <Blog />
            <ContactUs />
        </div>
    );
}