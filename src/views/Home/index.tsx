import { useEffect } from "react";
import About from "../../components/About";
import { useUser } from "../../hooks/useUser";
import toast from "react-hot-toast";
export default function Home() {
  const {user,setUser} = useUser()
  
  useEffect(()=>{
    if(user?.successRegistre){
      toast('Your Registre Has Been Successfully Recieved',{
        className:"mt-12",
        style: {
          textAlign: "center",
          color: "white",
          backgroundColor: "#00020e",
          border: "1px solid white",
          fontSize: "1.25rem",
          lineHeight:'1.5',
        },
      })
      setUser({...user,successRegistre:!user.successRegistre})
    }
  },[]) 
  return (
    <div className="pt-20 bg-dark">
      <About/>
    </div>
  );
}
