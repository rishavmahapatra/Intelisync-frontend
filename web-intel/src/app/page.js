
import Founder from "@/component/founderpage/Founder";
import GlobalData from "@/component/globalpresence/GlobalData";
import Navbar from "@/component/navbar/Navbar";
import Product from "@/component/ourproduct/Product";
import Ourservice from "@/component/server/Ourservice";
import Section from "@/component/whoweare/Section";


export default function Home() {
  return (
    <>
    <Navbar />
    <Section />
    <Founder />
    <Ourservice />
    <GlobalData />
    <Product />
    </>
  );
}
