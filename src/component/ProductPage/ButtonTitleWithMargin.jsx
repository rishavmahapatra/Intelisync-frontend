import React from 'react'

const ButtonTitle = ({buttonTitle}) => {
  return (
    <button className={`relative buttonTitle my-4
       rounded-[40px] p
       py-[7px] text-[18px] text-white text-start`}>
        {buttonTitle}

        <span className='absolute bottom-0 left-0 rounded-md  w-[100%] h-[1.5px] bg-linear-to-r from-[#009FDD] to-[#06FFF0]'></span>
      </button>
  )
}

export default ButtonTitle

{/* <button className={`relative buttonTitle my-9  border-b-2 border-[#06FFF0]
       rounded-[40px] px-[26px]
       py-[7px] text-[18px] bg-gradient-to-tr from-[#0183c9ac] to-[#00eddd8d] text-white `}>
        {buttonTitle}

        <span className='absolute bottom-0 w-[100%] h-[2px] bg-linear-to-r from-[cyan] to-[gray]'></span>
      </button> */}