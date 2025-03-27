// import Image from "next/image";

// const partners = [
//   { name: "APTOS", src: "/BlockChain_Assets/aptos.png" },
//   { name: "MONAD", src: "/BlockChain_Assets/monad.png" },
//   { name: "MANTA NETWORK", src: "/BlockChain_Assets/manta-network.png" },
//   { name: "BINANCE", src: "/BlockChain_Assets/binance.png" },
//   { name: "SKALE", src: "/BlockChain_Assets/skale.png" },
//   { name: "Botanix", src: "/BlockChain_Assets/botanix.png" },
//   { name: "Kroma", src: "/BlockChain_Assets/kroma.png" },
//   { name: "Orochi", src: "/BlockChain_Assets/orochi.png" },
//   { name: "DQ", src: "/BlockChain_Assets/dq.png" },
//   { name: "Golden Apple", src: "/BlockChain_Assets/golden-apple.png" },
// ];

// export default function PartnersBackers() {
//   return (
//     <div className="bg-[#000B18] text-white py-12 px-6">
//       <div className="text-center">
//         <h2 className="min-[320px]:max-[480px]:text-[20px] text-[32px] leading-[26px] text-center inline-block relative after:content-[''] after:block after:h-[1px] after:w-full after:max-w-full after:bg-gradient-to-r after:from-[#07CDFF] after:to-[#06FFF0] after:absolute after:bottom-0 after:left-0 pb-4">
//           Partners & Backers
//         </h2>
//       </div>

//       <div className="grid min-[320px]:max-[480px]:grid-cols-3 grid-cols-5 gap-6 mt-10 place-items-center">
//         {partners.map((partner, index) => (
//           <div key={index} className="flex justify-center items-center">
//             <Image
//               src={partner.src}
//               alt={partner.name}
//               width={150}
//               height={70}
//               className="max-h-12"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { name: "APTOS", src: "/BlockChain_Assets/aptos.png" },
  { name: "MONAD", src: "/BlockChain_Assets/monad.png" },
  { name: "MANTA NETWORK", src: "/BlockChain_Assets/manta-network.png" },
  { name: "BINANCE", src: "/BlockChain_Assets/binance.png" },
  { name: "SKALE", src: "/BlockChain_Assets/skale.png" },
  { name: "Botanix", src: "/BlockChain_Assets/botanix.png" },
  { name: "Kroma", src: "/BlockChain_Assets/kroma.png" },
  { name: "Orochi", src: "/BlockChain_Assets/orochi.png" },
  { name: "DQ", src: "/BlockChain_Assets/dq.png" },
  { name: "Golden Apple", src: "/BlockChain_Assets/golden-apple.png" },
];

export default function TrustedBrands() {
  return (
    <div className="flex flex-col justify-center items-center  bg-[#000B18] overflow-hidden py-12 px-6">
      <div className="text-center text-white">
        <h2 className="min-[320px]:max-[480px]:text-[20px] text-[32px] leading-[26px] text-center inline-block relative after:content-[''] after:block after:h-[1px] after:w-full after:max-w-full after:bg-gradient-to-r after:from-[#07CDFF] after:to-[#06FFF0] after:absolute after:bottom-0 after:left-0 pb-4">
          Partners & Backers
        </h2>
      </div>
      <div className="w-full relative pt-6">
        <motion.div
          className="flex items-center flex-nowrap space-x-5 md:space-x-20" // Increased spacing for smoother appearance
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear", // Smoother acceleration and deceleration
            duration: 5,
            // times: [0,0.5,1],
          }}
        >
          {[...partners, ...partners].map((partners, index) => (
            <div key={index} className="flex-shrink-0 cursor-pointer">
              <Image
                src={partners.src}
                alt='Web3 Marketing'
                width={200}
                height={100}
                className="w-[100px] md:w-[200px]"
                unoptimized
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
