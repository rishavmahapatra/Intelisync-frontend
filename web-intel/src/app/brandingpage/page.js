import Banner from "@/component/branding/Banner";
import Homepage from "@/component/branding/Homepage";
import Impact from "@/component/branding/Impact";
import Trustedservice from "@/component/branding/Trustedservice";
import {Servicesfaqs} from "@/utils/FAQ_Data";
import Blogservice from "@/component/branding/Blogservice";
import Contactservice from "@/component/branding/Contactservice";
import Footer from "@/component/footer/Footer";

export default function Home() {
    return (
      <>
      <Navbar />
      <Banner />
      <Homepage />
      <Impact />
      <Trustedservice />
      <Servicesfaqs />
      <Blogservice />
      <Contactservice />
      <Footer />

      
      </>
    );
  }
  