import Singaporebanner from "@/component/Singapore/Singaporebanner";
import Why_singapore from "@/component/Singapore/Why_singapore";
import Services from "@/component/Singapore/Services";
import Our_impact from "@/component/Singapore/Our_impact";
export default function page() {
    return (
        <div>
          <Singaporebanner />  
          <Why_singapore />
          <Services />
          <Our_impact />
       </div>
    );
}
