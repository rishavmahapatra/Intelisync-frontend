import Bostonbanner from "@/component/Boston/Bostonbanner";
import Bostonimpact from "@/component/Boston/Bostonimpact";
import Bostonservices from "@/component/Boston/Bostonservices";
import Whyboston from "@/component/Boston/Whyboston";
import ContactUs from "@/component/ContactUs/ContactUs";
import FAQSection from "@/component/FAQ/FAQ";
import BadgesSection from "@/component/landingpage/Badges";
import TestiMonial from "@/component/landingpage/Client";
import { landingFaq } from "@/utils/FAQ_Data";
import GlobalData from "@/component/landingpage/Global";
import SocialIcons from "@/component/SocialIcons";

export default function page() {
    return (
        <div>
          <Bostonbanner />
          <Whyboston />
          <Bostonservices />
          <Bostonimpact />
          <BadgesSection />
          <TestiMonial />
          <FAQSection faqs={landingFaq} />
          <ContactUs />
          <GlobalData />
          <SocialIcons/>
       </div>
    );
}
