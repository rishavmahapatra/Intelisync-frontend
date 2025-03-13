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
