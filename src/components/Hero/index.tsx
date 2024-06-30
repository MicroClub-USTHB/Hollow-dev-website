import HollowButton from "../UI/HollowButton";
import trailer from "/public/assets/hollow-dev.mp4";
import "/public/assets/styles/trailer.css";
import { useEffect, useRef } from "react";
const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.volume = 0.5;
    }
  }, []);
  return (
    <div
      id="hero"
      className="flex flex-col items-center justify-center text-white"
    >
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mt-4 font-sedan">HOLLOW DEV</h1>
        <p className="text-lg mt-2 font-sedan">Code for the web kingdom!</p>
        <img
          src="/public/assets/hero-logo.png"
          alt="hero-logo"
          className="w-32 mt-1 mx-auto absolute left-80 transform -translate-x-1/3"
        />
        <div className="bg-transparent text-white flex items-center justify-center text-xl mt-4">
          <HollowButton title="See Challenges" href="/challenges" />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <video
          ref={videoRef}
          autoPlay
          className="trailer-iframe border border-[#3D3D3D] rounded-md"
          controls
        >
          <source src={trailer} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;
