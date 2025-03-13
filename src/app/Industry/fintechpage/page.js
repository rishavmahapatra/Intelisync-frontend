import Fintechbanner from "@/component/fintech_Industry/Fintechbanner";
import Fintechmarketing from "@/component/fintech_Industry/Fintechmarketing";
import Fintechexpert from "@/component/fintech_Industry/Fintechexpert";
import Fintechpropel from "@/component/fintech_Industry/Fintechpropel";
import Fintechcards from "@/component/fintech_Industry/Fintechcards"
import FAQSection from "@/component/FAQ/FAQ";
import { expertData } from "@/utils/FAQ_Data";
import Blog from "@/component/Blogs/Blogs";
import ContactUs from "@/component/ContactUs/ContactUs";


export default function page() {
    return (
        <> 
        <Fintechbanner />
        <Fintechmarketing />
        <Fintechcards />
        <Fintechexpert />
        
        <Fintechpropel />

        <FAQSection faqs={expertData} />
        <Blog />
        <ContactUs />
        </>
    );
}
