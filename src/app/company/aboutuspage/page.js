import Aboutusbanner from "@/component/AboutUs/Aboutusbanner";
import About from "@/component/AboutUs/About";
import Aboutvision from "@/component/AboutUs/Aboutvision";
import Aboutmission from "@/component/AboutUs/Aboutusmission";
import Badges from "@/component/landingpage/Badges";
import PartnersBackers from "@/component/PartnersBackers/PartnersBackers";
import ContactUs from "@/component/ContactUs/ContactUs";
import TrustedBrands from "@/component/TrustedInnovators/Trusted";
import TrustedInnovators from "@/component/TrustedInnovators/TrustedInnovators";




export default function page() {
    return (
        <div>
            <Aboutusbanner />
            <About />
            <Aboutvision />
            <Aboutmission />
            <Badges />
             <div className="block md:hidden">
                                <TrustedBrands />
                              </div>
                        
                              <div className="hidden md:block">
                                <TrustedInnovators />
                              </div>
            <PartnersBackers />
            <ContactUs />
       </div>
    );
}
