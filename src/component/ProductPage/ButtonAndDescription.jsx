import React from "react";
import ButtonTitle from "./ButtonTitleWithMargin";

const ButtoonAndDescription = ({buttonTitle, description}) => {
  return (
    <div className="my-14 max-w-[812px] mx-auto text-white relative z-20">
      {/* buttonTitle Start  */}

     <ButtonTitle buttonTitle={buttonTitle}/>
      {/* buttonTitle Ends  */}

      {/* description start  */}
      <div className="description text-base font-medium text-[#FFFFFFCC]">
        {description}
       </div>
      {/* description ends  */}
    </div>
  );
};

export default ButtoonAndDescription;
