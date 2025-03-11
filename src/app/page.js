
import Navbar from "@/component/navbar/Navbar";
import Section from "@/component/landingpage/Section";
import Trusted from "@/component/landingpage/Trusted";
import Section1 from "@/component/whoweare/Section";
import Founder from "@/component/founderpage/Founder";
import Ourservice from "@/component/server/Ourservice";
import Product from "@/component/ourproduct/Product";
import Portfolio from "@/component/footer/Portfolio";
import Event from "@/component/landingpage/Event";
import Blog from "@/component/landingpage/Blog";
import Badges from "@/component/landingpage/Badges";
import Client from "@/component/landingpage/Client";
import {landingFaq} from "@/utils/FAQ_Data";
import Global from "@/component/landingpage/Global";
import ContactUs from "@/component/ContactUs/ContactUs";
import Footer from "@/component/footer/Footer";
import FAQSection from "@/component/FAQ/FAQ";


export default function Home() {
  return (
    <>
    <Navbar />
    <Section />
    <Trusted />
    <Section1 />
    <Founder />
    <Ourservice />
    <Event />
    <Blog />
    <Badges />
    <Client />
    <FAQSection faqs={landingFaq}/>
    <Product />
    <Portfolio />
    <ContactUs/>
    <Global />
    <Footer />
    
    </>
  );
}
