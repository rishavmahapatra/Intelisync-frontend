import Image from "next/image";


export default function TrustedInnovators() {
    const brands = [
        { id: 1, name: "IDEEZA", image: "/photos/first.png" },
        { id: 2, name: "IDEEZA", image: "/photos/second.png" },
        { id: 3, name: "IDEEZA", image: "/photos/third.png" },
        { id: 4, name: "IDEEZA", image: "/photos/fourth.png" },
        { id: 5, name: "IDEEZA", image: "/photos/six.png" },
        { id: 6, name: "IDEEZA", image: "/photos/seven.png" },
        { id: 7, name: "IDEEZA", image: "/photos/eight.png" },
        { id: 8, name: "IDEEZA", image: "/photos/nine.png" },
        { id: 9, name: "IDEEZA", image: "/photos/ten.png" },
      ];
      
 
    return (
        <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32">
            <div className="relative w-fit mx-auto pb-2">
                <h2 className="font-poppins font-semibold text-[30px] leading-[40px] tracking-[-0.01%] text-center">
                    Trusted by Top Innovators
                </h2>
                <div className="absolute bottom-0 left-0 w-full h-[4px] bg-cyan-400"></div>
            </div>
 
            {/* Logo Grid */}
            <div className="grid grid-cols-3 mt-10 w-full max-w-[1200px] mx-auto">
                {brands.map((brand, index) => (
                    <div
                        key={index}
                        className={`flex justify-center items-center h-40
              ${index < brands.length - 3 ? "border-b-2 border-gray-700" : ""}
              ${index % 3 !== 2 ? "border-r-2 border-gray-700" : ""}
              ${index % 3 === 1 ? "border-l-2 border-gray-700" : ""}`}
                    >
                        <Image src={brand.image} alt={brand.name} width={200} height={200} />
                    </div>
                ))}
            </div>
        </div>
    );
}