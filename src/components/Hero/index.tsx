import HollowButton from "../UI/HollowButton";
import "../../assets/styles/trailer.css";
const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mt-4 font-sedan">HOLLOW DEV</h1>
        <p className="text-lg mt-2 font-sedan">Code for the web kingdom!</p>
        <img
          src="/src/assets/hero-logo.png"
          alt="hero-logo"
          className="w-32 mt-1 mx-auto absolute left-80 transform -translate-x-1/3"
        />
        <div className="bg-transparent text-white flex items-center justify-center text-xl mt-4">
          <HollowButton title="Register Now" />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <iframe
          src="https://drive.google.com/file/d/1XGjEAxK0dQg4LPsTj3_qk_pWsiVK-KQL/preview"
          width="800"
          height="480"
          className="border border-[#3D3D3D] rounded-xl trailer-iframe"
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  );
};

export default Hero;
