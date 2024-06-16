import React, {createContext, useState, ReactNode } from "react";
import { UserI } from "../types/types";

type UserContextType = {
  user: UserI | null;
  setUser: React.Dispatch<React.SetStateAction<UserI | null>>;
};

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserI | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
