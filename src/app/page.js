import Section from "@/component/landingpage/Section";
import Trusted from "@/component/TrustedInnovators/Trusted";
import Section1 from "@/component/whoweare/Section";
import Founder from "@/component/founderpage/Founder";
import Ourservice from "@/component/server/Ourservice";
import Product from "@/component/ourproduct/Product";
import Portfolio from "@/component/footer/Portfolio";
import Event from "@/component/landingpage/Event";
import Blog from "@/component//Blogs/Blogs";
import Badges from "@/component/landingpage/Badges";
import Client from "@/component/landingpage/Client";
import {landingFaq} from "@/utils/FAQ_Data";
import Global from "@/component/landingpage/Global";
import ContactUs from "@/component/ContactUs/ContactUs";
import FAQSection from "@/component/FAQ/FAQ";


export default function Home() {
  return (
    <div >
    <Section />
    <Trusted />
    <Section1 />
    <Founder />
    <Ourservice />
    <Product />
    <Portfolio />
    <Event />
    <Blog />
    <Badges />
    <Client />
    <FAQSection faqs={landingFaq}/>
    <ContactUs/>
    <Global />
    </div>
  );
}
