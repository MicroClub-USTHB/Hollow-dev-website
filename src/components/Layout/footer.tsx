import { SocialIcon } from "react-social-icons";
import MCLogo from "../../assets/mcLogo.svg";
import ITLogo from "../../assets/itlogo.svg";

// There is two function one mine and one yours
export default function FooterRamzy() {
  return (
    <div className="flex items-center justify-between px-8 h-20 bg-transparent">
      <div className="flex align-items justify-between space-x-3">
        <img src={MCLogo} style={{ height: 45, width: 45 }} />
        <img src={ITLogo} style={{ height: 45, width: 45 }} />
      </div>
      <h4 className="text-xs">© 2024 Micro Club</h4>

      <div className="flex justify-between items-center space-x-3">
        <div>
          <SocialIcon
            url="https://www.instagram.com/microclub_usthb/"
            bgColor="white"
            fgColor="black"
            style={{ height: 25, width: 25 }}
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

function Footer() {
  return (
    <div className="flex relative w-full h-16 items-center justify-between">
      <div className="flex align-items ml-2 justify-between w-24">
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
