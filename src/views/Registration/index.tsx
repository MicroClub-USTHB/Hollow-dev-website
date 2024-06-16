import Loading from "../../components/UI/Loading";
import { useState } from "react";
const Registration = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return <div>{loading ? <Loading /> : <div>Registration</div>}</div>;
};

export default Registration;
