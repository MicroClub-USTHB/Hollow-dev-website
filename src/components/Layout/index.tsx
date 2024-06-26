import { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Toaster } from "react-hot-toast";
import useGetUser from "../../hooks/useGetUser";
import Footer from "./footer";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  const [user, waiting] = useGetUser();

  // Waiting the whole page or just navBar!!
  if (!waiting) {
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
