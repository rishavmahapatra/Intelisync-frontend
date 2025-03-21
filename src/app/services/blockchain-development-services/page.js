import BlockchainBusiness from "@/component/BlockChain_Section/BlockchainBusiness";
import BlockchainSolutions from "@/component/BlockChain_Section/BlockchainSolutions";
import BlockchainSection from '@/component/BlockChain_Section/BlockchainSection'
import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer/Footer";
import TrustedInnovators from "@/component/TrustedInnovators/TrustedInnovators";
import PartnersBackers from "@/component/PartnersBackers/PartnersBackers";
import FAQSection from "@/component/FAQ/FAQ";
import { BlockChainfaqs } from "@/utils/FAQ_Data";
import Blog from "@/component/Blogs/Blogs";
import ContactUs from "@/component/ContactUs/ContactUs";
import TrustedBrands from "@/component/TrustedInnovators/Trusted";

export const metadata = {
    title: "Reliable Blockchain Development Services for Your Business",
    description: "We offer scalable, secure, and transparent blockchain development services to help your business grow with trust and efficiency. Get future-ready today",
    keywords: "Blockchain Development Services",
    openGraph: {
        title: "Reliable Blockchain Development Services for Your Business",
        description: "We offer scalable, secure, and transparent blockchain development services to help your business grow with trust and efficiency. Get future-ready today",
        url: "https://intelisync.ai/services/blockchain-development-services",
    },
    alternates: {
        canonical: "https://intelisync.ai/services/blockchain-development-services",
    }
    // robots: "follow, index",
    // verification: {
    //     google: "4mQzwqWNPRYEif77XJ2YEz25DRLcrmsRpXuiA2dFa5Q"
    // }
};


export default function page() {
    return (
        <div>
            <BlockchainSection />
            <BlockchainBusiness />
            <BlockchainSolutions />
            <div className="block md:hidden">
                <TrustedBrands />
            </div>
            <div className="hidden md:block">
                <TrustedInnovators />
            </div>
            <FAQSection faqs={BlockChainfaqs} />
            <PartnersBackers />
            <Blog />
            <ContactUs />
        </div>
    );
}
