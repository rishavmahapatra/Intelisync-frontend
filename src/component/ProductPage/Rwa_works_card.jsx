import React from "react";

const Rwa_works_card = ({ card_title, description }) => {
  return (
    <div className="rwa-works-cards py-[30px] px-[10px] w-[382px] h-[198px] rounded-[10px] border-b-[0.8px] bg-[#0063A51A] border-[#06FFF0]">
      {/* // card-title start  */}
      <div className="cardTitle mb-4">
        <li className="text-[#00EFE1] text-[18px]"> {card_title} </li>
      </div>
      {/* card title ends  */}

      {/* card description start  */}
      <div className="des text-[13px]">
        {description.map((item,index) => (
          <p key={index} className="mb-2 text-[#FFFFFFCC]">
            {item}
          </p>
        ))}
      </div>
      {/* card description ends  */}
    </div>
  );
};

export default Rwa_works_card;
