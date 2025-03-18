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
import TrustedBrands from "@/component/TrustedInnovators/Trusted";
import Blog from "@/component/Blogs/Blogs";

export default function page() {
    return (
        <div>
            <InfluencerCampaign />
            <InfluencerPartnership />
            <InfluencerStrategies />
            <div className="block sm:block md:hidden">
                <TrustedBrands />
            </div>
            <div className="hidden md:block">
                <TrustedInnovators />
            </div>
            <FAQSection faqs={InfluencerMarketingfaqs} />
            <PartnersBackers />
            <Blog />
            <ContactUs />
        </div>
    );
}