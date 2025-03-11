import Blog from "@/component/Blogs/Blogs";
import ContactUs from "@/component/ContactUs/ContactUs";
import FAQSection from "@/component/FAQ/FAQ";
import Footer from "@/component/footer/Footer";
import InfluencerPartnership from "@/component/InfluencerMarketing/InfluencerPartnerShip";
import InfluencerCampaign from "@/component/InfluencerMarketing/InfluencerSection";
import InfluencerStrategies from "@/component/InfluencerMarketing/MarketingStrategies";
import Navbar from "@/component/navbar/Navbar";
import PartnersBackers from "@/component/PartnersBackers/PartnersBackers";
import TrustedInnovators from "@/component/TrustedInnovators/TrustedInnovators";
import { InfluencerMarketingfaqs } from "@/utils/FAQ_Data";

export default function page() {
    return (
        <div>
            <Navbar />
            <InfluencerCampaign />
            <InfluencerPartnership/>
            <InfluencerStrategies/>
            <TrustedInnovators />
            <FAQSection faqs={InfluencerMarketingfaqs} />
            <PartnersBackers />
            <Blog />
            <ContactUs />
            <Footer />
        </div>
    );
}