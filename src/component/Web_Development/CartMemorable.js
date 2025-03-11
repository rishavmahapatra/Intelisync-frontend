import React from 'react'

function CartMemorable() {
    const content =[
        "Your website should do more than just exist—it should captivate, engage, and inspire. We design sleek, responsive websites that offer intuitive navigation and exceptional user experiences, ensuring visitors stay longer and connect with your brand’s story."

    ]
  return (
    <div>
        <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32">
        <div className="max-w-3xl">
          <h1 className="font-poppins font-medium text-[30px] leading-[50px] tracking-[-0.01%]">
          Craft Memorable Digital Experiences with Custom Web Development
          </h1>
   
          {content.map((paragraph, index) => (
            <p key={index} className="font-poppins font-normal text-[17px] leading-[30px] tracking-[-0.01%] text-gray-300 mt-4">
              {paragraph}
            </p>
   
          ))}
        </div>
      </div>
    </div>
  )
}

export default CartMemorable