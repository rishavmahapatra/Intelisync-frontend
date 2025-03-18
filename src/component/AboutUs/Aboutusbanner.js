export default function GradientBackground() {
  return (
    <div className="relative flex items-center justify-start min-h-[80vh] md:min-h-[70vh] text-white overflow-hidden px-4 sm:px-8 md:px-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-black"
        style={{ backgroundImage: "url('/aboutusbanner.webp')" }}
      ></div>

      {/* Content */}
      <h1 className="relative text-center md:text-left font-poppins font-medium text-[26px] sm:text-[30px] md:text-[35px] leading-[32px] sm:leading-[38px] md:leading-[40px] text-white">
        <span className="text-[#00B8D4]">Intelisync:</span> Redefining Digital Transformation <br />
        with Web3 Technologies
      </h1>
    </div>
  );
}

