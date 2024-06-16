import { useState } from "react";
import About from "../../components/About";
import Loading from "../../components/UI/Loading";

export default function Home() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return <div>{loading ? <Loading /> : <About />}</div>;
}
