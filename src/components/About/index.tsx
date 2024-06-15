import Itlogo from "../../assets/itlogo.svg";
import Image from "../../assets/imageabout.png";
export default function About() {
  return (
    <div className="text-textColor font-font flex flex-col items-center gap-6 py-10 xl:px-32 md:px-28 px-10  bg-black">
      <div className=" bg-dark p-10 rounded-2xl grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 justify-between border-customBlue border  w-full">
        <div>
          <img src={Itlogo} className=" size-14" />
          <p className=" font-bold text-4xl pb-3">WHO ARE WE?</p>
          <p className=" text-[15px] w-60 pb-10">
            The IT Section, one of three key sections at Micro Club, The section
            offers activities like bootcamps and hackathons.
          </p>
        </div>

        <div className=" flex justify-end">
          <img src={Image} className="" />
        </div>
      </div>

      <div className=" grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 ">
        <div className=" bg-dark  p-10 rounded-2xl border-customBlue border  ">
          <img src={Itlogo} className=" size-12" />
          <p className=" font-bold text-4xl pb-3">What is hollow dev?</p>
          <p className="text-[15px]">
            Hollow Dev is an online hackathon focused on backend development and
            building server-side software, where each team will have to solve
            challenges.
          </p>
        </div>

        <div className=" bg-dark  p-10 rounded-2xl border-customBlue border">
          <img src={Itlogo} className=" size-12" />
          <p className=" font-bold text-4xl pb-3">Our vision</p>
          <p className=" text-[15px] ">
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
