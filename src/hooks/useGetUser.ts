import { useEffect, useState } from "react";
import { UserI } from "../types/types";
import clearSession from "../utils/clearSession.ts";
import { useUser } from "./useUser.ts";
import toast from "react-hot-toast";
type UseGetUserResult = [UserI | null, boolean];

export default function useGetUser(): UseGetUserResult {
  const [waiting, setWaiting] = useState<boolean>(true);
  const { user, setUser } = useUser();

  useEffect(() => {
    async function getData() {
      setWaiting(true);
      try {
        const response = await fetch("http://localhost:4000/user", {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        if (data.data) {
          // If user not On MC server then clear Cookies and Session From DB
          if (data.data.status == "failed") {
            
            setTimeout(() => {
              toast("You must be a member of the Micro Club to register.", {
                position: "top-center",
                className: "mt-12",
                style: {
                  textAlign: "center",
                  color: "white",
                  backgroundColor: "#00020e",
                  border: "1px solid white",
                  fontSize: "1.25rem",
                  lineHeight: "1.5",
                },
              });
            }, 3300);
            await clearSession(data.data);
            setUser(null);
          } else setUser({...data.data,successRegistre:false});
        }
      } catch (error) {
        console.log(error);
      }
      setWaiting(false);
    }
    getData();
  }, []);
  return [user, waiting];
}
