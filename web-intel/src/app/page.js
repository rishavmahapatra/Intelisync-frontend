
import Founder from "@/component/founderpage/Founder";
import Navbar from "@/component/navbar/Navbar";
import Ourservice from "@/component/server/Ourservice";
import Section from "@/component/whoweare/Section";


export default function Home() {
  return (
    <>
    <Navbar />
    <Section />
    <Founder />
    <Ourservice />
    </>
  );
}
