import { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Toaster } from "react-hot-toast";
import useNotAuthorized from "../../hooks/useNotAuthorized";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  const error = useNotAuthorized();
  console.log(error);

  return (
    <>
      <Toaster />
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
