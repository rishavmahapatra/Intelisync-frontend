import React from 'react'

function Expert_web() {
  return (
    <div>
         <div className="bg-[#000B18] text-white py-16 px-6 md:px-20 lg:px-32  ">
      <div className="max-w-4xl ">
        {/* Heading */}
        <h2 className="text-3xl font[500] text-30px "  style={{ color: "rgba(6, 255, 251, 1)" }}>
        Helping Your Business Grow with Scalable Web Solutions
        </h2>

        {/* Description */}
        <p className="mt-4 font[400] text-17px text-gray-300 leading-relaxed">
        Your digital presence should evolve with your business. Our web app development services focus on creating secure and scalable solutions that enhance brand impact and drive long-term growth. With a combination of creativity and advanced technology, we build web-based applications that deliver seamless performance and real business value.
        </p>

        <p className="mt-4 font[400] text-17px text-gray-300 leading-relaxed">
        From business management tools to custom platforms, we develop reliable web applications tailored to meet your specific needs.
        </p>

        {/* Bullet Points */}
        <ul className="mt-6 font[400] text-17px space-y-3">
          <li className="flex items-start gap-2 text-sm">
            <span className="text-white  ">•</span> Well-structured and user-friendly web architecture
          </li>
          <li className="flex items-start gap-2 text-sm">
            <span className="text-white">•</span>Fully responsive designs that adapt to any device
          </li>
          <li className="flex items-start gap-2 text-sm">
            <span className="text-white">•</span>Engaging UI and UX to enhance user interaction
          </li>
          <li className="flex items-start gap-2 text-sm">
            <span className="text-white">•</span>SEO-friendly development for better search visibility
          </li>
          <li className="flex items-start gap-2 text-sm">
            <span className="text-white">•</span> Strategic solutions to expand your digital presence
          </li>
          <li className="flex items-start gap-2 text-sm">
            <span className="text-white">•</span>Dedicated support to ensure seamless operation
          </li>

        </ul>
        <p className='py-5 font[400] text-17px text-gray-300'>
        As a trusted web app development company, we transform ideas into innovative digital solutions designed for growth and success.
</p>
      </div>
    </div>
    </div>
  )
}

export default Expert_web