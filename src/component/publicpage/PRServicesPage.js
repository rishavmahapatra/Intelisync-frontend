import { PublicRelationCards } from "@/utils/Cards_Data";

export default function PRServicesPage() {
  return (
    <div className="bg-[#000B18] text-white py-16 px-6 md:px-20 lg:px-32 ">
      {/* Header Section */}
      <div className="max-w-4xl">
        <h1
          className="text-3xl md:text-5xl  leading-tight font[500] text-30px"
          style={{ fontSize: "30px", color: "#06FFFB" }}
        >
          Public Relations Services to Elevate Your Brand
        </h1>

        <p className="font-poppins font-[400] text-[17px] leading-[20px] tracking-[-0.01%] text-gray-300 mt-4 max-w-3xl mb-10 ">
          Our public relations services are crafted to help your brand build
          trust, enhance visibility, and drive meaningful engagement. We
          position your business as an industry leader with targeted
          communication strategies. Here’s how we can support your brand:
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {PublicRelationCards.map((solution, index) => (
          <div
            key={index}
            className="p-px relative rounded-2xl shadow-lg bg-[#081828] h-[250px]  "
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00EEDF] via-[#7F7F7F] to-[#00A9CA]"></div>

            <div className="p-4 bg-[#0B1522] rounded-2xl relative h-full py-8 px-10">
              <h2 className="font-poppins font-[700px] text-[19px] leading-[25px] tracking-[-0.01%] whitespace-pre-line ">
                {solution.title}
              </h2>

              <p className="font-poppins font-[400px] text-[13px] leading-[20px] tracking-[-0.01%] text-gray-300 mt-4 break-words ">
                {solution.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
