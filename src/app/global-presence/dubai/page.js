import Dubaibanner from "@/component/Dubai/Dubaibanner";
import Why_Dubai from "@/component/Dubai/Why_Dubai";
import Services from "@/component/Dubai/Services";
import Our_impact from "@/component/Dubai/Our_impact";
import Badges from "@/component/landingpage/Badges";
import Client from "@/component/landingpage/Client";
import { landingFaq } from "@/utils/FAQ_Data";
import FAQSection from "@/component/FAQ/FAQ";
import ContactUs from "@/component/ContactUs/ContactUs";
import Global from "@/component/landingpage/Global";
export default function page() {
    return (
        <div >
          <Dubaibanner />  
          <Why_Dubai />
          <Services />
          <Our_impact />
          <Badges  />
          <Client />
        <FAQSection faqs={landingFaq} />
        <ContactUs />
        <Global />
       </div>
    );
}
