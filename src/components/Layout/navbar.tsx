import HollowButton from "../Buttons/HollowButton";

export default function Navbar() {
  return (
    <div className="bg-transparent text-white flex items-center justify-between px-8 h-20 text-xl">
      <h1>HOLLOW DEV</h1>
      <ul className="flex space-x-16">
        <a className="relative group py-1.5 cursor-pointer" href="#hero">
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full group-hover:transition-all"></span>
          Home
        </a>
        <a className="relative group py-1.5 cursor-pointer" href="#description">
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full group-hover:transition-all"></span>
          Description
        </a>
        <a className="relative group py-1.5 cursor-pointer" href="#faq">
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full group-hover:transition-all"></span>
          FaQ
        </a>
      </ul>
      <HollowButton title="Register Now" />
    </div>
  );
}
