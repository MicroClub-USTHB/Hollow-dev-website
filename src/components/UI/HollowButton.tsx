import { Link } from "react-router-dom";

type Props = {
  title: string;
  onClick?: () => void;
  href?: string;
  icon?: string;
};

export default function HollowButton(props: Props) {
  return (
    <>
      {props.icon ? (
        <Link
          to={props.href || "/"}
          onClick={props.onClick}
          className="md:hidden block overflow-hidden w-12 h-12 absolute right-0 -mt-3 mr-6 hover:opacity-80"
          style={{ backgroundImage: `url(${props.icon})` }}
        />
      ) : (
        <Link
          to={props.href || "/"}
          onClick={props.onClick}
          className="hidden md:block group relative overflow-hidden rounded bg-[#0E1324] px-8 py-2 text-white transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-[#0E1324] hover:to-[#1F2937] ring-1 hover:ring-[#0E1324] ring-offset-1"
        >
          <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-700 group-hover:-translate-x-40"></span>
          <span className="relative">{props.title}</span>
        </Link>
      )}
    </>
  );
}
