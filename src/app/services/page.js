import Blog from "@/component/Blogs/Blogs";
import ContactUs from "@/component/ContactUs/ContactUs";
import FAQSection from "@/component/FAQ/FAQ";
import PartnersBackers from "@/component/PartnersBackers/PartnersBackers";
import OurServices from "@/component/Services/OurServices";
import ServiceSection from "@/component/Services/ServiceSection";
import TrustedBrands from "@/component/TrustedInnovators/Trusted";

import TrustedInnovators from "@/component/TrustedInnovators/TrustedInnovators";
import { Servicesfaqs } from "@/utils/FAQ_Data";

export default function page() {
    return (
        <div>
            <ServiceSection />
            <OurServices />
            <div className="block sm:block md:hidden">
                <TrustedBrands />
            </div>
            <div className="hidden md:block">
                <TrustedInnovators />
            </div>
            <FAQSection faqs={Servicesfaqs} />
            <PartnersBackers />
            <Blog />
            <ContactUs />
        </div>
    );
}
