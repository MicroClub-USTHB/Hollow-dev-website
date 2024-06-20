import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import Header from "../../components/Registration/Header";
import Form from "../../components/Registration/Form";
import Footer from "../../components/Registration/Footer";
export default function Registration() {
  useEffect(() => {
    document.title = "Hollow-Dev | Registration";
  }, []);

  const { user } = useUser();

  if (!user || user.isRegistred || user.status == "failed")
    return <Navigate to={"/"} />;

  return (
    <div className="registre min-w-screen min-h-screen items-center justify-between bg-registerBackground bg-center bg-contain bg-no-repeat flex flex-col gap-3 pb-10 pt-24 md:pt-20">
      <Header />
      <Form />
      <Footer/>
    </div>
  );
}
