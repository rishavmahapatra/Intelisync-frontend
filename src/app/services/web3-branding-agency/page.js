import Banner from "@/component/branding/Banner";
import Homepage from "@/component/branding/Homepage";
import Impact from "@/component/branding/Impact";
import Trustedservice from "@/component/branding/Trustedservice";
import Blogservice from "@/component/branding/Blogservice";
import Contactservice from "@/component/branding/Contactservice";
import Footer from "@/component/footer/Footer";
import Navbar from "@/component/navbar/Navbar";
import FAQSection from "@/component/FAQ/FAQ";
import {Brandingfaqs} from "@/utils/FAQ_Data";

export const metadata = {
  title: "Intelisync | Web3 Branding Agency for Strong Digital Identity",
  description: "Get expert branding solutions from a top Web3 agency. We help businesses build trust, stand out, and create a strong digital identity in the competitive Web3 space.",
  keywords: "Web3 Branding Agency",
  openGraph: {
      title: "Intelisync | Web3 Branding Agency for Strong Digital Identity",
      description: "Get expert branding solutions from a top Web3 agency. We help businesses build trust, stand out, and create a strong digital identity in the competitive Web3 space.",
      url: "https://intelisync.ai/services/web3-branding-agency/",
  },
  alternates: {
      canonical: "https://intelisync.ai/services/web3-branding-agency/",
  }
  // robots: "follow, index",
  // verification: {
  //     google: "4mQzwqWNPRYEif77XJ2YEz25DRLcrmsRpXuiA2dFa5Q"
  // }
};


export default function Home() {
    return (
      <>
      <Banner />
      <Homepage />
      <Impact />
      <Trustedservice />
      <FAQSection faqs={Brandingfaqs} />
      <Blogservice />
      <Contactservice />
      </>
    );
  }
  