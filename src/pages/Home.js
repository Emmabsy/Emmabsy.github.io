import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import TechnologiesUsed from "../components/TechnologiesUsed/TechnologiesUsed";


function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <TechnologiesUsed />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
