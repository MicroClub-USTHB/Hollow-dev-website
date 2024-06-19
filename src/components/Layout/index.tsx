import { ReactNode,useState } from "react";
import Navbar from "./navbar";
import { Toaster } from "react-hot-toast";
import useGetUser from "../../hooks/useGetUser";
import Loading from "../UI/Loading";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  const [user,waiting] = useGetUser();

  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);


  // Waiting data to render the whole page
 if(!waiting){
  return (
    loading ? <Loading/> : (
      <>
      <Toaster />
      <div className="relative">
        <Navbar user={user}/>
        {children}
      </div>
    </>
    )
  );
 }
}
