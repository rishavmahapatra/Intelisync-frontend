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
    <div className="bg-[#020B17] text-white py-12 px-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Partners & Backers</h2>
        <div className="w-16 h-[2px] bg-cyan-400 mx-auto mt-2"></div>
      </div>

      <div className="grid grid-cols-5 gap-6 mt-10 place-items-center">
        {partners.map((partner, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              src={partner.src}
              alt={partner.name}
              width={120}
              height={60}
              className="max-h-12"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
