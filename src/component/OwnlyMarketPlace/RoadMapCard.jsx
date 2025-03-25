import React from "react";

{/* NOTE : Used by RoadMapForOwnly Component  */}
const RoadMapCard = ({ phase, item }) => {
  return (
    <>
       <div className="CardWrapper w-[266px] h-[369px]">
          {/* Top card design Hexagonal start  */}
          <div className="hexagonalDesignWrapper flex justify-center items-baseline w-full text-center h-[20%] relative">
            {/* hexagone 1 start  */}
            <div className="hexagone w-[108px] h-[95px] bg-gradient-to-tr from-[#0078B9] to-[#00E3EF] flex justify-center items-center absolute top-2">
              {/* Hexagone 2 start  */}
              <div className="hexagone flex justify-center items-center text-3xl font-semibold bg-[#000000] text-[#0078B9] h-[96%] w-[94%] ">
                <span className="text-gradient"> {item.title} </span>
              </div>
              {/* Hexagone 2 ends */}
            </div>
            {/* hexagone 1 ends  */}
          </div>
          {/* Top card design Hexagonal  ends */}

          {/* Bottom Design start  */}
          <div className="card-bottom-design px-4 pb-1 text-[12px] flex flex-col justify-around text-start text-[#FFFFFFCC] font-medium pt-9 h-[80%] bg-[#22282F]">
            {item.list.map((list,index) =>
                <div key={index} className="cardList flex justify-between items-start">
                  {/* list Symball start  */}
                  <li></li>
                  {/* list symball ends  */}
                  {/* text content start  */}
                  <p className="w-[90%]">{list}</p> {/* text content ends  */}
                </div>
            )}
          </div>
          {/* Bottom design ends */}
        </div>
      
    </>
  );
};

export default RoadMapCard;
