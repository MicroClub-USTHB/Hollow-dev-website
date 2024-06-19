import HollowButton from "../UI/HollowButton";
import { UserI } from "../../types/types";
import { useLocation } from "react-router-dom";

export default function Navbar({ user }: { user: UserI | null }) {
  const location = useLocation();

  return (
    <div className="bg-transparent text-white flex items-center justify-between px-8 h-20 text-xl w-full absolute top-0 left-0 z-10">
      <a href="/">
        <h1>HOLLOW DEV</h1>
      </a>
      {location.pathname === "/" ? (
        <>
          <ul className="flex space-x-16">
            <a className="relative group py-1.5 cursor-pointer" href="#hero">
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full group-hover:transition-all"></span>
              Home
            </a>
            <a
              className="relative group py-1.5 cursor-pointer"
              href="#description"
            >
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full group-hover:transition-all"></span>
              Description
            </a>
            <a className="relative group py-1.5 cursor-pointer" href="#faq">
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full group-hover:transition-all"></span>
              FaQ
            </a>
          </ul>
          <HollowButton
            title={user?.isRegistred ? `Register (${user.username})` : "Register Now"}
            href={user && !user.isRegistred ? "/registration" : user && user?.isRegistred ? "/" : "http://localhost:4000/auth/discord"}
          />
        </>
      ) : (
        <HollowButton title="Back" href={"/"} />
      )}
    </div>
  );
}
