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
export default function page() {
    return (
        <div>
            <BlockchainSection />
            <BlockchainBusiness />
            <BlockchainSolutions />
            <TrustedInnovators />
            <FAQSection faqs={BlockChainfaqs} />
            <PartnersBackers />
            <Blog/>
            <ContactUs/>
        </div>
    );
}
