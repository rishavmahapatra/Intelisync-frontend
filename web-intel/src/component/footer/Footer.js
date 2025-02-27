import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";



export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Left Section - Brand and Description */}
        <div>
          <h2 className="text-2xl font-bold">
          <div className="text-2xl font-bold">
          <span className="text-white">Inteli</span>
          <span className="text-teal-400">sync</span>
        </div>
          </h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Intelisync leads the way in transformative solutions across blockchain, Web3, and AI.
            We empower companies to innovate with decentralized technologies, custom blockchain 
            development, and strategic growth marketing.
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6">
            <FaFacebookF className="text-gray-400 hover:text-teal-400 cursor-pointer text-xl transition-all" />
            <FaInstagram className="text-gray-400 hover:text-teal-400 cursor-pointer text-xl transition-all" />
            <FaLinkedinIn className="text-gray-400 hover:text-teal-400 cursor-pointer text-xl transition-all" />
            <FaYoutube className="text-gray-400 hover:text-teal-400 cursor-pointer text-xl transition-all" />
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            {["About", "Events", "Blog", "Careers", "Global Presence", "Contact", "FAQs", "Terms & Conditions", "Privacy Policy"]
              .map((item, index) => (
                <li key={index} className="hover:text-teal-400 transition-all">
                  <Link href="/">{item}</Link>
                </li>
              ))}
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            {["Artificial Intelligence (AI)", "Growth Marketing", "Blockchain Services", "Public Relations", "Strategic Advisory", "Branding", "Community Management", "Influencer Marketing"]
              .map((item, index) => (
                <li key={index} className="hover:text-teal-400 transition-all">
                  <Link href="/">{item}</Link>
                </li>
              ))}
          </ul>
        </div>

        {/* Global Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Global Services</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
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

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} Intelisync. All rights reserved.
      </div>
    </footer>
  );
}
