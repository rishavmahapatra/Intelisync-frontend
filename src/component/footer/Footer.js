import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaXTwitter, FaWhatsapp, FaQuora, FaReddit , FaMedium} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="py-20 bg-[#000B18] text-white relative min-h-[300px] z-50"
    // style={{
    //   backgroundImage: `url('/footerimage.png')`,
    //   backgroundPosition: "center 30%",
    //   backgroundRepeat: "no-repeat",
    //   backgroundSize: "95% auto", // Adjust width, height auto
    //   paddingTop: "200px" // Push content down
    // }}
    >
      <div className="absolute inset-0 top-13 border-t-2 sm:border-t-3 md:border-t-4 border-teal-600 
                rounded-t-[100px] sm:rounded-t-[150px] md:rounded-t-[300px] -z-10 h-1/4 sm:h-1/3 md:h-1/2">
      </div>

      <div className="p-10 lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="w-[141px] h-[33px] relative">
            <Image
              src="/photos/logo.webp"
              alt="Intelisync Logo"
              layout="intrinsic"
              width={141}
              height={33}
              priority
            />
          </div>
          <p className="mt-4 text-sm text-gray-400 ">
          Intelisync is a premier blockchain and Web3 development firm, specializing in secure dApps, DeFi, RWA tokenization, and AI-driven solutions. We offer end-to-end services, including smart contracts, Layer 2 scaling, DEX/CEX development, and token launches. Our Web3 marketing expertise covers influencer campaigns, KOL partnerships, and growth strategies to maximize engagement. With a focus on cybersecurity and decentralized identity, we build scalable, future-proof platforms for startups and enterprises worldwide."
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
              <a href="https://medium.com/@Intelisync" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:scale-110 transition">
                <FaMedium className="text-lg text-[rgb(61,232,232)]" />
              </a>
              <a href="https://www.quora.com/profile/Intelisync" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:scale-110 transition">
                <FaQuora className="text-lg text-[rgb(61,232,232)]" />
              </a>
              
            </div>
          </div>


        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 md:ml-23 ">Company</h3>
          <ul className="space-y-3 text-gray-400 text-sm md:ml-23">
            {[
              { name: "About", link: "/company/aboutuspage" },
              { name: "Events", link: "/events" },
              { name: "Blog", link: "/company/blog" },
              { name: "Careers", link: "/company/careers" },
              { name: "Global Presence", link: "#global" },
              { name: "Contact", link: "/contact" },
              { name: "FAQs", link: "#faq" },
              { name: "Terms & Conditions", link: "/company/condtions" },
              { name: "Privacy Policy", link: "/privacy-policy" }
            ].map((item, index) => (
              <li key={index} className="hover:text-teal-400 transition-all ">
                <Link href={item.link} className="cursor-pointer hover:text-teal-400 ">
                  {item.name}
                </Link>

              </li>
            ))}
          </ul>
        </div>



        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            {[
              { name: "Artificial Intelligence (AI)", link: "/services/ai-development-services/" },
              { name: "Growth Marketing", link: "/services/growth-marketing-agency/" },
              { name: "Blockchain Services", link: "/services/blockchain-development-services/" },
              { name: "Public Relations", link: "/services/public-relation/" },
              { name: "Strategic Advisory", link: "/services/strategy-advisor/" },
              { name: "Branding", link: "/services/web3-branding-agency/" },
              { name: "Community Management", link: "/services/web3-community-Management-agency/" },
              { name: "Influencer Marketing", link: "/services/web3-influencer-marketing/" },
            ].map((item, index) => (
              <li key={index} className="hover:text-teal-400 transition-all">
                <Link href={item.link} className="cursor-pointer hover:text-teal-400">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

        </div>


        <div>
        <h3 className="text-lg font-semibold mb-4">Global Services</h3>
        <ul className="space-y-3 text-gray-400 text-sm mr-10">
          {[
            { name: "Dubai - UAE | Intelisync", link: "/global-presence/dubai" },
            { name: "Singapore | Intelisync Pvt Ltd", link: "/global-presence/singapore" },
            { name: "Boston | USA", link: "/global-presence/boston" },
            { name: "London | United Kingdom", link: "/global-presence/uk" },
            { name: "Riyadh | Intelisync", link: "/global-presence/riyadh" },
            { name: "India - Pune | Intelisync Technology Pvt Ltd", link: "/global-presence/india" },
          ].map((location, index) => (
            <li key={index} className="hover:text-teal-400 transition-all">
              <Link href={location.link} className="cursor-pointer hover:text-teal-400">
                {location.name}
              </Link>
            </li>
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
