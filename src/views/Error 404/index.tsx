import character from '../../assets/characterhead.png';
import ErrorImage from '../../assets/errorpage.png';
import { SparklesCore } from "../../components/UI/sparkles";

function ErrorPage() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${ErrorImage})` }}>
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={2.6}
          maxSize={0.4}
          particleDensity={5}
          speed={0.01}
          className="w-full h-full"
          particleColor="#82878c"
        />
      </div>

      <div className='flex-col text-center space-y-10'>
        <h1 className='text-5xl font-bold'>404</h1>
        <h1 className='text-3xl font-bold'>Page not found</h1>
        <p className='max-w-md font-bold'>We are sorry, the page you requested could not be found. Please go back to the home page.</p>
      </div>
    </div>
  );
}

export default ErrorPage;
