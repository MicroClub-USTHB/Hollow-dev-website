import { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Toaster } from "react-hot-toast";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Toaster />
      <div className="overflow-x-hidden">
        <Navbar />
        <div className="pb-64 pt-32 max-w-7xl px-8 mx-auto space-y-28">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}
