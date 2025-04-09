import Riyadhbanner from "@/component/Riyadh/Riyadhbanner";
import Why_riyadh from "@/component/Riyadh/Why_riyadh";
import Services from "@/component/Riyadh/Services";
import Our_impact from "@/component/Riyadh/Our_impact";
import Badges from "@/component/landingpage/Badges";
import Client from "@/component/landingpage/Client";
import { landingFaq } from "@/utils/FAQ_Data";
import FAQSection from "@/component/FAQ/FAQ";
import ContactUs from "@/component/ContactUs/ContactUs";
import Global from "@/component/landingpage/Global";
import SocialIcons from "@/component/SocialIcons";
export default function page() {
    return (
        <div>
          <Riyadhbanner />  
          <Why_riyadh />
          <Services />
          <Our_impact />
          <Badges  />
           <Client />
           <FAQSection faqs={landingFaq} />
           <ContactUs />
           <Global />
           <SocialIcons/>
       </div>
    );
}
