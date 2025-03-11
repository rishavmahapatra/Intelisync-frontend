import Blog from "@/component/Blogs/Blogs";
import ContactUs from "@/component/ContactUs/ContactUs";
import FAQSection from "@/component/FAQ/FAQ";
import Footer from "@/component/footer/Footer";
import IndustrySection from "@/component/Industry/IndustrySection";
import OurServices from "@/component/Industry/OurServices";
import Navbar from "@/component/navbar/Navbar";
import PartnersBackers from "@/component/PartnersBackers/PartnersBackers";
import TrustedInnovators from "@/component/TrustedInnovators/TrustedInnovators";
import { Industryfaqs } from "@/utils/FAQ_Data";

export default function page() {
    return (
        <div>
            <Navbar />
            <IndustrySection/>
            <OurServices/>
            <TrustedInnovators />
            <FAQSection faqs={Industryfaqs} />
            <PartnersBackers />
            <Blog />
            <ContactUs />
            <Footer />
        </div>
    );
}