import HollowButton from "../UI/HollowButton";
import trailer from "/assets/hollow-dev.mp4";
import "../../styles/trailer.css";
import ReactPlayer from "react-player";
import { Suspense } from "react";
const Hero: React.FC = () => {

  return (
    <div
      id="hero"
      className="flex flex-col items-center justify-center text-white"
    >
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mt-4 font-sedan">HOLLOW DEV</h1>
        <p className="text-lg mt-2 font-sedan">Code for the web kingdom!</p>
        <img
          src="/assets/hero-logo.png"
          alt="hero-logo"
          className="w-32 mt-1 mx-auto absolute left-64 transform -translate-x-1/3"
        />
        <div className="bg-transparent text-white flex items-center justify-center text-xl mt-4">
          <HollowButton title="Registration" href="/registration" />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center">
          <Suspense fallback={<h1 className="text-white text-xl">Loading...</h1>}>
            <ReactPlayer
              url={trailer}
              playing={true}
              controls={true}
              loop={true}
              volume={0.5}
              className="trailer-iframe border border-[#3D3D3D] rounded-md"
              width="100%"
              height="auto"
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Hero;
