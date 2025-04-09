import Singaporebanner from "@/component/Singapore/Singaporebanner";
import Why_singapore from "@/component/Singapore/Why_singapore";
import Services from "@/component/Singapore/Services";
import Our_impact from "@/component/Singapore/Our_impact";
import BadgesSection from "@/component/landingpage/Badges";
import Client from "@/component/landingpage/Client";
import { landingFaq } from "@/utils/FAQ_Data";
import FAQSection from "@/component/FAQ/FAQ";
import ContactUs from "@/component/ContactUs/ContactUs";
import Global from "@/component/landingpage/Global";
import SocialIcons from "@/component/SocialIcons";
export default function page() {
    return (
        <div>
          <Singaporebanner />  
          <Why_singapore />
          <Services />
          <Our_impact />
          <BadgesSection />
          <Client />
           <FAQSection faqs={landingFaq} />
           <ContactUs />
           <Global />
           <SocialIcons/>
       </div>
    );
}
