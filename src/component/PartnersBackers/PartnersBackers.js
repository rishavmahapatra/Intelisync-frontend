import Image from "next/image";

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

export default function PartnersBackers() {
  return (
    <div className="bg-[#000B18] text-white py-12 px-6">
      <div className="text-center">
        <h2 className="min-[320px]:max-[480px]:text-[20px] text-[32px] leading-[26px] text-center inline-block relative after:content-[''] after:block after:h-[1px] after:w-full after:max-w-full after:bg-gradient-to-r after:from-[#07CDFF] after:to-[#06FFF0] after:absolute after:bottom-0 after:left-0 pb-4">
          Partners & Backers
        </h2>
      </div>

      <div className="grid min-[320px]:max-[480px]:grid-cols-3 grid-cols-5 gap-6 mt-10 place-items-center">
        {partners.map((partner, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              src={partner.src}
              alt={partner.name}
              width={150}
              height={70}
              className="max-h-12"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
