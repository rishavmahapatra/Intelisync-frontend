import Aboutusbanner from "@/component/AboutUs/Aboutusbanner";
import About from "@/component/AboutUs/About";
import Aboutvision from "@/component/AboutUs/Aboutvision";
import Aboutmission from "@/component/AboutUs/Aboutusmission";
import Badges from "@/component/landingpage/Badges";
import PartnersBackers from "@/component/PartnersBackers/PartnersBackers";
import ContactUs from "@/component/ContactUs/ContactUs";
import TrustedBrands from "@/component/TrustedInnovators/Trusted";
import TrustedInnovators from "@/component/TrustedInnovators/TrustedInnovators";
import SocialIcons from "@/component/SocialIcons";




export default function page() {
    return (
        <div>
            <Aboutusbanner />
            <About />
            <Aboutvision />
            <Aboutmission />
            <Badges />
            <div className="text-center pt-16 md:hidden block">
                <h2 className="text-[20px] md:text-2xl font-[500] text-white relative inline-block mb-6 pb-2 tracking-[-0.01%]">
                    Trusted by Top Innovators
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-[#06FFF0] via-[#00aaff] to-[#0192BA]"></span>
                </h2>
            </div>

            <div className="block md:hidden">
                <TrustedBrands />
            </div>

            <div className="hidden md:block">
                <TrustedInnovators />
            </div>
            <PartnersBackers />
            <ContactUs />
            <SocialIcons />
        </div>
    );
}
