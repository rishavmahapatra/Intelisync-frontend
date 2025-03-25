import React from "react";
import RoadMapCard from "./RoadMapCard";
import ButtonTitle from "../ProductPage/ButtonTitleWithMargin";
import { RoadMapOwnlyData } from "@/utils/Products_Data";

// NOTE : Used in the main page of OwnlyMarketPlace 
const RoadMapForOwnly = () => {
  console.log("RoadMapOwnlyData:", RoadMapOwnlyData);

  return (
    // Road Wrapper Map Start
    <div className="RoadMapWrapper relative text-white min-h-screen px-2 max-w-[1300px] mx-auto">


       {/* gradient design start  */}
       <div className="blurGradient w-[500px]  h-[500px]  bg-gradient-to-r from-[#049EBC] via-[#00375A] to-[#490074] blur-[190px] rounded-full absolute z-[1]  left-[30%] top-[35%]"></div>
        {/* gradient design ends  */}

      {/* Heading  start  */}
      <h2 className="relative z-20">
        <ButtonTitle buttonTitle={"Roadmap for Ownly"} />
      </h2>
      {/* Hwading ends  */}

      {/* phase 1 and 2 container start  */}
      <div className="phase_1_2_container relative z-20 flex justify-evenly items-center flex-wrap gap-2">
        {/* Phase : 1 start  */}
        <div className="phase1 my-4">
          {/* phase 1 title start  */}
          <div className="phase-1-title text-center sm:text-start text-gradient font-semibold h-16">
            Phase 1: Foundation Building
          </div>
          {/* phase 1 title ends */}

          {/* // road map card start  */}
          <div className="Phase1-card-wrapper flex justify-center sm:justify-start  items-center flex-wrap gap-8">
            {RoadMapOwnlyData.filter((item) => item.phase === 1).map(
              (item, index) => (
                <RoadMapCard key={index} phase={2} item={item} />
              )
            )}
          </div>
          {/* // road map card ends */}
        </div>
        {/* Phase : 1 ends */}

        {/* Phase : 2 start  */}
        <div className="phase2 my-4">
          {/* phase 1 title start  */}
          <div className="phase-2-title text-center sm:text-start text-gradient font-semibold h-16">
            Phase 1: Foundation Building
          </div>
          {/* phase 2 title ends */}

          {/* // road map card start  */}
          <div className="Phase2-card-wrapper flex justify-center sm:justify-start  items-center flex-wrap gap-8">
          {RoadMapOwnlyData.filter((item) => item.phase === 2).map(
              (item, index) => (
                <RoadMapCard key={index} phase={2} item={item} />
              )
            )}
          </div>
          {/* // road map card ends */}
        </div>
        {/* Phase : 2 ends */}
      </div>
      {/* phase 1 and 2 container ends */}

      {/* phase 3 container start  */}
      <div className="phase3 relative z-20 text-center my-10">
        <div className="phase1 my-4">
          {/* phase 3 title start  */}
          <div className="phase-3-title text-gradient font-semibold h-16">
            Phase 3: Foundation Building
          </div>
          {/* phase 3 title ends */}

          {/* // road map card start  */}
          <div className="Phase3-card-wrapper flex flex-wrap justify-center items-center gap-8">
          {RoadMapOwnlyData.filter((item) => item.phase === 3).map(
              (item, index) => (
                <RoadMapCard key={index} phase={2} item={item} />
              )
            )}
          </div>
          {/* // road map card ends */}
        </div>
        {/* Phase : 1 ends */}
      </div>

      {/* phase 3 container ends */}
    </div>
    // Road Map Wrapper Ends
  );
};

export default RoadMapForOwnly;
