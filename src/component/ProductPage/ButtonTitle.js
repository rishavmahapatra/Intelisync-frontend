import React from 'react'

const ButtonTitle = ({title}) => {
  return (
    <div className={`relative buttonTitle w-fit my-4
      rounded-[40px] p
      py-[7px] text-[18px] text-white text-start`}>
      {title}

      <span className='absolute bottom-0 left-0 rounded-md  w-[100%] h-[1.5px] bg-linear-to-r from-[#009FDD] to-[#06FFF0]'></span>
     </div>
  )
}

{/* <button className={`relative buttonTitle my-4
       rounded-[40px] p
       py-[7px] text-[18px] text-white text-start`}>
        {buttonTitle}

        <span className='absolute bottom-0 left-0 rounded-md  w-[100%] h-[1.5px] bg-linear-to-r from-[#009FDD] to-[#06FFF0]'></span>
      </button> */}
{/* <div className="border-b-2 text-[18px] py-[7px] rounded-[40px] px-[26px]   w-fit [580px]   text-white  border-b-[#06FFF0]  bg-gradient-to-r from-[rgba(1,131,201,0.57)] to-[rgba(0,237,223,0.57)]">
            //   {title}
            // </div> */}
export default ButtonTitle