import React from 'react'

const EventGalleryButton = ({buttonTitle, gradientDirection}) => {
  return (
    <div className={`max-w-[481px] h-[66px] px-10 py-2 sm:py-0 text-[18px] sm:text-[22px] text-center flex justify-center items-center ${gradientDirection == "left" ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-[#2b66965e] to-[#2B659600] border border-[#0194FE80] rounded-[40px]`}>
        {buttonTitle}
    </div>
  )
}

export default EventGalleryButton