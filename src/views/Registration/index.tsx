import { Navigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

// change name to Index with I capital
const Index = () => { 
    const {user} = useUser()
    
    if(!user || user.isRegistred || user.status == 'failed') return <Navigate to={'/'}/>

    return (
      <div>Registration</div>
    )
  }
 

export default Index