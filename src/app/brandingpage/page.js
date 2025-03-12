import Banner from "@/component/branding/Banner";
import Homepage from "@/component/branding/Homepage";
import Impact from "@/component/branding/Impact";
import Trustedservice from "@/component/branding/Trustedservice";
import Blogservice from "@/component/branding/Blogservice";
import Contactservice from "@/component/branding/Contactservice";
import Footer from "@/component/footer/Footer";
import Navbar from "@/component/navbar/Navbar";
import FAQSection from "@/component/FAQ/FAQ";
import {Brandingfaqs} from "@/utils/FAQ_Data";

export default function Home() {
    return (
      <>
      <Navbar />
      <Banner />
      <Homepage />
      <Impact />
      <Trustedservice />
      <FAQSection faqs={Brandingfaqs} />
      <Blogservice />
      <Contactservice />
      <Footer />

      </>
    );
  }
  