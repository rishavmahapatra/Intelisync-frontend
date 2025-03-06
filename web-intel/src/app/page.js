
import Founder from "@/component/founderpage/Founder";
import GlobalData from "@/component/globalpresence/GlobalData";
import Blog from "@/component/landingpage/Blog";
import Navbar from "@/component/navbar/Navbar";
import Product from "@/component/ourproduct/Product";
import Ourservice from "@/component/server/Ourservice";
import Section1 from "@/component/whoweare/Section";
import Section from "@/component/landingpage/Section";
import Trusted from "@/component/landingpage/Trusted";

export default function Home() {
  return (
    <>
    <Navbar />
    <Section />
    <Trusted />
    <Section1 />
    <Founder />
    <Ourservice />
    <Blog />
    <GlobalData />
    <Product />
    
    </>
  );
}
