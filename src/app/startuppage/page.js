import Startupbanner from "@/component/Startup/Startupbanner";
import Startupmarketing from "@/component/Startup/Startupmarketing";
import FAQSection from "@/component/FAQ/FAQ";
import { expertData } from "@/utils/FAQ_Data";
import Blog from "@/component/Blogs/Blogs";
import ContactUs from "@/component/ContactUs/ContactUs";


export default function page() {
    return (
        <> 
        <Startupbanner />
        <Startupmarketing />
        <FAQSection faqs={expertData} />
        <Blog />
        <ContactUs />
        </>
    );
}
