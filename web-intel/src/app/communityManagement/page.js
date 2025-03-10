import Blog from "@/component/Blogs/Blogs";
import CommunitySection from "@/component/CommunityManagement/CommunitySection";
import CommunityServices from "@/component/CommunityManagement/CommunityServices";
import CryptoCommunityManagement from "@/component/CommunityManagement/CryptoCommunityManagement";
import ContactUs from "@/component/ContactUs/ContactUs";
import FAQSection from "@/component/FAQ/FAQ";
import Footer from "@/component/footer/Footer";
import Navbar from "@/component/navbar/Navbar";
import PartnersBackers from "@/component/PartnersBackers/PartnersBackers";
import TrustedInnovators from "@/component/TrustedInnovators/TrustedInnovators";
import {Communityfaqs } from "@/utils/FAQ_Data";

export default function page() {
    return (
        <div>
             <Navbar />
            <CommunitySection/>
            <CryptoCommunityManagement/>
            <CommunityServices/>
            <TrustedInnovators />
            <FAQSection faqs={Communityfaqs} />
            <PartnersBackers />
            <Blog/>
            <ContactUs/>
            <Footer/>
        </div>
    );
}