// import itLogo from "../../assets/itlogo.svg";
import pattern from "../../assets/registration/pattern.svg";
import donw from '../../assets/registration/down.svg'
const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 z-10">
      {/* <img src={itLogo} width={72} alt="it section logo" className=" " /> */}
      <div className=" flex flex-col items-center justify-center gap-2">
        <img src={pattern} alt=" overtitle" className="md:w-5/6 w-4/6" />
        <h3 className="text-white font-font text-xl md:ext-3xl font-[600]">
          Hollow-Dev Regestration{" "}
        </h3>
        <img src={donw} alt=" overtitle" className="md:w-5/6 w-4/6" />
        <h3 className="font-font my-2 text-center">Join Hollow Dev To DIVE INTO THE DEPTHS OF YOUR CREATIVITY AND SKILLS</h3>
      </div>
    </div>
  );
};

export default Header;
