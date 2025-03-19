import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      className="py-20 bg-[#000B18] text-white relative min-h-[300px] "
      // style={{
      //   backgroundImage: `url('/footerimage.png')`,
      //   backgroundPosition: "center 30%",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "95% auto", // Adjust width, height auto
      //   paddingTop: "200px" // Push content down
      // }}
    >
      <div className="absolute inset-0 top-10 border-t-4 border-teal-600 rounded-t-[300px]"></div>
      <div className="p-6 lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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

          <div className="flex space-x-2 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:scale-105 transition">
              <FaFacebookF className="text-lg text-[rgb(61,232,232)]" />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:scale-105 transition">
              <FaInstagram className="text-lg text-[rgb(61,232,232)]" />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:scale-105 transition">
              <FaLinkedinIn className="text-lg text-[rgb(61,232,232)]" />
            </a>

            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:scale-105 transition">
              <FaXTwitter className="text-lg text-[rgb(61,232,232)]" />
            </a>

            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:scale-105 transition">
              <FaYoutube className="text-lg text-[rgb(61,232,232)]" />
            </a>
          </div>



        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 md:ml-23">Company</h3>
          <ul className="space-y-3  text-gray-400 text-sm md:ml-23">
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
              "Singapore | Intelisync Pvt Ltd",
              "Boston | USA",
              "London | United Kingdom",
              "Riyadh | Intelisync",
              "India - Pune | Intelisync Technology Pvt Ltd",
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
