import { useEffect } from "react";
import Footer from "../../components/Registration/Footer";
import Header from "../../components/Registration/Header";
import Form from "../../components/Registration/Form";
export default function Registration() {
  useEffect(() => {
    document.title = "Hollow-Dev | Registration";
  }, []);
  return (
    <div className="w-screen h-screen items-center justify-evenly bg-registerBackground bg-bottom   bg-cover bg-repeat-y  flex flex-col py-4 md:py-10 ">
      <Header />
      <Form />
      <Footer />
    </div>
  );
}
