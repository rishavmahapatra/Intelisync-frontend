import Riyadhbanner from "@/component/Riyadh/Riyadhbanner";
import Why_riyadh from "@/component/Riyadh/Why_riyadh";
import Services from "@/component/Riyadh/Services";
import Our_impact from "@/component/Riyadh/Our_impact";
export default function page() {
    return (
        <div>
          <Riyadhbanner />  
          <Why_riyadh />
          <Services />
          <Our_impact />
       </div>
    );
}
