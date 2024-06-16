import { useState } from "react";
import About from "../../components/About";
import Loading from "../../components/UI/Loading";
import Layout from "../../components/Layout";
export default function Home() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 7000);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Layout>
          <About />
        </Layout>
      )}
    </div>
  );
}
