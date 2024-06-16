import { UserI } from "../types/types";

export default async function clearSession(user: UserI) {
  document.cookie = "discord-auth=;";
  try {
    const response = await fetch("http://localhost:4000/clearSession", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
