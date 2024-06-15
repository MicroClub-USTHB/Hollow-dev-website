import React from 'react';

const Hero: React.FC = () => {
   
  return (
    <div className="bg-[#0e0e14] min-h-screen flex flex-col items-center justify-center text-white">
      <div className="text-center mb-10">
        <img src="" alt="Hollow-Logo" className="w-24 mx-auto" />
        <h1 className="text-5xl font-bold mt-4">HOLLOW DEV</h1>
        <p className="text-lg mt-2">KSKKDSM,SCMSLWKEWLMKKDDMMDKSLS;S;;S;S;KM</p>
        <button className="mt-4 bg-[#1e1e24] text-white py-2 px-4 rounded-lg hover:bg-[#3a3a42]">Register Now</button>
      </div>
      <div className="flex justify-center">
        <img src="" alt="Code Snippet" className="w-4/5 max-w-3xl rounded-lg" />
      </div>
    </div>
  );
};

export default Hero;
