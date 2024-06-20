import itLogo from "../../assets/itlogo.svg";
import donw from "../../assets/registration/down.svg";

const Footer = () => {
  return (
    <>
      <div className="mt-4 md:mt-0">
        <img src={donw} alt=" overtitle" className=" w-full" />
      </div>
      <img src={itLogo} width={72} alt="it section logo" className=" " />
    </>
  );
};

export default Footer;
