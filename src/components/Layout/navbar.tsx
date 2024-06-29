import { useState } from "react";
import HollowButton from "../UI/HollowButton";
import RegisterButton from "../../assets/RegisterIcon.svg";
import { UserI } from "../../types/types";
import { useLocation } from "react-router-dom";

type Props = {
  user: UserI | null;
};
export default function Navbar(props: Props) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="bg-transparent text-white flex items-center justify-between px-8 h-20 text-xl">
      <div className="flex md:hidden">
        <div
          className="space-y-2 cursor-pointer"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        </div>
        <div
          className={
            isNavOpen
              ? "absolute w-full h-full top-0 left-0 bg-[#07080D] flex flex-col col-3 items-center justify-evenly"
              : "hidden"
          }
        >
          <div
            className="absolute top-0 right-0 px-8 py-8 cursor-pointer"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>

          {isHomePage && (
            <ul className="flex flex-col absolute top-20 left-0 right-0 bg-black text-center pb-2 z-50 gap-10">
              <a className="relative group py-1.5 cursor-pointer" href="#hero">
                <span className="absolute bottom-0 left-0 w-0 h-[1px] text-white bg-white group-hover:w-full group-hover:transition-all"></span>
                Home
              </a>
              <a
                className="relative group py-1.5 cursor-pointer"
                href="#description"
              >
                <span className="absolute bottom-0 left-0 w-0 h-[1px] text-white bg-white group-hover:w-full group-hover:transition-all"></span>
                Description
              </a>
              <a className="relative group py-1.5 cursor-pointer" href="#faq">
                <span className="absolute bottom-0 left-0 w-0 h-[1px] text-white bg-white group-hover:w-full group-hover:transition-all"></span>
                FaQ
              </a>
            </ul>
          )}
        </div>
        <div className={isNavOpen ? "hidden" : ""}>
          <HollowButton
            title={props.user !== null ? `${props.user}` : "Register Now"}
            href="http://localhost:4000/auth/discord/"
            icon={RegisterButton}
          />
        </div>
      </div>

      <h1 className="">HOLLOW DEV</h1>
      {isHomePage && (
        <ul className="hidden space-x-8 md:flex">
          <li>
            <a className="relative group py-1.5 cursor-pointer" href="#hero">
              <span className="absolute bottom-0 left-0 w-0 h-[1px] text-white bg-white group-hover:w-full group-hover:transition-all"></span>
              Home
            </a>
          </li>
          <li>
            <a
              className="relative group py-1.5 cursor-pointer"
              href="#description"
            >
              <span className="absolute bottom-0 left-0 w-0 h-[1px] text-white bg-white group-hover:w-full group-hover:transition-all"></span>
              Description
            </a>
          </li>
          <li>
            <a className="relative group py-1.5 cursor-pointer" href="#faq">
              <span className="absolute bottom-0 left-0 w-0 h-[1px] text-white bg-white group-hover:w-full group-hover:transition-all"></span>
              FaQ
            </a>
          </li>
        </ul>
      )}
      <div className={isNavOpen ? "" : ""}>
        <HollowButton
          title="Register Now"
          href="http://localhost:4000/auth/discord/"
        />
      </div>
    </div>
  );
}
