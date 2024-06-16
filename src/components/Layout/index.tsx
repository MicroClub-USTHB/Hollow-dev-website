import { ReactNode } from "react";
import Navbar from "./navbar";
import { Toaster } from "react-hot-toast";
import useNotAuthorized from "../../hooks/useNotAuthorized";
import useGetUser from "../../hooks/useGetUser";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  const error = useNotAuthorized();
  console.log(error);
  const [user,waiting] = useGetUser();


  // Waiting the whole page or just navBar!!
 if(!waiting){
  return (
    <>
      <Toaster />
      <div>
        <Navbar waiting={waiting} user={user}/>
        {children}
      </div>
    </>
  );
 }
}
