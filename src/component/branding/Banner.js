"use client";

export default function Section() {
  return (
    <div
      className="flex items-center justify-center h-[70vh] w-full text-white bg-black"
      style={{
        backgroundImage: "url('/banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="text-center max-w-5xl">
        <h1 className="font-poppins font-semibold md:text-[48px] md:leading-[55px] tracking-[-0.01%] text-center min-[320px]:text-[30px]">
          Craft a Unique Brand Identity with a <br />
          Leading Branding Agency.{" "}
        </h1>

        <p className="font-poppins font-medium text-[30px] leading-[55px] tracking-[-0.01%] text-center mt-2">
          Simplify Your Path to Blockchain Success
        </p>

        <button className="mt-6 w-[200px] h-[55px] bg-white text-black rounded-full font-semibold shadow-md hover:bg-gray-200 transition">
          Book a demo
        </button>
      </div>
    </div>
  );
}
