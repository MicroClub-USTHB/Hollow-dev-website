import { useEffect } from "react";
import { clearCookie, getCookie } from "../utils/cookie";
import toast from "react-hot-toast";

export default function useNotAuthorized() {
  const error = getCookie("error");

  useEffect(() => {
    if (error === "NotMCMember") {
      toast("You must be a member of the Micro Club to register.", {
        position: "top-center",
        duration: 1000,
        style: {
          textAlign: "center",
          color: "white",
          backgroundColor: "transparent",
          border: "1px solid white",
          fontSize: "1.25rem",
          marginTop: "6rem",
        },
      });
      clearCookie("error");
    }
  }, [error]);

  return error;
}
