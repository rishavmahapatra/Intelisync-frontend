import Banner from "@/component/branding/Banner";
import Homepage from "@/component/branding/Homepage";
import Impact from "@/component/branding/Impact";
import TrustedInnovators from "@/component/TrustedInnovators/TrustedInnovators";
import Contactservice from "@/component/branding/Contactservice";
import FAQSection from "@/component/FAQ/FAQ";
import {Brandingfaqs} from "@/utils/FAQ_Data";
import TrustedBrands from "@/component/TrustedInnovators/Trusted";
import Blogs from "@/component/Blogs/Blogs";
export default function Home() {
    return (
      <>
      <Banner />
      <Homepage />
      <Impact />
      <div className="block md:hidden">
              <TrustedBrands />
            </div>
      
            <div className="hidden md:block">
              <TrustedInnovators />
            </div>
      <FAQSection faqs={Brandingfaqs} />
      <Blogs />
      {/* <Blogservice /> */}
      <Contactservice />
      </>
    );
  }
  