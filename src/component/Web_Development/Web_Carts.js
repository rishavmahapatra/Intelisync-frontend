import React from "react";
import { Webdevelopment } from "@/utils/Cards_Data";

function Web_Carts() {
  return (
    <div>
      <div className="bg-[#000B18] text-white py-16 px-6 md:px-20 lg:px-32  ">
        <div className="max-w-4xl">
          <h2
            className="text-3xl md:text-5xl  leading-tight font[500] text-30px"
            style={{ fontSize: "30px", color: "#06FFFB" }}
          >
            Web3 Community Management Agency for Crypto Growth
          </h2>
          <p className="font-poppins font-[400] text-[17px] leading-[20px] tracking-[-0.01%] text-gray-300 mt-4 max-w-3xl mb-5 ">
            Building a community is easy, but keeping it engaged takes strategy.
            Our crypto community management services ensure active discussions,
            real-time support, and a loyal following on platforms like Discord
            and Telegram. We help your project gain trust, attract investors,
            and stand out in the Web3 space.{" "}
          </p>

          <p className="font-poppins font-[400] text-[17px] leading-[20px] tracking-[-0.01%] text-gray-300 mt-4 max-w-3xl mb-10 ">
            Our full-service web development offerings include:{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Webdevelopment.map((solution, index) => (
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
    </div>
  );
}

export default Web_Carts;
