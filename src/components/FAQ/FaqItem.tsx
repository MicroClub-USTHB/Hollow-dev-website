type Props = {
  frontText: string;
  backText: string;
};

function FaqItem(props: Props) {
  return (
    <div className="w-60 h-80 cursor-pointer group perspective">
      <div className="relative bg-[#07080D] preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 rounded-lg shadow-md shadow-slate-500/10">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/public/assets/borders.png"
            className="w-full h-full object-cover m-2"
            alt="Borders"
          />
        </div>
        <div className="absolute flex flex-col items-center backface-hidden w-full h-full space-y-9">
          <img src="/public/assets/itlogo.svg" className="w-12 h-12 mt-5" />

          <div className="border border-white rounded-lg p-8 m-8 bg-[#0D0E13]">
            <p className="text-xs text-white text-center">{props.frontText}</p>
          </div>
        </div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-[#07080D] rounded-lg">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/public/assets/borders.png"
              className="w-full h-full object-cover m-2"
              alt="Borders"
            />
          </div>
          <div className="m-8 flex items-center justify-center h-full text-gray-800 px-2 pb-24">
            <p className="text-xs text-white text-center">{props.backText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FaqItem;
