import Down from "/assets/about-down.png";

type Props = {
  id: string;
  imagePage: string;
  title: string;
  description: string;
  link: string;
  difficulty: string;
  color: string;
  shadow: string;
};
export default function Card(props: Props) {
  return (
    <>
      <a href={props.link} target="_blank">
        <div
          className={`border-2  relative rounded-sm  h-96 w-72 shadow-2xl ${props.shadow} transition-shadow duration-300`}
        >
          <img src={props.imagePage} className="h-full w-full  opacity-60 " />
          <div className=" absolute top-2 left-3 text-2xl font-sedan">
            {props.id}
          </div>
          <div className=" absolute top-3 right-3 text-[11px] bg-white bg-opacity-10 rounded-md px-2 py-1">
            {props.difficulty}
          </div>
          <div
            className={`flex flex-col justify-center items-center absolute ${props.color} w-40 rounded-md bg-opacity-45 bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2 `}
          >
            <h1 className=" font-font text-center text-sm">{props.title}</h1>
            <img src={Down} />
          </div>
        </div>
      </a>
    </>
  );
}
