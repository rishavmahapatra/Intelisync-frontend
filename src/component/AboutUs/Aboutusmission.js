export default function Mission() {
    const visionPoints = [
      "Equip businesses with transformative Web 3.0 and blockchain solutions that fuel growth in an ever-changing landscape.",
      "Create strategies that drive impactful results boosting revenue, amplifying brand presence, and accelerating growth.",
      "Inspire our team to embrace innovation, break boundaries, and deliver solutions that redefine success in this digital era."
    ];
  
    return (
      <div className="bg-[#020B17] text-white py-26 px-6 md:px-15 lg:px-32 relative flex justify-center">
        <div className="max-w-2xl">
          <h2 className="font-poppins font-medium text-[30px] leading-[50px] tracking-tight text-white">
            Mission
          </h2>
          <div className="relative mt-16">
            {/* Glowing Vertical Line */}
            <div className="absolute left-3 top- h-full w-[3px] bg-gradient-to-b from-[#14e266] to-transparent"></div>
            <div className="absolute left-[2px] top-[-25px] h-6 w-6 flex items-center justify-center bg-[#14e266] rounded-full">
              <span className="text-white text-lg">✔</span>
            </div>
  
            {/* Vision Points */}
            <ul className="list-none space-y-6 pl-15">
              {visionPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#14e266] text-xl">✔</span>
                  <p className="text-gray-300 font-poppins text-[17px] leading-[28px]">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  