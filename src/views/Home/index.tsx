import About from "../../components/About";
import Layout from "../../components/Layout";
import Faq from "../../components/FAQ";
import Hero from "../../components/Hero";
import Challenges from "../../components/Challenges";
export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Faq />
      <Challenges />
    </Layout>
  );
}
