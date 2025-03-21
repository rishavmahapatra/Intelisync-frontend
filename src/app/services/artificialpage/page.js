
import AIbanner from "@/component/Artificial Intelligence/AIbanner";
import AIhomepage from "@/component/Artificial Intelligence/AIhomepage";
import AIsmart from "@/component/Artificial Intelligence/AIsmart";
import TrustedInnovators from "@/component/TrustedInnovators/TrustedInnovators";
import { AIfaq } from "@/utils/FAQ_Data";
import FAQSection from "@/component/FAQ/FAQ";
import Blog from "@/component/Blogs/Blogs";
import ContactUs from "@/component/ContactUs/ContactUs";
import TrustedBrands from "@/component/TrustedInnovators/Trusted";

export default function page() {
  return (
    <div>
      <AIbanner />
      <AIhomepage />
      <AIsmart />
      <div className="block md:hidden">
        <TrustedBrands />
      </div>

      <div className="hidden md:block">
        <TrustedInnovators />
      </div>

      <FAQSection faqs={AIfaq} />
      <Blog />
      <ContactUs />
    </div>
  );
}
