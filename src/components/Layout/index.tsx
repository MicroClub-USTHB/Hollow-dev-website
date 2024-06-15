import { ReactNode, useEffect } from "react";
import Navbar from "./navbar";
import useQuery from "../../hooks/useQuery";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  const query = useQuery();
  const error = query.get("error");

  useEffect(() => {
    if (error === "NotMCMember") {
      alert("You must be a member of the Micro Club to register.");
    }
  }, [error]);

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
