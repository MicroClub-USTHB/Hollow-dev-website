import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import Header from "../../components/Registration/Header";
import Form from "../../components/Registration/Form";
export default function Registration() {
  useEffect(() => {
    document.title = "Hollow-Dev | Registration";
  }, []);

  const { user } = useUser();

  if (!user || user.isRegistred || user.status == "failed")
    return <Navigate to={"/"} />;

  return (
    <div className=" min-w-screen min-h-screen items-center justify-evenly bg-registerBackground bg-bottom bg-cover bg-no-repeat  flex flex-col pb-10 pt-20 md:py-10 ">
      <Header />
      <Form />
    </div>
  );
}
