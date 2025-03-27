import React from "react";

const PhotoLayout = ({
  leftImg,
  miniWindowImg1,
  miniWindowImg2,
  miniWindowImg3,
  miniWindowImg4,
  direction,
}) => {
  return (
    <div
      className={`max-w-[1200px] flex justify-center items-center gap-4 mx-auto lg:h-[600px] ${
        direction === "left" ? "flex-col lg:flex-row" : "flex-col lg:flex-row-reverse"
      } `}
    >
      {/* left image container start  */}
      <div className="leftImage  h-[100%]  flex flex-1 justify-center items-center w-[100%] lg:w-[70%]">
        <img
          src={leftImg}
          alt="Blockchain Technology"
          className="object-cover lg:rounded-[20px] h-[100%] rounded-[10px]"
        />
      </div>
      {/* left image container ends*/}

      {/* right image container start  */}
      <div
        className={`rightImage h-[100%] flex justify-around items-center flex-col w-[100%] lg:w-auto ${
          direction === "left" ? "" : ""
        }`}
      >
        {/* top image container start  */}
        <div
          className={`"top flex  items-baseline h-[50%] gap-4 w-[100%] justify-center ${
            direction === "left" ? "lg:justify-start" : "lg:justify-end"
          }`}
        >
          {/* image 1 start  */}
          <div
            className={`"img1 h-[100%] ${
              direction === " left" ? "w-[40%]" : ""
            }`}
          >
            <img
              src={miniWindowImg1}
              alt="Crypto Marketing"
              className="object-cover lg:rounded-[20px] rounded-[10px] h-[100%] "
            />
          </div>
          {/* image 1 ends */}

          {/* image 2 start  */}
          <div
            className={`"img2 h-[100%] ${
              direction === " left" ? "w-[40%]" : ""
            }`}
          >
            <img
              src={miniWindowImg2}
              alt="Blockchain Technology"
              className="object-cover lg:rounded-[20px] rounded-[10px] h-[100%]"
            />
          </div>
          {/* image 2 ends */}
        </div>
        {/* top image container ends */}

        {/* bottom image container start  */}
        <div
          className={`bottom flex items-baseline my-2 gap-4 h-[50%] justify-center w-[100%] ${
            direction === "left" ? "lg:justify-start" : "lg:justify-end"
          }`}
        >
          {/* image 1 start  */}
          <div
            className={`"img3 h-[100%] ${
              direction === " left" ? "w-[40%]" : ""
            }`}
          >
            <img
              src={miniWindowImg3}
              alt="Crypto Marketing"
              className="object-cover lg:rounded-[20px] rounded-[10px] h-[100%]"
            />
          </div>
          {/* image 1 ends */}

          {/* image 2 start  */}
          <div
            className={`"img4 h-[100%] ${
              direction === " left" ? "w-[40%]" : ""
            }`}
          >
            <img
              src={miniWindowImg4}
              alt="Crypto Marketing"
              className="object-cover lg:rounded-[20px] rounded-[10px] h-[100%]"
            />
          </div>
          {/* image 2 ends */}
        </div>
        {/* bottom image container ends */}
      </div>
      {/* right image container ends*/}
    </div>
  );
};

export default PhotoLayout;
