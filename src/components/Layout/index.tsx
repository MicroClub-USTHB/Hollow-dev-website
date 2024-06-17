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


  // Waiting data to render the whole page
 if(!waiting){
  return (
    <>
      <Toaster />
      <div>
        <Navbar user={user}/>
        {children}
      </div>
    </>
  );
 }
}
