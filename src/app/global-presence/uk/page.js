import Ukbanner from "@/component/UK/Ukbanner";
import Why_london from "@/component/UK/Why_london";
import Services from "@/component/UK/Services";
import Our_impact  from "@/component/UK/Our_impact";
import Badges from "@/component/landingpage/Badges";
import Client from "@/component/landingpage/Client";
import { landingFaq } from "@/utils/FAQ_Data";
import FAQSection from "@/component/FAQ/FAQ";
import ContactUs from "@/component/ContactUs/ContactUs";
import Global from "@/component/landingpage/Global";
export default function page() {
    return (
        <div>
          <Ukbanner /> 
          <Why_london />
          <Services />
          <Our_impact />
          <Badges />
          <Client />
        <FAQSection faqs={landingFaq} />
         <ContactUs />
         <Global />
       </div>
    );
}
