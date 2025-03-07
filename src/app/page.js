
import Founder from "@/component/founderpage/Founder";
import GlobalData from "@/component/globalpresence/GlobalData";
import Navbar from "@/component/navbar/Navbar";
import Product from "@/component/ourproduct/Product";
import Ourservice from "@/component/server/Ourservice";
import Section from "@/component/whoweare/Section";
import Advisory from "@/strategicpage/Advisory";
import Banner from "@/strategicpage/Banner";
import Blogs from "@/strategicpage/Blogs";
import BusinessGrowth from "@/strategicpage/BusinessGrowth";
import Contact from "@/strategicpage/Contact";
import FAQ from "@/strategicpage/FAQ";
import TrustedInnovators from "@/strategicpage/TrustedInnovators";


export default function Home() {
  return (
    <>
    <Navbar />
    <Banner />
    <Advisory />
    <BusinessGrowth />
    <TrustedInnovators />
    <Blogs />
    <Contact />
    <FAQ />
    {/* <Section />
    <Founder />
    <Ourservice />
    <GlobalData />
    <Product /> */}
    </>
  );
}
