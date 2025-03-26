import { Description } from "@mui/icons-material";
import React from "react";

const Features_card = ({ description, borderStyle }) => {
  return (
    <div className={`w-[380px] min-h-[78px] py-[10px] px-[30px] rounded-[7px]  border-[#06FFF0] bg-[#37ADFC26] text-[14px] ${borderStyle}`}>
      <div className="des w-[80%] mx-auto text-center">{description}</div>
    </div>
  );
};

export default Features_card;
