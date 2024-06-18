import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold mt-4 font-sedan">HOLLOW DEV</h1>
        <p className="text-lg mt-2 font-sedan">
          Let’s conquer the web kingdom!
        </p>
        <img
          src="/src/assets/hero-logo.png"
          alt="hero-logo"
          className="w-32 mt-1 mx-auto absolute left-80 transform -translate-x-1/3"
        />

        <button className="group relative overflow-hidden rounded bg-[#0E1324] px-8 py-2 text-white transition-all duration-300 ease-out hover:bg-gradient-to-r mt-6 hover:from-[#0E1324] hover:to-[#1F2937] ring-1 hover:ring-[#0E1324] ring-offset-1">
          Register Now
        </button>
      </div>

      <div className="relative w-100 " style={{ height: "700px" }}>
        <img
          src="/src/assets/hero-browser.png"
          alt="hero-browser"
          className="w-full h-full rounded-lg object-cover"
        />
        <img
          src="/src/assets/hero-code.png"
          alt="hero-code"
          className="absolute bottom-1 left-1/2 transform -translate-x-1/2  "
          style={{ width: "800px", height: "260px", borderRadius: "20px" }}
        />
      </div>
    </div>
  );
};

export default Hero;
