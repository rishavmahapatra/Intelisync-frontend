import React from 'react'

const ButtonTitle = ({buttonTitle}) => {
  return (
    <button className={`"buttonTitle my-9  border-b-2 border-[#06FFF0]
       rounded-[40px] px-[26px]
       py-[7px] text-[18px] bg-gradient-to-tr from-[#0183c9ac] to-[#00eddd8d] text-white `}>
        {buttonTitle}
      </button>
  )
}

export default ButtonTitle