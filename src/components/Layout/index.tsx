import { ReactNode, useEffect, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Toaster } from "react-hot-toast";
import useGetUser from "../../hooks/useGetUser";
import Loading from "../UI/Loading";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  const [user, waiting] = useGetUser();
  console.log(user);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (!waiting && !loading) {
    return (
      <>
        <Toaster />
        <div className=" overflow-x-hidden ">
          <Navbar user={user} />
          <div className="pb-64 pt-32 max-w-7xl px-8 mx-auto space-y-28">
            {children}
          </div>
          <Footer />
        </div>
      </>
    );
  }

  return null;
}
