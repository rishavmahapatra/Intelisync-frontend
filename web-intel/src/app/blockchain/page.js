import BlockchainBusiness from "@/component/BlockChain_Section/BlockchainBusiness";
import BlockchainSolutions from "@/component/BlockChain_Section/BlockchainSolutions";
import BlockchainSection from '@/component/BlockChain_Section/BlockchainSection'
import TrustedInnovators from "@/component/BlockChain_Section/TrustedInnovators";
import FAQSection from "@/component/BlockChain_Section/FAQSection";
import PartnersBackers from "@/component/BlockChain_Section/PartnersBackers";
import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer/Footer";
export default function page() {
    return (
        <div>
             <Navbar />
            <BlockchainSection />
            <BlockchainBusiness />
            <BlockchainSolutions />
            <TrustedInnovators />
            <FAQSection />
            <PartnersBackers />
            <Footer/>
        </div>
    );
}
