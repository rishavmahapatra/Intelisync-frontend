import Navbar from "@/component/navbar/Navbar";
import AIbanner from "@/component/Artificial Intelligence/AIbanner";
import AIhomepage from "@/component/Artificial Intelligence/AIhomepage";
import AIsmart from "@/component/Artificial Intelligence/AIsmart"
import Footer from "@/component/footer/Footer";
import TrustedInnovators from "@/component/branding/Trustedservice";
import {AIfaq} from "@/utils/FAQ_Data";
import FAQSection from "@/component/FAQ/FAQ";
import Blog from "@/component/Blogs/Blogs";



export default function page() {
    return (
        <div>
            <Navbar />
            <AIbanner />
            <AIhomepage />
            <AIsmart />
            <TrustedInnovators />
            <FAQSection faqs={AIfaq} />
            <Blog />
            <Footer />
        </div>
    );
}
