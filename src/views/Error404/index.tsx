import character from "../../assets/characterhead.png";
import ErrorImage from "../../assets/hollow-knight-quirrel-hollow-knight-hd-wallpaper-preview.jpg";
import { Link } from "react-router-dom";
import SparklesCore from "../../components/UI/sparkles";

function ErrorPage() {
  return (
    <div
      className="flex items-center relative justify-center h-screen w-screen bg-cover bg-no-repeat bg-center overflow-hidden"
      style={{ backgroundImage: `url(${ErrorImage})` }}
    >
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.4}
          maxSize={2.6}
          particleDensity={10}
          speed={0.01}
          className="w-full h-full"
          particleColor="#82878c"
        />
      </div>

      <div className="flex-col text-center space-y-10">
        <h1 className="text-5xl font-bold">404</h1>
        <h1 className="text-3xl font-bold">Page not found</h1>
        <p className="max-w-md font-bold">
          We are sorry, the page you requested could not be found. Please go
          back to the home page.
        </p>
        <Link
          to="/"
          className="relative space-x-2 bg-[#000000] rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center cursor-pointer"
        >
          <img src={character} className="h-5 w-5" />
          <span className="text-white font-bold">Home</span>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
