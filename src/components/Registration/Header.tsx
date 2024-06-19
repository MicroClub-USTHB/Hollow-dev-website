import itLogo from "../../assets/itlogo.svg";
import pattern from "../../assets/registration/pattern.svg";
const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <img src={itLogo} width={72} alt="it section logo" className=" " />
      <div className=" flex flex-col items-center justify-center gap-2">
        <img src={pattern} alt=" overtitle" className="md:w-5/6 w-4/6" />
        <h3 className="text-white font-CinzelDecorative text-xl md:ext-3xl font-[600]">
          Hollow-Dev Regestration{" "}
        </h3>
      </div>
    </div>
  );
};

export default Header;