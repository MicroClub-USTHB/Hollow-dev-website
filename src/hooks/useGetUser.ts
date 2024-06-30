import { useEffect, useState } from "react";
import { UserI } from "../types/types";
import clearSession from "../utils/clearSession.ts";
import { useUser } from "./useUser.ts";

type UseGetUserResult = [UserI | null, boolean];

export default function useGetUser(): UseGetUserResult {
  const [waiting, setWaiting] = useState<boolean>(true);
  const { user, setUser } = useUser();

  useEffect(() => {
    async function getData() {
      setWaiting(true);
      try {
        const response = await fetch(
          "https://hollow-dev-api.onrender.com/user",
          {
            method: "GET",
            credentials: "include",
          }
        );
        const data = await response.json();
        if (data.data) {
          // If user not On MC server then clear Cookies and Session From DB
          if (data.data.status == "failed") {
            await clearSession(data.data);
            setUser(null);
          } else setUser(data.data);
        }
      } catch (error) {
        console.log("Error in fetching user data");
      } finally {
        setWaiting(false);
      }
    }
    getData();
  }, [setUser]);
  return [user, waiting];
}
