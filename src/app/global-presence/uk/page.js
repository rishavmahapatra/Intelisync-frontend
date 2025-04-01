import Ukbanner from "@/component/UK/Ukbanner";
import Why_london from "@/component/UK/Why_london";
import Services from "@/component/UK/Services";
import Our_impact  from "@/component/UK/Our_impact";
export default function page() {
    return (
        <div>
          <Ukbanner /> 
          <Why_london />
          <Services />
          <Our_impact />
       </div>
    );
}
