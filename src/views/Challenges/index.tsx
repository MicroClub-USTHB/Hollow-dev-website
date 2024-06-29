import Hollow from "../../assets/challenges/hollow.svg";
import Ghost from "../../assets/challenges/ghost.svg";
import MC from "../../assets/mcLogo.svg";
import IT from "../../assets/itlogo.svg";
import Arrow from "../../assets/challenges/Vector.svg";
import Down from "../../assets/about-down.png";
import Card from "./card.tsx";
import { Link } from "react-router-dom";
import Navbar from "../../components/Layout/navbar.js";
import useGetUser from "../../hooks/useGetUser.ts";
import { challenges } from "../../utils/data.ts";
export default function Challenges() {
  const [user] = useGetUser();
  return (
    <div className="relative">
      <img src={Ghost} className="absolute w-32 right-0 top-20 z-[-1]" />
      <img
        src={Ghost}
        className="absolute w-32 xl:left-40 left-0 scale-x-[-1] top-1/2 z-[-1]"
      />
      <img
        src={Ghost}
        className=" absolute w-32 xl:right-96 sm:right-0 md:right-56 right-0 bottom-10 z-[-1]"
      />
      <Navbar user={user} />
      <div className=" p-5 min-h-[100vh] flex flex-col items-center gap-10  ">
        <div className=" flex items-center justify-around w-full">
          <Link to={"/"}>
            <img src={Arrow} className=" size-6" />
          </Link>
          <div className=" flex items-center flex-col">
            <h1 className=" text-2xl font-font">Challenges</h1>
            <img src={Down} className=" w-64" />
          </div>
          <div className=" opacity-0">t</div>
        </div>
        <div>
          <img src={Hollow} className=" w-40" />
          <div className=" grid gap-12 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {challenges.map((challenge) => {
              return (
                <Card
                  description={challenge.description}
                  key={challenge.id}
                  id={challenge.id}
                  title={challenge.title}
                  imagePage={challenge.imagePage}
                  color={challenge.color}
                  link={challenge.link}
                  difficulty={challenge.difficulty}
                />
              );
            })}
          </div>
        </div>
        <div className=" flex gap-5 pb-5 items-center justify-center">
          <img src={IT} className=" w-12" />
          <img src={MC} className=" w-12" />
        </div>
      </div>
    </div>
  );
}
