import React from "react";

const Hero_section = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row text-white  justify-between items-center h-screen  bg-gradient-to-tr from-[#0183c9c1] to-[#00EDDF]">
      {/* // title text start  */}
      <div className="title-left flex-1 flex flex-col justify-center items-center">
        <h1 className=" text-7xl sm:text-8xl font-bold text-[#00f9f0] drop-shadow-md">
          RWA
        </h1>
        <h1 className="text-5xl sm:text-6xl font-semibold text-center">
          Real World Assets
        </h1>
      </div>
      {/* // title text ends  */}

      {/* // real state image start  */}
      <div className="real-state-image-right w-[240px] sm:w-[400px] lg:w-[40%] flex justify-start items-center">
        <img
          src="/ProductPage/ProductBanner.png"
          className="object-cover w-[400px]"
          alt=""
        />
      </div>
      {/* // real state image ends  */}
    </div>
  );
};

export default Hero_section;
