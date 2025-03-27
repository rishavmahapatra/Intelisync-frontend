import ContactUs from "@/component/ContactUs/ContactUs";
import EventGalleryButton from "@/component/EventGallery/EventGalleryButton";
import PhotoLayout from "@/component/EventGallery/PhotoLayout";
import { EventGalleryImages } from "@/utils/EventGalleryImages";
import React from "react";

const page = () => {
 
  return (
    // NOTE : Remove pb-20 its only for testing purpose
    <div className="max-w-[100vw] min-h-[100vh] text-white overflow-x-hidden bg-[#020202] ">

      {/* Event Banner start   */}
      <div className="event-banner h-screen [350px] sm:h-[90vh]">
        <img
          src="/EventGallery/EventGalleryBanner.svg"
          className="object-cover  w-[100%] h-[100%]"
          alt=""
        />
      </div>
      {/* Event Banner ends  */}

      {EventGalleryImages.map((item,index) => (
        <div key={index} className="px-2">
          {/*  photo section button title start */}
          <div  className="photoSection1 my-14 sm:my-20 flex justify-center items-center w-[100%] ">
            <EventGalleryButton buttonTitle={item.buttonTitle} gradientDirection={index % 2!=0 ? "left" : "right"} />
          </div>
          {/* /*  photo section button title ends  */}

          {/* photo layout start  */}
          <div className="photoLayout">
            <PhotoLayout
              direction={item.direction}
              leftImg={item.mainImg}
              miniWindowImg1={item.miniWindowImg1}
              miniWindowImg2={item.miniWindowImg2}
              miniWindowImg3={item.miniWindowImg3}
              miniWindowImg4={item.miniWindowImg4}
            />
          </div>
          {/* photo layout ends  */}
        </div>
      ))}

      {/* contact us form start  */}
      <div className="contactus my-10 sm:my-12">
      <ContactUs/>
      </div>
      {/* contact us form ends  */}

    </div>
  );
};

export default page;
