"use client";

export default function CareersBanner() {
  return (
    <section
      className=" w-full h-[70vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Careers_Assets/careersBanner.png')" }}
    >

      {/* Centered Heading */}
      <div className="flex justify-center items-center h-full">
        <h1 className="text-white font-[500] text-[55px] md:text-[70px] lg:text-[96px] text-center">
          Careers
        </h1>
      </div>
    </section>
  );
}
