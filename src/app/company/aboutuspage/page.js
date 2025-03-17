import Aboutusbanner from "@/component/AboutUs/Aboutusbanner";
import About from "@/component/AboutUs/About";
import Aboutvision from "@/component/AboutUs/Aboutvision";
import Aboutmission from "@/component/AboutUs/Aboutusmission";
import Badges from "@/component/landingpage/Badges";
import TrustedInnovators from "@/component/branding/Trustedservice";
import PartnersBackers from "@/component/PartnersBackers/PartnersBackers";
import ContactUs from "@/component/ContactUs/ContactUs";
import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer/Footer";




export default function page() {
    return (
        <div>
            <Aboutusbanner />
            <About />
            <Aboutvision />
            <Aboutmission />
            <Badges />
            <TrustedInnovators />
            <PartnersBackers />
            <ContactUs />
       </div>
    );
}
