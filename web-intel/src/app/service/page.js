import PartnersBackers from "@/component/BlockChain_Section/PartnersBackers";
import TrustedInnovators from "@/component/BlockChain_Section/TrustedInnovators";
import Footer from "@/component/footer/Footer";
import Navbar from "@/component/navbar/Navbar";
import OurServices from "@/component/Services/OurServices";
import ServiceSection from "@/component/Services/ServiceSection";
import ServicesFAQ from "@/component/Services/ServicesFAQ";


export default function page() {
    return (
        <div>
            <Navbar />
            <ServiceSection />
            <OurServices />
            <TrustedInnovators />
            <ServicesFAQ />
            <PartnersBackers />
            <Footer />
        </div>
    );
}
