import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="py-20 bg-black text-white relative min-h-[300px] mt 20"
      style={{
        backgroundImage: `url('/FooterImage.png')`,
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "95% auto", // Adjust width, height auto
        paddingTop: "100px" // Push content down
      }}
    >
      <div className="py-6 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mr-14">
        <div>
          <h2 className="text-2xl font-bold">
            <span className="text-white">Inteli</span>
            <span className="text-teal-400">sync</span>
          </h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Intelisync leads the way in transformative solutions across blockchain, Web3, and AI.
            We empower companies to innovate with decentralized technologies, custom blockchain
            development, and strategic growth marketing.
          </p>
          <div className="flex space-x-4 mt-6">
            <FaFacebookF className="text-gray-400 hover:text-teal-400 cursor-pointer text-xl transition-all" />
            <FaInstagram className="text-gray-400 hover:text-teal-400 cursor-pointer text-xl transition-all" />
            <FaLinkedinIn className="text-gray-400 hover:text-teal-400 cursor-pointer text-xl transition-all" />
            <FaYoutube className="text-gray-400 hover:text-teal-400 cursor-pointer text-xl transition-all" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 ml-23">Company</h3>
          <ul className="space-y-3  text-gray-400 text-sm ml-23">
            {["About", "Events", "Blog", "Careers", "Global Presence", "Contact", "FAQs", "Terms & Conditions", "Privacy Policy"].map(
              (item, index) => (
                <li key={index} className="hover:text-teal-400 transition-all">
                  <Link href="/">{item}</Link>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            {[
              "Artificial Intelligence (AI)",
              "Growth Marketing",
              "Blockchain Services",
              "Public Relations",
              "Strategic Advisory",
              "Branding",
              "Community Management",
              "Influencer Marketing",
            ].map((item, index) => (
              <li key={index} className="hover:text-teal-400 transition-all">
                <Link href="/">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Global Services</h3>
          <ul className="space-y-3 text-gray-400 text-sm mr-10">
            {[
              "Dubai - UAE | Intelisync",
              "India - Pune | Intelisync Technology Pvt Ltd",
              "Singapore | Intelisync Pvt Ltd",
              "Boston | USA",
              "London | United Kingdom",
            ].map((location, index) => (
              <li key={index} className="hover:text-teal-400 transition-all">{location}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} Intelisync. All rights reserved.
      </div>
    </footer>
  );
}
