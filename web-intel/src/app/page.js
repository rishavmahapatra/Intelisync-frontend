
import Navbar from "@/component/navbar/Navbar";
import Founder from "@/component/founderpage/Founder";
import Blog from "@/component/landingpage/Blog";
import Product from "@/component/ourproduct/Product";
import Ourservice from "@/component/server/Ourservice";
import Section1 from "@/component/whoweare/Section";
import Section from "@/component/landingpage/Section";
import Trusted from "@/component/landingpage/Trusted";
import Event from "@/component/landingpage/Event";
import Badges from "@/component/landingpage/Badges";
import Client from "@/component/landingpage/Client";
import Global from "@/component/landingpage/Global";
import FAQSection from "@/component/landingpage/FAQSection";
import Banner from "@/component/branding/Banner";
import Homepage from "@/component/branding/Homepage";
import Impact from "@/component/branding/Impact";
import Trustedservice from "@/component/branding/Trustedservice"
import Faq from "@/component/branding/Faq";
import Contact from "@/component/landingpage/Contact";
import Blogservice from "@/component/branding/Blogservice";
import Contactservice from "@/component/branding/Contactservice";
import Footer from "@/component/footer/Footer";
import Portfolio from "@/component/footer/Portfolio";


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
    <FAQSection />
    <Contact />
    <Global />
    <Product />
    <Portfolio />
    {/* <Banner />
    <Homepage />
    <Impact />
    <Trustedservice />
    <Faq />
    <Blogservice/>
    <Contactservice /> */}
    <Footer />
    
    </>
  );
}
