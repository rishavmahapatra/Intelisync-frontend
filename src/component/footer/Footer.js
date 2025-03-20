import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaXTwitter, FaWhatsapp, FaQuora, FaReddit } from "react-icons/fa6";

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
      <div className="h-1/2 absolute inset-0 top-10 border-t-4 border-teal-600 rounded-t-[300px]"></div>
      <div className="p-10 lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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

          <div className="flex flex-wrap gap-2 mt-4">
            {/* First row */}
            <a href="https://www.linkedin.com/company/intelisync" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:scale-110 transition">
              <FaLinkedinIn className="text-lg text-[rgb(61,232,232)]" />
            </a>
            <a href="https://x.com/Intelisync_" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:scale-110 transition">
              <FaXTwitter className="text-lg text-[rgb(61,232,232)]" />
            </a>
            <a href="https://www.instagram.com/intelisync.ai" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:scale-110 transition">
              <FaInstagram className="text-lg text-[rgb(61,232,232)]" />
            </a>
            <a href="https://chat.whatsapp.com/ETtg5JskhZ884wDqE1oD7G" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:scale-110 transition">
              <FaWhatsapp className="text-lg text-[rgb(61,232,232)]" />
            </a>

            {/* Second row */}
            <div className="flex flex-wrap gap-2 w-full justify-start">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:scale-110 transition cursor-pointer">
                <FaFacebookF className="text-lg text-[rgb(61,232,232)]" />
              </a>
              <a href="https://www.youtube.com/@intelisync" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:scale-110 transition">
                <FaYoutube className="text-lg text-[rgb(61,232,232)]" />
              </a>
              <a href="https://www.reddit.com/user/Intelisync" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:scale-110 transition">
                <FaReddit className="text-lg text-[rgb(61,232,232)]" />
              </a>
              <a href="https://www.quora.com/profile/Intelisync" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:scale-110 transition">
                <FaQuora className="text-lg text-[rgb(61,232,232)]" />
              </a>
            </div>
          </div>


        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 md:ml-23 cursor-pointer ">Company</h3>
          <ul className="space-y-3 text-gray-400 text-sm md:ml-23 cursor-pointer">
            {[
              { name: "About", link: "/company/aboutuspage" },
              { name: "Events", link: "/events" },
              { name: "Blog", link: "/company/blog" },
              { name: "Careers", link: "/company/careers" },
              { name: "Global Presence", link: "/global-presence" },
              { name: "Contact", link: "/contact" },
              { name: "FAQs", link: "/FAQSection" },
              { name: "Terms & Conditions", link: "/company/condtions" },
              { name: "Privacy Policy", link: "/privacy-policy" }
            ].map((item, index) => (
              <li key={index} className="hover:text-teal-400 transition-all">
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
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
