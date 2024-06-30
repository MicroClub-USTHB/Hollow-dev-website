import { SocialIcon } from "react-social-icons";
import MCLogo from "/public/assets/mcLogo.svg";
import ITLogo from "/public/assets/itlogo.svg";

export default function Footer() {
  return (
    <div className="flex relative w-full px-8 h-20 items-center justify-between">
      <div className="flex align-items justify-between w-24">
        <img src={MCLogo} style={{ height: 45, width: 45 }} />
        <img src={ITLogo} style={{ height: 45, width: 45 }} />
      </div>
      <h4 className="text-xs">© 2024 Micro Club</h4>

      <div className="flex right-12 justify-between items-center w-40 h-9 mx-4">
        <div>
          <SocialIcon
            url="https://www.instagram.com/microclub_usthb/"
            bgColor="white"
            fgColor="black"
            style={{ height: 25, width: 40 }}
          />
        </div>
        <div>
          <SocialIcon
            url="https://www.facebook.com/Micro.Club.USTHB/"
            bgColor="white"
            fgColor="black"
            style={{ height: 25, width: 25 }}
          />
        </div>
        <div>
          <SocialIcon
            url="https://x.com/club_micro?lang=fr"
            bgColor="white"
            fgColor="black"
            style={{ height: 25, width: 25 }}
          />
        </div>
        <div>
          <SocialIcon
            url="https://dz.linkedin.com/company/micro-club"
            bgColor="white"
            fgColor="black"
            style={{ height: 25, width: 25 }}
          />
        </div>
      </div>
    </div>
  );
}
