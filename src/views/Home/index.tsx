import { useState } from "react";
import About from "../../components/About";
import Loading from "../../components/UI/Loading";
import Layout from "../../components/Layout";
import Faq from "../../components/FAQ";
import Hero from "../../components/Hero";
import Challenges from "../../components/Challenges";
export default function Home() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1500);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Layout>
          <Hero />
          <About />
          <Challenges />
          <Faq />
        </Layout>
      )}
    </div>
  );
}
