import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function Vision() {
    const visionPoints = [
      "Lead the charge in the new era of rapid technological progress, setting the standard in Web 3.0 and blockchain innovation.",
      "Build a team that thrives on creativity and agility, driving forward-thinking solutions that shape the future.",
      "Empower businesses to seize the opportunities of tomorrow, helping them excel in a world defined by digital transformation."
    ];
  
    return (
      <div className="bg-[#020B17] text-white py-26 px-6 md:px-15 lg:px-32 relative flex justify-center">
        <div className="max-w-2xl">
          <h2 className="font-poppins font-medium text-[30px] leading-[50px] tracking-tight text-white">
            Vision
          </h2>
          <div className="relative mt-16">
            {/* Glowing Vertical Line */}
            <div className="absolute left-3 top- h-full w-[3px] bg-gradient-to-b from-[#0B5FFF] to-transparent"></div>
            <div className="absolute left-[2px] top-[-25px] h-6 w-6 flex items-center justify-center bg-[#0B5FFF] rounded-full">
              <span className="text-white text-lg"><MdKeyboardDoubleArrowDown /></span>
              
            </div>
  
            {/* Vision Points */}
            <ul className="list-none space-y-6 pl-15">
              {visionPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#0B5FFF] text-xl">✔</span>
                  <p className="text-gray-300 font-poppins text-[17px] leading-[28px]">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  