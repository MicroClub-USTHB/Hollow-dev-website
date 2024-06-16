import Itlogo from "../../assets/itlogo.svg";
import Up from "../../assets/about-up.png";
import Down from "../../assets/about-down.png";
import VanillaTilt from "vanilla-tilt";
import { useEffect } from "react";
export default function About() {
  useEffect(() => {
    VanillaTilt.init(document.querySelector(".card") as HTMLElement, {
      max: 5,
      speed: 500,
      reverse: true,
      glare: true,
      "max-glare": 0.1,
    });
  });
  return (
    <div className="text-textColor font-font flex flex-col items-center gap-6 py-10 xl:px-32 md:px-28 px-10  bg-dark">
      <div className=" flex items-center flex-col gap-2">
        <img src={Up} className=" w-80" />
        <p className="text-xl">About us</p>
        <img src={Down} className=" w-64" />
      </div>

      <div className=" bg-dark p-16 rounded-2xl grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 justify-between border-border border  w-full card">
        <div>
          <p className=" font-bold text-3xl pb-3">WHO ARE WE ?</p>
          <p className=" text-[14px] w-60 ">
            The IT Section, one of three key sections at Micro Club, The section
            offers activities like bootcamps and hackathons.
          </p>
        </div>

        <div className=" flex justify-end">
          <img src={Itlogo} className=" w-64 xl:pt-0 md:pt-0 sm:pt-0 pt-10" />
        </div>
      </div>

      <div className=" grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6  ">
        <div className=" bg-dark  p-16 rounded-2xl border-border border card ">
          <p className=" font-bold text-3xl pb-3">What is hollow dev ?</p>
          <p className="text-[14px]">
            Hollow Dev is an online hackathon focused on backend development and
            building server-side software, where each team will have to solve
            challenges.
          </p>
        </div>

        <div className=" bg-dark  p-16 rounded-2xl border-border border card">
          <p className=" font-bold text-3xl pb-3">Our vision</p>
          <p className=" text-[14px] ">
            We aim to elevate the level of our members and turn them into strong
            back-end knights. Hollow Dev is designed to help you practice what
            you learned in the bootcamp. By solving challenges, We promise you
            that are building projects that will not only deepen your
            understanding of backend concepts but also make your Portfolio
            shine. So, grab your key-sword and start coding !
          </p>
        </div>
      </div>
    </div>
  );
}
