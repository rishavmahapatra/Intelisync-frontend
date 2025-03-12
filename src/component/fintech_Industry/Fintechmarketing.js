import Image from "next/image"

export default function Marketing() {
    const content = [
      "Building a successful fintech business goes beyond innovation, it requires a smart, strategic approach to drive growth. With the right marketing strategy, you can effortlessly attract high quality leads, strengthen your brand, and focus on scaling your operations, while we take care of the rest.",
      "We specialize in delivering fintech marketing strategies that produce tangible results. Combining our deep industry insights with tailored approaches, we help you navigate the fintech landscape with ease. From boosting visibility to enhancing customer engagement, our strategies put your business ahead of the curve. With a data driven approach and continuous optimization, we ensure your growth remains sustainable and in line with evolving market trends. Let us craft the perfect marketing strategy to position your fintech business as an industry leader and drive long-term success."
    ];
   
    return (
      <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32 flex justify-center items-center min-h-screen gap-10">

        <div className="mt-6 md:ml-8">
          <Image src="/photos/industry_logo.png" alt="Fintech Icon" width={100} height={100} />
        </div>

        <div className="max-w-2xl">
          <h1 className="font-poppins font-medium text-[30px] leading-[40px] tracking-[-0.01%]">
            Get ahead of the competition with focused          </h1>
          <p className=" font-poppins font-semibold text-[30px]  bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent mx-auto w-[75%]">
            Fintech Marketing Strategies
          </p>

          {content.map((paragraph, index) => (
            <p key={index} className="font-poppins font-normal text-[17px] leading-[30px] tracking-[-0.01%] text-gray-300 mt-4">
              {paragraph}
            </p>   
          ))}
        </div>
      </div>
    );
  } 



