import CareerForm from "@/component/Careers/CareerForm";
import CareersBanner from "@/component/Careers/CareerSection";
import Hiring from "@/component/Careers/Hiring";
import OpenPositions from "@/component/Careers/OpenPosition";
import Footer from "@/component/footer/Footer";
import Navbar from "@/component/navbar/Navbar";

export default function page() {
    return (
        <div>
            <CareersBanner />
            <Hiring/>
            <OpenPositions/>
            <CareerForm/>
        </div>
    );
}